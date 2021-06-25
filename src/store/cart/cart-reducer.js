import { ADD_ITEM, REMOVE_ITEM } from "./actions";

// CR: cartReducer's state could be just an item array, I would prefer it that way.
// If you need other fields you can create other reducers and providers, 
// and this will be better because reducers are decoupled
export const initialState = {
  items: [],
};

export const cartReducer = (state, action) => {
  // CR: switch..case is a convention for reducers
  // CR: you can do `case ADD_ITEM: return addItemToState(state, action)` if you don't like bloated cases
  if (action.type === ADD_ITEM) {
    // CR: just noting, new item is actually already a clone because you clone it in BookItemForm
    const newItem = { ...action.item };

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...state.items];
      // CR: you need another shallow clone to book, `updatedItems[existingItemIndex]= newItem`
      updatedItems[existingItemIndex].amount += newItem.amount;
      return {
        ...state,
        items: updatedItems,
      };
    }

    return {
      ...state,
      items: [...state.items, action.item],
    };
  }

  // CR: logic inside if is nicely done :)
  if (action.type === REMOVE_ITEM) {
    const itemIdToRemove = action.itemId;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === itemIdToRemove
    );
    const existingItem = state.items[existingItemIndex];

    if (existingItem.amount === 1) {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== itemIdToRemove),
      };
    }

    const updatedItems = [...state.items];
    updatedItems[existingItemIndex] = {
      ...existingItem,
      amount: --existingItem.amount,
    };

    return {
      ...state,
      items: updatedItems,
    };
  }

  // CR: badddd, return state, that way if there's no updates react can tell it can escape a rerender
  return { ...state };
};

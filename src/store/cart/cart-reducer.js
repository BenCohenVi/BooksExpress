import { ADD_ITEM, REMOVE_ITEM } from "./actions";

export const initialState = {
  items: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const newItem = action.item;

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
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
    case REMOVE_ITEM: {
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
    default:
      return state;
  }
};

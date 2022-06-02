export const ContactReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((contact) => contact.id !== action.payload);

    default:
      return state;
  }
};

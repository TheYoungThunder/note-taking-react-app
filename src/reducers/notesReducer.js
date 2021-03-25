const notesReducer = (state = [], action) => {
  switch (action.type) {
    case "addNote":
      return [...state, action.payload];
    case "toggleNote":
      const { id } = action.payload;
      return state.filter((note) => {
        return note.id !== id;
      });
    default:
      return state;
  }
};

export default notesReducer;

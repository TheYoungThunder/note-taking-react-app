let nextNoteId = 0;
export const addNote = (note) => ({
  type: "addNote",
  payload: {
    id: ++nextNoteId,
    title: note.title,
    body: note.body,
  },
});

export const toggleNote = (id) => ({
  type: "toggleNote",
  payload: {
    id,
  },
});

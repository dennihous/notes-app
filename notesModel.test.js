const { it, expect } = require('@jest/globals');
const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  beforeEach( () => {
    model = new NotesModel();
  });
  it('should be initialized with getNotes as an empty array', () => {
    expect(model.getNotes()).toBeInstanceOf(Array);
    expect(model.getNotes()).toEqual([])
  });
  it('be able to add a note to notes', () => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym'])
  })
  it('should empty array of notes when reset is run', () => {
    model.reset()
    expect(model.getNotes()).toEqual([])
  })
});

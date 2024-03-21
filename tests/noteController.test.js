const request = require('supertest');
const app = require('../index'); // Assuming your Express app is exported from app.js

describe('Note API', () => {
  it('should create a new note', async () => {
    const newNote = {
      title: 'Test Note',
      description: 'This is a test note',
    };

    const response = await request(app)
      .post('/api/notes')
      .send(newNote)
      .expect(201);

    expect(response.body.title).toBe(newNote.title);
    expect(response.body.description).toBe(newNote.description);
  });

  it('should get all notes', async () => {
    const response = await request(app)
      .get('/api/notes')
      .expect(200);

    // Assuming you have some notes in your database
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should get a single note by ID', async () => {
    // Assuming you have a note ID from an existing note in your database
    const noteId = '65fc091c30e0792895cfc2e7';

    const response = await request(app)
      .get(`/api/notes/${noteId}`)
      .expect(200);

    expect(response.body._id).toBe(noteId);
  });

  it('should update a note by ID', async () => {
    // Assuming you have a note ID from an existing note in your database
    const noteId = '65fc091c30e0792895cfc2e7';
    const updatedNote = {
      title: 'Updated Title',
      description: 'Updated Description',
    };

    const response = await request(app)
      .put(`/api/notes/${noteId}`)
      .send(updatedNote)
      .expect(200);

    expect(response.body.title).toBe(updatedNote.title);
    expect(response.body.description).toBe(updatedNote.description);
  });

  it('should delete a note by ID', async () => {
    // Assuming you have a note ID from an existing note in your database
    const noteId = '65fc092030e0792895cfc2e9';

    await request(app)
      .delete(`/api/notes/${noteId}`)
      .expect(200);

    // Verify that the note is deleted
    const response = await request(app)
      .get(`/api/notes/${noteId}`)
      .expect(404);
  });
});

const Notes = require('../models/NoteModel');
const DataController = require('../controllers/noteController');

jest.mock('../models/NoteModel', () => {
  return {
    find: jest.fn(),
    create: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn()
  };
});

describe('DataController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get all notes', async () => {
    const mockNotes = [{ id: 1, title: 'Note 1', description: 'Description 1' }, { id: 2, title: 'Note 2', description: 'Description 2' }];
    Notes.find.mockResolvedValue(mockNotes);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await DataController.getAll(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockNotes);
  });

  it('should create a note', async () => {
    const req = { body: { title: 'New Note', description: 'New Description' } };
    const createdNote = { id: 1, title: 'New Note', description: 'New Description' };
    Notes.create.mockResolvedValue(createdNote);

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };

    await DataController.postData(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(createdNote);
  });

  it('should update a note', async () => {
    const req = { params: { id: 1 }, body: { title: 'Updated Note', description: 'Updated Description' } };
    const updatedNote = { id: 1, title: 'Updated Note', description: 'Updated Description' };
    Notes.findByIdAndUpdate.mockResolvedValue(updatedNote);

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await DataController.updateData(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(updatedNote);
  });

  it('should delete a note', async () => {
    const req = { params: { id: 1 } };
    const deletedNote = { id: 1, title: 'Note to delete', description: 'Description to delete' };
    Notes.findByIdAndDelete.mockResolvedValue(deletedNote);

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await DataController.deleteData(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(deletedNote);
  });
});

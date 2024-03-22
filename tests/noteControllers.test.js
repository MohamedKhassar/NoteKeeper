const Notes = require('../models/noteModel');
const DataController = require('../controllers/noteController');

describe('DataController', () => {
  
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should get all notes', async () => {
    const mockNotes = [{ id: 1, title: 'Note 1', description: 'Description 1' }, { id: 2, title: 'Note 2', description: 'Description 2' }];
    const findSpy = jest.spyOn(Notes, 'find').mockResolvedValue(mockNotes);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await DataController.getAll(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockNotes);

    findSpy.mockRestore();
  });

  it('should create a note', async () => {
    const req = { body: { title: 'New Note', description: 'New Description' } };
    const createdNote = { id: 1, title: 'New Note', description: 'New Description' };
    const createSpy = jest.spyOn(Notes, 'create').mockResolvedValue(createdNote);

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };

    await DataController.postData(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(createdNote);

    createSpy.mockRestore();
  });

  it('should update a note', async () => {
    const req = { params: { id: 1 }, body: { title: 'Updated Note', description: 'Updated Description' } };
    const updatedNote = { id: 1, title: 'Updated Note', description: 'Updated Description' };
    const findByIdAndUpdateSpy = jest.spyOn(Notes, 'findByIdAndUpdate').mockResolvedValue(updatedNote);

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await DataController.updateData(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(updatedNote);

    findByIdAndUpdateSpy.mockRestore();
  });

  it('should delete a note', async () => {
    const req = { params: { id: 1 } };
    const deletedNote = { id: 1, title: 'Note to delete', description: 'Description to delete' };
    const findByIdAndDeleteSpy = jest.spyOn(Notes, 'findByIdAndDelete').mockResolvedValue(deletedNote);

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await DataController.deleteData(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(deletedNote);

    findByIdAndDeleteSpy.mockRestore();
  });
});

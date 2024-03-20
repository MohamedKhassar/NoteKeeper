const { default: mongoose } = require('mongoose');
const { object, string } = require('zod');
const readNoteSchema = object({
    params: object({
        id: string().refine(
            (noteId) => mongoose.Types.ObjectId.isValid(noteId),
            { message: 'Invalid Note Id ' }
        ),
        title: string().min(1, 'title is required'),
    }),
});

const createNoteSchema = object({
    body: object({
        title: string().min(1, 'title is required'),
        description: string().min(1, 'description is required'),
    }),
});

const updateNoteSchema = object({
    body: object({
        title: string().min(1, 'title is required'),
        description: string().min(1, 'description is required'),
    }),
    params: object({
        id: string().refine(
            (noteId) => mongoose.Types.ObjectId.isValid(noteId),
            { message: 'Invalid Note Id ' }
        ),
    }),
});

const deleteNoteSchema = object({
    params: object({
        id: string().refine(
            (noteId) => mongoose.Types.ObjectId.isValid(noteId),
            { message: 'Invalid Note Id ' }
        ),
    }),
});

module.exports = {
    readNoteSchema,
    createNoteSchema,
    updateNoteSchema,
    deleteNoteSchema,
};

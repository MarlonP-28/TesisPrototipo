const {Router} = require('express');
const router = Router();

const { 

    renderNoteFrom, 
    createNewNotes, 
    renderNotes, 
    renderEditFrom, 
    updateNote, 
    deleteNote

} = require('../controllers/notes.controller')

//New note
router.get('/notes/add', renderNoteFrom);

router.post('/notes/new-notes', createNewNotes);

//Get all notes
router.get('/notes', renderNotes);

//Edit notes
router.get('/notes/edit/:id', renderEditFrom);

router.put('/notes/edit-notes/:id', updateNote);//actualiza los datos

//Delete notes

router.delete('/notes/delete/:id', deleteNote)

module.exports = router;
const notesCtrl = {};

notesCtrl.renderNoteFrom = (req,res) => {
    res.send('notes add');
};

notesCtrl.createNewNotes = (req,res) => {
    res.send('new note');
};

notesCtrl.renderNotes = (req,res) => {
    res.send('render note');
};

notesCtrl.renderEditFrom = (req,res) => {
    res.send('edit from');
};

notesCtrl.updateFrom = (req,res) => {
    res.send('update note');
};

notesCtrl.deleteNote = (req,res) => {
    res.send('eliminando nota');
};

module.exports = notesCtrl;
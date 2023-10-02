const notesCtrl = {};

notesCtrl.renderNoteFrom = (req,res) => {
    res.render('notes/new-notes');
};

notesCtrl.createNewNotes = (req,res) => {
    console.log(req.body)
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
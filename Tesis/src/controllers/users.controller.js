const usersCtrl = {};

//Renderiza el formulario de registro
usersCtrl.renderSignUpForm =(req,res) => {
    res.render('users/signup');
}
//valida los datos
usersCtrl.signUp =(req,res) => {
    res.send('sign Up');
}
//Renderiza el formulario de registro
usersCtrl.renderSignInForm =(req,res) => {
    res.render('users/signin');
}
//valida los datos
usersCtrl.signIn =(req,res) => {
    res.send('sing In');
}
//valida los datos
usersCtrl.logOut =(req,res) => {
    res.send('Log Out');
}

module.exports = usersCtrl;
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', loginFormControl);

function loginFormControl(event) {
    event.preventDefault();

    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;
    

    if (!email || !password) {
        alert('All fields must be filled');
    }
    else {
    const formInput = { email, password };
    console.log(formInput); 
    loginForm.reset(); 
  }

}

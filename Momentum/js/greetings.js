const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("body h1");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginButtonClick(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
};

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText = `Hello ${username}, welcome.`;
}

if (localStorage.getItem(USERNAME_KEY) === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginButtonClick);
} else{
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    paintGreeting(savedUsername);
}
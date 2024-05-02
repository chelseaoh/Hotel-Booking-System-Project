const wrapper = document.querySelector('.wrapper');
const registerlink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

console.log(loginLink);

registerlink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.addEventListener('click', function() {
    window.location.href = 'Login.html';
});

btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
};

iconClose.onclick = () => { 
    wrapper.classList.remove('active-popup');
};

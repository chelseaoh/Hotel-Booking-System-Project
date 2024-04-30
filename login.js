const wrapper = document.querySelector('.wrapper');
const registerlink = document.querySelector('.register-link');
const loginLink = document.querySelector('.btnLogin-popup'); // Corrected class name
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerlink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.onclick = () => { // Changed variable name to loginLink
    wrapper.classList.remove('active');
};

btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
};

iconClose.onclick = () => { // Added event listener for closing the popup
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
};

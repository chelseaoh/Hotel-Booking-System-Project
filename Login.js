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

import React, { useState } from 'react';

function App() {
  const [validationMsg, setValidationMsg] = useState('');

  const validateForm = (event) => {
    event.preventDefault();
    const input1 = document.querySelector("#input1");
    const input2 = document.querySelector("#input2");
    const status = document.querySelector(".status");

    let validation = "Please fill-in the above fields";
    let emailVal = "Email validation error must include @ and .com. Try Again!";
    let passVal = "Password must be at least 8 characters long";

    if (!input1.value || !input2.value) {
      setValidationMsg(validation);
      status.classList.add("active");
      status.innerHTML = `${validation}`;
    } else {
      emailValidate(input1.value, emailVal);
      passwordValidate(input2.value, passVal);
    }
  }

  const emailValidate = (email, emailVal) => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(pattern)) {
      setValidationMsg(emailVal);
      status.classList.add("active");
      status.innerHTML = `${emailVal}`;
    }
  }

  const passwordValidate = (password, passVal) => {
    if (password.length < 8) {
      setValidationMsg(passVal);
      status.classList.add("active");
      status.innerHTML = `${passVal}`;
    }
  }

  const handleMail = () => {
    const input1 = document.querySelector("#input1");
    const status = document.querySelector(".status");
    let validation = "Please fill-in the above fields";
    let emailVal = "Email validation error must include @ and .com. Try Again!";
    if (!input1.value) {
      setValidationMsg(validation);
      status.classList.add("active");
      status.innerHTML = `${validation}`;
    } else {
      emailValidate(input1.value, emailVal);
    }
  }

  const handlePassword = () => {
    const input2 = document.querySelector("#input2");
    const status = document.querySelector(".status");
    let validation = "Please fill-in the above fields";
    let passVal = "Password must be at least 8 characters long";
    if (!input2.value) {
      setValidationMsg(validation);
      status.classList.add("active");
      status.innerHTML = `${validation}`;
    } else {
      passwordValidate(input2.value, passVal);
    }
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <div className="form">
            <div className="status">{validationMsg}</div>
            <form action="#" onSubmit={validateForm}>
              <div className="eInput">
                <input id='input1' type="text" placeholder='Enter Email Address' onKeyUp={handleMail} />
              </div>
              <div className="eInput">
                <input id='input2' type="password" placeholder='Enter Password' onKeyUp={handlePassword} />
              </div>
              <div className="submit">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

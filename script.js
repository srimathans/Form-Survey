'use strict';

const form = document.querySelector('.my-form');
const nam = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const mobile = document.querySelector('#mobile');
const DOB = document.querySelector('#birthdate');
const age = document.querySelector('#age');
const web = document.querySelector('#web');
const message = document.querySelector('#message');
const role = document.querySelector('#role');
const genderInputs = document.getElementsByName('gender');
const mediaInputs = document.getElementsByName('media');


const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const pwError = document.querySelector('#pw-error');
const mobileError = document.querySelector('#mobile-error')

const tickMarkName = document.querySelector('.tick-mark-name');
const tickMarkEmail = document.querySelector('.tick-mark-email');
const tickMarkPW = document.querySelector('.tick-mark-pw');
const tickMarkMobile = document.querySelector('.tick-mark-mobile');

let selectedGenderValue;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (nam.value.trim() === "") {
        tickMarkName.innerHTML = '';
        nameError.textContent = 'kindly provide valid name';
    }
    else {
        nameError.textContent = '';
        tickMarkName.innerHTML = '&#10003;'; // display a tick symbol
        tickMarkName.style.color = 'green'; // set the color to green
        console.log('Name:', nam.value);
    }

    if (email.value === "") {
        tickMarkEmail.innerHTML = '';
        emailError.textContent = 'kindly provide valid email';
    }
    else {
        emailError.textContent = '';
        tickMarkEmail.innerHTML = '&#10003;'; // display a tick symbol
        tickMarkEmail.style.color = 'green'; // set the color to green
        console.log('Email:', email.value);
    }

    if (password.value.length < 8 || !/[A-Z]/.test(password.value) || !/[a-z]/.test(password.value) || !/\d/.test(password.value)) {
        tickMarkPW.innerHTML = '';
        pwError.textContent = 'kindly provide valid password';
    }
    else {
        pwError.textContent = '';
        tickMarkPW.innerHTML = '&#10003;'; // display a tick symbol
        tickMarkPW.style.color = 'green'; // set the color to green
        console.log('Pasword:', password.value);
    }

    if (!/^[0-9]{10}$/.test(mobile.value)) {
        tickMarkMobile.innerHTML = '';
        mobileError.textContent = 'kindly provide valid mobile number';
    }
    else {
        mobileError.textContent = '';
        tickMarkMobile.innerHTML = '&#10003;'; // display a tick symbol
        tickMarkMobile.style.color = 'green'; // set the color to green
        console.log('Mobile Number:', mobile.value);
    }

    if (DOB.value !== '') {
        console.log('Date of Birth:', DOB.value);
    }

    if (age.value !== '') {
        console.log('Age:', age.value);
    }

    if (web.value !== '') {
        console.log('Web:', web.value);
    }

    if (message.value !== '') {
        console.log('Message:', message.value);
    }

    if (role.value !== '') {
        console.log('Role:', role.value);
    }

    for(let i=0; i<genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            console.log(genderInputs[i].value);
            selectedGenderValue = genderInputs[i].value;
            break;
        }
    }
    console.log('Gender:', selectedGenderValue);

    console.log('Social Media:');
    for(let i=0; i<mediaInputs.length; i++) {
        if (mediaInputs[i].checked) {
            console.log(mediaInputs[i].value);
        }
    }
    
});





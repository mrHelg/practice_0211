'use strict';

const pattern = /[^\<\>\:"\/\\\|\?\*]/;

const form = document.getElementById('form');
const inputText = document.getElementById('inputText');
const btn = document.getElementById('btn');

const filenamePattern = /^[^<>:?"/*|\\]+(.png|.jpg)$/;

function checkFileName(e){
  e.preventDefault();
  if (filenamePattern.test(inputText.value)) {
    alert('File name is corect');
  } else {
    alert('Error');
  }
  form.reset();
}

btn.addEventListener('click', checkFileName);
'use strict';

document.querySelector('#redirect').addEventListener('click', () => {
  const kod1 = document.querySelector('#kod1').value;
  const kod2 = document.querySelector('#kod2').value;
  const kod3 = document.querySelector('#kod3').value;

  window.location.href = 'https://bit.ly/' + kod1 + kod2 + kod3;
});
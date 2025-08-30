'use strict';

const openModalButton = document.querySelectorAll('.show-modal');
const closeModalButton = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openModalButton.length; i++) {
  openModalButton[i].addEventListener('click', openModal);
}

closeModalButton.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keypress', function (e) {
  if (e.key === 'Escape') {
    e.preventDefault();
  }
  console.log('key pressed', e.key);
});

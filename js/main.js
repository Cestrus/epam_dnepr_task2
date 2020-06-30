import { Controller as ControllerPostForm } from './PostForm/controllerPostForm.js';

document.addEventListener('DOMContentLoaded', () => {
    new ControllerPostForm();
});

document.querySelector('.btn--add-post').addEventListener('click', () => {
    document.querySelector('.modalPostForm').classList.add('modalPostForm--visible');
    document.querySelector('.overlayModal').classList.add('overlayModal--visible');
    document.querySelector('body').style.overflow = 'hidden';
});
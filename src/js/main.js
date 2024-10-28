import Inputmask from 'inputmask';
import '../scss/main.scss';
import {
    validateName,
    validateEmail,
    validatePhone,
    validateTextarea,
    validateTerms,
} from './modules/validation.js';
import { setupModal } from './modules/modal.js';
import { sendFormData } from './modules/api.js';
import {
    handleNameInput,
    handleEmailInput,
    handlePhoneInput,
    handleTextareaInput,
    handleTermsInput,
} from './modules/eventHandlers.js';

document.addEventListener('DOMContentLoaded', function () {
    const addForm = document.getElementById('add-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const textareaInput = document.getElementById('message');
    const termsInput = document.getElementById('terms');

    const errorLength = document.getElementById('errorLength');
    const errorCyrillic = document.getElementById('errorCyrillic');
    const errorEmail = document.getElementById('errorEmail');
    const errorPhone = document.getElementById('errorPhone');
    const errorText = document.getElementById('errorText');
    const errorTerms = document.getElementById('errorTerms');

    const openModalBtn = document.getElementById('openModalBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Установка маски на телефон
    const phoneMask = new Inputmask('+375 (99) 999-99-99');
    phoneMask.mask(phoneInput);

    // Инициализация модального окна
    setupModal(openModalBtn, modalOverlay, closeModalBtn);

    // Обработчики событий
    handleNameInput(nameInput, errorLength, errorCyrillic);
    handleEmailInput(emailInput, errorEmail);
    handlePhoneInput(phoneInput, errorPhone);
    handleTextareaInput(textareaInput, errorText);
    handleTermsInput(termsInput, errorTerms);

    // Добавление обработчика на отправку формы
    addForm.addEventListener('submit', (event) => {
        console.log('Форма отправляется');
        event.preventDefault();

        let formIsValid = true;

        if (!validateName(nameInput, errorLength, errorCyrillic))
            formIsValid = false;
        if (!validateEmail(emailInput, errorEmail)) formIsValid = false;
        if (!validatePhone(phoneInput, errorPhone)) formIsValid = false;
        if (!validateTextarea(textareaInput, errorText)) formIsValid = false;
        if (!validateTerms(termsInput, errorTerms)) formIsValid = false;

        if (formIsValid) {
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                phone: phoneInput.value,
                message: textareaInput.value,
                terms: termsInput.checked,
            };

            sendFormData(
                'http://localhost:9090/api/registration',
                formData,
                (msg) => {
                    alert(msg);
                    addForm.reset();
                    [
                        errorLength,
                        errorCyrillic,
                        errorEmail,
                        errorPhone,
                        errorText,
                        errorTerms,
                    ].forEach((error) => {
                        error.style.display = 'none';
                        nameInput.classList.remove('valid');
                        emailInput.classList.remove('valid');
                        phoneInput.classList.remove('valid');
                        textareaInput.classList.remove('valid');
                    });
                },
                (errors) => {
                    for (const [key, message] of Object.entries(errors)) {
                        const errorField = document.getElementById(
                            `error${key.charAt(0).toUpperCase() + key.slice(1)}`
                        );
                        if (errorField) {
                            errorField.innerText = message;
                            errorField.style.display = 'block';
                        }
                    }
                }
            );
        }
    });
});

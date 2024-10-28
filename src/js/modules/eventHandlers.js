import {
    validateName,
    validateEmail,
    validatePhone,
    validateTextarea,
    validateTerms,
} from './validation.js';

export function handleNameInput(nameInput, errorLength, errorCyrillic) {
    nameInput.addEventListener('input', () => {
        validateName(nameInput, errorLength, errorCyrillic);
    });
}

export function handleEmailInput(emailInput, errorEmail) {
    emailInput.addEventListener('input', () => {
        validateEmail(emailInput, errorEmail);
    });
}

export function handlePhoneInput(phoneInput, errorPhone) {
    phoneInput.addEventListener('input', () => {
        validatePhone(phoneInput, errorPhone);
    });
}

export function handleTextareaInput(textareaInput, errorText) {
    textareaInput.addEventListener('input', () => {
        validateTextarea(textareaInput, errorText);
    });
}

export function handleTermsInput(termsInput, errorTerms) {
    termsInput.addEventListener('input', () => {
        validateTerms(termsInput, errorTerms);
    });
}

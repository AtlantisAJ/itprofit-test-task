export function validateName(nameInput, errorLength, errorCyrillic) {
    const inputValue = nameInput.value;
    const cyrillicRegex = /^[А-Яа-яЁё]+$/;
    let isValid = true;

    errorLength.style.display = 'none';
    errorCyrillic.style.display = 'none';

    if (inputValue.length === 0) {
        nameInput.classList.remove('valid', 'invalid');
        return true;
    }

    if (inputValue.length < 2) {
        errorLength.style.display = 'block';
        isValid = false;
    }
    if (inputValue && !cyrillicRegex.test(inputValue)) {
        errorCyrillic.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        nameInput.classList.add('valid');
        nameInput.classList.remove('invalid');
    } else {
        nameInput.classList.add('invalid');
        nameInput.classList.remove('valid');
    }
    return isValid;
}

export function validateEmail(emailInput, errorEmail) {
    const inputValue = emailInput.value;
    const validFormatEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValid = true;

    errorEmail.style.display = 'none';
    if (inputValue.length === 0) {
        emailInput.classList.remove('valid', 'invalid');
        return true;
    }

    if (!validFormatEmail.test(inputValue)) {
        errorEmail.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        emailInput.classList.add('valid');
        emailInput.classList.remove('invalid');
    } else {
        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');
    }
    return isValid;
}

export function validatePhone(phoneInput, errorPhone) {
    const inputValue = phoneInput.value;
    const validPhoneFormat = /^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
    let isValid = true;

    errorPhone.style.display = 'none';

    if (!validPhoneFormat.test(inputValue)) {
        errorPhone.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        phoneInput.classList.add('valid');
        phoneInput.classList.remove('invalid');
    } else {
        phoneInput.classList.add('invalid');
        phoneInput.classList.remove('valid');
    }

    return isValid;
}

export function validateTextarea(textareaInput, errorText) {
    const inputValue = textareaInput.value;
    let isValid = true;

    errorText.style.display = 'none';

    if (inputValue.length === 0) {
        textareaInput.classList.remove('valid', 'invalid');
        return true;
    }

    if (inputValue.length < 10) {
        errorText.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        textareaInput.classList.add('valid');
        textareaInput.classList.remove('invalid');
    } else {
        textareaInput.classList.add('invalid');
        textareaInput.classList.remove('valid');
    }

    return isValid;
}

export function validateTerms(termsInput, errorTerms) {
    const isChecked = termsInput.checked;
    errorTerms.style.display = isChecked ? 'none' : 'block';
    return isChecked;
}

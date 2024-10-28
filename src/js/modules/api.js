export function sendFormData(url, formData, onSuccess, onError) {
    console.log('Обработчик формы активирован');
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then((response) => {
            // Проверка, был ли ответ успешным
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Ответ сервера:', data); // Логирование ответа сервера
            if (data.status === 'success') {
                onSuccess(data.message);
            } else if (data.status === 'error') {
                onError(data.fields);
            }
        })
        .catch((error) => {
            console.error('Ошибка:', error);
            alert(
                'Произошла ошибка при отправке формы. Попробуйте снова позже.'
            );
        });
}

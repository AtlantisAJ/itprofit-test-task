**Тестовое задание itprofit**

**Требования:**

* Весь javascript код должен быть написан модульно с синтаксисом ES6 без использования сторонних библиотек таких как jQuery.  
* Для стилей обязательно использовать препроцессор (любой, но желательно sass).  
* Все исходники компилировать при помощи webpack  
* Исходный код должен быть залит в публичный репозиторий

## Технологии

- HTML
- CSS
- JavaScript
- Webpack

## Установка

```bash
git clone https://github.com/AtlantisAJ/itprofit-test-task.git
cd ваш-репозиторий
npm install
В первом терминале запустите сервер разработки:
npm run server
Во втором терминале запустите приложение:
npm start

**Задачи:**

1. Развернуть проект:  
   * создать структуру папок  
   * создать файл .gitignore с корректным содержимым  
   * подключить git  
   * подключить webpack  
2. Сверстать произвольную (дизайн на усмотрение, но все должно быть стилизовано) форму обратной связи с полями:  
   * Имя (текстовое поле)  
   * E-mail (поле типа email)  
   * Телефон (текстовое поле)  
   * Сообщение (textarea)  
3. Подключить маску для телефона (взять из npm)  
4. Написать модуль валидации формы на JS. Выводить текст ошибки (произвольный) под соответствующим полем, поля с ошибкой стилизовать соответственно (например красный бордер). Правила валидации:  
   * Все поля обязательны к заполнению  
   * поле email должно содержать корректный адрес электронной почты.  
5. Написать модуль ajax отправки формы. Все данные должны отправляться на сервер, в ответе должен быть json объект в формате:  
   {  
       "status": "error",  
       "fields": {  
           "inputName": "сообщение об ошибке"  
       }  
   }  
   Или:  
   {  
       "status": "success",  
       "msg": "Ваша заявка успешно отправлена"  
   }  
     
   Где:  
   * status \= success/error  
   * fields \= объект с полями которые содержат ошибки  
   * ключи объекта fields \= атрибут name поля с ошибкой  
   * значение ключей объекта fields \= сообщение об ошибке  
   * msg \= сообщение для вывода в форме  
6. Обработать ответ error с выводом соответствующих сообщений об ошибке  
7. Обработать ответ success:  
   * очистить все поля  
   * вывести сообщение msg  
8. Сверстать произвольное модальное окно с произвольным текстом, добавить на страницу кнопку которая будет открывать это модальное окно. Требования:  
   * при открытии модального окна, страница не должна “дергаться”  
   * открытие должно быть анимированным (на Ваше усмотрение)  
   * страница не должна прокручиваться при открытом модальном окне  
   * все должно быть реализовано максимально через css (предполагается что js будет только добавлять/удалять классы)

   

   

   **Сервер:**  
     Добавляем в package.json в скрипты

   "scripts": {   
       // Ваши скрипты 

     // ...

     // 

     "server": "node server/index.js" 

   },

   

   В зависимости проекта добавляем:  
      	"cors" \- npm i  cors  
     	“express” \- npm i express

     В корне проекта (там где package.json) создаем папку server. В папке создаем файл index.js со следующим [содержимым](https://github.com/RErokho/test-itprofit/blob/main/server/index.js) .  Сервер доступен по localhost:9090  
     Доступные запросы:  
     \- ping \-  /api/ping \- GET запрос для проверки работоспособности сервера (можно в браузере ввести [http://localhost:9090/api/ping](http://localhost:9090/api/ping) ). При успешном запуске отобразится  ![][image1]  
     \- registration \- /api/registration \- POST запрос для регистрации \- случайно выдает либо серверную ошибку (400), либо успех (200)

[image1]: <data:image/png;base64,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>

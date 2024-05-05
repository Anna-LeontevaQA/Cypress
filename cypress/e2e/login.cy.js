describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio'); // Зашла на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

         cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
         cy.get('#loginButton').click(); // Нажала кновку войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что авторизация прошла успешно
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик виден пользователю
         cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст об успешной авторизации виден пользователю
    
        })

        it('Восстановление пароля', function () {
            cy.visit('https://login.qa.studio'); // Зашла на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль
   
            cy.get('#forgotEmailButton').click(); // Нажала кнопку забыли пароль
            cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); // Проверяю, что крестик виден пользователю
            cy.get('#mailForgot').type('kustenamli@gufum.com'); // Ввела почту для восстановления
            cy.get('#restoreEmailButton').click(); // Нажала кнопку отправить код

            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что новый пароль отправлен
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик виден пользователю
        })

        it('Верный логин и неверный пароль', function () {
            cy.visit('https://login.qa.studio'); // Зашла на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль
   
            cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
            cy.get('#pass').type('iLoveqastudio17'); // Ввела верный пароль
            cy.get('#loginButton').click(); // Нажала кновку войти
   
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что авторизация не прошла
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик виден пользователю
            cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст об успешной авторизации виден пользователю
        })
        it('Неверный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio'); // Зашла на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

         cy.get('#mail').type('german@dolnikov1.ru'); // Ввела верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
         cy.get('#loginButton').click(); // Нажала кновку войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что авторизация не прошла
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик виден пользователю
         cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст об успешной авторизации виден пользователю
    
        })

        it('Верный логин без @ и верный пароль', function () {
            cy.visit('https://login.qa.studio'); // Зашла на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль
   
            cy.get('#mail').type('germandolnikov.ru'); // Ввела верный логин
            cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
            cy.get('#loginButton').click(); // Нажала кновку войти
   
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что выдает ошибку валидации
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик виден пользователю
            cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст об успешной авторизации виден пользователю
       
           })

           it('Верный логин с регистрами и верный пароль', function () {
            cy.visit('https://login.qa.studio'); // Зашла на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль
   
            cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввела верный логин с разными регистрами
            cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
            cy.get('#loginButton').click(); // Нажала кновку войти
   
            cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что авторизация прошла успешно
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик виден пользователю
            cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст об успешной авторизации виден пользователю
       
           })
 })
 
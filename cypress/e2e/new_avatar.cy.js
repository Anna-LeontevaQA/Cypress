describe('Покупка в покемонах', function () {

    it('Покупка нового аватара тренеру', function () {
         cy.visit('https://pokemonbattle.me/'); // Зашла на сайт
         
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Ввела верный логин
         cy.get('#password').type('USER_PASSWORD'); // Ввела верный пароль
         cy.get('.auth__button').click(); // Нажала кнопку войти

         cy.get('.header__btns > [href="/shop"]').click(); // Нажала кнопку магазин

         cy.get(':nth-child(1) > .shop__button').click(); // Нажала кнопку купить у нового аватара
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // Ввела номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // Ввела срок действия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввела код
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('name'); // Ввела имя владельца карты
         cy.get('.pay-btn').click(); // Нажала кнопку оплатить
         cy.get('#cardnumber').type('56456'); // Ввела код из пуш сообщения
         cy.get('.payment__submit-button').click(); // Нажала кнопку оплатить
        
         cy.contains('Покупка прошла успешно').should('be.visible'); // Проверяю, что покупка прошла успешно
        
         cy.get('.payment__success1').should('be.visible'); // Проверяю, что текст об успешной покупки виден пользователю
         cy.get('.payment__adv').should('be.visible'); // Проверяю, что кнопка вернуться в битву покемонов видна
         cy.get('.payment__adv').click; // Нажимаю кнопку вернуться в битву покемонов
        })
    })
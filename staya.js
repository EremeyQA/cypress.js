
describe('Тестирование staya', function () {
    
    it('Проверка авторизации позитивный кейс', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type(''); ## Ввести верный логин
        cy.get('.auth-form > form > [type="password"]').type(''); ## Ввести верный пароль
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
     })

   
})

describe('Тестирование staya', function () {
    
    it('Проверка авторизации негативный кейс неправильный пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type(''); ## Ввести верный логин
        cy.get('.auth-form > form > [type="password"]').type(''); ## Ввести не верный пароль 
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти');
     })

})
import acesso from '../support/actions/Login'

describe('Login', () => {
    it('Realizar login com sucesso', () => {
        acesso.go()
        acesso.newForm('ciclope@email.com', '966pwd')
        acesso.submit()

    });

});


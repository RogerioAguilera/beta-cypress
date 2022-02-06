import cadastro from '../../support/actions/NovoUsuario'

describe('Cadastro', () => {
    it('Realizar novo cadastro', () => {
        cadastro.go()
        cadastro.newForm('Ciclope', 'ciclope@email.com', '966pwd')
        cadastro.submit()

    });

});
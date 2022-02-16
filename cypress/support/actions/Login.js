
class Login {
    go() {
        cy.viewport(1920, 1080)
        cy.visit('https://seubarriga.wcaquino.me/login')

    }

    newForm( email, senha) {
        cy.get('[id="email"]').type(email)
        cy.get('[id="senha"]').type(senha)
    }

    submit() {
        cy.get('[class="btn btn-primary"]').click()
    }
}

export default new Login()
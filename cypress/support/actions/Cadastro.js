
class Cadastro {
  go() {
    cy.viewport(1920, 1080);
    cy.visit("/cadastro");
  }

  newUser(nome, email, senha) {
    cy.get('[id="nome"]').type(nome);
    cy.get('[id="email"]').type(email);
    cy.get('[id="senha"]').type(senha);
  }

  submit() {
    cy.get('[class="btn btn-primary"]').click();
  }
}

export default new Cadastro();

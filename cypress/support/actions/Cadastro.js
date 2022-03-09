const { faker } = require("@faker-js/faker");

class Cadastro {
  go() {
    cy.viewport(1920, 1080);
    cy.visit("/cadastro");
  }

  newUser() {
    cy.get('[id="nome"]').type(`${faker.nome}`);
    cy.get('[id="email"]').type(`${faker.email}`);
    cy.get('[id="senha"]').type(`${faker.senha}`);
  }

  submit() {
    cy.get('[class="btn btn-primary"]').click();
  }
}

export default new Cadastro();

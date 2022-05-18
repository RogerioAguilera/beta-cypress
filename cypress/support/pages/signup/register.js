import { faker } from "@faker-js/faker";

class Register {
  go() {
    cy.viewport(1920, 1080);
    cy.visit("/cadastro");
  }

  newUser() {
    cy.get('[id="nome"]').type(`${faker.name.findName()}`);
    cy.get('[id="email"]').type(`${faker.internet.email()}`);
    cy.get('[id="senha"]').type(`${faker.internet.password()}`);
  }

  submit() {
    cy.get('[class="btn btn-primary"]').click();
  }
}

export default new Register();

import { faker } from "@faker-js/faker";

const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

class Cadastro {
  go() {
    cy.viewport(1920, 1080);
    cy.visit("/cadastro");
  }

  newUser() {
    cy.get('[id="nome"]').type(randomName);
    cy.get('[id="email"]').type(randomEmail);
    cy.get('[id="senha"]').type(randomPassword, { log: false });
  }

  submit() {
    cy.get('[class="btn btn-primary"]').click();
  }
}

export default new Cadastro();

import { el } from "./elements";

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
    cy.get(el.nome).type(randomName);
    cy.get(el.email).type(randomEmail);
    cy.get(el.senha).type(randomPassword, { log: false });
  }

  submit() {
    cy.get(el.submit).click();
  }
}

export default new Cadastro();

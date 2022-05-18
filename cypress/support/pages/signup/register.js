import { el } from "./elements";
import { faker } from "@faker-js/faker";

class Register {
  go() {
    cy.viewport(1920, 1080);
    cy.visit("/cadastro");
  }

  newUser() {
    cy.get(el.name).type(`${faker.name.findName()}`);
    cy.get(el.email).type(`${faker.internet.email()}`);
    cy.get(el.senha).type(`${faker.internet.password()}`);
  }

  submit() {
    cy.get(el.submit).click();
  }
}

export default new Register();

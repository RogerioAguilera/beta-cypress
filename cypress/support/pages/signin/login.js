import { el } from "./elements";

class Login {
  go() {
    cy.viewport(1920, 1080);
    cy.visit("/");
  }

  newForm(email, senha) {
    cy.get(el.email).type(email);
    cy.get(el.senha).type(senha);
  }

  submit(success, error) {
    cy.get(el.submit).click();
    if (success) {
      cy.get(el.success).should("be.visible");
    } else if (error) {
      cy.get(el.danger).should("be.visible");
    }
  }
}

export default new Login();

class Login {
  go() {
    cy.viewport(1920, 1080);
    cy.visit("/");
  }

  newForm(email, senha) {
    cy.get('[id="email"]').type(email);
    cy.get('[id="senha"]').type(senha, { log: false });
  }

  submit(success, error) {
    cy.get('[class="btn btn-primary"]').click();
    if (success) {
      cy.get('div[class="alert alert-success"]').should("be.visible");
    } else if (error) {
      cy.get('div[class="alert alert-danger"]').should("be.visible");
    }
  }
}

export default new Login();

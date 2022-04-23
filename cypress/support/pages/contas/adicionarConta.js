class AdicionarConta {
  contas() {
    const optionContas = ["Listar", "Adicionar"];

    optionContas.forEach((d) => {
      cy.get('[class="caret"]', { timeout: 7000 }).click();

      cy.contains(".dropdown li", d).click();
    });
  }
}
export default new AdicionarConta();

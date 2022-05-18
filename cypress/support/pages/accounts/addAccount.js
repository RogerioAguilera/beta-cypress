import { el } from "./elements";

class AddAccount {
  accounts() {
    const optionContas = ["Listar", "Adicionar"];

    optionContas.forEach((d) => {
      cy.get(el.selectconta, { timeout: 7000 }).click();

      cy.contains(el.dropdown, d).click();
    });
  }
}
export default new AddAccount();

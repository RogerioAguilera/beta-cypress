import access from "../support/pages/signin/login";
import addAccount from "../support/pages/accounts/addAccount";

describe("Adicionar conta", () => {
  it("Adicionar conta com sucesso", () => {
    access.go();
    access.newForm("ciclope@email.com", "966pwd");
    access.submit();
    addAccount.accounts();
  });
});

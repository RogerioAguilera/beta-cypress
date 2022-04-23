import acesso from "../support/pages/Login";
import addConta from "../support/pages/AdicionarConta";

describe("Adicionar conta", () => {
  it("Adicionar conta com sucesso", () => {
    acesso.go();
    acesso.newForm("ciclope@email.com", "966pwd");
    acesso.submit();
    addConta.contas();
  });
});

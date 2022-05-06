import acesso from "../support/pages/login/login";
import addConta from "../support/pages/contas/adicionarConta";

describe("Adicionar conta", () => {
  it("Adicionar conta com sucesso", () => {
    acesso.go();
    acesso.newForm("ciclope@email.com", "966pwd");
    acesso.submit();
    addConta.contas();
  });
});

import acesso from "../support/actions/Login";
import addConta from "../support/actions/AdicionarConta";

describe("Adicionar conta", () => {
  it("Adicionar conta com sucesso", () => {
    acesso.go();
    acesso.newForm("ciclope@email.com", "966pwd");
    acesso.submit();
    addConta.contas();
  });
});

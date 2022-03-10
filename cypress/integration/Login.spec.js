import acesso from "../support/actions/Login";

describe("Login", () => {
  it("Dado que o Login foi com sucesso", () => {
    acesso.go();
    acesso.newForm("ciclope@email.com", "966pwd");
    acesso.submit();
  });

  it("Quando o Login falha", () => {
    acesso.go();
    acesso.newForm("fail@email.com", "12331");
    acesso.submit();
  });
});

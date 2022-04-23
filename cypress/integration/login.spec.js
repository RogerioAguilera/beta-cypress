import acesso from "../support/pages/login/login";

describe("Login", () => {
  it("Dado que o Login foi realizado com sucesso", () => {
    acesso.go();
    acesso.newForm("ciclope@email.com", "966pwd");
    acesso.submit();
  });

  it("Quando o login deve falhar", () => {
    acesso.go();
    acesso.newForm("fail@email.com", "12331");
    acesso.submit();
  });
});

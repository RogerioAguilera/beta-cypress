import acesso from "../support/actions/Login";

describe("Login", () => {
  it("Login com sucesso", () => {
    acesso.go();
    acesso.newForm("ciclope@email.com", "966pwd");
    acesso.submit();
  });

  it("Login com falha", () => {
    acesso.go();
    acesso.newForm("fail@email.com", "12331");
    acesso.submit();
  });
});

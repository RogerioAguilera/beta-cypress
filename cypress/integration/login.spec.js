import access from "../support/pages/signin/login";

describe("Login", () => {
  it("Dado que o Login foi realizado com sucesso", () => {
    access.go();
    access.newForm("ciclope@email.com", "966pwd");
    access.submit()
  });

  it("Quando o login deve falhar", () => {
    access.go();
    access.newForm("fail@email.com", "12331");
    access.submit();
  });
});

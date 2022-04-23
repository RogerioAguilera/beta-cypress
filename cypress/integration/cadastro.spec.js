import cadastro from "../support/pages/signup/cadastro";

describe("Cadastro", () => {
  it("Dado que realizo cadastro com sucesso", () => {
    cadastro.go();
    cadastro.newUser();
    cadastro.submit();
  });
});

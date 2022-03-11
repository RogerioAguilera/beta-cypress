import cadastro from "../support/actions/Cadastro";

describe("Cadastro", () => {
  it("Dado que realizo cadastro com sucesso", () => {
    cadastro.go();
    cadastro.newUser();
    cadastro.submit();
  });
});

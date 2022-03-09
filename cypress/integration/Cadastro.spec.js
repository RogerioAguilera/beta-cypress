import cadastro from "../support/actions/Cadastro";

describe("Cadastro", () => {
  it("Realizar cadastro com sucesso", () => {
    cadastro.go();
    cadastro.newUser();
    cadastro.submit();
  });
});

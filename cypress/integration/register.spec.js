import register from "../support/pages/signup/register";

describe("register", () => {
  it("Dado que realizo cadastro com sucesso", () => {
    register.go();
    register.newUser();
    register.submit();
  });
});

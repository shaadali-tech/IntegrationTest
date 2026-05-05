describe("Login page", () => {
  it("accepts valid login input", () => {
    cy.visit("/");

    cy.contains("Integration Test Login").should("be.visible");
    cy.get('input[placeholder="Email"]').type("test@gmail.com");
    cy.get('input[placeholder="Password"]').type("123456");
    cy.contains("button", "Login").click();

    cy.get('[role="status"]').should("contain", "test@gmail.com");
  });
});
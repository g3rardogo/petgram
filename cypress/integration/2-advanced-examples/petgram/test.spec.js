describe("Petgram test", function () {
  it("Para ver si la app funciona", function () {
    cy.visit("/");
  });

  it("Navegamos a una categoria y vemos fotos", function () {
    cy.visit("/pet/1");
    cy.get("article");
  });

  it("Para ver si podemos navegar con la navbar al home", function () {
    cy.visit("/pet/1");
    cy.get("nav a").first().click();
    cy.url().should("include", "/");
  });

  it("Los usuarios no registrados vean el formulario de registro e inicio de sesion al ir a favs", function () {
    cy.visit("/favs");
    cy.get("form").should("have.length", 2);
  });
});

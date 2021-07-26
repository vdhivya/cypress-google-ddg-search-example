describe('Duckduckgo Search, visit page, search for term `wikipedia` and show the result', () => {
    it('loads search page', () => {
      cy.visit('https://duckduckgo.com');
      cy.get('input[name="q"]').type('wikipedia{enter}');
      cy.get('#links a')
        .invoke('attr', 'href')
        .then(href => console.log(href));
    });
  });
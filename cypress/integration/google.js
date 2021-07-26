describe('Google Search, accept consent and search for term `wikipedia` and show the search result', () => {
    it('loads search page', () => {
      cy.visit('https://www.google.com');
      cy.get('button[id="L2AGLb"]').click();
      cy.get('input[name="q"]').type('wikipedia{enter}');
      cy.get('#search a')
        .invoke('attr', 'href')
        .then(href => console.log(href));
    });
  });
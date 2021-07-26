# cypress-google-ddg-search-example

An example to search for a term in Google and DuckDuckGo search engine.

### Steps

- Install cypress and create the directory structure

```
mkdir cypress-google-ddg-search-example
cd cypress-google-ddg-search-example
npm init -y
npm install --save-dev cypress
mkdir cypress && cd cypress
mkdir integration && cd integration
```

- Create file ddg.js with content

```
describe('Duckduckgo Search, visit page, search for term `wikipedia` and show the result', () => {
  it('loads search page', () => {
    cy.visit('https://duckduckgo.com');
    cy.get('input[name="q"]').type('wikipedia{enter}');
    cy.get('#links a')
      .invoke('attr', 'href')
      .then(href => console.log(href));
  });
});
```

- Create file google.js with content

```
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
```

- Now running `npx cypress run` will yeild the following result

```
PS C:\Users\vdhiv\Documents\GitHub\cypress-google-ddg-search-example> npx cypress run 
It looks like this is your first time using Cypress: 8.0.0

✔  Verified Cypress! C:\Users\vdhiv\AppData\Local\Cypress\Cache\8.0.0\Cypress

Opening Cypress...


====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    8.0.0                                                                              │
  │ Browser:    Electron 89 (headless)                                                             │
  │ Specs:      2 found (ddg.js, google.js)                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  ddg.js                                                                          (1 of 2)


  Duckduckgo Search, visit page, search for term `wikipedia` and show the result
    √ loads search page (5346ms)


  1 passing (7s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     7 seconds                                                                        │
  │ Spec Ran:     ddg.js                                                                           │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: C:\Users\vdhiv\Documents\GitHub\cypress-google-ddg-search-e    (0 seconds)
                          xample\cypress\videos\ddg.js.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  google.js                                                                       (2 of 2)


  Google Search, accept consent and search for term `wikipedia` and show the search result
    √ loads search page (4054ms)


  1 passing (6s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     5 seconds                                                                        │
  │ Spec Ran:     google.js                                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: C:\Users\vdhiv\Documents\GitHub\cypress-google-ddg-search-e    (0 seconds)
                          xample\cypress\videos\google.js.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  ddg.js                                   00:07        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  google.js                                00:05        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:12        2        2        -        -        -  

```

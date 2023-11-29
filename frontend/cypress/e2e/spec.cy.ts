function verifyNavbarTranslations(language: string, lngArr: string[]) {
  it(`should visualize the links correctly in ${language}`, () => {
    cy.visit(`http://localhost:3000/${language}`); // Update URL with language parameter
    
    // Verify if the component Header is on the page
    cy.get('[data-testid="test-header"]').should('exist');

    // Load the translation's file for the specified language
    cy.readFile(`./public/locales/${language}/home.json`).then((translations) => {
      // Check if the links are present into the Header component
      const headerMenuItems = translations.header_section_menu_items;
      if (headerMenuItems) {
        // Extract titles from the translations JSON
        const linkTitles = headerMenuItems.map((item: any) => item.title);
          // Assert if all expected link titles are present in translations
        lngArr.forEach((expectedTitle: string) => {
          expect(linkTitles).to.include(expectedTitle);
        });
      }
    });
  });
}

const EnglishHeaderLinks = ['Home', 'About us', 'Why us', 'Discover our app', 'services', 'technologies', 'FAQ',];
const ItalianHeaderLinks = ['Home', 'Chi siamo', 'Perchè noi', 'Scopri la nostra App', 'Servizi', 'Tecnologie', 'FAQ',];
const FrenchHeaderLinks = ['Accueil', 'A propos de nous', 'Pourquoi nous', 'découvrez notre application', 'Services', 'Technologies', 'FAQ',]
const GermanHeaderLinks = ['Startseite', 'Über uns', 'Warum wir', 'Entdecken Sie unsere App', 'Dienstleistungen', 'Technologien', 'FAQ']

describe('Navbar Translated Content Test', () => {
  verifyNavbarTranslations('en', EnglishHeaderLinks); // English
  verifyNavbarTranslations('it', ItalianHeaderLinks); // Italian
  verifyNavbarTranslations('fr', FrenchHeaderLinks ); // French
  verifyNavbarTranslations('de', GermanHeaderLinks); // German
});
describe('Navigation', () => {
    it('Navigate to any website', () => { 
        
        cy.visit('https://www.ualki.com');

     })

     it('Reload website', () => { 
        
        cy.reload();

     })

     it('Force reload website ', () => { 
        cy.visit('https://www.ualki.com');
        cy.reload(true);

     })

     it('Navigate back', () => { 
        cy.visit('https://www.ualki.com');
        cy.visit('https://www.ualki.com/es/tour/63d2e6d64263a6b66f9c7856');
        cy.go('back');

     })
});
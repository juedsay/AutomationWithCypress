describe('Types of Locators', () => {
    it('Get it through a #tag', () => { 
        
        cy.visit('/automation-practice-form');
        cy.get('input');

     })

     it('Get it through an attribute', () => { 
        
        cy.get('[placeholder="First Name"]');
     })
    
     it('Get it through an attribute and a #tag', () => { 
        
        cy.get('input[placeholder="First Name"]');
     })

     it('Get it through id', () => { 
        
        cy.get('#firstName');
     })

     it('Get it through a Class', () => { 
        
        cy.get('.mr-sm-2.form-control');
     })

     it('Using contains', () => { 
        
        cy.contains('Reading');
        cy.contains('.header-wreapper','Widgets');
     })
     it('Using parent', () => { 
        
        cy.get('input[placeholder="First Name"]').parent();
        cy.get('input[placeholder="First Name"]').parents();
        
        cy.get('input[placeholder="First Name"]').parent().find('label');

        cy.get('form').find('label');
        
        
     })


});
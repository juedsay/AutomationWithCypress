describe('Saving elements', () => {
    
     it('Repetition', () => { 
        cy.visit('/automation-practice-form')
        cy.get('input[placeholder="First Name"]').parent();
        cy.get('input[placeholder="First Name"]').parents();
        
        cy.get('input[placeholder="First Name"]').parent().find('label');

        cy.get('form').find('label');
        
        
     })

     it('Avoid repetition', () => { 
        cy.visit('/automation-practice-form')
        cy.get('input[placeholder="First Name"]').parents('form').then( (input) => {
            
            const inputs = form.find('find')
            const divs = form.find('div')
            const labels = form.find('label')

            //Assertions
            expect(inputs.length).to.eq(15)
            cy.wrap(inputs).should('have.length', 15);
            expect(divs.length).to.eq(70)
            expect(labels.length).to.eq(16)


        });
        cy.get('input[placeholder="First Name"]').parents();
        
        cy.get('input[placeholder="First Name"]').parent().find('label');

        cy.get('form').find('label');
        
        
     })


});
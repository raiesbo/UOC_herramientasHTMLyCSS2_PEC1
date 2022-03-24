beforeEach(() => {
    cy.visit('http://localhost:1111/')
})

describe('home header', () => {
    it('renders the header component', () => {
        cy.get('#header').should('exist')
    })
    it('contains all the elements', () => {
        cy.get('#header').within(() => {
            cy.contains('h1', 'Raimon Espasa Bou')
            cy.contains('p', 'Software developer')
            cy.contains('li', 'raiesbo@uoc.edu')
            cy.contains('li', '0049 1765354792')
            cy.contains('li', 'portfolioWebsite.com')
            cy.contains('li', 'github.com/raiesbo')
        });
    })
})

describe('content', () => {
    it('renders the main container with two both main and side bars in it', () => {
        cy.get('#content').children().should('have.length', 2)
    })

    it('renders all sections', () => {
        cy.get('#content').children().as('containers');

        cy.get('@containers').first().within(() => {
            cy.contains('h2', 'Profile')
            cy.contains('h2', 'Experience')
            cy.contains('h2', 'Education')
        })

        cy.get('@containers').eq(1).within(() => {
            cy.contains('h2', 'Skills')
            cy.contains('h2', 'Languages')
            cy.contains('h2', 'Hobbies')
        })
    })

    it('has sections that collapse when clicking on its header', () => {
        cy.get('#content').children().first().children().eq(1).as('section')

        cy.get('@section').within(() => {
            cy.contains('h3', 'Full Stack Developer').as('jobEntry').should('be.visible');
            cy.contains('h2', 'Experience').click();
        })

        cy.get('@jobEntry').should('not.be.visible')
    })
})
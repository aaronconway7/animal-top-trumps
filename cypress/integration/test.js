describe(`Initital loading of Card Catalogue`, () => {
    before(function() {
        cy.visit(`/`)
    })
    it(`shows 5 cards`, () => {
        cy.get(`.card`).should(`have.length`, 5)
    })
    it(`shows 1 card to add new card`, () => {
        cy.get(`.edit-card-form`).should(`have.length`, 1)
    })
    
    it(`first card shows correct attributes`, () => {
        cy.get(`.card:first`).within(() => {
            cy.get(`.name`).contains(`Lion`)
            cy.get(`.type`).contains(`mammal`)
            cy.get(`.diet`).contains(`Carnivore`)
            cy.get(`.extinct-status`).should(`not.exist`)
        })
    })

    it(`fifth card shows extinct attribute`, () => {
        cy.get(`.card`).eq(4).within(() => {
            cy.get(`.extinct-status`).contains(`extinct`)
        })
    })
})

describe(`Functionality`, () => {
    beforeEach(function() {
        cy.visit(`/`)
    })
    
    it(`removing a card`, () => {
        cy.get(`.card`).should(`have.length`, 5)
        cy.get(`.card`).eq(2).within(() => {
            cy.get(`.name`).contains(`Sheep`)
        })
        cy.get(`.card`).eq(2).within(() => {
            cy.get(`.remove-card`).click()
        })
        cy.get(`.card`).eq(2).within(() => {
            cy.get(`.name`).contains(`Frog`)
        })
        cy.get(`.card`).should(`have.length`, 4)
    })

    it(`adding a card`, () => {
        cy.get(`.card`).should(`have.length`, 5)
        cy.get(`.edit-card-form`).within(() => {
            cy.get(`#edit-card-name`).type(`Zebra`)
            cy.get(`#edit-card-type`).select(`mammal`)
            cy.get(`.submit-btn`).click()
        })
        cy.get(`.card:last`).within(() => {
            cy.get(`.name`).contains(`Zebra`)
            cy.get(`.type`).contains(`mammal`)
            cy.get(`.diet`).contains(`Herbivore`)
            cy.get(`.extinct-status`).should(`not.exist`)
        })
        cy.get(`.card`).should(`have.length`, 6)
    })

    it(`editing a card`, () => {
        cy.get(`.card`).eq(3).within(() => {
            cy.get(`.name`).contains(`Frog`)
        })
        cy.get(`.card`).eq(3).within(() => {
            cy.get(`.edit-card`).click()
        })
        cy.get(`.edit-card-form:first`).within(() => {
            cy.get(`#edit-card-name`).clear().type(`Jumping Frog`)
            cy.get(`.submit-btn`).click()
        })
        cy.get(`.card`).eq(3).within(() => {
            cy.get(`.name`).contains(`Jumping Frog`)
        })
    })
})

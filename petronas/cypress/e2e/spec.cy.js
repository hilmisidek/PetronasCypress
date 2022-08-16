describe('Petronas website', () => {
  it('has correct title', () => {
    cy.visit('https://www.petronas.com')
    cy.title().should('include','PETRONAS')
    })

   it('check home page url', () => {
   cy.get('.site-logo').last().click()
   cy.url().should('eq','https://www.petronas.com/')
   //cy.go('back')
   })

   it('check each footer link', () => {

   cy.get("#block-aboutus-2 > ul > li").find("a").length.then((len){



   })

     cy.get("#block-aboutus-2 > ul > li").find("a").each((item, index, list) => {
     cy.wrap(item).invoke('text').then((text1) => {
     cy.wrap(item).click()
     cy.wrap(item).title().should('include',text1)
     cy.go('back')


     })
     cy.log(item)


     })


   // cy.get("#block-aboutus-2 > ul > li").find("a").last().should('have.attr', 'href')
    //.and('contains','/about')
   //cy.get("#block-aboutus-2 > ul > li").find("a").last().invoke('text').then((text1) => {

  // cy.get("#block-aboutus-2 > ul > li").find("a").last().click()
  //  cy.title().should('include',text1)
  // })
     })
})






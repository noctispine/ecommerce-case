import { cy } from 'local-cypress'
import { breakpoints } from '../../../src/constants/index'

describe('First', () => {
  const mobileV = parseInt(breakpoints.mobile)
  const mediumV = parseInt(breakpoints.wide)

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.viewport(mobileV, mobileV)
  })

  it('should not render in mobile', () => {
    cy.get('.test_cart').should('not.be.visible')
  })

  it('should not render in medium viewport', () => {
    cy.viewport(mediumV, mediumV)
    cy.get('.test_cart').should('not.be.visible')
  })

  it('should render after clicking on the cart icon', () => {
    cy.get('.set_show_cart').click()
    cy.get('.test_cart').should('be.visible')
  })

  it('should render added item', () => {
    cy.viewport(mediumV + 500, mediumV + 500)
    cy.get('.add_to_cart').first().click()
    cy.get('.cart_item').first().should('be.visible')
  })

  it('should increment an item', () => {
    cy.get('.set_show_cart').click()
    cy.get('.add_to_cart').first().click()
    cy.get('.cart_item').first().get('.increment').click()
    cy.get('.cart_item').first().get('.quantity').contains('2')
  })

  it('should decrement an item and delete it', () => {
    cy.get('.set_show_cart').click()
    cy.get('.add_to_cart').first().click()
    cy.get('.cart_item').first().get('.increment').click()
    cy.get('.cart_item').first().get('.decrement').click()
    cy.get('.cart_item').first().get('.decrement').click()
    cy.get('.totalVal').contains('0')

  })
})

import { cy } from 'local-cypress'
import { breakpoints } from '../../../src/constants'

describe('ProductList', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  const mobileV = parseInt(breakpoints.mobile)


  it('should render item', () => {
    cy.get('.test_product_list').should('be.visible')
  })

  it('should render 16 items', () => {
    cy.get('.test_product_list').children('.test_product_item').should('have.length', 16)
  })
  
  it('should render 12 items', () => {
      cy.viewport(mobileV, mobileV)
      cy.get('.test_product_list').children('.test_product_item').should('have.length', 12)
  })
})

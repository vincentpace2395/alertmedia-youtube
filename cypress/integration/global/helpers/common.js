
class Common {

    youtubeURLText = 'https://www.youtube.com'

    navigateToStackOverflow() {
        cy.visit(this.stackOverflowURLText)
    }

    waitForElementToBeVisible(element) {
        cy.get(element, { timeout: 10000 }).should('be.visible');
    }
}

export default Common
import GoogleSearchResultsPage from "./googleSearchResultsPage"

class GoogleHomePage {

    searchBar = 'input.gsfi'

    searchTerm = 'youtube'

    searchForReddit() {
        cy.get(this.searchBar).type(this.searchTerm).then(() => {
            cy.get(this.searchBar).type('{enter}')
        })

        return new GoogleSearchResultsPage
    }
}

export default GoogleHomePage
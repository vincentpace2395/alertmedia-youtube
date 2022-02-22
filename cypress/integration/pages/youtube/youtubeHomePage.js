import Common from '../../global/helpers/common'
import YoutubeSearchResultsPage from './youtubeSearchResultsPage'

const common = new Common

class YoutubeHomePage {

    searchBarInput = '#search-input #search'

    verifyUserIsOnYoutubePage() {
        cy.url().should('include', common.youtubeURLText) 

        return this
    }

    searchForChannel(searchTerm) {
        cy.get(this.searchBarInput).type(searchTerm).then(() => {
            cy.get(this.searchBarInput).type('{enter}')
        })

        return new YoutubeSearchResultsPage
    }

}

export default YoutubeHomePage
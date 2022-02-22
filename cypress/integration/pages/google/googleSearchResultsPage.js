import YoutubeHomePage from "../youtube/youtubeHomePage"

class GoogleSearchResultsPage {

    topResultLink = '.LC20lb'

    youtubeLinkText = 'YouTube'
    
    clickYoutubeLink() {
        cy.get(this.topResultLink).contains(this.youtubeLinkText).click()

        return new YoutubeHomePage
    }
}

export default GoogleSearchResultsPage
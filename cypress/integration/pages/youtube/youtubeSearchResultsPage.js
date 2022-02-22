import YoutubeChannelHomePage from "./channel/youtubeChannelHomePage"

class YoutubeSearchResultsPage {

    channelDescription = '#main-link #description'

    channelDescriptionText = 'AlertMedia is leading the evolution of employee safety for a modern workforce.'

    openAlertMediaChannel() {
        cy.get(this.channelDescription).contains(this.channelDescriptionText).click()

        return new YoutubeChannelHomePage
    }
}

export default YoutubeSearchResultsPage
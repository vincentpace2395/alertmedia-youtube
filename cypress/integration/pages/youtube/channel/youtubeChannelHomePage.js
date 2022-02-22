import YoutubeChannelVideosPage from "./youtubeChannelVideosPage"

class YoutubeChannelHomePage {

    tabBtn = '.tab-content'

    videosTabText = 'Videos'

    openVideosTab() {
        cy.get(this.tabBtn).contains(this.videosTabText).click()

        return new YoutubeChannelVideosPage
    }
}

export default YoutubeChannelHomePage
/// <reference types="cypress" />
import GoogleHomePage from '../pages/google/googleHomePage'
import GoogleSearchResultsPage from '../pages/google/googleSearchResultsPage'
import YoutubeChannelHomePage from '../pages/youtube/channel/youtubeChannelHomePage'
import YoutubeChannelVideosPage from '../pages/youtube/channel/youtubeChannelVideosPage'

const home = new GoogleHomePage
const results = new GoogleSearchResultsPage
const ychp = new YoutubeChannelHomePage
const ycvp = new YoutubeChannelVideosPage

beforeEach(() => {
    cy.visit('/')
})

it('Verify top google search result is the official reddit site', function() {
    home.searchForReddit()
    results.clickYoutubeLink()
        .verifyUserIsOnYoutubePage()
        .searchForChannel('alertmedia')
        .openAlertMediaChannel()
    ychp.openVideosTab()
    ycvp.findVideoWithMostViews()
})




class YoutubeChannelVideosPage {

    grid = '.grid #items'
    uploadsLabel = '#primary-items #label-text'
    videoTitle = '#items > ytd-grid-video-renderer:nth-child(1) #video-title'
    videoViewCount = '#items > ytd-grid-video-renderer:nth-child(1) #metadata-line span:nth-child(1)'

    findVideoWithMostViews() {
        var youtubeVideo = {
            name: [],
            views: []
        }
        
        let index = 0
        let mostViews = 0

        cy.get(this.uploadsLabel).contains('Uploads').should('be.visible').then(() => {
            
            // Let all videos load
            cy.wait(3000).then(() => {
                cy.get(this.grid)
                .find('#video-title')
                .then(video => {
                    const videoCount = Cypress.$(video).length
                    for (let i = 1; i <= videoCount; i++) {
                        cy.get('#items > ytd-grid-video-renderer:nth-child(' + i + ') #video-title').then(title => {
                            youtubeVideo.name[i] = title.text()
                        })
                        cy.get('#items > ytd-grid-video-renderer:nth-child(' + i + ') #metadata-line span:nth-child(1)').then(views => {
                            youtubeVideo.views[i] = views.text().replace("views", "")
                            if (youtubeVideo.views[i].includes('K')) {
                                youtubeVideo.views[i] = youtubeVideo.views[i].replace("K", "")
                                youtubeVideo.views[i] *= 1000
                            }
                            youtubeVideo.views[i] = parseInt(youtubeVideo.views[i])

                            if (youtubeVideo.views[i] > mostViews) {
                                mostViews = youtubeVideo.views[i]
                                index = i
                            }
                            if (i === Cypress.$(video).length) {
                                alert('Most viewed video: ' + youtubeVideo.name[index])
                            }
                        })
                    }
                })
            })
        })
        
        return this    
    }
}

export default YoutubeChannelVideosPage
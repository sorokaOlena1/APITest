import {accessToken} from '../user.json'

describe('fifth Task', () => {
    it('Create post with adding access token in header', () => {
        cy.request({
            method: 'POST',
            url: '/664/posts',
            body: body,
            headers: {
                'Content-Type': 'text/html',
                'accessToken'  : `${accessToken}`,
            },
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.be.eq(401);
        })
    })
})

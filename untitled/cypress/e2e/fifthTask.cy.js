import body from "../fixtures/user";

describe('fifth Task', () => {
    it('Create post with adding access token in header', () => {
        let accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InFhX3Rlc3QxMjM0NTY3ODlAbWFpbC5jb20iLCJpYXQiOjE2Njk4OTMzMzUsImV4cCI6MTY2OTg5NjkzNSwic3ViIjoiMTMifQ.MTxx8cBhN64aIb5z2AEkdv5yKPYFYN9YaVm3_9B3wiM';
        cy.request({
            method: 'POST',
            url: '/664/posts',
            body: body,
            headers: {
                'Content-Type': 'text/html',
                'accessToken'  : accessToken,
            },
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.be.eq(401);
        })
    })
})

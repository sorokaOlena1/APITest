
describe('third Task', () => {
    it('Get posts with id = 55 and id = 60 ', () => {
        cy.request('GET', '/posts?id=55&id=60').then(response => {
            expect(response.status).to.be.eq(200);
            const post_ids = [];
            response.body.forEach(post => {
                post_ids.push(post.id)
            })
            expect(post_ids[0]).to.be.eq(55);
            expect(post_ids[1]).to.be.eq(60);
        })
    })
})


describe('second Task', () => {
    it('Get only first 10 posts. Verify that only first posts are returned.', () => {
        cy.request('GET', '/posts?_limit=10').then(response => {
            expect(response.status).to.be.eq(200);
            expect(response.body.length).to.be.eq(10);
        })
    })
})

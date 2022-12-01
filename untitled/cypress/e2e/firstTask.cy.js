
describe('first Task', () => {
    it(' Get all posts ', () => {
        cy.request('GET', '/posts').then(response => {
            expect(response.status).to.be.eq(200);
            expect(response.headers['content-type']).to.be.eq('application/json; charset=utf-8');
        })
    })
})

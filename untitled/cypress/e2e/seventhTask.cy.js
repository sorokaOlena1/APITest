import body from "../fixtures/user";

describe('seventh Task', () => {
    it('Create post entity and verify that the entity is created.', () => {
        cy.request({
            method: 'POST',
            url: 'posts/664',
            body: body,
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.be.eq(404);
        })
    })
})

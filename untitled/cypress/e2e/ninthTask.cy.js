import body from "../fixtures/user";

describe('eighth Task', () => {

    it('Delete non-existing post entity. Verify HTTP response status code.', () => {
        cy.request({
            method: 'DELETE',
            url: 'posts/300',
            body: body,
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.be.eq(404);
        })
    })
})

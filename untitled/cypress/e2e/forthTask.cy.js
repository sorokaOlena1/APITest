import {body} from "../fixtures/user";

describe('forth Task', () => {
    it('Create a post 664', () => {
        cy.request({
            method: 'POST',
            url: '664/posts',
            body: body,
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.be.eq(401);
        })
    })
})

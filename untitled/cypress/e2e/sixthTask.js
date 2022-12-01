import {body} from "../fixtures/user";

describe('sixth Task', () => {
    it('Create post entity and verify that the entity is created.', () => {
        cy.request({
            method: 'POST',
            url: 'posts',
            body: body,
        }).then(response => {
            expect(response.status).to.be.eq(201);
        })
    })
})

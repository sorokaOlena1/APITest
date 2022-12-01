import body from "../fixtures/user";

describe('eighth Task', () => {

    it('Create post entity, update the created entity, and delete the entity. Verify HTTP response status code and verify that the entity is deleted.', () => {
        let postId;
        cy.request({
            method: 'POST',
            url: 'posts',
            body: post,
        }).then(response => {
            expect(response.status).to.be.eq(201);
            postId = response.body.id;
            expect(response.body.userId).to.be.eq(body.userId);
            expect(response.body.title).to.be.eq(body.title);
            expect(response.body.body).to.be.eq(body.body);
        }).then(()=> {
            cy.request({
                method: 'PATCH',
                url: `posts/${postId}`,
                body: {
                    "title": 'title_updated'
                },
            }).then(response => {
                expect(response.status).to.be.eq(200);
                expect(response.body.title).to.be.eq('title_updated')
            })
        }).then(()=> {
            cy.request({
                method: 'DELETE',
                url: `posts/${postId}`,
            }).then(response => {
                expect(response.status).to.be.eq(200);
            })
        }).then(()=> {
            cy.request({
                method: 'GET',
                url: `posts/${postId}`,
                failOnStatusCode: false
            }).then(response => {
                expect(response.status).to.be.eq(404);
            })
        })
})
})

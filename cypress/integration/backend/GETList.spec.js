///<reference types = "cypress" />

context('Extrair lista de usuarios', () => {
    it('GET - lista usuarios Star Wars', () => {
        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/people/',
            failOnstatusCode: false,
        }).then((res) => {
            expect(res.status).to.equal(200)
            expect(res.body).to.have.property('results')
        })

    });

});
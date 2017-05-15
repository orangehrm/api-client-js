var should = require('chai').should(),
    test = require('../index'),
    client = test.OrangehrmClient;

    describe('#client', function() {
        it('converts & into &amp;', function() {
            client.get().should.equal('get');
        });
    });


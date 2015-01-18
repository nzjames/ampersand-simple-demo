var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    props: {
        rightLabel: ['string', true, 'Right Label'],
        leftLabel: ['string', true, 'Left Label'],
        header: ['string', true, 'Ampersand Demo']
    }
});

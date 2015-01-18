var View = require('ampersand-view');

module.exports = View.extend({
    template: '<div><a data-hook="leftlabel"></a><h1 class="main-header" data-hook="header"></h1><a data-hook="rightlabel"></a></div>',
    bindings: {
        'model.leftLabel': '[data-hook=leftlabel]',
        'model.rightLabel': '[data-hook=rightlabel]',
        'model.header': '[data-hook=header]'
    }
});


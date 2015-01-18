var HeaderModel = require('./header-model');
var HeaderView = require('./header-view');

var headerModel = new HeaderModel({
    leftLabel: 'Back',
    rightLabel: 'Add',
    header: 'Lets Go!'
});

var headerView = new HeaderView({
    model: headerModel
});


module.exports = {
    letsGo: function() {
        console.log("lets Go");
            document.addEventListener('DOMContentLoaded', function () {
            document.querySelector('header').appendChild(headerView.render().el);
        });
    }
};

module.exports.letsGo();

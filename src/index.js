let $ = require('jquery');
let str = require('./constant');
let App = function() {
    console.log(str);
    $('body').html(str);
}
let app = new App();

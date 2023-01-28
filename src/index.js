let $ = require('jquery');
let str = require('./constant');
require('./less/index');
let App = function() {
    console.log(str);
    $('body').html('<div class="b-test"><h3 class="b-test__heading">Heading<div> </div></h3></div>');
}
let app = new App();

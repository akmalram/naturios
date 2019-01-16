const smartgrid = require('smart-grid');


let settings = {
    outputStyle: 'scss',
    columns: 24
}
smartgrid('./src/css/',settings);
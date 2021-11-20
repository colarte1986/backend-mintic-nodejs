const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URI, function ( err, res ) {
    if ( err ){
        console.log('ERROR: connecting to database. ' + err);
    } else {
        console.log( 'Connected to database' );
    }
});




module.exports = mongoose;
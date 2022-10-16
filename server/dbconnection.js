const mongoose = require('mongoose');

module.exports = {
    connect : function () {
        console.log('Setting up connection to DB.')
        mongoose.connect('mongodb://localhost:27017/reactDB');
    }
};


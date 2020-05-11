const axios = require('axios')

var data

const response = axios({
    'url': "http://localhost:8081/heroesworkout",
    'method': "get"
}).then(function(result) {
    // this.data = result.data
    // console.log(result.data)
    console.log(this)
});

console.log(data)
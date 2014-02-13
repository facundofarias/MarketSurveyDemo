var specify = require('specify')
    , request = require('request')
    ;

specify('surveys_get', function(assert){
    var get = { uri: "http://localhost:8080/surveys", json: true };
    request(get, function (err, resp, body) {
        assert.equal(err,null);
        //assert.equal(body.greeting, "hello " + name);
    });
});

specify('surveys_get', function(assert){
    var survey_id = 1;
    var get = { uri: "http://localhost:8080/surveys/" + survey_id, json: true };
    request(get, function (err, resp, body) {
        assert.equal(err,null);
        assert.equal(body.name, "Sample Survey 1");
    });
});

specify.run(process.argv.slice(2));
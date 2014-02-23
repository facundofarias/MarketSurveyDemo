var specify = require('specify');
var request = require('request');



specify('getSurveys', function(assert){
    var get = { uri: 'http://localhost:9664/surveys', json: true };
    request(get, function (err, resp, body) {
        assert.equal(err, null);
        assert.equal(resp.statusCode, 200);
        assert.ok(body.length > 0);
    });
});

specify('getSurveysById', function(assert){
    var survey_id = 12;
    var get = { uri: 'http://localhost:9664/surveys/' + survey_id, json: true };
    request(get, function (err, resp, body) {
        assert.equal(err, null);
        assert.equal(resp.statusCode, 200);
        assert.equal(body.company, 'Omatom');
        assert.equal(body.email, 'pollardcarter@omatom.com');
        assert.equal(body.sample_size, 8317);
        assert.equal(body.channel, 'Capi');
        assert.equal(body.organisation, 'ad-hoc')
        assert.equal(body.registration_type, 'observation');
        assert.equal(body.method, 'quantitative');
    });
});

specify('getSurveysResultsById', function(assert){
    var survey_id = 198;
    var get = { uri: 'http://localhost:9664/surveys/' + survey_id + '/data', json: true };
    request(get, function (err, resp, body) {
        assert.equal(err, null);
        assert.equal(resp.statusCode, 200);
        assert.ok(body.length > 0);
        assert.equal(body[0].age, 52);
        assert.equal(body[0].name, 'Odessa Macdonald');
        assert.equal(body[0].address, '285 Ryerson Street, Fairforest, Arkansas, 9156');
        assert.equal(body[0].questionnaire.id, 1328);
        assert.ok(body[0].questionnaire.question.length > 0)
        assert.equal(body[0].questionnaire.question[0].type, 'single answer');
        assert.equal(body[0].questionnaire.question[0].answer, 'neither agree nor disagree');
        assert.equal(body[0].questionnaire.question[0].id, 0);
    });
});


specify('getSurveysByCompany', function(assert){
    var company = 'Omatom';
    var get = { uri: 'http://localhost:9664/surveys/company/' + company, json: true };
    request(get, function (err, resp, body) {
        assert.equal(err, null);
        assert.equal(resp.statusCode, 200);
        assert.ok(body.length > 0);
        assert.equal(body[0].company, company);
    });
});

specify('getSurveysByCountry', function(assert){
    var country = 'Barbados';
    var get = { uri: 'http://localhost:9664/surveys/country/' + country, json: true };
    request(get, function (err, resp, body) {
        assert.equal(err, null);
        assert.equal(resp.statusCode, 200);
        assert.ok(body.length > 0);
        assert.equal(body[0].country, country);
    });
});


specify('getSurveysByChannel', function(assert){
    var channel = 'Paper';
    var get = { uri: 'http://localhost:9664/surveys/channel/' + channel, json: true };
    request(get, function (err, resp, body) {
        assert.equal(err, null);
        assert.equal(resp.statusCode, 200);
        assert.ok(body.length > 0);
        assert.equal(body[0].channel, channel);
    });
});

specify('getSurveysByOrganisation', function(assert){
    var organisation = 'syndicated';
    var get = { uri: 'http://localhost:9664/surveys/organisation/' + organisation, json: true };
    request(get, function (err, resp, body) {
        assert.equal(err, null);
        assert.equal(resp.statusCode, 200);
        assert.ok(body.length > 0);
        assert.equal(body[0].organisation, organisation);
    });
});

specify('getSurveysByRegistrationType', function(assert){
    var registration_type = 'registration';
    var get = { uri: 'http://localhost:9664/surveys/registrationType/' + registration_type, json: true };
    request(get, function (err, resp, body) {
        assert.equal(err, null);
        assert.equal(resp.statusCode, 200);
        assert.ok(body.length > 0);
        assert.equal(body[0].registration_type, registration_type);
    });
});

specify('getSurveysByMethod', function(assert){
    var method = 'qualitative';
    var get = { uri: 'http://localhost:9664/surveys/method/' + method, json: true };
    request(get, function (err, resp, body) {
        assert.equal(err, null);
        assert.equal(resp.statusCode, 200);
        assert.ok(body.length > 0);
        assert.equal(body[0].method, method);
    });
});

specify('searchSurveys', function(assert){
    var query = 'Web';
    var get = { uri: 'http://localhost:9664/surveys/search/' + query, json: true };
    request(get, function (err, resp, body) {
        assert.equal(err, null);
        assert.equal(resp.statusCode, 200);
        assert.ok(body.length > 0);
        assert.ok(body[0].score > 0);
        assert.ok(body[0].data.id >= 0);
    });
});

specify.run(process.argv.slice(2));

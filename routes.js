var utils = require('./utils');
var searchEngine = require('./lunr');
var Types = require('hapi').types;

module.exports = [
    // Requests to handle the Markey Survey "catalog"
    { method: 'GET', path: '/surveys', config: { handler: getMarketSurveys, validate: { query: { name: Types.String() } } } },
    { method: 'GET', path: '/surveys/{id}', config: { handler: getMarketSurveyById } },
    { method: 'GET', path: '/surveys/company/{companyName}', config: { handler: getMarketSurveyByCompanyName } },
    { method: 'GET', path: '/surveys/country/{country}', config: { handler: getMarketSurveyByCountry } },
    { method: 'GET', path: '/surveys/channel/{channel}', config: { handler: getMarketSurveyByChannel } },
    { method: 'GET', path: '/surveys/organisation/{organisation}', config: { handler: getMarketSurveyByOrganisation } },
    { method: 'GET', path: '/surveys/registrationType/{registration_type}', config: { handler: getMarketSurveyByRegistrationType } },
    { method: 'GET', path: '/surveys/method/{method}', config: { handler: getMarketSurveyByMethod } },
    { method: 'GET', path: '/surveys/search/{query}', config: { handler: searchSurveys } },
    { method: 'GET', path: '/surveys/{id}/data', config: { handler: getMarketSurveyDataById } }
];

var surveys = utils.readSurveyMarketJson();
//console.log("loaded data: " + JSON.stringify(surveys));

var surveysData = utils.readSurveyMarketDataJson();
console.log("loaded data: " + JSON.stringify(surveysData));

searchEngine.parseData(surveys);

function getMarketSurveys(request) {

    if (request.query.name) {
        request.reply(findSurveys(request.query.name));
    }
    else {
        request.reply(surveys);
    }
}

function findSurveys(name) {

    return surveys.filter(function(survey) {
        return survey.name.toLowerCase() === name.toLowerCase();
    });
}

function getMarketSurveyById(request) {
    var survey = surveys.filter(function(p) {
        return p.id === parseInt(request.params.id);
    }).pop();

    request.reply(survey);
}

function getMarketSurveyByCompanyName(request) {
    var survey = surveys.filter(function(p) {
        return p.company === request.params.companyName;
    });

    request.reply(survey);
}

function getMarketSurveyByCountry(request) {
    var survey = surveys.filter(function(p) {
        return p.country === request.params.country;
    });

    request.reply(survey);
}

function getMarketSurveyByChannel(request) {
    var survey = surveys.filter(function(p) {
        return p.channel === request.params.channel;
    });

    request.reply(survey);
}

function getMarketSurveyByOrganisation(request) {
    var survey = surveys.filter(function(p) {
        return p.organisation === request.params.organisation;
    });

    request.reply(survey);
}

function getMarketSurveyByRegistrationType(request) {
    var survey = surveys.filter(function(p) {
        return p.registration_type === request.params.registration_type;
    });

    request.reply(survey);
}

function getMarketSurveyByMethod(request) {
    var survey = surveys.filter(function(p) {
        return p.method === request.params.method;
    });

    request.reply(survey);
}

function searchSurveys(request) {
    var textToSearch = request.params.query;
    var searchResult = searchEngine.search(textToSearch);
    var result = new Array();
    searchResult.forEach(function (entry) {
        var survey = new Object();
        survey.score = entry.score;
        survey.data = surveys.filter(function(p) {
            return p.id === parseInt(entry.ref);
        }).pop();
        result.push(survey);
    });
    request.reply(result);
}

function getMarketSurveyDataById(request) {
    var surveysInfo = surveysData.filter(function(p) {
        return parseInt(p.survey_id) === parseInt(request.params.id);
    });

    request.reply(surveysInfo);
}

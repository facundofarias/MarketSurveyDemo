var utils = require('./utils');
var searchEngine = require('./lunr');
var Types = require('hapi').types;

var routesDict = {};
routesDict.root=                       '/';
routesDict.surveys=                    '/surveys';
routesDict.surveysById=                '/surveys/{id}';
routesDict.surveysByCompany=           '/surveys/company/{companyName}';
routesDict.surveysByCountry=           '/surveys/country/{country}';
routesDict.surveysByChannel=           '/surveys/channel/{channel}';
routesDict.surveysByOrganisation=      '/surveys/organisation/{organisation}';
routesDict.surveysByRegistrationType=  '/surveys/registrationType/{registration_type}';
routesDict.surveysByMethod=            '/surveys/method/{method}';
routesDict.surveysSearch=              '/surveys/search/{query}';
routesDict.surveysData=                '/surveys/{id}/data';

var routes = [
    { method: 'GET', path: routesDict['root'], config: { handler: rootHandler } },
    { method: 'GET', path: routesDict['surveys'], config: { handler: getMarketSurveys, validate: { query: { name: Types.String() } } } },
    { method: 'GET', path: routesDict['surveysById'], config: { handler: getMarketSurveyById } },
    { method: 'GET', path: routesDict['surveysByCompany'], config: { handler: getMarketSurveyByCompanyName } },
    { method: 'GET', path: routesDict['surveysByCountry'], config: { handler: getMarketSurveyByCountry } },
    { method: 'GET', path: routesDict['surveysByChannel'], config: { handler: getMarketSurveyByChannel } },
    { method: 'GET', path: routesDict['surveysByOrganisation'], config: { handler: getMarketSurveyByOrganisation } },
    { method: 'GET', path: routesDict['surveysByRegistrationType'], config: { handler: getMarketSurveyByRegistrationType } },
    { method: 'GET', path: routesDict['surveysByMethod'], config: { handler: getMarketSurveyByMethod } },
    { method: 'GET', path: routesDict['surveysSearch'], config: { handler: searchSurveys } },
    { method: 'GET', path: routesDict['surveysData'], config: { handler: getMarketSurveyDataById } }
];

var internalData = {
    surveys: [],

    surveysData: [],

    setSurveys: function(surveys)
    {
        this.surveys = surveys;
    },
    setSurveysData: function(surveysData)
    {
        this.surveysData = surveysData;
    }
}

utils.readSurveyMarketJson();
utils.readSurveyMarketDataJson();

function getMarketSurveys(request, reply) {

    if (request.query.name) {
        reply(findSurveys(request.query.name));
    }
    else {
        reply(internalData.surveys);
    }
}

function findSurveys(name) {
    return internalData.surveys.filter(function(survey) {
        return survey.name.toLowerCase() === name.toLowerCase();
    });
}

function getMarketSurveyById(request, reply) {
    var survey = internalData.surveys.filter(function(p) {
        return p.id === parseInt(request.params.id);
    }).pop();

    if (survey)
        survey.results = 'http://' + request.info.host + request.path + '/data';

    reply(survey);
}

function getMarketSurveyByCompanyName(request, reply) {
    var survey = internalData.surveys.filter(function(p) {
        return p.company === request.params.companyName;
    });

    reply(survey);
}

function getMarketSurveyByCountry(request, reply) {
    var survey = internalData.surveys.filter(function(p) {
        return p.country === request.params.country;
    });

    reply(survey);
}

function getMarketSurveyByChannel(request, reply) {
    var survey = internalData.surveys.filter(function(p) {
        return p.channel === request.params.channel;
    });

    reply(survey);
}

function getMarketSurveyByOrganisation(request, reply) {
    var survey = internalData.surveys.filter(function(p) {
        return p.organisation === request.params.organisation;
    });

    reply(survey);
}

function getMarketSurveyByRegistrationType(request, reply) {
    var survey = internalData.surveys.filter(function(p) {
        return p.registration_type === request.params.registration_type;
    });

    reply(survey);
}

function getMarketSurveyByMethod(request, reply) {
    var survey = internalData.surveys.filter(function(p) {
        return p.method === request.params.method;
    });

    reply(survey);
}

function searchSurveys(request, reply) {
    var textToSearch = request.params.query;
    var searchResult = searchEngine.search(textToSearch);
    var result = new Array();
    searchResult.forEach(function (entry) {
        var survey = new Object();
        survey.score = entry.score;
        survey.data = internalData.surveys.filter(function(p) {
            return p.id === parseInt(entry.ref);
        }).pop();
        result.push(survey);
    });
    reply(result);
}

function getMarketSurveyDataById(request, reply) {
    var surveysInfo = internalData.surveysData.filter(function(p) {
        return parseInt(p.survey_id) === parseInt(request.params.id);
    });

    reply(surveysInfo);
}

function rootHandler(request, reply) {
    reply.view('index.jade', {
        title: 'Welcome to Market Survey REST API Doc',
        surveys: routesDict['surveys'],
        surveysById: routesDict['surveysById'],
        surveysByCompany: routesDict['surveysByCompany'],
        surveysByCountry: routesDict['surveysByCountry'],
        surveysByChannel: routesDict['surveysByChannel'],
        surveysByOrganisation: routesDict['surveysByOrganisation'],
        surveysByRegistrationType: routesDict['surveysByRegistrationType'],
        surveysByMethod: routesDict['surveysByMethod'],
        surveysSearch: routesDict['surveysSearch'],
        surveysData: routesDict['surveysData']
    });
};

module.exports.routes = routes;
module.exports.surveys = internalData;
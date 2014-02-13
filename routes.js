var Types = require('hapi').types;

module.exports = [
    { method: 'GET', path: '/surveys', config: { handler: getMarketSurveys, validate: { query: { name: Types.String() } } } },
    { method: 'GET', path: '/surveys/{id}', config: { handler: getMarketSurvey } }
];

var surveys = [
    {
        id: 1,
        name: 'Sample Survey 1'
    },
    {
        id: 2,
        name: 'Sample Survey 2'
    }
];

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

function getMarketSurvey(request) {

    var survey = surveys.filter(function(p) {
        return p.id === parseInt(request.params.id);
    }).pop();

    request.reply(survey);
}

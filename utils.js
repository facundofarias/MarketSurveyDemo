var FS = require('q-io/fs');
var routes = require('./routes');
var searchEngine = require('./lunr');

var utils =
{
    readSurveyMarketJson: function() {
        FS.read('./resources/SurveyMarketMin.json')
            .then(function (content) {
                console.log('Processing promise: Loaded SurveyMarketMin.json');
                var Parsedsurveys = JSON.parse(content);
                routes.surveys.setSurveys(Parsedsurveys);
                searchEngine.parseData(Parsedsurveys);
            });
    },

    readSurveyMarketDataJson: function() {
        FS.read('./resources/SurveyMarketDataMin.json')
            .then(function (content) {
                console.log('Processing promise: Loaded SurveyMarketDataMin.json');
                routes.surveys.setSurveysData(JSON.parse(content));
            });
    }
}

module.exports = utils;

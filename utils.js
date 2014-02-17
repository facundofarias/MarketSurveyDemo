var fs = require('fs');

var utils =
{
    readSurveyMarketJson: function() {
        // Using the min version just for performance, keeping the old one for debug reasons
        var data = fs.readFileSync('./resources/SurveyMarketMin.json', 'utf8');
        console.log('SurveyMarketMin.json');
        return JSON.parse(data);
    },
    readSurveyMarketDataJson: function() {
        // Using the min version just for performance, keeping the old one for debug reasons
        var data = fs.readFileSync('./resources/SurveyMarketDataMin.json', 'utf8');
        console.log('SurveyMarketDataMin.json');
        return JSON.parse(data);
    }
}

module.exports = utils;

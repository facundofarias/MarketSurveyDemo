var fs = require('fs');

var utils =
{
    readSurveyMarketJson: function() {
        var data = fs.readFileSync('./resources/SurveyMarket.json', 'utf8');
        return JSON.parse(data);
    }
}

module.exports = utils;

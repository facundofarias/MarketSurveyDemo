var fs = require('fs');

var utils =
{
    readSurveyMarketJson: function() {
        var data = fs.readFileSync('./resources/SurveyMarket.json', 'utf8');
        console.log('Returning data:' + JSON.stringify(data.trim()));
        return JSON.parse(data.trim());
    }
}

module.exports = utils;

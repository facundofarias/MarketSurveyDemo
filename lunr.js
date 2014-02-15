var lunr = require ('lunr');

var idx = lunr(function () {
    this.field('id');
    this.field('description');
    this.field('company');
    this.field('about');
    this.field('target_group_desc');
    this.field('channel', {boost: 10});
    this.field('organisation', {boost: 10});
    this.field('registration_type', {boost: 10});
    this.field('method', {boost: 10});
})

var searchEngine = {
    parseData: function(data) {
        data.forEach(function (entry) {
            idx.add(entry);
        });
    },
    search: function(textToSearch) {
        return idx.search(textToSearch);
    }
}

module.exports = searchEngine;


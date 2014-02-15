var lunr = require ('lunr');

var idx = lunr(function () {
    this.field('id');
    this.field('description');
    this.field('company');
    this.field('about');
    this.field('target_group_desc');
    this.field('channel');
    this.field('organisation');
    this.field('registration_type');
    this.field('method');
});

function parseJson(feed)
{
    feed.forEach(function (entry) {
        idx.add(entry);
    });
}

function search(text)
{
    return idx.search(text);
}





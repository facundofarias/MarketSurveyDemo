MarketSurveyDemo
================

Market Survey Demo App: Made with Hapi, Lunr and Jade :)

It is deployed here: [**Market Survey**] (http://markeysurvey.cloudno.de/)

[ ![Codeship Status](https://www.codeship.io/projects/55580bc0-7948-0131-88c6-0612149c5f53/status)](https://www.codeship.io/projects/14094)

Market Survey RESTful API Demo: Made with [**hapijs**](http://hapijs.com), [**Lunrjs**](http://lunrjs.com) and [**jade**](http://jade-lang.com/)

Last weekend I had to build a RESTful interface, for a Market Survey app (just a demo app).  I was able choose the tech stack that I wanted, which in a very first moment was [**MEAN**](http://www.mean.io/) stack, which seems to be quite awesome. But wait.

I’ve been also following the guys of [**NodeUp**](http://nodeup.com/) for a while, and I was curious about hapijs, which is quite similar to Express, but it was developed by Wallmart Labs to face the well known Black Fridays. I decided to give it a chance.

I first started with some code snippets that I found on the web, which was code from the 1.8 version, when I moved to 2.4 I had to change several things. 

I did know somehow which would be my data structure, but I needed data! So I think on xls-to-json package from npm. Then, I changed my mind searching for a better approach and then I found [**NodeUp**](http://www.json-generator.com/) which solved my problems at all. Then, I loaded the generated JSON files with fs.readFileSync. Not a big deal. 

Having the data in memory, I needed a way to search in it.  I found lunrjs which was simple enough but powerful. What you need to do, is to say which fields are gonna be indexed and after that you have to index your data. Works like a charm! 

Till then, I had my RESTful interface up and running. I needed something to test them and I’ve used specifyjs and request. Good enough. The only thing is that you need your nodejs server running on another thread (I did not dig so much, maybe you can avoid this).

Last but not least, I wanted to present the APIs with a very simple UI. So I decided to go with Jade. Very simple, powerful and human readable code, and easy to integrate with hapi, you need just to say that the engine will be jade. Flawless.

Some last minute change was, while I am still trying to find a place where to deeploy this, change the sync calls into async, and for that I've used [**q-io**](https://github.com/kriskowal/q-io) simply by using promises. 

You can take a look of the code in here. Feedback is welcomed :)

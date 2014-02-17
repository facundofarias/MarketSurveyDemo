<<<<<<< HEAD
Market Surveys Availability API
===============================

Design and implement a beautiful REST API for a Marketing Research System business case. Your design must comply with the key requirements depicted below.

__Deliverables__

* Executable system serving the proposed REST API
* Client tests to validate the REST API

* * *

Business Requeriments
=====================

[reproduced from _UN/CEFACT Business Requirements Specification - Sourcing of Market Survey Information, 2007 11/16_]

Context
-------

When Market Survey Results are seen as a commercial commodity the _Sourcing of Market Survey information_ is generally conducted in two phases:

1. __Providing information on available Market Surveys__. (This process can be seen to be similar to providing a catalogue of available products.) It is typically, but not always, initiated by a request for information on available Market Surveys. The request will provide information on the subject in which the requestor has an interest allowing the provider to find the most relevant Market Surveys. The provider will respond with information about the relevant Market Surveys available.

2. __Providing Market Survey results__. (This process can be seen to be similar to the actual ordering and delivery of a traditional product.) Typically, but not always, also this process will be initiated by a request identifying the Market Surveys to be provided. When treating Market Survey Results as a commercial commodity, the request process is assumed to be fulfilled as part of the traditional Buy-Ship-Pay process and is thus not further elaborated in this document. The provider will respond by providing the results from the requested Market Surveys as ordered. The actual data to be provided may be in a variety of formats (documents, spreadsheets, data files, etc.). The delivery of this data is not further elaborated in this document.

* * *

__Note__: _Providing Market Survey results_ is outside the scope of this assignment, reproduced only for contextual purposes.

* * *

Business Case
-------------

__Provide Information on Available Data on Market Surveys__

The _Provide information on available Market Surveys_ process allows the _Information Requester_ to send a request message (_Request for information on available Market Surveys_) to the _Information Provider_ asking for information on Market Surveys available from the _Information Provider_. The request will provide information on the subject in which the _Information Requester_ has an interest allowing the _Information Provider_ to find the most relevant Market Surveys.

The process further allows the _Information Provider_ to respond with information about the relevant Market Surveys he may provide and the conditions under which they are available.

__Basic Flow__

* The _Information Requester_ initiates the process by defining his need for Market Survey information. 
* Based on his needs he will establish a _Request for Information on Available Market Surveys_ Message and send this to the _Information Provider_.
* The _Information Provider_ receives the _Request for Information on Available Data on Market Surveys_ Message and evaluates the request against Market Surveys available.
* The _Information Provider_ provides his response in the form of an _Information on Available Data on Market Surveys_ Message.

__Exceptions__

Based on prior agreements the Information Provider may send an _Information on available Market Surveys_ message to Information Requester(s) without having received a request message.


What's Expected
===============

1. Just enough domain research and analysis. It's an assigment, we don't expect a production-ready solution.
2. Define the required endpoints according to functionality (be creative).
3. Define needed messages for information exchange (use the serialization format(s) you find more suitable).
4. Pick the technology that you feel more confortable with.

Hints ❤
-------

* This assignment can get as complex as you want. However, keep in mind we are evaluating: 
    1. Critical and analytical thinking
    2. Abstract thinking
    3. Creativity
    4. Conceptual consistency
    5. Vision
    6. Communication ability
    7. Technical expertise
    8. Carefulness
    9. Perseverance
* We value simplicity, cleanness  and choosing the right tools for the problem.
* Lightweight, low friction and effective approaches are preferred.
* You can leave the exceptions unimplemented, although a subscription  endpoint will be valuable (background delivery mechanism is out of scope —_e.g._ mail).

* * *

Have fun!
=======
MarketSurveyDemo
================

Market Survey - Made with Hapi, Lunr and Jade
>>>>>>> f8fa36e1fa946d3df74ff5a2805adcd35aed6098

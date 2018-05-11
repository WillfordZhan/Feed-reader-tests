# Project Overview

This project is based on a web-based application that reads RSS feeds. it's made up of by a series of test suites and the specs inside the suite powered by Jasmine. The test specs will check the correctness of every running step of the RSS Reader.

## What I learned

* I learned how to use Jasmine to write a number of tests against a pre-existing application to test the underlying business logic of the application as well as the event handling and DOM manipulation.
* I learned the importance of test and get to know the "test-driven developing" concept.

## How the tests runs

1. First Test suite named `"RSS feed"` contains:
    * A test that will check through each feed in the `allFeeds` object and will ensure it has a URL defined and that the URL is not empty.
    * A test that will check through each feed in the `allFeeds` object and will ensure it has a name defined and that the name is not empty.
2. Second Test suite named `"The menu"` contains:
    * A test that will ensure the menu element is hidden by default. 
    * A test that will ensure the menu changes visibility when the menu icon is clicked.
3. Third Test suite named `"Initial Entries"` contains:
    * A test that will check when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
4. Fouth test suite named `"New Feed Selection"` contains:
    * A test that will check when a new feed is loaded by the `loadFeed` function that the content actually changes.

---
When complete - all the tests will pass. 

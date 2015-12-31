# ps-seamless-javascript-testing-with-wallabyjs
As per Wes Higbee's Pluralsight Course "Seamless JavaScript Testing with Wallaby.js"

# Module 2 (done so far)

## "Your First Test (Demo)"
* Create new website project: "ASP.NET Empty Web Site"
* Create wallaby.json
* Create folders"src" and "test"
* In wallaby.json, specify the "files" and "tests" patterns (03:44)
* Create first test in a new file under "test" folder: "sequenceTests.js" (04:45)

Note that wallaby.js must be manually restarted if changes are made to wallaby.js

## "Configure Mocha (Demo)"

* We'll switch from the default testing framework (Jasmine) to Mocha.
* Add a "lib" subfolder under "test", and add chai.js (download from http://chaijs.com/chai.js)
* Update wallaby.js to use mocha, and tell wallaby to use chai (01:40).
* Add chai.should() to the beginning of sequenceTests.js, and drag chai.js from Solution Explorer to the editor window for sequenceTests.js (so it automatically adds the triple slash reference for intellisense to work)

# Next
"Test First Workflow" - the section immediately following "Configure Mocha (Demo)"

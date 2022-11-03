# Maplecroft Frontend Development Test

## Quick Start

```
npm install
npm start
```

## Tasks

This is a simple Angular application to display a globe with countries colour coded to illustrate the level of risk for each country measured against a client's portfolio.

You can rotate and zoom in and out on the globe, hovering over a country will show the country name and risk score at the top right of the window.

You've been asked to make some improvements to this application, listed below are your tasks.

* Some countries do not have scores shown for some reason even though the API response includes those scores. In particular the client needs France and Norway to work, you need to make a change so that the scores/colour coding for those countries work.

-- Got latest natural earth countries data (version 5.1.1) as no 2 character alphameric country code was available for original natural earth countries json for France, Norway, etc.
-- Use ISO_A2_EH instead of ISO_A2 to get 2 alpha character country codes

* Currently the API call is done from AppComponent, we would like this to be in a separate service.

-- Generated new countries service using angular cli and added import and new get country data service call to app.component.ts

* The data includes an entitled boolean, we would like all countries where entitled is false to not have scores/colours displayed on the globe.

-- Countries with entitled false no longer show colour or score on globe or from mouse over events

* Implement tests for your new data service and ensure existing tests work. (This application uses Jasmine/Karma, however feel free to convert it to Jest if you wish)

-- Fixed current tests and implemented 3 tests in the new service spec.ts file for the get countries call

* To help your Team Lead plan for future development of this application provide a brief list of issues and/or improvements that could be made to this application.

-- Data to return country codes with 3 alpha characters as more reliable in use cases
-- Update npm packages and dependencies to solve package vulnerabilities (and possibly introduce npm audit fix to build pipeline for releases)
-- Implement classes/models for all data (natural earth countries, country data)
-- Responsive design for globe to work on various screen and mobile devices
-- Add globe legend to indicate country score and related colour (implemented)
-- Catch any failing request in services and components (implemented). Currently done in individual calls but could use global http interceptor instead.
-- Make screen still useable when service calls fail (implemented)
-- Alert user to any failed calls with option for user to retry and attempt to load data again
-- Make selected country more obvious in UI
-- Add UI library such as bootstrap, Prime NG, Nebula to improve UI and keep consistency amongst elements/components

## Submission of Completed Test

**Please do not fork this repository directly**, instead download/clone it, make your changes and upload to a new separate repository (e.g. GitHub, BitBucket etc.) or create a zip file from your local repo.


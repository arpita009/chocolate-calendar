# AIVITEX - Frontend Test - Chocolate Calendar

A chocolate calendar is a special kind of chocolate box container composed by 28 to 31 slots, one for each day of the current month.
The concept is that one is allowed to get a treat every day before the end of the year, or hold on to it and eat all of the past days at once. But never eat the chocolate from the days ahed.

The goal of this challenge is to create a virtual representation of a winter chocolate calendar, using the this front-end boilerplate and requests to the provided local server.

## Rules

- The calendar should be presented as expected (ascending days from 1 to 31)
- User is allowed to open chocolate from past day slots (if today is 3rd of Dec, only 1st, 2nd and 3rd are available)
- User can eat chocolates only from open slots

## API

- GET /chocolates - receive the consumption list of the chocolate calendar
- POST /open/chocolate (body json { day }) - open a chocolate slot
- POST /eat/chocolate (body json { day }) - eat a chocolate slot

## Requirements

- prefer redux toolkits to manage state changes and axios requests
- use CSS Flexbox and Grid for layout management
- use mui components and mui styled component bridge (from @mui/system)
- define automated test using jest and testing library
- write a description of the final result in RESULT.md

## How to submit a solution

- clone this repository locally
- create a public repository called 'chocolate-calendar' on your Github Profile
- fork a branch from main called 'solution'
- push the solution on your repository, and remember to keep a clean commit hisotry
- create a pull request to main (on your repository)
- send us back the link to your repository

IMPORTANT:
please do not fork nor point pull requests to our repo on AIXITEX's page.
Every other candidate would be able to see your soluiton.

## Solution Overview
With the available frontend boilerplate code and the requests to the server, the aim of the project is to acheive a virtual representation of a calendar to mark the status of each day in the current month.

Ultimately, we would be about to track the consumption list for the particular month with the use of the calendar.

## Features

### Frontend
- Home screen with a form to get the current date (i.e., from when the user needs to track) from the user.
- On submit of the form, the user is redirected to 'chocolateCalendar' page.
- Maximum number of Days are calculated from the month selected from Date peaker. Example for Feb month 28/29 , Jan 31 and March 30. 
- chocolateCalendar pages basically contains a calendar alongwith a table tracking each day status for the current month.
- When the user clicks on a particular day on the given calendar, the status on the table changes (Available->Open->Empty),
- The chocolateCalendar also contains a next button (corresponding to next day implementation). On each click, the status changes from Not Available to Available.
- Color codes are maintained to track each status (Not Available, Available, Open and Empty).

### Server Backend
- Implemented the reset of the server which would be required during initialization (chocolate.JSON file is emptied).
- Suggestion- In case of invalid day request by the user (POST request), data should not be updated in the JSON file as it may cause unnecessary overhead on the server. The user should ONLY receive a status of 400 stating "Bad Request".

## State Diagram

[![StateDiagram](https://github.com/arpita009/chocolate-calendar/blob/solution/others/sequence_diagram.JPG?raw=true)]

### Component Architecture

[![ComponentArchitecture](https://github.com/arpita009/chocolate-calendar/blob/solution/others/component_architecture.JPG?raw=true)]


## Known Issues
1- Need to handle refresh with the implementation of localStorage.
2- Calendar view isn't updated for previous months.

## Demo Video
[![Demo](https://github.com/arpita009/chocolate-calendar/blob/solution/others/2022-01-18-01-27-18_Trim_Trim.gif?raw=true)]




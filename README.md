# TestStationApp

## Before pages loads
- [station status get request](#station-status-get-request)
- [sequence list get request](#sequence-list-get-request)

**Note:** if station status get request returns empty go to [No station running](#no-station-running)
else go to [Station running](#station-running)

## No station running
- in header 
  - test station name
  - station status idle color gray
  - list of components that allows user to pick a sequence to run
    - paper component (with shadow)
    - card component with description
- [station post request](#station-post-request)

## Station running
- [sockets get request](#sockets-get-request)
- in header
  - test station name
  - 200 status or station status get request returns sequence name
    change station status: running... color green
  - expand component with sequence picked by user (other components will be hidden)
- in body
  - component list of sockets
    - each socket 
      - given (socketID, status)
      - user input (serialnumber, checkbox)
        - validation
          - if checkbox checked serial number required
  - start button (start one or many socket tests) Bottom right color green

## Sockets running
- once user clicks start button
  - [sockets post request](#sockets-post-request)
  - [sockets get request](#sockets-get-request)

# HTTP Requests
## GET
- ### sockets get request
  - route: 
  - reply: list of sockets (array of objects {socketID,status})
- ### station status get request
  - station status 
  - route: 
  - reply: 
    - empty = idle
    - name of sequence = running
- ### sequence list get request
  - list of available sequences that user can run
  - route: 
  - reply: JSON with array of sequences
## POST
- ### station post request
  - sequence name user chose
  - route: /start-station
  - data to send {sequencename}
  - reply: 200 status (success), 404 status (can't find), 500 status (format issue)
- ### sockets post request
  - data to send (array of objects {socketID, serialnumber})
  - route: /start-socket
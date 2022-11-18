# Simple news-paper publishing

## Problem description

1. **Problem statement and application scope**: Here, we need to design the backend for a news paper that can only have one editor at a time. When a new editor is added to the system, the previous one is let go. The sole respnsibilty of the editor is to publish 10-15 articles a day. There is one Administrator to the system, who can appoint or let go of the previous editor. We have to develop the necessary REST API to run all the above mentioned CRUD operations with Node.js(Express).

2. **Schema Diagram**: The diagram below contains data models or schema of the problem described and the CRUD operations implemented.<br/> <br/>
   ![Schema Diagram](/schema.jpg)

3. **Codebase**: This github repo contains the code for running the app.

## Solution

### Run

To run the app:

1. Go to project root
2. run `npm install` in terminal
3. run `npm start` in terminal

### Testing REST API endpoints:

1. In order to test the rest API endpoints, one can use the minimalistic web UI, by opening http://localhost:3000/ through browser

2. Inside the /curl_test/ directory, curl commands to test every endpoint has been put in their respective bash file. Simply modify the endpoint bash file, and run via `bash <filename>.sh`

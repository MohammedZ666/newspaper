# Simple news-paper publishing (with minimal UI)

## Problem description

1. **Problem statement and application scope**: Here, we need to design the backend for a news paper that can only have one editor at a time. When a new editor is added to the system, the previous one is let go. The sole respnsibilty of the editor is to publish 10-15 articles a day. There is one Administrator to the system, who can appoint or let go of the previous editor. We have to develop the necessary REST API to run all the above mentioned CRUD operations with Node.js(Express). <br/>
   In order to solve this problem, we need to: <br/>

   1. Design Admin, Editor and Article data-model/schema
   2. Code API endpoints for updating the editor and publishing articles via NodeJS (Experss). Here, we only need to upsert or update the editor, since the previous one is let go, once the new one comes in. Also, we need endpoints for publishing and reading articles.
   3. Here, the admin information is kept in the `.env` file instead of MongoDB, since there is only one admin and no super admin.

2. **Schema Diagram**: The diagram below contains schema of the problem described and the CRUD operations implemented:<br/> <br/>
   ![Schema Diagram](/schema.jpg)

3. **Codebase**: This github repo contains the code for running the app.

## Solution

### Run

To run the app:

1. Go to project root
2. Setup the `.env` file as per `.env.example`.
3. run `npm install` in terminal
4. run `npm start` in terminal

### Testing REST API endpoints:

1. In order to test the REST API endpoints, one can use the minimalistic web UI, by opening http://localhost:3000/ through browser

2. Inside the /curl_test/ directory, to test every endpoint, one bash file was put per endpoint. Simply modify the endpoint bash file, and run via `bash <filename>.sh`. For example: `sh editor_create.sh` to create/update an editor.

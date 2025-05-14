# Full stack

- web application

  - frontend: your view of the pages (HTML, CSS, Javascript) (view, styles, and logic) ==> VueJs (framework which makes development on this faster)

    - Vue code -> compiled to html / CSS /javascript -> served by some backend
    - it will call the backend api to Create / read / update / delete database data
    - Within development, vue will spin up its own server so you can develop locally (hot reloading, type checking, etc)
    - everything in the browser

  - backend: server which can do a few things ==> FastAPI (really fast, minimal, python, and self documenting)

    - 1. serve an API = application programming interface (take requests: GET, POST, PUT, DELETE) which take JSON over a database (postgres)
    - 2. serve your files (see frontend)
    - 3. Authentication: protect your data (advanced)

  - database: you have a lot of data, you want to store it on disk, and retrieve it fast ==> postgresql
    - two types: SQL and NOSQL
    - data is put into tables (think excel spreadsheets, rows and columns)
    - SQL is also a language for querying SQL databases which is very powerful
    - NOSQL is not really as powerful at querying but provides some other features (ie. more scalable / more tolerant to failures / replications, etc)

- hosting: the backend serves the frontend

  - there will be some server (ie. in the cloud) which will clone your code and run it -- this server will be exposed to the internet / company so people can access it

    - A bit more nerdy

    1. Static site: server has all html/css/js and serves it to client
    2. Client generation: server sends a template html/css/js, client runs the js which fills in data from the server
    3. Server side rendering: a combo of the above two approaches

## Notes

client = your browser = frontend

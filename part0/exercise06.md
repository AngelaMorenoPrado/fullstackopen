```mermaid

sequenceDiagram
  participant browser
  participant server

  Note right of browser: A new note is created, added to the list, and the list is re-rendered. Then, the new node is sent to the server.

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate server
  server-->>browser: Returns HTTP status code 201 Created.
  deactivate server

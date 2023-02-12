```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Browser parse the note and update list of note, and re-renders the list. 
  
    browser->>server: Post https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    activate server
    server-->>browser: Status 201 with body {"message":"note created"}
    deactivate server    
```

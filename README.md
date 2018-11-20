# Simple Clean CRUD API

[Live deployment using Zeit Now](https://clean-api.now.sh/)

## Description
A simple CRUD API (without authentication) based on a simple Users model.

Attempt to apply concepts of Uncle Bob Martin's [Clean Archiecture design principles](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html).

Adaptation and inspiration from this project by jbuget: [`A basic Hapi.js API following Clean Architecture principles`](https://github.com/jbuget/nodejs-clean-architecture-app). 

Key differences are more based on personal style and aggregation of separate User use-cases into a single UserRepository.

## Tech stack
- Express.js for webserver
- Node.js for CLI
- Basic in memory DB (todo: include MongoDB and PostgreSQL)

## Clean Architecture layers
![Schema of flow of Clean Architecture](https://github.com/jbuget/nodejs-clean-architecture-app/raw/master/doc/Uncle_Bob_Clean_Architecture.jpg)

## Project anatomy

```
controller              -> Interface adapter between drivers and application
 L  serializers         -> Data format transformer between driver and repositories/ models
database                -> Database stores (i.e. in-memory, permanent (MongoDB, SQL etc.))
drivers                 -> External interfaces of the application
 L cli                  -> Node.js CLI prompt
 L webserver            -> Express server
  L routes              -> Communication between URL routes and controller
model                   -> User model schema
repositories            -> Data access object interfaces (similar to ORM layer with the DB)
index.js                -> Main application entry point
```

## Flow of Control

TODO
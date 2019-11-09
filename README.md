# Clean Architecture - Node.js Baseproject

## Getting started (< 2mn)

```
yarn
yarn test
yarn start
```

In a browser, open [http://localhost:3000/hello](http://localhost:3000/health).


### Flow of Control

TBD

## DDD and Clean Architecture

The application should follow the Uncle Bob "[Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)" principles and project structure :

### Clean Architecture layers

![Schema of flow of Clean Architecture](/doc/Uncle_Bob_Clean_Architecture.jpg)

### Project anatomy

```
app
 └ lib                              → Application sources
    └ application_business_rules    → Application services layer
       └ repositories               → Data access objects interfaces (unfortunately, there is no Interface pattern in JavaScript)
       └ use_cases                  → Application business rules
    └ enterprise_business_rules     → Enterprise core business layer
       └ models                     → Domain model objects such as Entities, Aggregates, Value Objects, Business Events, etc.
       └ services                   → Domain services, e.g. business objects that manipulate multiple and different Domain Models
    └ frameworks_drivers            → Frameworks, drivers and tools such as Database, the Web Framework, mailing/logging/glue code etc.
       └ database                   → ORM and database connection objects
       └ webserver                  → Hapi.js Web server configuration (server, routes, plugins, etc.)
          └ server.js               → Hapi.js server definition
    └ interface_adapters            → Adapters and formatters for use cases and entities to external agency such as Database or the Web
       └ controllers                → Hapi.js route handlers
       └ serializers                → Converter objects that transform outside objects (ex: HTTP request payload) to inside objects (ex: Use Case request object)
       └ storage                    → Repository implementations
 └ node_modules (generated)         → NPM dependencies
 └ test                             → Source folder for unit or functional tests
 └ index.js                         → Main application entry point
```

### The Dependency Rule

> The overriding rule that makes this architecture work is The Dependency Rule. This rule says that source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle. In particular, the name of something declared in an outer circle must not be mentioned by the code in the an inner circle. That includes, functions, classes. variables, or any other named software entity.

src. https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#the-dependency-rule

### Controllers (a.k.a Route Handlers)

Controllers are the entry points to the application context.

They have 3 main responsibilities :

1. Extract the parameters (query or body) from the request
2. Call the good Use Case (application layer)
3. Return an HTTP response (with status code and serialized data)

### Use Cases

A use case is a business logic unit.

It is a class that must have an `execute` method which will be called by controllers.

It may have a constructor to define its dependencies (concrete implementations - a.k.a. _adapters_ - of the _port_ objects) or its execution context.

**Be careful! A use case must have only one precise business responsibility!**

A use case can call objects in the same layer (such as data repositories) or in the domain layer.

# Forked from "[Clean Architecture](https://github.com/jbuget/nodejs-clean-architecture-app)"

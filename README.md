# JavaScript Logging Library

Simple Node/JavaScript logging library

## Basic Example

### TypeScript

```typescript
import type { LoggerInterface } from "@jbuncle/logging-js";
import { Logger, ConsoleLoggerFactory } from "@jbuncle/logging-js";

// Set the logger factory to use to create logger instances
Logger.setLoggerFactory(new ConsoleLoggerFactory());

// Create a logger
const logger: LoggerInterface = Logger.getLogger(`@jbuncle/myapp/index`);

// Use the logger
logger.info(`App started`);
```

### NodeJS/JavaScript

```javascript
var logging = require("@jbuncle/logging-js");

// Set the logger factory to use to create logger instances
logging.Logger.setLoggerFactory(new logging.ConsoleLoggerFactory());

// Create a logger
var logger = logging.Logger.getLogger("@jbuncle/myapp/index");

// Use the logger
logger.info(`App started`);
```

## Features

### Simple

Follows industry standard, cross-language logger structure.

### Scoped loggers

Loggers are created by providing an identifier for the logger required.
In some cases this will be ignored and the same logger returned (e.g. the "ConsoleLogger").

However, the ID can be used to return different Logger implementation - i.e. to return
a more verbose logger for a certain area of the system (the scope). Such that you can setup and configure loggers for specific IDs
allowing you to control the level and type of logging.

The recommended structure of a logger ID '`@<vendor>/<package>/<path>`'
(where `path` is the "classpath" or relative file path).

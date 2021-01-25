/**
 * @copyright 2019 James Buncle <jbuncle@hotmail.com>
 */

import type { LoggerFactory } from "./LoggerFactory";
import { ConsoleLogger } from "./Loggers/ConsoleLogger";
import type { LoggerInterface } from "./LoggerInterface";
import { LogLevelWrapper } from "./Wrappers/LogLevelWrapper";
import { LogLevel } from "./LogLevel";

/**
 * ConsoleLoggerFactory.
 */
export class ConsoleLoggerFactory implements LoggerFactory {

    public constructor(
        private readonly level: LogLevel = LogLevel.DEBUG,
    ) { }

    public getLogger(id?: string): LoggerInterface {
        const consoleLogger: ConsoleLogger = new ConsoleLogger(id);

        return new LogLevelWrapper(consoleLogger, this.level);
    }
}

/**
 * @copyright 2019 James Buncle <jbuncle@hotmail.com>
 */

import type { LoggerFactory } from "./LoggerFactory";
import { ConsoleLogger } from "./Loggers/ConsoleLogger";
import type { LoggerInterface } from "./LoggerInterface";
import { LogLevelWrapper } from "./Wrapper/LogLevelWrapper";
import { LogLevel } from "./LogLevel";

/**
 * ConsoleLoggerFactory.
 */
export class ConsoleLoggerFactory implements LoggerFactory {

    public constructor(
        private readonly level: LogLevel = LogLevel.DEBUG,
    ) { }

    public getLogger(): LoggerInterface {
        const consoleLogger: ConsoleLogger = new ConsoleLogger();

        return new LogLevelWrapper(consoleLogger, this.level);
    }
}

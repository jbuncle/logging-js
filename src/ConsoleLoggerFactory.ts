/**
 * @copyright 2019 James Buncle <jbuncle@hotmail.com>
 */

import type { LoggerFactory } from "./LoggerFactory";
import { ConsoleLogger } from "./Loggers/ConsoleLogger";
import type { LoggerInterface } from "./LoggerInterface";
import { LogLevelWrapper } from "./Wrappers/LogLevelWrapper";
import { LogLevel } from "./LogLevel";

export type Config = Record<string, LogLevel>;
/**
 * ConsoleLoggerFactory.
 */
export class ConsoleLoggerFactory implements LoggerFactory {

    private readonly levels: Record<string, LogLevel> = {};

    public constructor(
        private readonly defaultLevel: LogLevel = LogLevel.DEBUG,
        private readonly config: Config = {},
    ) { }

    public getLogger(loggerId?: string): LoggerInterface {
        const consoleLogger: ConsoleLogger = new ConsoleLogger(loggerId);

        return new LogLevelWrapper(consoleLogger, this.getLevel(loggerId));
    }

    private getLevel(loggerId?: string): LogLevel {
        if (loggerId === undefined) {
            return this.defaultLevel;
        }

        if (Object.prototype.hasOwnProperty.call(this.levels, loggerId) === false) {
            this.levels[loggerId] = this.findLevelForId(loggerId);
        }
        return this.levels[loggerId];
    }

    /**
     * Look at configuration to determine the LogLevel for given logger ID.
     *
     * @param loggerId The logger ID.
     *
     * @returns The log level for given logger ID.
     */
    private findLevelForId(loggerId: string): LogLevel {
        for (const regex in this.config) {
            if (Object.prototype.hasOwnProperty.call(this.config, regex) === true) {
                const regExp: RegExp = new RegExp(regex);
                if (regExp.test(loggerId)) {
                    return this.config[regex];
                }
            }
        }
        return this.defaultLevel;
    }
}

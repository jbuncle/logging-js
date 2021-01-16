/**
 * @copyright 2019 James Buncle <jbuncle@hotmail.com>
 */

import { AbstractLogger } from "../AbstractLogger";
import { LogLevel } from "../LogLevel";

/**
 * ConsoleLogger.
 */
export class ConsoleLogger extends AbstractLogger {

    /**
     * Log with given arbitrary level.
     */
    public log(level: LogLevel, message: string, ...context: unknown[]): void {
        const levelStr: string = level.toUpperCase();

        const logMessage: string = `${levelStr}: ${message}`;

        switch (level) {
            case LogLevel.ERROR:
            case LogLevel.WARNING:
                               console.error(logMessage, ...context);
                break;
            default:
                               console.log(logMessage, ...context);
        }
    }

}

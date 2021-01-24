/* eslint-disable no-console */
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
            case LogLevel.EMERGENCY:
            case LogLevel.ALERT:
            case LogLevel.CRITICAL:
            case LogLevel.ERROR:
                console.error(logMessage, ...context);
                break;
            case LogLevel.WARNING:
                console.warn(logMessage, ...context);
                break;
            case LogLevel.NOTICE:
            case LogLevel.INFO:
                console.log(logMessage, ...context);
                break;
            case LogLevel.DEBUG:
                console.debug(logMessage, ...context);
                break;
            default:
                console.log(logMessage, ...context);
        }
    }

}

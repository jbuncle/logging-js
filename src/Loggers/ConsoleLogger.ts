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
    public log(level: LogLevel, message: string, context?: object): void {
        const levelStr: string = level.toUpperCase();

        let logMessage: string;
        if (context !== undefined) {
            const contextStr: string = JSON.stringify(context);
            logMessage = `${levelStr}: ${message} ${contextStr}`;

        } else {
            logMessage = `${levelStr}: ${message}`;
        }

        switch (level) {
            case LogLevel.ERROR:
            case LogLevel.WARNING:
                // tslint:disable-next-line
                console.error(logMessage);
                break;
            default:
                // tslint:disable-next-line
                console.log(logMessage);
        }
    }

}

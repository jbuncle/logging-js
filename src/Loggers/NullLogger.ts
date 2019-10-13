/*
 * @copyright 2019 James Buncle <jbuncle@hotmail.com>
 */

import { AbstractLogger } from "../AbstractLogger";
import { LogLevel } from "../LogLevel";

/**
 * NullLogger.
 */
export class NullLogger extends AbstractLogger {

    /**
     * Log with given arbitrary level.
     */
    public log(level: LogLevel, message: string, context: object): void {
        // Do nothing
    }

}

/*
 * @copyright 2019 James Buncle <jbuncle@hotmail.com>
 */

import { AbstractLogger } from "../AbstractLogger";

/**
 * NullLogger.
 */
export class NullLogger extends AbstractLogger {

    /**
     * Log with given arbitrary level.
     */
    public log(): void {
        // Do nothing
    }

}

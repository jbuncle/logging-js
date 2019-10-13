/**
 * @copyright 2019 James Buncle <jbuncle@hotmail.com>
 */

import {LoggerInterface} from "./LoggerInterface";
import {LoggerFactory} from "./LoggerFactory";
import {NullLogger} from "./Loggers/NullLogger";

/**
 * NullLoggerFactory.
 */
export class NullLoggerFactory implements LoggerFactory {

    /**
     * Create a logger for writing to console.
     */
    public getLogger(): LoggerInterface {
        return new NullLogger();
    }
}

/**
 * @copyright 2019 James Buncle <jbuncle@hotmail.com>
 */

import type {LoggerInterface} from "./LoggerInterface";
import type {LoggerFactory} from "./LoggerFactory";
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

/**
 * @copyright 2019 James Buncle <jbuncle@hotmail.com>
 */

import {LoggerFactory} from "./LoggerFactory";
import {ConsoleLogger} from "./Loggers/ConsoleLogger";
import {LoggerInterface} from "./LoggerInterface";

/**
 * ConsoleLoggerFactory.
 */
export class ConsoleLoggerFactory implements LoggerFactory {

    public getLogger(): LoggerInterface {
        return new ConsoleLogger();
    }
}

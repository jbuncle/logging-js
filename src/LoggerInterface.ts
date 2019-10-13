import {LogLevel} from "./LogLevel";

/**
 * @copyright 2019 James Buncle <jbuncle@hotmail.com>
 */

/**
 * LoggerInterface.
 */
export interface LoggerInterface {

    emergency(message: string, context: {[s: string]: any}): void;
    alert(message: string, context: {[s: string]: any}): void;
    critical(message: string, context: {[s: string]: any}): void;
    error(message: string, context: {[s: string]: any}): void;
    warning(message: string, context: {[s: string]: any}): void;
    notice(message: string, context: {[s: string]: any}): void;
    info(message: string, context: {[s: string]: any}): void;
    debug(message: string, context: {[s: string]: any}): void;
    log(level: LogLevel, message: string, context: {[s: string]: any}): void;
}

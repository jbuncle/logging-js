import type {LogLevel} from "./LogLevel";

/**
 * @copyright 2019 James Buncle <jbuncle@hotmail.com>
 */

/**
 * LoggerInterface.
 */
export interface LoggerInterface {

    emergency: (message: string, ...context: unknown[]) => void;
    alert: (message: string, ...context: unknown[]) => void;
    critical: (message: string, ...context: unknown[]) => void;
    error: (message: string, ...context: unknown[]) => void;
    warning: (message: string, ...context: unknown[]) => void;
    notice: (message: string, ...context: unknown[]) => void;
    info: (message: string, ...context: unknown[]) => void;
    debug: (message: string, ...context: unknown[]) => void;
    log: (level: LogLevel, message: string, ...context: unknown[]) => void;
}

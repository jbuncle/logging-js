import type { LoggerInterface } from "./LoggerInterface";
import { LogLevel } from "./LogLevel";

export abstract class AbstractLogger implements LoggerInterface {

    /**
     * System is unusable.
     *
     * @param string message
     * @param  context
     *
     * @return void
     */
    public emergency(message: string, ...context: unknown[]): void {
        this.log(LogLevel.EMERGENCY, message, ...context);
    }

    /**
     * Action must be taken immediately.
     *
     * Example: Entire website down, database unavailable, etc. This should
     * trigger the SMS alerts and wake you up.
     *
     * @param string message
     * @param  context
     *
     * @return void
     */
    public alert(message: string, ...context: unknown[]): void {
        this.log(LogLevel.ALERT, message, ...context);
    }

    /**
     * Critical conditions.
     *
     * Example: Application component unavailable, unexpected exception.
     *
     * @param string message
     * @param  context
     *
     * @return void
     */
    public critical(message: string, ...context: unknown[]): void {
        this.log(LogLevel.CRITICAL, message, ...context);
    }

    /**
     * Runtime errors that do not require immediate action but should typically
     * be logged and monitored.
     *
     * @param string message
     * @param  context
     *
     * @return void
     */
    public error(message: string, ...context: unknown[]): void {
        this.log(LogLevel.ERROR, message, ...context);
    }

    /**
     * Exceptional occurrences that are not errors.
     *
     * Example: Use of deprecated APIs, poor use of an API, undesirable things
     * that are not necessarily wrong.
     *
     * @param string message
     * @param  context
     *
     * @return void
     */
    public warning(message: string, ...context: unknown[]): void {
        this.log(LogLevel.WARNING, message, ...context);
    }

    /**
     * Normal but significant events.
     *
     * @param string message
     * @param  context
     *
     * @return void
     */
    public notice(message: string, ...context: unknown[]): void {
        this.log(LogLevel.NOTICE, message, ...context);
    }

    /**
     * Interesting events.
     *
     * Example: User logs in, SQL logs.
     *
     * @param string message
     * @param  context
     *
     * @return void
     */
    public info(message: string, ...context: unknown[]): void {
        this.log(LogLevel.INFO, message, ...context);
    }

    /**
     * Detailed debug information.
     *
     * @param string message
     * @param  context
     *
     * @return void
     */
    public debug(message: string, ...context: unknown[]): void {
        this.log(LogLevel.DEBUG, message, ...context);
    }

    abstract log(level: LogLevel, message: string, ...context: unknown[]): void;
}
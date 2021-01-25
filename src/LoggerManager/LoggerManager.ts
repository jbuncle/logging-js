/* eslint-disable @typescript-eslint/no-unused-vars */
import type { LogLevel } from "../LogLevel";
import { AbstractLogger } from "../AbstractLogger";
import type { LoggerInterface } from "../LoggerInterface";
import type { LoggerFactory } from "../LoggerFactory";
import { NullLoggerFactory } from "../NullLoggerFactory";

/**
 * Managers loggers.
 */
export class LoggerManager extends AbstractLogger implements LoggerFactory {

    private loggerFactory: LoggerFactory

    public constructor() {
        super();
        this.loggerFactory = new NullLoggerFactory();
    }

    public setLoggerFactory(loggerFactory: LoggerFactory): void {
        this.loggerFactory = loggerFactory;
    }

    public getLogger(id?: string): LoggerInterface {
        return this.loggerFactory.getLogger(id);
    }

    /**
     * Logs with an arbitrary level.
     *
     * @param mixed  level
     * @param string message
     * @param array<mixed> context
     *
     * @return void
     */
    public log(level: LogLevel, message: string, ...context: unknown[]): void {
        this.getLogger().log(level, message, context);
    }

}

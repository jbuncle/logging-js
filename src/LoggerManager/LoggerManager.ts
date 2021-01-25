/* eslint-disable @typescript-eslint/no-unused-vars */
import type { LogLevel } from "../LogLevel";
import { AbstractLogger } from "../AbstractLogger";
import type { LoggerInterface } from "../LoggerInterface";
import type { LoggerFactory } from "../LoggerFactory";
import { MultiLogger } from "../Loggers/MultiLogger";

/**
 * Managers loggers.
 */
export class LoggerManager extends AbstractLogger implements LoggerFactory {

    private readonly logger: MultiLogger

    public constructor() {
        super();
        this.logger = new MultiLogger();
    }

    public addLogger(logger: LoggerInterface): void {
        this.logger.addLogger(logger);
    }

    public getLogger(id?: string): LoggerInterface {
        return this.logger;
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

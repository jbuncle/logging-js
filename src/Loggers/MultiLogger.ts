import type {LoggerInterface} from "../LoggerInterface";
import {AbstractLogger} from "../AbstractLogger";
import type {LogLevel} from "../LogLevel";

/**
 * Logger combining multiple loggers into a single instance.
 */
export class MultiLogger extends AbstractLogger {

    /**
     *
     * @var array<LoggerInterface>
     */
    private readonly loggers: LoggerInterface[];

    /**
     *
     * @param array<LoggerInterface> loggers
     */
    public constructor(loggers: LoggerInterface[] = []) {
        super();
        this.loggers = new Array<LoggerInterface>();
        for (const item of loggers) {
            this.loggers.push(item);
        }
    }

    public addLogger(logger: LoggerInterface): MultiLogger {
        this.loggers.push(logger);

        return this;
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
        for (const item of this.loggers) {
            item.log(level, message, ...context);
        }
    }

}

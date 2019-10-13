import {LoggerInterface} from "../LoggerInterface";
import {AbstractLogger} from "../AbstractLogger";
import {LogLevel} from "../LogLevel";

export class MultiLogger extends AbstractLogger {

    /**
     *
     * @var array<LoggerInterface>
     */
    private readonly loggers: Array<LoggerInterface>;

    /**
     *
     * @param array<LoggerInterface> loggers
     */
    public constructor(loggers: Array<LoggerInterface> = []) {
        super();
        this.loggers = new Array<LoggerInterface>();
        for (let item of loggers) {
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
    public log(level: LogLevel, message: string, context: {[s: string]: string}) {
        for (let item of this.loggers) {
            item.log(level, message, context);
        }
    }

}

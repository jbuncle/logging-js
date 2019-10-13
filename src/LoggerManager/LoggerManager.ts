import {LogLevel} from "../LogLevel";
import {AbstractLogger} from "../AbstractLogger";
import {LoggerInterface} from "../LoggerInterface";
import {LoggerFactory} from "../LoggerFactory";
import {MultiLogger} from "../Loggers/MultiLogger";

export class LoggerManager extends AbstractLogger implements LoggerFactory {

        private readonly logger: MultiLogger

    public constructor() {
        super();
        this.logger = new MultiLogger();
    }

    public addLogger(logger: LoggerInterface): void {
        this.logger.addLogger(logger);
    }

    public getLogger(): LoggerInterface {
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
    public log(level: LogLevel, message: string, context: {[s: string]: string}) {
        this.getLogger().log(level, message, context);
    }

}

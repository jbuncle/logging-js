import type { LogLevel } from "..";
import { AbstractLogger } from "../AbstractLogger";
import type { LoggerInterface } from "../LoggerInterface";
import { levelToNum } from "../LogLevel";

/**
 * LogLevel Wrapper - Wraps a Logger to filter messages based on log level.
 */
export class LogLevelWrapper extends AbstractLogger implements LoggerInterface {

    private readonly level: number;

    public constructor(
        private readonly logger: LoggerInterface,
        level: LogLevel,
    ) {
        super();
        this.level = levelToNum(level);
    }

    public log(level: LogLevel, message: string, ...context: unknown[]): void {
        if (this.acceptLevel(level)) {
            this.logger.log(level, message, ...context);
        }
    }

    private acceptLevel(level: LogLevel): boolean {
        return levelToNum(level) <= this.level;
    }

}
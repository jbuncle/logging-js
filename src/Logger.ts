/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/**
 * @copyright 2019 James Buncle <jbuncle@hotmail.com>
 */

import {LoggerManager} from "./LoggerManager/LoggerManager";
import type {LoggerInterface} from "./LoggerInterface";
import type {LogLevel} from "./LogLevel";

/**
 * Convenience class for logging.
 */
export class Logger {

    /**
     *
     * @var LoggerManager
     */
    private static logger: LoggerManager;

    public static addLogger(logger: LoggerInterface): void {
        this.getInstance().addLogger(logger);
    }

    public static getLogger(): LoggerInterface {
        return this.getInstance().getLogger();
    }

    /**
     *
     * @param message: string
     * @param <mixed> context
     *
     * @return void
     */
    public static debug(message: string, ...context: unknown[]): void {
        this.getInstance().debug(message, ...context);
    }

    /**
     *
     * @param message: string
     * @param <mixed> context
     *
     * @return void
     */
    public static error(message: string, ...context: unknown[]): void {
        this.getInstance().error(message, ...context);
    }

    /**
     *
     * @param message: string
     * @param <mixed> context
     *
     * @return void
     */
    public static information(message: string, ...context: unknown[]): void {
        this.getInstance().info(message, ...context);
    }

    /**
     *
     * @param message: string
     * @param <mixed> context
     *
     * @return void
     */
    public static notice(message: string, ...context: unknown[]): void {
        this.getInstance().notice(message, ...context);
    }

    /**
     *
     * @param message: string
     * @param <mixed> context
     *
     * @return void
     */
    public static warning(message: string, ...context: unknown[]): void {
        this.getInstance().warning(message, ...context);
    }

    /**
     *
     * @param message: string
     * @param <mixed> context
     *
     * @return void
     */
    public static log( level: LogLevel, message: string, ...context: unknown[]): void {
        this.getInstance().log(level, message, ...context);
    }

    private static getInstance(): LoggerManager {
        if (!this.logger) {
            this.logger = new LoggerManager();
        }

        return this.logger;
    }
}

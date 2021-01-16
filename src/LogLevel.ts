/* eslint-disable @typescript-eslint/naming-convention */
export enum LogLevel {
    EMERGENCY = 'emergency',
    ALERT = 'alert',
    CRITICAL = 'critical',
    ERROR = 'error',
    WARNING = 'warning',
    NOTICE = 'notice',
    INFO = 'info',
    DEBUG = 'debug',
}

export function levelToNum(level: LogLevel): number {
    switch (level) {
        case LogLevel.EMERGENCY:
            return 0;
        case LogLevel.ALERT:
            return 1;
        case LogLevel.CRITICAL:
            return 2;
        case LogLevel.ERROR:
            return 3;
        case LogLevel.WARNING:
            return 4;
        case LogLevel.NOTICE:
            return 5;
        case LogLevel.INFO:
            return 6;
        case LogLevel.DEBUG:
            return 7;
    }
}
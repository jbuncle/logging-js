/**
 * @copyright 2019 James Buncle <jbuncle@hotmail.com>
 */

import type {LoggerInterface} from "./LoggerInterface";

/**
 * LoggerFactory.
 */
export interface LoggerFactory {

    getLogger: () => LoggerInterface;

}

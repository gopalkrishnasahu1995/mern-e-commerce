"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var combine = winston_1.format.combine, timestamp = winston_1.format.timestamp;
var logLevel = process.env.LOG_LEVEL || "debug";
var logFormat = winston_1.format.printf(function (info) {
    return info.timestamp + "-" + info.level + ": " + JSON.stringify(info.message, null, 4) + "\n";
});
var logger = (0, winston_1.createLogger)({
    level: logLevel,
    format: combine(winston_1.format.colorize(), timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
    }), logFormat),
    transports: [
        new winston_1.transports.File({ filename: "error.log", level: "error" }),
        // new transports.File({ filename: "combined.log" }),
        new winston_1.transports.Console(),
    ],
});
exports.default = logger;
// logger.debug(`Logger configured to level ${logLevel}`);

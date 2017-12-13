/** Created by lixiangyang on 2017/12/13...*/
const Log = require('log4js')

Log.configure({
    appenders: {
        out: { type: 'stdout' },
        error: { type: 'file', filename: './log/error.log' },
        info: { type: 'file', filename: './log/info.log' }
    },
    categories: {
        default: { appenders: ['out'], level: 'all' },
        error: { appenders: ['error', 'out'], level: 'error' },
        info: { appenders: ['info', 'out'], level: 'info' },
        debug: { appenders: ['out'], level: 'info' },
        warn: { appenders: ['out'], level: 'warn' }
    }
})

const InfoLogger = Log.getLogger('info')
const ErrorLogger = Log.getLogger('error')
const WarnLogger = Log.getLogger('warn')
const DebugLogger = Log.getLogger('debug')
InfoLogger.level = ErrorLogger.level = WarnLogger.level = 'ALL'
DebugLogger.level = process.env.NODE_ENV === 'development' ? 'ALL' : 'OFF'

module.exports = exports = {
    warn: (warn) => WarnLogger.warn(warn),
    error: (err) => ErrorLogger.error(err),
    info: (info) => InfoLogger.info(info),
    debug: (debug) => DebugLogger.debug(debug)
}
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const result = dotenv.config({
    path: [
        '.env.local',
        '.env',
        resolve(__dirname, '.env.local'),
        resolve(__dirname, '.env'),
    ],
})
const envObj = result.parsed

if (process.env.NODE_ENV === 'development') {
    console.log('envObj', envObj)
}

export const __PROD__ = process.env.NODE_ENV === 'production'
export const __DEV__ = process.env.NODE_ENV === 'development'

export const PORT = parseInt(process.env.PORT) || 3000

// 是否写入日志到文件
export const LOGFILES = process.env.LOGFILES === 'true'

export const LOG_LEVEL = process.env.LOG_LEVEL || (__DEV__ ? 'silly' : 'http')

export const TIMEOUT = parseInt(process.env.TIMEOUT) || 30000

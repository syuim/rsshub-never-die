export type Bindings = {
    NODE_ENV: string
    PORT: string
    LOGFILES: string
    LOG_LEVEL: string
    TIMEOUT: string
    MAX_BODY_SIZE: string
    RSSHUB_NODE_URLS: string | undefined
    CACHE_MAX_AGE: string
    AUTH_KEY: string
    // 运行模式：负载均衡/自动容灾/快速响应
    MODE: 'loadbalance' | 'failover' | 'quickresponse'
    MAX_NODE_NUM: string
}

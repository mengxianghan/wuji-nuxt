interface RequestConfig {
    [key: string]: any
}

export const defaultConfig = (): RequestConfig => {
    return {
        onRequest: () => {},
        onResponse: () => {},
    }
}

export const serverConfig = (key?: string): RequestConfig => {
    let result: RequestConfig

    switch (key) {
        case 'school':
            result = {
                baseURL: 'https://apifoxmock.com/m1/3156808-1518008-default',
                headers: {
                    source: 'school',
                },
            }
            break
        default:
            result = {
                baseURL: 'https://apifoxmock.com/m1/3156808-1518008-default',
            }
            break
    }

    return result
}

interface RequestConfig {
    [key: string]: any
}

export const defaultConfig = (): RequestConfig => {
    const token = useCookieStorage('token')
    return {
        onRequest: ({ request, options }: any) => {
            token.value = '1'
        },
        onResponse: ({ response, options }: any) => {
            const { data } = response?._data || {}
            console.log(data)
            if (data.id === 2) {
                token.value = null
                throw showError({
                    statusCode: 404,
                    message: 'Page Not Found',
                })
            }
        },
    }
}

export const serverConfig = (key?: string): RequestConfig => {
    let result: RequestConfig
    const config = useRuntimeConfig()

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

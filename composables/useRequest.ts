import requestConfig from '~/configs/request'

interface Payload {
    [key: string | number]: any
}

interface Option {
    baseURL?: string
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    params?: Payload
    body?: Payload
    onRequest?: ({ request, options }: { request: any; options: any }) => void
    onResponse?: ({
        request,
        response,
        options,
    }: {
        request: any
        response: any
        options: any
    }) => void
    [key: string]: any
}

/**
 * 获取数据类型
 * @param value
 * @returns
 */
function getType(value: any) {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

/**
 * 深度合并
 * @param object
 * @param sources
 * @returns
 */
function merge(object: Option, sources: Option): Option {
    for (const key in sources) {
        object[key] =
            object[key] && getType(object[key]) === 'object'
                ? merge(object[key], sources[key])
                : (object[key] = sources[key])
    }
    return object
}

class Request {
    private defaultOption: Option

    constructor(serverKey?: string) {
        const config = useRuntimeConfig()
        const { server, ...others } = requestConfig()

        let baseURL

        if (typeof server === 'string') {
            baseURL = server
        } else {
            const key = server?.[serverKey as keyof typeof server]
            baseURL = (config.public?.[key] || key || serverKey) as string
        }

        this.defaultOption = {
            ...(others || {}),
            baseURL,
        }
    }

    request(url: string, payload?: Payload, option?: Option): Promise<any> {
        option = merge(this.defaultOption, option || {})
        payload = payload || {}

        // 根据请求类型进行赋值传参
        if (option.method === 'GET') {
            option.params = payload
            delete option.body
        } else {
            option.body = payload
        }

        return $fetch(url, option)
    }

    get(url: string, payload?: Payload, option?: Option): Promise<any> {
        return this.request(url, payload, {
            ...(option || {}),
            method: 'GET',
        })
    }

    post(url: string, payload?: Payload, option?: Option): Promise<any> {
        return this.request(url, payload, {
            ...(option || {}),
            method: 'POST',
        })
    }

    put(url: string, payload?: Payload, option?: Option): Promise<any> {
        return this.request(url, payload, {
            ...(option || {}),
            method: 'PUT',
        })
    }

    delete(url: string, payload?: Payload, option?: Option): Promise<any> {
        return this.request(url, payload, {
            ...(option || {}),
            method: 'DELETE',
        })
    }
}

export default (serverKey?: string) => new Request(serverKey)

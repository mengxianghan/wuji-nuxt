import { defaultConfig, serverConfig } from '~/configs/request'

interface Payload {
    [key: string | number]: any
}

interface Options {
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
function merge(object: Options, sources: Options): Options {
    for (const key in sources) {
        object[key] =
            object[key] && getType(object[key]) === 'object'
                ? merge(object[key], sources[key])
                : (object[key] = sources[key])
    }
    return object
}

class Request {
    private defaultOption: Options

    constructor(serverKey?: string) {
        this.defaultOption = merge(defaultConfig(), serverConfig(serverKey))
    }

    request(url: string, payload?: Payload, options?: Options): Promise<any> {
        options = merge(this.defaultOption, options || {})
        payload = payload || {}

        // 根据请求类型进行赋值传参
        if (options.method === 'GET') {
            options.params = payload
            delete options.body
        } else {
            options.body = payload
        }

        return $fetch(url, options)
    }

    get(url: string, payload?: Payload, options?: Options): Promise<any> {
        return this.request(url, payload, {
            ...(options || {}),
            method: 'GET',
        })
    }

    post(url: string, payload?: Payload, options?: Options): Promise<any> {
        return this.request(url, payload, {
            ...(options || {}),
            method: 'POST',
        })
    }

    put(url: string, payload?: Payload, options?: Options): Promise<any> {
        return this.request(url, payload, {
            ...(options || {}),
            method: 'PUT',
        })
    }

    delete(url: string, payload?: Payload, options?: Options): Promise<any> {
        return this.request(url, payload, {
            ...(options || {}),
            method: 'DELETE',
        })
    }
}

export default (serverKey?: string) => new Request(serverKey)

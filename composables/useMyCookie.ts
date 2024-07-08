import cookieConfig from '~/configs/cookie'

export default (name: string, options?: any) => {
    const { namespace, domain } = cookieConfig()

    return useCookie(`${namespace}${name}`, {
        domain,
        ...options,
    })
}

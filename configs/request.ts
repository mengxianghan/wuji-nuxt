export default (): {
    server: string | { [key: string]: string }
    [key: string]: any
} => {
    return {
        server: 'https://cloud-gateway-test.53zaixian.com',
        onRequest: ({ options }: any) => {
            const token = useCookieStorage('token')
            const agencyId = useCookieStorage('agencyId')
            options.headers = options.headers || {}
            options.headers.platform = 'school'
            options.headers['auth-token'] = `Bearer ${token.value}`
            options.headers.companyId = agencyId.value
        },
    }
}

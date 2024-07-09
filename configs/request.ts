export default () => {
    return {
        server: 'https://cloud-gateway-test.53zaixian.com',
        onRequest: ({ request, options }: any) => {
            const token = useMyCookie('token')
            const agencyId = useMyCookie('agencyId')
            options.headers = options.headers || {}
            options.headers.platform = 'school'
            options.headers['auth-token'] = `Bearer ${token.value}`
            options.headers.companyId = agencyId.value
        },
    }
}

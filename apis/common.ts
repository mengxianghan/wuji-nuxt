export const login = (params: any) =>
    useRequest().post('/cloud-merchant-api/auth/login', params)

export const getUserInfo = ({
    id,
}: {
    id: any
}): Promise<{ code: string; data: any }> =>
    useRequest().post(`/cloud-merchant-api/user/userInfo/${id}`)

import { getUserInfo } from '~/apis/common'

export default () => {
    return new Promise(async (resolve, reject) => {
        try {
            const token = useMyCookie('token')

            if (!token.value) {
                resolve({
                    isLogin: false,
                    userInfo: null,
                })
                return
            }

            const userInfo = useState('userInfo')

            if (userInfo.value) {
                resolve({
                    isLogin: true,
                    userInfo: userInfo.value,
                })
                return
            }

            const uuid = useMyCookie('uuid')
            const result = await getUserInfo({
                id: uuid.value,
            }).catch((err: any) => {
                throw new Error(err)
            })
            if (result.code === '200') {
                userInfo.value = result.data
                resolve({
                    isLogin: true,
                    userInfo: userInfo.value,
                })
            } else {
                throw new Error()
            }
        } catch (error) {
            reject(error)
        }
    })
}

export default () => {
    const app = useRuntimeConfig()
    const namespace = app.public.storageNamespace as string

    return {
        namespace,
    }
}

export default () => {
    const app = useRuntimeConfig()
    const namespace = app.public.storageNamespace as string
    const domain = app.public.storageDomain as string

    return {
        namespace,
        domain,
    }
}

export const useMyCookie = (name: string, options?: any) => {
  const app = useRuntimeConfig()
  const namespace = app.public.storageNamespace
  const domain = app.public.storageDomain

  return useCookie(`${namespace}${name}`, {
    domain,
    ...options
  })
}

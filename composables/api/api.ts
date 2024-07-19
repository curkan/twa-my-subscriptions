export class Api {
  static async post<T>(data: T, endPoint: string, token?: string) {
    if (data) {
      const runtimeConfig = useRuntimeConfig()
      
      const { error, data: resp } = await useFetch(`${runtimeConfig.public.backendUrl}${endPoint}`, {
        body: data,
        method: 'POST',
        headers: {
            authorization: `Bearer ${token}`
        }
      })
      
      return { error, resp }
    } else {
      
      throw new Error('No data provided in post request')
    }
  }

  static async postNoData<T>(endPoint: string, token: string) {
    const runtimeConfig = useRuntimeConfig()
    
    const { error, data: resp } = await useFetch(`${runtimeConfig.public.backendUrl}${endPoint}`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    
    return { error, resp }
  }

  static async patch<T>(data: T, endPoint: string, token?: string) {
    if (data) {
      const runtimeConfig = useRuntimeConfig()
      
      const { error, data: resp } = await useFetch(`${runtimeConfig.public.backendUrl}${endPoint}`, {
        body: data,
        method: 'PATCH',
        ...(token && { headers: { authorization: `Bearer ${token}` } })
      })
      
      return { error, resp }
    } else {
      
      throw new Error('No data provided in post request')
    }
  }

  static async put<T>(data: T, endPoint: string, token?: string) {
    if (data) {
      const runtimeConfig = useRuntimeConfig()
      
      const { error, data: resp } = await useFetch(`${runtimeConfig.public.backendUrl}${endPoint}`, {
        body: data,
        method: 'PUT',
        ...(token && { headers: { authorization: `Bearer ${token}` } })
      })
      
      return { error, resp }
    } else {
      
      throw new Error('No data provided in post request')
    }
  }

  static async get(token: string, endPoint: string, contentAccessToken?: string) {
    const runtimeConfig = useRuntimeConfig()
    
    const { error, data: resp } = await useFetch(`${runtimeConfig.public.backendUrl}${endPoint}`, {
      headers: {
        ...(contentAccessToken
          ? { 'G-Content-Access-Token': contentAccessToken }
          : { authorization: `Bearer ${token}` })
      }
    })
    
    return { error, resp }
  }

  static async delete(token: string, endPoint: string) {
    const runtimeConfig = useRuntimeConfig()
    
    const { error, status } = await useFetch(`${runtimeConfig.public.backendUrl}${endPoint}`, {
      headers: {
        authorization: `Bearer ${token}`
      },
      method: 'DELETE'
    })
    
    return { error, status }
  }

  static async getUnAuth<T>(endPoint: string, data?: T) {
    const runtimeConfig = useRuntimeConfig()
    
    const { error, data: resp } = await useFetch(
      `${runtimeConfig.public.backendUrl}${endPoint}`,
      data && { query: data }
    )
    
    return { error, resp }
  }

  static async postUnAuth<T>(data: T, endPoint: string) {
    if (data) {
      const runtimeConfig = useRuntimeConfig()
      
      const { error, data: resp } = await useFetch(`${runtimeConfig.public.backendUrl}${endPoint}`, {
        body: data,
        method: 'POST'
      })
      
      return { error, resp }
    } else {
      
      throw new Error('No data provided in post request')
    }
  }
}


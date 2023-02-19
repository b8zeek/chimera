import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const usePOAPs = () => {
  const getPOAPs = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://api.poap.tech/actions/scan/bejzik.eth',
        headers: {
          'X-API-Key': import.meta.env.VITE_POAP_API_KEY
        }
      })

      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  return useQuery({
    queryKey: ['POAPs'],
    queryFn: getPOAPs
  })
}

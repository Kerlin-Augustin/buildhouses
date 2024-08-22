//  This code lets you fetch data from a url. Just import it somewhere and pass it a url from a state hook that will update the fetched data.

import { useState, useEffect } from 'react'
export const useFetch = (url) => {

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)
      const response = await fetch(url)
      const json = await response.json()
      setIsPending(false)
      setData(json)
    }

    fetchData()
  }, [url])

  return {data: data, isPending: isPending}

}

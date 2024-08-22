//  This code lets you fetch data from a url. Just import it somewhere and pass it a url from a state hook that will update the fetched data.

import { useState, useEffect } from 'react'
export const useFetch = (url) => {

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
    }

    fetchData()
  }, [url])

  return {data: data}

}

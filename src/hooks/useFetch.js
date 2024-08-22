//  This code lets you fetch data from a url. Just import it somewhere and pass it a url from a state hook that will update the fetched data.

import { useState, useEffect } from 'react'
export const useFetch = (url) => {

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)

      try {
        const response = await fetch(url)

        if(!response.ok){
          throw new Error(response.statusText)
        }

        const json = await response.json()

        setIsPending(false)
        setData(json)
        setError(null)
      } catch (err) {
        setIsPending(false)
        setError('Could not fetch the data')
        console.log(err.message)
      }
      
    }

    fetchData()
  }, [url])

  return { data: data, isPending: isPending, error: error }

}

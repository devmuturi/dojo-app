import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null)

    // fetch the data using useEffect
    useEffect(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error('Could not fetch data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setData(data)
          setLoading(false)
          setError(null)
        })
        .catch(err => {
          setLoading(false)
          setError(err.message)
        })
    }, [url]);

  return { data, isLoading, error }
}

export default useFetch;

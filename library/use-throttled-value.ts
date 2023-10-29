import { useEffect, useState } from 'react'

export const useThrottledValue = <T>(value: T, delay: number = 250) => {
  const [throttledValue, setThrottledValue] = useState(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setThrottledValue(value)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [value])

  return throttledValue
}

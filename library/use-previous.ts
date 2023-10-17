import { useEffect, useState } from 'react'

export const usePrevious = <T>(value: T): T | undefined => {
  const [previousValue, setPreviousValue] = useState<T>()
  const [currentValue, setCurrentValue] = useState<T>(value)

  useEffect(() => {
    if (value !== currentValue) {
      setPreviousValue(currentValue)
      setCurrentValue(value)
    }
  }, [value !== currentValue])

  return previousValue
}

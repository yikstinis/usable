import { useEffect } from 'react'

export const useThrottledEffect = (
  delay = 250,
  effect: () => void,
  dependencies: Array<unknown>,
) => {
  useEffect(() => {
    const timeoutId = setTimeout(effect, delay)
    return () => clearTimeout(timeoutId)
  }, dependencies)
}

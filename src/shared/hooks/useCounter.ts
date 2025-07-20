import { useEffect, useState } from "react"

export const useCounter = (to: number, duration: number = 2000) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * to));
      if (progress < 1) requestAnimationFrame(step);
    }
    
    requestAnimationFrame(step)
  }, [to, duration])

  return count
}
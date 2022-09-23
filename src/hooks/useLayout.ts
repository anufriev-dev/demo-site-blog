import { useBurger, useResize } from "."


export default function useLayout(size: number) {
  const { isActiveBurger, setIsActiveBurger } = useBurger(false)
  useResize(setIsActiveBurger, size)

  return { isActiveBurger, setIsActiveBurger }
}
export default function throttle(fn: () => void, ms: number) {
  let flag = 0

  return () => {
    if (flag) return

    flag = 1
    setTimeout(() => {
      fn()
      flag = 0
    }, ms)
  }
}

import { useEffect, useRef } from 'react'

export type Props = Record<string, unknown>

export const CONSOLE_PREFIX = '[useEffectDebugger]'

export default function useEffectDebugger(
  componentName: string,
  props?: Props,
) {
  const prevProps = useRef<Props | undefined>()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      return
    }

    const prevPropsCurrent = prevProps.current

    if (prevPropsCurrent !== undefined) {
      const allKeys = Object.keys({ ...prevProps.current, ...props })

      const changedProps: Props = allKeys.reduce<Props>((result, key) => {
        const prevValue = prevPropsCurrent[key]
        const currentValue = props ? props[key] : undefined

        if (!Object.is(prevValue, currentValue)) {
          result[key] = {
            before: prevValue,
            after: currentValue,
          }
        }
        return result
      }, {})

      if (Object.keys(changedProps).length) {
        // eslint-disable-next-line no-console
        console.log(CONSOLE_PREFIX, componentName, changedProps)
      }
    }

    prevProps.current = props
  })
}

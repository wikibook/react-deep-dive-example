import { renderHook } from '@testing-library/react'

import useEffectDebugger, { CONSOLE_PREFIX } from './useEffectDebugger'

const consoleSpy = jest.spyOn(console, 'log')
const componentName = 'TestComponent'

describe('useEffectDebugger', () => {
  afterAll(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    process.env.NODE_ENV = 'development'
  })

  it('props가 없으면 호출되지 않는다.', () => {
    renderHook(() => useEffectDebugger(componentName))

    expect(consoleSpy).not.toHaveBeenCalled()
  })

  it('최초에는 호출되지 않는다.', () => {
    const props = { hello: 'world' }

    renderHook(() => useEffectDebugger(componentName, props))

    expect(consoleSpy).not.toHaveBeenCalled()
  })

  it('props가 변경되지 않으면 호출되지 않는다.', () => {
    const props = { hello: 'world' }

    const { rerender } = renderHook(() =>
      useEffectDebugger(componentName, props),
    )

    expect(consoleSpy).not.toHaveBeenCalled()

    rerender()

    expect(consoleSpy).not.toHaveBeenCalled()
  })

  it('props가 변경되면 다시 호출한다.', () => {
    const props = { hello: 'world' }

    const { rerender } = renderHook(
      ({ componentName, props }) => useEffectDebugger(componentName, props),
      {
        initialProps: {
          componentName,
          props,
        },
      },
    )

    const newProps = { hello: 'world2' }

    rerender({ componentName, props: newProps })

    expect(consoleSpy).toHaveBeenCalled()
  })

  it('props가 변경되면 변경된 props를 정확히 출력한다', () => {
    const props = { hello: 'world' }

    const { rerender } = renderHook(
      ({ componentName, props }) => useEffectDebugger(componentName, props),
      {
        initialProps: {
          componentName,
          props,
        },
      },
    )

    const newProps = { hello: 'world2' }

    rerender({ componentName, props: newProps })

    expect(consoleSpy).toHaveBeenCalledWith(CONSOLE_PREFIX, 'TestComponent', {
      hello: { after: 'world2', before: 'world' },
    })
  })

  it('객체는 참조가 다르다면 변경된 것으로 간주한다', () => {
    const props = { hello: { hello: 'world' } }
    const newProps = { hello: { hello: 'world' } }

    const { rerender } = renderHook(
      ({ componentName, props }) => useEffectDebugger(componentName, props),
      {
        initialProps: {
          componentName,
          props,
        },
      },
    )

    rerender({ componentName, props: newProps })

    // 이후 호출
    expect(consoleSpy).toHaveBeenCalled()
  })

  it('process.env.NODE_ENV가 production이면 호출되지 않는다', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    process.env.NODE_ENV = 'production'

    const props = { hello: 'world' }

    const { rerender } = renderHook(
      ({ componentName, props }) => useEffectDebugger(componentName, props),
      {
        initialProps: {
          componentName,
          props,
        },
      },
    )

    const newProps = { hello: 'world2' }

    rerender({ componentName, props: newProps })

    expect(consoleSpy).not.toHaveBeenCalled()
  })
})

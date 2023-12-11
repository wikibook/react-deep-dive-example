import React, {useContext, useMemo, useRef, useLayoutEffect} from 'react';

import ThemeContext from './shared/ThemeContext';

const rendererModule = {
  status: 'pending',
  promise: null,
  result: null,
};

export default function lazyLegacyRoot(getLegacyComponent) {
  const componentModule = {
    status: 'pending',
    promise: null,
    result: null,
  };

  return function Wrapper(props) {
    // legacy/createLegacyRoot 를 promise 로 layzy 하게 불러온다.
    const createLegacyRoot = readModule(rendererModule, () =>
      import('../legacy/createLegacyRoot')
    ).default;

    const Component = readModule(componentModule, getLegacyComponent).default;
    // 구 리액트를 렌더링할 위치
    const containerRef = useRef(null);
    // 구 리액트의 루트 컴포넌트
    const rootRef = useRef(null);

    const theme = useContext(ThemeContext);
    const context = useMemo(
      () => ({
        theme,
      }),
      [theme]
    );
    useLayoutEffect(() => {
      // 루트 컴포넌트가 없다면
      if (!rootRef.current) {
        // 루트 컴포넌트를 만든다.
        rootRef.current = createLegacyRoot(containerRef.current);
      }
      const root = rootRef.current;

      // cleanUp 시에 unmount
      return () => {
        root.unmount();
      };
    }, [createLegacyRoot]);

    useLayoutEffect(() => {
      if (rootRef.current) {
        // 루트 컴포넌트가 존재하면 적절한 props와 context로 렌더링한다.
        rootRef.current.render(Component, props, context);
      }
    }, [Component, props, context]);

    return <div style={{display: 'contents'}} ref={containerRef} />;
  };
}

function readModule(record, importStatement) {
  // promise가 없으면 아직 import 하지 못한 것이므로 import 를 실행한다.
  if (!record.promise) {
    /* eslint-disable */
    record.promise = importStatement().then(
        value => {
          if (record.status === 'pending') {
            record.status = 'fulfilled';
            record.promise = null;
            // 성공시 import 반환 값
            record.result = value;
            return value
          }
        },
        error => {
          if (record.status === 'pending') {
            record.status = 'rejected';
            record.promise = null;
            // 실패시 에러
            record.result = error;
          }
        }
    );
  }

  // 성공 또는 실패시에 결과를 반환한다.
  if (record.status === 'fulfilled' || record.status === 'rejected') {
    return record.result;
  }

  throw record.promise;
}

import React from 'react';
import ReactDOM from 'react-dom';

import ThemeContext from './shared/ThemeContext';

export default function createLegacyRoot(container) {
  return {
    // 렌더링
    render(Component, props, context) {
      ReactDOM.render(
        <ThemeContext.Provider value={context.theme}>
          <Component {...props} />
        </ThemeContext.Provider>,
        container
      );
    },
    // 이 컴포넌트의 부모 컴포넌트가 제거될 때 호출될 unmount
    unmount() {
      ReactDOM.unmountComponentAtNode(container);
    },
  };
}

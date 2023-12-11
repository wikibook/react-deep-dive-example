import React, {useContext} from 'react';

import Clock from './shared/Clock';
import ThemeContext from './shared/ThemeContext';
import lazyLegacyRoot from './lazyLegacyRoot';

const Greeting = lazyLegacyRoot(() => import('../legacy/Greeting'));

export default function AboutPage() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <h2>src/modern/AboutPage.js</h2>
      <h3 style={{color: theme}}>
        This component is rendered by the outer React ({React.version}).
      </h3>
        <Clock />
        <Greeting />
      <br />
    </>
  );
}

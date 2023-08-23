import React, {useState, Suspense} from 'react';

import AboutPage from './AboutPage';
import ThemeContext from './shared/ThemeContext';

export default function App() {
  const [theme, setTheme] = useState('slategrey');

  function handleToggleClick() {
    if (theme === 'slategrey') {
      setTheme('hotpink');
    } else {
      setTheme('slategrey');
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{fontFamily: 'sans-serif'}}>
        <div
          style={{
            margin: 20,
            padding: 20,
            border: '1px solid black',
            minHeight: 300,
          }}>
          <button onClick={handleToggleClick}>Toggle Theme Context</button>
          <br />
          <Suspense fallback={<Spinner />}>
            <AboutPage />
          </Suspense>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

function Spinner() {
  return null;
}

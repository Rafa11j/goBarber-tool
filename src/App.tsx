import React from 'react';

import AppProvider from './hooks';

import GlobalStyle from './styles/global';
import SingIn from './pages/SingIn';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SingIn />
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;

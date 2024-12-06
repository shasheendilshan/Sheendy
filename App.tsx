import './global.css';
import React from 'react';
import AppNavigation from './Navigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'react-redux';
import {store} from './Store/store';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;

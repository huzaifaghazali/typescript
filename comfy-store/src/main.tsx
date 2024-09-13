import { createRoot } from 'react-dom/client';
import { Toaster } from '@/components/ui/toaster';
import App from './App.tsx';
import './index.css';

import { store } from './store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Toaster />
    <App />
  </Provider>
);

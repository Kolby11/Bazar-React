import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Profile from './Profile/Profile';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<StrictMode></StrictMode>);

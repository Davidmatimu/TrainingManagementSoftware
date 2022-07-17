import React from 'react';
import Main from './Main';
import { createRoot } from 'react-dom/client';
import Mapbox from './components/Views/map';
import 'mapbox-gl/dist/mapbox-gl.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
  <Main/>
</React.StrictMode>);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BasicDetail from './components/BasicDetail';
import TopicSelection from './components/TopicSelection';
import App from './App'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicDetail />
  },
  {
    path: 'topicselection',
    element: <TopicSelection />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

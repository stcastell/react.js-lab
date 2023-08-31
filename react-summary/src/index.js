import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import PostInput, { action as postData } from './routes/PostInput';
import PostDetails, {loader as postDetailsData} from './routes/PostDetails';
import MainLayout from './routes/MainLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
  {
    path: '/', element: <MainLayout />, children:
      [
        { path: '/add-post', element: <PostInput />, action: postData },
        { path: '/:id', element: <PostDetails/>, loader: postDetailsData}
      ]
  }

]);

root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ThemeProvider } from '@/components/theme-provider.tsx';
import { Login } from './pages/Login.tsx';


import Landing from './routes/landing.tsx';
import Root from './routes/root.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "home",
        element: <Landing/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider  router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import AuthProvider from './contexts/AuthProvider.jsx';

// tankstack
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
     <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>,
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './router/Routes'
import { Toaster } from 'react-hot-toast'

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import AuthProvider from './providers/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={myCreatedRouter} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
    <Toaster />
  </React.StrictMode>,
)

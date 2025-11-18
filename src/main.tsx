import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Layout } from '@/pages/Layout'
import { Home } from '@/pages/Home'
import { Experience } from '@/pages/Experience'
import { Projects } from '@/pages/Projects'
import { Journal } from '@/pages/Journal'
import { JournalDetail } from '@/pages/JournalDetail'

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    { index: true, element: <Home /> },
    { path: 'experience', element: <Experience /> },
    { path: 'projects', element: <Projects /> },
    { path: 'journal', element: <Journal /> },
    { path: 'journal/:slug', element: <JournalDetail /> },
  ]},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Layout } from '@/pages/Layout'
const Home = React.lazy(() => import('@/pages/Home').then(m => { return { default: m.Home } }))
const Experience = React.lazy(() => import('@/pages/Experience').then(m => { return { default: m.Experience } }))
const Projects = React.lazy(() => import('@/pages/Projects').then(m => { return { default: m.Projects } }))
const Journal = React.lazy(() => import('@/pages/Journal').then(m => { return { default: m.Journal } }))
const JournalDetail = React.lazy(() => import('@/pages/JournalDetail').then(m => { return { default: m.JournalDetail } }))

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
    <React.Suspense fallback={<div className='p-6'>Loading…</div>}><RouterProvider router={router} /></React.Suspense>
  </React.StrictMode>,
)

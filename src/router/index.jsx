import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import routes from './routes'

const router = routes.map(({ component, path, ...route }) => {
  const Component = lazy(component)
  return <Route key={path} path={path} {...route} element={
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  } />
})

export default function AppRouter () {
  return (
    <BrowserRouter>
      <Routes>
        {router}
      </Routes>
    </BrowserRouter>
  )
}

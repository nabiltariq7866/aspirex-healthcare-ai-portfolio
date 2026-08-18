import { useLayoutEffect } from 'react'
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'

import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/ProjectDetailPage'

function forceScrollTop() {
  const html = document.documentElement
  const body = document.body

  const previousHtmlBehavior = html.style.scrollBehavior
  const previousBodyBehavior = body.style.scrollBehavior

  /*
   * The global stylesheet uses:
   * html { scroll-behavior: smooth; }
   *
   * Temporarily override it so route changes are genuinely instant.
   */
  html.style.scrollBehavior = 'auto'
  body.style.scrollBehavior = 'auto'

  window.scrollTo(0, 0)
  html.scrollTop = 0
  body.scrollTop = 0

  /*
   * Run again after the new route has painted.
   * This protects against layout anchoring / late browser restoration.
   */
  const frameOne = window.requestAnimationFrame(() => {
    window.scrollTo(0, 0)
    html.scrollTop = 0
    body.scrollTop = 0

    const frameTwo = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      html.scrollTop = 0
      body.scrollTop = 0

      html.style.scrollBehavior = previousHtmlBehavior
      body.style.scrollBehavior = previousBodyBehavior
    })

    ;(window as Window & { __routeScrollFrameTwo?: number })
      .__routeScrollFrameTwo = frameTwo
  })

  return () => {
    window.cancelAnimationFrame(frameOne)

    const frameTwo =
      (window as Window & { __routeScrollFrameTwo?: number })
        .__routeScrollFrameTwo

    if (frameTwo) {
      window.cancelAnimationFrame(frameTwo)
    }

    html.style.scrollBehavior = previousHtmlBehavior
    body.style.scrollBehavior = previousBodyBehavior
  }
}

function RouteScrollManager() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    return forceScrollTop()
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <RouteScrollManager />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/projects/:projectId"
          element={<ProjectDetailPage />}
        />

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
      </Routes>
    </>
  )
}

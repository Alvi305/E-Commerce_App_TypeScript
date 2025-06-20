import { useContext } from 'react'
import { Store } from '../Store'
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedRoute() {
  const {
    state: { userInfo },
  } = useContext(Store)
  if (userInfo) {
    return <Outlet />
  } else {
    return <Navigate to="/signin" />
  }
}

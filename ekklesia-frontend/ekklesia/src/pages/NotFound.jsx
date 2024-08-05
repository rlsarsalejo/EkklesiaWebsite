import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center bg-white p-10 rounded-lg shadow-md">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2">Sorry, the page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
      >
        Go to Home
      </Link>
    </div>
  </div>
  )
}

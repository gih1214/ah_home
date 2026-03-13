import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        AH Home
      </motion.h1>

      <motion.div
        className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Users</h2>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : users.length > 0 ? (
          <ul className="space-y-2">
            {users.map((user) => (
              <li
                key={user.id}
                className="p-3 bg-gray-100 rounded-lg text-gray-700"
              >
                {user.name ?? user.email ?? JSON.stringify(user)}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No users found. Connect your database to see data.</p>
        )}
      </motion.div>
    </div>
  )
}

export default App

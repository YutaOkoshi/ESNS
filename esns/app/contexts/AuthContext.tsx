'use client'

import React, { createContext, useState, useContext } from 'react'

interface User {
  id: string
  username: string
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  register: (username: string, password: string) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = async (username: string, password: string) => {
    // In a real app, you would validate credentials with your backend
    if (username && password) {
      setUser({ id: '1', username })
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
  }

  const register = async (username: string, password: string) => {
    // In a real app, you would send this data to your backend
    if (username && password) {
      setUser({ id: '1', username })
      return true
    }
    return false
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}


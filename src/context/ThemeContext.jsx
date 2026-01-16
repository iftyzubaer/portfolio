import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true) // Default to dark mode
  
  useEffect(() => {
    // Check if user has a preference saved
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    }
  }, [])
  
  useEffect(() => {
    // Update document class and save preference
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])
  
  const toggleTheme = () => {
    setIsDark(!isDark)
  }
  
  const value = useMemo(() => ({ isDark, toggleTheme }), [isDark])
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function useTheme() {
  return useContext(ThemeContext)
}
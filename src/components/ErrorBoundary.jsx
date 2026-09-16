import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('TechIcon failed to load:', this.props.name, error)
  }

  render() {
    if (this.state.hasError) {
      return <div className="w-full h-full flex items-center justify-center text-white-50 text-xs">⚠️</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary
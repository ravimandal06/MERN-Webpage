import React, { Component } from 'react';

class ErrorBoundary extends Component {
  componentDidCatch(error, errorInfo) {
    // Log the error or handle it in any way you want
    console.error(error);
  }

  render() {
    // Return the children as-is if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;

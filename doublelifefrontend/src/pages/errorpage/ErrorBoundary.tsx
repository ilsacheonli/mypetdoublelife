import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: any) {
    // 에러가 발생하면 상태를 업데이트하여 500 오류 페이지로 이동
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 에러 처리 로직 추가 가능
    console.error('에러 발생:', error);
    console.error('에러 스택 트레이스:', errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // 에러가 발생하면 500 오류 페이지로 이동
      return <Navigate to="/500" />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;


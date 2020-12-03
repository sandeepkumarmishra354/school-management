import React, { Component } from 'react'

interface Props {
    fallback?: React.ReactElement
}

interface State {
    hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError = (_error: unknown): State => {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch = (_error: unknown, _info: unknown) => {
        // You can also log the error to an error reporting service
    }

    render() {
        if (this.state.hasError) {
            // Return fallback UI.
            return this.props.fallback;
        }
        // Return children components.
        return this.props.children;
    }

}
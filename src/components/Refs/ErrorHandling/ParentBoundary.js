import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Hero from './Hero'

class ParentBoundary extends Component {
    render() {
        return (
            <div>
                <ErrorBoundary>
                    <Hero heroName="Batman" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero heroName="Superman" /> 
                </ErrorBoundary>
                <ErrorBoundary>
                    <Hero heroName="Joker" /> 
                </ErrorBoundary>
            </div>
        )
    }
}

export default ParentBoundary

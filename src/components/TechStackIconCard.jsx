import React, { Suspense } from 'react'
import TechIcon from './Models/TechLogos/TechIcon'
import ErrorBoundary from './ErrorBoundary'
import { useInView } from '../hooks/useInView'

const TechStackIconCard = ({ icon }) => {
    const [ref, inView] = useInView({ threshold: 0.1 })

    return (
        <div ref={ref} className="w-full h-full">
            {inView && (
                <ErrorBoundary name={icon.name}>
                    <Suspense fallback={<div className="w-full h-full" />}>
                        <TechIcon model={icon} />
                    </Suspense>
                </ErrorBoundary>
            )}
        </div>
    )
}

export default TechStackIconCard
import React from 'react';
import './InfiniteRibbon.css';

export function InfiniteRibbon({
    children,
    rotation = 0,
    reverse = false,
    className = '',
    speed = 20
}) {
    return (
        <div
            className={`infinite-ribbon-container ${className}`}
            style={{
                '--rotation': `${rotation}deg`,
                '--speed': `${speed}s`,
                '--direction': reverse ? 'reverse' : 'normal'
            }}
        >
            <div className="infinite-ribbon-content">
                {/* Duplicated content for seamless loop */}
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="ribbon-item">
                        {children}
                    </div>
                ))}
            </div>
        </div>
    );
}

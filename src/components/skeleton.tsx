// file: src/components/Skeleton.tsx
import React from 'react';
import '@/styles/skeleton.css'; // Importiere die CSS-Datei vom korrekten Pfad

export const Skeleton: React.FC = () => {
    return (
        <div className="skeleton-container">
            <div className="skeleton-header"></div>
            <div className="skeleton-row"></div>
            <div className="skeleton-row"></div>
            <div className="skeleton-row"></div>
        </div>
    );
};
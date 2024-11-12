import React, { Suspense } from 'react';

export default function Loader({ children }) {
    return (
        <Suspense
            fallback={
                <div
                    id='loader'
                    className='loader-container'
                >
                    <div className='loader'></div>
                </div>
            }
        >
            {children}
        </Suspense>
    );
}

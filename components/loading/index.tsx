import React from 'react';
import { Spin } from 'antd';

interface LoadingSpinnerProps {
    progress: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ progress }) => {
    return (
        <div className="flex flex-col justify-center items-center h-64">
            <Spin size="large" />
            <p className="mt-4">Loading... {progress}%</p>
        </div>
    );
};

export default LoadingSpinner;
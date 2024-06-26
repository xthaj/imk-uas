import React from 'react';
import { Skeleton } from 'antd';

const SkeletonCarousel: React.FC = () => (
    <div className="w-full max-w-[649px] mx-auto">
        <div className="relative h-[607px] w-full">
            <Skeleton.Image className="!w-full !h-full" active />
            <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-b from-transparent to-gray-800">
                <Skeleton.Input style={{ width: 120, height: 24 }} active />
                <Skeleton.Input style={{ width: '100%', height: 48, marginTop: 12 }} active />
                <Skeleton.Input style={{ width: '80%', height: 24, marginTop: 12 }} active />
            </div>
        </div>
    </div>
);

export default SkeletonCarousel;
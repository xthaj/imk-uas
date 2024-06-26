// components/Title.tsx
import React from 'react';

interface TitleProps {
    text: string;
}

const Judul1: React.FC<TitleProps> = ({ text }) => {
    return (
        <>
            <h2 className="text-3xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-4">{text}</h2>
        </>
    );
};

export default Judul1;

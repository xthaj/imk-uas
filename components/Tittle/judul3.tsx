// components/Title.tsx
import React from 'react';

interface TitleProps {
    text: string;
}

const Judul3: React.FC<TitleProps> = ({ text }) => {
    return (
        <>
            <h2 className="text-xl sm:text-xl md:text-2xl text-gray-700 font-bold mb-4">{text}</h2>

        </>
    );
};

export default Judul3;

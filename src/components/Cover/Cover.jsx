import React from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';

const Cover = ({ coverImg, heading }) => {
    return (
        <div className="relative">
            <img
                src={coverImg}
                alt="Banner"
                className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <AttentionSeeker effect='pulse'>
                <div className="text-center">
                    <h1
                        class="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-green-700"
                    >
                        {heading}
                    </h1>
                </div>
                </AttentionSeeker>
            </div>
        </div>
    );
};

export default Cover;
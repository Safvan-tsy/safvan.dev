import React from 'react'

interface AnimatedTextProps {
    text: string;
    className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {

    return (
    <div className='w-full mx-auto py2 flex items-center justify-center text-center
    overflow-hiddev  '>
        <h1 className={`inline-block w-full font-bold capitalize text-8xl ${className}`}>
            {
                text.split("").map((word,index)=>
                <span key={word+'-'+index}>
                    {word}
                </span>
                )
            }
        </h1>
        </div>
    )
}


export default AnimatedText
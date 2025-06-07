import React from 'react'
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({title, content}) => {
    return (
        <div className="bg-indigo-950 rounded-2xl p-4 shadow-md ml-6 mr-6">
            <h2 className="text-lg text-white font-medium mb-2">{title}</h2>
            <p className="text-sm text-white">{content}</p>
        </div>
    )
}

export default Card;

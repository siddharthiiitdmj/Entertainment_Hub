import React from "react";

export default function Cast(props) {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-32 h-32">
                    <img
                        src={props.image}
                        alt="cast and crew member"
                        className="w-full h-full rounded-full object-center object-cover"
                    />
                </div>
                <h1 className="text-xl text-gray-800">{props.castName}</h1>
                <h5 className="text-sm text-gray-500">as {props.role}</h5>
            </div>
        </>
    );
}

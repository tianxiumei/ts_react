import React from "react";

interface IHelloProps {
    name: string
}

export default function Hello(props: IHelloProps) {
    return <div>{props.name}</div>
}
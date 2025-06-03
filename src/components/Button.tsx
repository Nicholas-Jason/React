import React from 'react'

interface Props{
    children: string;
    color?: "primary"| "secondary";
    onclick: ()=> void;
}
export const Button = ({children, color, onclick}: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onclick}>{children}</button>
  )
}

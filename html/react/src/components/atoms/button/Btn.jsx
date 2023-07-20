import './Btn.css'

function Btn(button) {
import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button className={button.className}>{ button.content }</button>
  )
}


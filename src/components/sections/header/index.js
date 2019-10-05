import React from "react"

import Header from "./header"
import Slides from "./slides"

import "react-id-swiper/lib/styles/css/swiper.css";
import "./header.css"


export default function() {
  return (
    <>
      <Header></Header>
      <div className="top-slider">
        <Slides></Slides>
      </div>
    </>
  )
}
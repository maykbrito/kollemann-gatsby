import React from 'react';

import Slides from "./slides"
import "./gallery.css"

export default function() {
  return (
    <section id="gallery" data-aos="fade-up">
      <div>
          <h2>Galeria de Fotos</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <Slides></Slides>
      </div>
    </section>
  )
}
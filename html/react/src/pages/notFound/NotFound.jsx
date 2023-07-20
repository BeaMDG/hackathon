import React from 'react'
import NotFoundPageImg from '../../assets/images/pagenotfound.png'
import '../notFound/NotFound.css'
export default function NotFound() {
  return (
    <figure><img class="Figure__img--duck404" src={NotFoundPageImg} alt="page 404 not found" /></figure>
  )
}

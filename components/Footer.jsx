import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiOutlineFacebook, AiOutlineYoutube } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 commercePro All Rights Reserved</p>
      <p className="icons">
        <a href='https://www.instagram.com/' target="_blank"><AiFillInstagram /></a>
        <a href="https://www.twitter.com/" target="_blank"><AiOutlineTwitter /></a>
        <a href="https://www.facebook.com/" target="_blank"><AiOutlineFacebook /></a>
      </p>
    </div>
  )
}

export default Footer
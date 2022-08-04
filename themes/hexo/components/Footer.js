import React from 'react'
import BLOG from '@/blog.config'
import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  return (
    <footer
      className='font-sans dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm p-6'
    >
      <DarkModeButton/>
        <br/>
        <h1>{title}</h1>
        <span className='text-xs font-serif'> <a href='' className='underline dark:text-gray-300'>老派浪漫之必要</a>.</span></span><br/>

    </footer>
  )
}

export default Footer

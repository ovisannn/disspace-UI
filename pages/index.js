import Head from 'next/head'
import Image from 'next/image'
import AboutCategories from '../components/AboutCategories'
import styles from '../styles/Home.module.css'
import GameHeader from '../img/gameHeader.jpg'

const categories ={
  header : GameHeader,
  tag : '#Gaming',
  description : 'A topic for (almost) anything related to games - video games, board games, card games, etc. (but not sports).',
}

export default function Home() {
  return (
    <>
      <AboutCategories category={categories} />
      <div className='text-orange'>
        tes
      </div>
    </>
  )
}

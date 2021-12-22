import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CategoriesRules from '../components/CategoriesRules'
import { dummyCategory } from '../dummyData'

export default function Home() {
  return (
    <>    
      <CategoriesRules category = {dummyCategory} />
      {/* <div className='text-orange'>
        tes
      </div> */}
    </>
  )
}

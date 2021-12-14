import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Dynamic Intranet Designer</title>
        <meta property="og:title" content="Dynamic Intranet Designer" />
      </Helmet>
    </div>
  )
}

export default Home

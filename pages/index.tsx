import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Pokemon
        </title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Container>
        <h2>Hello World</h2>
      </Container>
      
    </div>
  )
}

export default Home

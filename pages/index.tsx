import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios';
import { useQuery } from 'react-query';
import { ChangeEvent, useState } from 'react'
import { Container, FormControl } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

const getPokemon =async (key:number,q:string) => {
  const { data } = await axios.get(`api/search?q=${escape(q)}`);
  return data;
};

const Home: NextPage = () => {

  // const [query, setQuery] = useState("")
  // const { data } = useQuery(["q",query],async () => {
  //   const { data } = await axios.get(
  //     `api/search?q=${escape(query)}`
  //   );
  //   return data;
  // })

  const [query, setQuery] = useState("")
  const { data } = useQuery(["q",query],getPokemon);

  // const { newData } = useQuery(["q",query],async () => {
  //   const { data } = await axios.get(
  //     `api/search?q=${escape(query)}`
  //   );
  //   return data;
  // })

    // return (<div>{data && <div>{data.id}</div>}</div>)
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Pokemon
        </title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Container>
        <FormControl
        placeholder='Search'
        aria-value='Search'
        value={query}
        onChange={(e:ChangeEvent<HTMLInputElement>)=>{setQuery(e.target.value)}}
        >

        </FormControl>
      </Container>
      <div>{JSON.stringify(data)}</div>
      
    </div>
  )
}

export default Home

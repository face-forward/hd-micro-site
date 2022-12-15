import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { get, post } from '../helpers/fetch';

function Home(props) {
  const { cars } = props;
  console.log('best props.........', props);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from internal API
    // get('/api')
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // Pass data to the page via props
  return { props: {theBest: true} }
}

export default Home

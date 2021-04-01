import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession()
  return (
    <>
      <div className={styles.header}>
        <Head>
          <title>Workout Tracker</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className={styles.container}>
        {!session && (
          <div className={styles.login}>
            <button onClick={() => signIn()}>Sign in</button>
          </div>
        )}
        {session && (
          <div className={styles.login}>
            <img src={session.user.image} alt="User image" />
            <div>{session.user.name}</div>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        )}

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Workout Tracker</h1>

          <p className={styles.description}>Under construction</p>
        </main>

        <footer className={styles.footer}>
          Made with&nbsp;<span style={{ color: 'red', fontSize: '20px' }}>❤</span>&nbsp; by &nbsp;
          <a href="https://github.com/mateus-batista">Mateus Batista</a>
        </footer>
      </div>
    </>
  )
}

import { signIn, signOut, useSession } from 'next-auth/client'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [session, loading] = useSession()
  return (
    <>
      <Head>
        <title>Workout Tracker</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <a href="/training-area">Training area</a>
          {!session && (
            <div className={styles.signin}>
              <button onClick={() => signIn()}>Sign in</button>
            </div>
          )}
          {session && (
            <div className={styles.signin}>
              <img src={session.user.image} alt="User image" />
              <div className={styles.signaction}>
                <div>{session.user.name}</div>
                <button onClick={() => signOut()}>Sign out</button>
              </div>
            </div>
          )}
        </header>

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

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/index.module.scss'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Welcome to my portfolio site. Feel free to explore!
          </p>
          <div>
            <Link href="/about">
              <span>About</span>
            </Link>
            <Link href="/resume">
              <span>Resume</span>
            </Link>
            <Link href="/contact">
              <span>Contact</span>
            </Link>
            <Link href="/blog">
              <span>Blog</span>
            </Link>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

      </main>
    </>
  )
}

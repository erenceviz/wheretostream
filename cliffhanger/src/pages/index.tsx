import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout/Layout';
import WelcomePage from '@/components/home/Welcome/Welcome';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    
    <>
      <Head>
        <title>Cliffhanger</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="logo/Logo.png" />
        <script src="https://kit.fontawesome.com/8b4ae14cf9.js"></script>
      </Head>
      <Layout>{
        <WelcomePage></WelcomePage>
        }</Layout>
    </>
  )
}
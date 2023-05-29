import { Container } from '@/components/Container'
import { TextTextArea } from '@/components/TextTexArea'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Random Choice Picker Nextjs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
     <TextTextArea/>

      </Container>
      
     
    </>
  )
}

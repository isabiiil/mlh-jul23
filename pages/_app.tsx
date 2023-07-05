import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Tab from './tab'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-row'>
      <Tab title="Home" winner={true} />
      <Tab company="/../public/msft.jpg" title="Microsoft" winner={false} />
    </div>
  )
}

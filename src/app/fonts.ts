import { Poppins, Vidaloka } from 'next/font/google'
export const poppins = Poppins({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    style: 'normal',
    display: 'swap',
    preload: false
  })
export const vidaLoka = Vidaloka({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    preload: false
})
  
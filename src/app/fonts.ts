import { Poppins, Vidaloka } from 'next/font/google'
export const poppins = Poppins({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    variable: '--font-poppins',
    style: 'normal',
    display: 'swap',
  })
export const vidaLoka = Vidaloka({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-vidaLoka',
})
  
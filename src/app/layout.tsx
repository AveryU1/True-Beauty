
import { poppins } from './fonts'
import './globals.css'
export const metadata = {
  title: 'K Beauty',
  description: 'Landing page created with NextJs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='' >
      <body className={`${poppins.variable} font-poppins max-w-screen-lg flex flex-col justify-between my-0 mx-auto`}>{children}</body>
    </html>
  )
}

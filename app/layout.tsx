import './globals.css'
import Nav from './auth/Nav'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Nav />
      <body>{children}</body>
    </html>
  )
}

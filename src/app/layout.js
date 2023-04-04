
import './globals.css'

export const metadata = {
  title: 'Realtor App',
  description: 'Property Listing app by nextjs 13',
  icons: {
    icon:'/favicon.ico',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

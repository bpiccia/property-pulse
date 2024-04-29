import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'PropertyPulse | Find the perfect rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, find properties',
}

const MainLayout = ({children}) =>
    <html lang='en'>
        <body>
            <Navbar/>
            <main>{children}</main>
            <Footer></Footer>
        </body>
    </html>

export default MainLayout
'use client'
import GoldBtn from '../custom-ui/gold-btn'
import G from '@/utils/design-tokens'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter()
    const handleLoginClick = () => {
        router.push('/login')
    }
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 60px',
            background: G.white,
            borderBottom: `1px solid ${G.borderL}`,
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            height: '110px'
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Logo Image */}
                <Image
                    src="/header-logo.webp"
                    alt="Zestia Logo"
                    width={200}
                    height={80}
                    style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
                />
            </div>

            <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                {/* <a href="#" style={{ textDecoration: 'none', color: G.green, fontSize: '14px', fontWeight: 500 }}>Home</a>
                <a href="#" style={{ textDecoration: 'none', color: G.green, fontSize: '14px', fontWeight: 500 }}>CEO Services</a>
                <a href="#" style={{ textDecoration: 'none', color: G.green, fontSize: '14px', fontWeight: 500 }}>The App</a>
                <a href="#" style={{ textDecoration: 'none', color: G.green, fontSize: '14px', fontWeight: 500 }}>Book Insights</a>
                <a href="#" style={{ textDecoration: 'none', color: G.green, fontSize: '14px', fontWeight: 500 }}>Meet Lindsay</a> */}
                <GoldBtn small onClick={handleLoginClick}>Login</GoldBtn>
            </nav>
        </header>
    )
}

export default Header
import React from 'react'
import G from '@/utils/design-tokens'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <footer style={{
      background: G.green,
      color: G.white,
      padding: '80px 40px 40px',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Main Grid: Info | Brand Logo | Info */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          alignItems: 'center',
          gap: '40px',
          marginBottom: '60px',
        }}>

          {/* Left Column: Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left' }}>
            <a href="#" style={{ color: G.white, textDecoration: 'underline', fontWeight: '700', fontSize: '18px' }}>Home</a>

            <div>
              <div style={{ fontWeight: '700', marginBottom: '12px', fontSize: '18px' }}>CEO Services</div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', opacity: 0.9 }}>
                <li><a href="#" style={{ color: G.white, textDecoration: 'none', fontSize: '16px' }}>CEO Coaching</a></li>
                <li><a href="#" style={{ color: G.white, textDecoration: 'none', fontSize: '16px' }}>SOP&apos;s</a></li>
                <li><a href="#" style={{ color: G.white, textDecoration: 'none', fontSize: '16px' }}>Leadership Keynotes</a></li>
              </ul>
            </div>

            <a href="#" style={{ color: G.white, textDecoration: 'none', fontWeight: '700', fontSize: '18px' }}>The App</a>
          </div>

          {/* Center: Branding Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', zIndex: 2 }}>
            <div style={{ position: 'relative', width: '320px', height: '320px' }}>
              <Image
                src="/Being+your+best+self+website+small.webp"
                alt="Being Your Best Self"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Right Column: Key Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'right', fontSize: '18px', fontWeight: '700' }}>
            <a href="#" style={{ color: G.white, textDecoration: 'underline' }}>Book Insights</a>
            <a href="#" style={{ color: G.white, textDecoration: 'underline' }}>Meet Lindsay</a>
            <a href="#" style={{ color: G.white, textDecoration: 'underline' }}>Store</a>
            <a href="#" style={{ color: G.white, textDecoration: 'underline' }}>Book Lindsay to Speak</a>
            <a href="#" style={{ color: G.white, textDecoration: 'underline' }}>Apply to Work With Lindsay</a>
          </div>

        </div>

        {/* Social Icons Bottom Section */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
          <a href="#" style={{ color: G.white, opacity: 0.9 }}>
            <Icon icon="mdi:linkedin" width="28" height="28" />
          </a>
          <a href="#" style={{ color: G.white, opacity: 0.9 }}>
            <Icon icon="simple-icons:tiktok" width="24" height="24" />
          </a>
          <a href="#" style={{ color: G.white, opacity: 0.9 }}>
            <Icon icon="mdi:instagram" width="28" height="28" />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
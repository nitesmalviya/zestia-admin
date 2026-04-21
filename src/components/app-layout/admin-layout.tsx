import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { NAV } from '@/utils/constants';
import Sidebar from './sidebar';
import { formatDate, formatRelativeTime } from '@/utils/common-service';

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();
  const currentNav = NAV.find(n => pathname === n.href || pathname.startsWith(n.href + '/')) ?? NAV[0];
  const [lastSyncTime] = useState(new Date());
  const [relativeTime, setRelativeTime] = useState(formatRelativeTime(lastSyncTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setRelativeTime(formatRelativeTime(lastSyncTime));
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [lastSyncTime]);

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#FDFAF4', fontFamily: "'Montserrat', sans-serif", overflow: 'hidden' }}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main
        style={{
          flex: 1,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          borderLeft: '1px solid rgba(254, 189, 36, 0.35)',
          background: 'radial-gradient(circle at 52% 90%, rgba(185, 237, 147, 0.3) 0%, rgba(253, 250, 244, 0) 30%), #FDFAF4',
        }}
      >
        <header
          style={{
            background: '#FDFAF4',
            borderBottom: '1px solid rgba(254, 189, 36, 0.35)',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 10,
            flexShrink: 0,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 24,
              lineHeight: '100%',
              letterSpacing: '0.02em',
              fontWeight: 700,
              color: '#111827',
              textTransform: 'uppercase',
            }}
          >
            {currentNav.label}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* <div style={{ position: 'relative' }}>
              <Search
                size={16}
                style={{
                  position: 'absolute',
                  left: 11,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#A3A7B6',
                }}
              />
              <input
                type="text"
                placeholder="Search Issuers by Name"
                style={{
                  padding: '0 14px 0 34px',
                  height: 36,
                  borderRadius: 8,
                  border: '1px solid rgba(254, 189, 36, 0.35)',
                  background: '#FDFBF4',
                  fontSize: 29 / 2.1,
                  color: '#99A0B0',
                  fontFamily: "'Montserrat', sans-serif",
                  width: 225,
                  fontWeight: 500,
                  outline: 'none',
                }}
              />
            </div> */}
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#D6AD56', fontFamily: "'Montserrat', sans-serif" }}>
                {formatDate(new Date(), 'ddd, DD MMM YYYY')}
              </div>
              <div style={{ fontSize: 13, color: '#D6AD56', marginTop: 2, fontWeight: 600, fontFamily: "'Montserrat', sans-serif" }}>
                Last synced {relativeTime}
              </div>
            </div>
          </div>
        </header>
        <div style={{ padding: '14px 18px', flex: 1 }}>{children}</div>
      </main>
    </div>
  );
}

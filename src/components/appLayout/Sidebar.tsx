'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { LogIn } from 'lucide-react';
import { useState } from 'react';
import { NAV, NAV_SECTIONS } from '@/utils/constants';


const Sidebar = ({ sidebarOpen, setSidebarOpen }: { sidebarOpen: boolean; setSidebarOpen: (open: boolean) => void }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const groupedNav = NAV_SECTIONS.map((section) => ({
    section,
    items: NAV.filter((item) => item.section === section),
  }));

  return (
    <aside
      style={{
        width: sidebarOpen ? 250 : 74,
        background: 'linear-gradient(180deg, #051B16 0%, #046307 100%)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.22s ease',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 260,
          pointerEvents: 'none',
          opacity: 0.34,
          zIndex: 0,
        }}
      >
        <Image
          src="/img.png"
          alt=""
          fill
          sizes="250px"
          priority
          style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
        />
      </div>

      <div
        style={{
          height: 66,
          borderBottom: '1px solid rgba(254, 189, 36, 0.25)',
          padding: sidebarOpen ? '12px 14px' : '12px 10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: sidebarOpen ? 'space-between' : 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {sidebarOpen ? (
          <Image
            src="/logo (2).png"
            alt="Zestia"
            width={102}
            height={38}
            priority
            style={{ width: 'auto', height: 'auto' }}
          />
        ) : null}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            width: 24,
            height: 24,
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            display: 'grid',
            placeItems: 'center',
            background: 'transparent',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transition: 'transform 0.2s', transform: sidebarOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
          >
            <rect width="24" height="24" rx="6" fill="#073427" />
            <path
              d="M11.0548 7.00001C11.1847 7.00055 11.3114 7.03958 11.419 7.11215C11.5267 7.18473 11.6104 7.28759 11.6596 7.40773C11.7087 7.52788 11.7212 7.65991 11.6953 7.78712C11.6695 7.91434 11.6065 8.03104 11.5143 8.12246L8.49487 11.1288C8.43335 11.1898 8.38451 11.2624 8.35119 11.3424C8.31786 11.4224 8.30071 11.5082 8.30071 11.5948C8.30071 11.6815 8.31786 11.7673 8.35119 11.8473C8.38451 11.9273 8.43335 11.9999 8.49487 12.0609L11.5143 15.0672C11.5759 15.1282 11.6247 15.2008 11.658 15.2808C11.6913 15.3608 11.7085 15.4466 11.7085 15.5333C11.7085 15.6199 11.6913 15.7057 11.658 15.7857C11.6247 15.8657 11.5759 15.9383 11.5143 15.9993C11.3913 16.1216 11.225 16.1902 11.0516 16.1902C10.8781 16.1902 10.7118 16.1216 10.5888 15.9993L7.5759 12.9864C7.20714 12.6172 7 12.1167 7 11.5948C7 11.073 7.20714 10.5725 7.5759 10.2033L10.5888 7.19037C10.6501 7.12953 10.7229 7.0814 10.8028 7.04873C10.8828 7.01607 10.9685 6.99951 11.0548 7.00001Z"
              fill="#FEBD24"
            />
            <path
              d="M15.6496 7.00001C15.7794 7.00055 15.9061 7.03958 16.0138 7.11215C16.1214 7.18473 16.2051 7.28759 16.2543 7.40773C16.3035 7.52788 16.3159 7.65991 16.2901 7.78712C16.2642 7.91434 16.2012 8.03104 16.1091 8.12246L12.6367 11.5948L16.1091 15.0672C16.1706 15.1282 16.2194 15.2008 16.2527 15.2808C16.2861 15.3608 16.3032 15.4466 16.3032 15.5333C16.3032 15.6199 16.2861 15.7057 16.2527 15.7857C16.2194 15.8657 16.1706 15.9383 16.1091 15.9993C15.9861 16.1216 15.8197 16.1902 15.6463 16.1902C15.4729 16.1902 15.3065 16.1216 15.1835 15.9993L11.2451 12.0609C11.1836 11.9999 11.1347 11.9273 11.1014 11.8473C11.0681 11.7673 11.0509 11.6815 11.0509 11.5948C11.0509 11.5082 11.0681 11.4224 11.1014 11.3424C11.1347 11.2624 11.1836 11.1898 11.2451 11.1288L15.1835 7.19037C15.2449 7.12953 15.3176 7.0814 15.3976 7.04873C15.4775 7.01607 15.5632 6.99951 15.6496 7.00001Z"
              fill="#FEBD24"
            />
          </svg>
        </button>
      </div>

      <nav
        style={{
          flex: 1,
          padding: sidebarOpen ? '10px 12px' : '8px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          overflowY: 'auto',
          overflowX: 'hidden',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {groupedNav.map(({ section, items }) => (
          <div key={section} style={{ marginBottom: 8 }}>
            {sidebarOpen ? (
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#CFBD93',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  padding: '12px 2px 8px',
                  fontFamily: "'Montserrat', sans-serif",
                  lineHeight: '100%',
                }}
              >
                {section}
              </div>
            ) : null}

            {items.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  title={!sidebarOpen ? item.label : ''}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: sidebarOpen ? '10px 12px' : '10px',
                    borderRadius: 8,
                    textDecoration: 'none',
                    background: active ? 'linear-gradient(90deg, #C9CDAF 0%, #C7A24C 100%)' : 'transparent',
                    border: active ? '1px solid rgba(254, 189, 36, 0.5)' : '1px solid transparent',
                    color: active ? '#045329' : 'rgba(255,255,255,0.68)',
                    justifyContent: sidebarOpen ? 'flex-start' : 'center',
                    marginBottom: 2,
                    transition: 'all 0.14s',
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                      lineHeight: 0,
                    }}
                  >
                    <item.icon size={item.iconSize ?? 16} style={{ display: 'block' }} />
                  </span>
                  {sidebarOpen ? (
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: active ? 700 : 500,
                        whiteSpace: 'nowrap',
                        fontFamily: "'Montserrat', sans-serif",
                        lineHeight: '100%',
                      }}
                    >
                      {item.label}
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div
        style={{
          margin: '0 12px 12px',
          borderRadius: 14,
          border: '1px solid rgba(254, 189, 36, 0.2)',
          background: 'rgba(3, 40, 31, 0.72)',
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: sidebarOpen ? '12px 12px' : '12px 0', justifyContent: sidebarOpen ? 'flex-start' : 'center' }}>
          <Image src="/file.svg" alt="Avatar" width={34} height={34} style={{ borderRadius: '50%', background: '#D8E6F5' }} />
          {sidebarOpen ? (
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.92)', fontFamily: "'Montserrat', sans-serif" }}>Tim Frantz</div>
              <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.52)', marginTop: 3, fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>Super Admin</div>
            </div>
          ) : null}
        </div>

        {sidebarOpen ? (
          <button
            onClick={() => setShowLogoutConfirm(true)}
            style={{
              width: '100%',
              height: 44,
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              borderLeft: 'none',
              borderRight: 'none',
              borderBottom: 'none',
              background: 'rgba(0, 0, 0, 0.18)',
              cursor: 'pointer',
              color: 'rgba(255,255,255,0.92)',
              padding: '0 14px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 13,
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
            }}
          >
            <LogIn size={15} style={{ transform: 'scaleX(-1)' }} />
            Logout
          </button>
        ) : null}
      </div>

      {showLogoutConfirm ? (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(4, 20, 16, 0.55)',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <div
            style={{
              width: 'min(92vw, 380px)',
              borderRadius: 14,
              border: '1px solid rgba(254, 189, 36, 0.35)',
              background: 'linear-gradient(180deg, #063225 0%, #0B4630 100%)',
              boxShadow: '0 14px 38px rgba(0,0,0,0.38)',
              padding: '18px 18px 14px',
            }}
          >
            <div
              style={{
                color: '#FEBD24',
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 22,
                lineHeight: '100%',
                letterSpacing: '0.02em',
              }}
            >
              Confirm Logout
            </div>
            <p
              style={{
                margin: '10px 0 0',
                color: 'rgba(255,255,255,0.9)',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 14,
                lineHeight: '20px',
                fontWeight: 500,
              }}
            >
              Are you sure you want to logout?
            </p>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 16 }}>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                style={{
                  height: 36,
                  borderRadius: 8,
                  border: '1px solid rgba(254, 189, 36, 0.4)',
                  background: 'transparent',
                  color: '#FEBD24',
                  padding: '0 14px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowLogoutConfirm(false);
                  router.push('/login');
                }}
                style={{
                  height: 36,
                  borderRadius: 8,
                  border: 'none',
                  background: '#C7A24C',
                  color: '#073427',
                  padding: '0 14px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </aside>
  );
};

export default Sidebar;

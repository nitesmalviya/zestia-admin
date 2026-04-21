'use client';

import { useMemo, useState } from 'react';
import { Panel } from '@/components/pages/dashboard/page';
import { toast } from 'react-toastify';
import { UserRecord } from '@/types/user';

function InitialBadge({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      style={{
        width: 54,
        height: 54,
        borderRadius: '50%',
        background: 'linear-gradient(180deg, #DFF5E7 0%, #CDEFD8 100%)',
        color: '#11723E',
        display: 'grid',
        placeItems: 'center',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700,
        fontSize: 31 / 2.1,
      }}
    >
      {initials}
    </div>
  );
}

export default function SectionUserLookup({ data }: { data?: any }) {
  const { users = [] } = data || {};
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState('');

  const result = useMemo(() => {
    if (!searched.trim()) return null;
    const normalized = searched.trim().toLowerCase();
    return users.find(
      (user: UserRecord) =>
        user.name.toLowerCase().includes(normalized) ||
        user.email.toLowerCase().includes(normalized)
    ) ?? null;
  }, [searched]);

  const performSearch = () => setSearched(query);

  const statusStyles: Record<UserRecord['status'], { color: string; bg: string }> = {
    Free: { color: '#D74A2F', bg: '#FBE8E1' },
    Trial: { color: '#7E8796', bg: '#EDF1F6' },
    'Monthly Paid': { color: '#10A34A', bg: '#DAF4E4' },
    'Annual Paid': { color: '#10A34A', bg: '#DAF4E4' },
  };

  const cardField = (label: string, value: string) => (
    <div
      key={label}
      style={{
        background: '#F8FBF4',
        border: '1px solid rgba(254, 189, 36, 0.25)',
        borderRadius: 10,
        padding: '10px 12px',
      }}
    >
      <div style={{ color: '#6E7487', fontSize: 12, fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>{label}</div>
      <div style={{ color: '#111827', fontSize: 31 / 2.1, marginTop: 2, fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{value}</div>
    </div>
  );

  const actionButton = (
    label: string,
    onClick: () => void,
    variant: 'default' | 'danger' = 'default'
  ) => (
    <button
      key={label}
      onClick={onClick}
      style={{
        height: 30,
        borderRadius: 7,
        padding: '0 10px',
        border: variant === 'danger' ? '1px solid rgba(255, 59, 48, 0.4)' : '1px solid rgba(254, 189, 36, 0.35)',
        background: variant === 'danger' ? '#FDEBE7' : '#FFFFFF',
        color: variant === 'danger' ? '#D74A2F' : '#4B5563',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: 12,
        fontWeight: 600,
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 110px', gap: 12 }}>
        <input
          placeholder="Search by name or email (try, Sarah, Marcus)"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') performSearch();
          }}
          style={{
            height: 42,
            borderRadius: 8,
            border: '1px solid rgba(254, 189, 36, 0.35)',
            background: '#FFFFFF',
            padding: '0 14px',
            color: '#6E7487',
            fontSize: 31 / 2.4,
            fontWeight: 600,
            fontFamily: "'Montserrat', sans-serif",
            outline: 'none',
          }}
        />
        <button
          onClick={performSearch}
          style={{
            height: 42,
            border: 'none',
            borderRadius: 8,
            color: '#FFFFFF',
            background: '#C7A24C',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 34 / 2.1,
            fontWeight: 600,
          }}
        >
          Search
        </button>
      </div>

      <Panel
        style={{
          minHeight: 600,
          background: '#FFFFFF',
          borderColor: 'rgba(254, 189, 36, 0.28)',
        }}
      >
        {!searched.trim() ? (
          <div style={{ height: '100%', minHeight: 560, display: 'grid', placeItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#22293A', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 38 / 2.1 }}>
                Search for a user to view their profile
              </div>
              <div style={{ color: '#949AA8', fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 33 / 2.1, marginTop: 8 }}>
                Try: Sarah, Marcus, Priya, James, or Lily
              </div>
            </div>
          </div>
        ) : !result ? (
          <div style={{ height: '100%', minHeight: 560, display: 'grid', placeItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#22293A', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 18 }}>
                No user found
              </div>
              <div style={{ color: '#949AA8', fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 14, marginTop: 8 }}>
                Try searching by full name or email.
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <InitialBadge name={result.name} />
              <div>
                <div style={{ color: '#111827', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 34 / 2.1 }}>{result.name}</div>
                <div style={{ color: '#6E7487', fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 13, marginTop: 2 }}>
                  {result.email} - {result.platform}
                </div>
                <span
                  style={{
                    display: 'inline-block',
                    marginTop: 8,
                    borderRadius: 6,
                    padding: '4px 8px',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: statusStyles[result.status as UserRecord['status']]?.color || '#000',
                    background: statusStyles[result.status as UserRecord['status']]?.bg || '#fff',
                  }}
                >
                  {result.status}
                </span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 16 }}>
              {cardField('Platform', result.platform)}
              {cardField('Coupon Used', result.couponUsed)}
              {cardField('Joined', result.joined)}
              {cardField('Last Active', result.lastActive)}
              {cardField('Current Exercise', result.currentExercise)}
              {cardField('Last Completed', result.lastCompleted)}
              {cardField('Lovable Score', result.lovableScore)}
              {cardField('Valuable Score', result.valuableScore)}
              {cardField('Capable Score', result.capableScore)}
              {cardField('Subscriber Since', result.subscriberSince)}
            </div>

            <div style={{ borderTop: '1px solid rgba(254, 189, 36, 0.28)', marginTop: 16, paddingTop: 14 }}>
              <div style={{ color: '#6E7487', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.03em' }}>
                ACCOUNT ACTIONS
              </div>
              {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                {actionButton('Reset subscription', () => toast.success('Subscription reset requested'))}
                {actionButton('Apply coupon', () => toast.success('Coupon action opened'))}
                {actionButton('Extend trial', () => toast.success('Trial extension requested'))}
                {actionButton('Send re-engage', () => toast.success('Re-engage sent'))}
                {actionButton(
                  'Suspend account',
                  () => {
                    const ok = window.confirm(`Suspend ${result.name}'s account?`);
                    if (ok) toast.warn(`${result.name} account suspended`);
                  },
                  'danger'
                )}
              </div> */}
            </div>
          </div>
        )}
      </Panel>
    </div>
  );
}

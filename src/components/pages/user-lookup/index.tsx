'use client';

import { useState, useEffect, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Panel } from '@/components/pages/dashboard';
import { searchUsers } from '@/utils/graphql/user-lookup/action';
import { fetchUsersPage } from '@/utils/graphql/users/action';
import type { UsersApiData } from '@/types/dashboard';

const LIMIT = 10;



// ─── Pagination button ────────────────────────────────────────────────────────

function PaginationBtn({
  onClick,
  disabled,
  label,
  active = false,
}: {
  onClick: () => void;
  disabled: boolean;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        minWidth: 32,
        height: 32,
        padding: '0 8px',
        borderRadius: 6,
        border: active ? '1.5px solid #C7A24C' : '1.5px solid #E9DCB9',
        background: active ? '#C7A24C' : '#fff',
        color: active ? '#fff' : disabled ? '#C4C7D0' : '#4B5563',
        fontSize: 13,
        fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: "'Montserrat', sans-serif",
        transition: 'all 0.15s',
      }}
    >
      {label}
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function SectionUserLookup({ data }: { data?: UsersApiData }) {
  const { rows: initialRows = [], totalCount: initialTotal = 0 } = data || {};

  const [query, setQuery] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [displayedRows, setDisplayedRows] = useState<string[][]>(initialRows);

  // ── Pagination state ──
  const [totalCount, setTotalCount] = useState(initialTotal);
  const [page, setPage] = useState(1);
  const [isPending, startTransition] = useTransition();

  const totalPages = Math.max(1, Math.ceil(totalCount / LIMIT));
  const firstItem = totalCount === 0 ? 0 : (page - 1) * LIMIT + 1;
  const lastItem = Math.min(page * LIMIT, totalCount);

  useEffect(() => {
    setDisplayedRows(initialRows);
    setTotalCount(initialTotal);
  }, []); // ✅ only once on mount

  useEffect(() => {
    if (query.trim().length === 0) {
      setDisplayedRows(initialRows);
      setTotalCount(initialTotal);
      setPage(1);
      setSearched(false);
    }
  }, [query]); // ❗ remove initialRows & initialTotal

  // ── Debounced search ──

  useEffect(() => {
    const timer = setTimeout(() => {
      const q = query.trim();

      // ✅ Case 1: Empty input → reset
      if (q.length === 0) {
        setDisplayedRows(initialRows);
        setTotalCount(initialTotal);
        setPage(1);
        setSearched(false);
        return;
      }

      // ✅ Case 2: Valid search
      if (q.length >= 3) {
        performSearch(q);
      }

    }, 600);

    return () => clearTimeout(timer);
  }, [query]); // ✅ only dependency



  const statusStyles: Record<string, { color: string; bg: string }> = {
    Free: { color: '#D74A2F', bg: '#FBE8E1' },
    Trial: { color: '#7E8796', bg: '#EDF1F6' },
    'Monthly Paid': { color: '#10A34A', bg: '#DAF4E4' },
    'Annual Paid': { color: '#10A34A', bg: '#DAF4E4' },
  };

  const performSearch = async (searchValue: string) => {
    if (!searchValue || searchValue.length < 3) return;

    setSearchLoading(true);
    setSearched(true);

    try {
      const users = await searchUsers(searchValue);

      const mapped = users.map((u) => [
        u.userName || '',
        u.platform || '',
        u.subscriptionStatus || '',
        u.joinedAt || '',
        u.lastActiveAt || '',
        u.userId || '',
      ]);

      setDisplayedRows(mapped);
      setTotalCount(mapped.length);
      setPage(1);
    } finally {
      setSearchLoading(false);
    }
  };



  function goToPage(newPage: number) {
    if (newPage < 1 || newPage > totalPages || isPending || searched) return;
    startTransition(async () => {
      const offset = (newPage - 1) * LIMIT;
      const res = await fetchUsersPage({ limit: LIMIT, offset });
      setDisplayedRows(res.rows);
      setTotalCount(res.totalCount);
      setPage(newPage);
    });
  }

  const router = useRouter();

  const handleAction = async (name: string, index: number) => {
    const userId = displayedRows[index][5];
    if (userId) {
      router.push(`/user-lookup/${userId}`);
    } else {
      toast.error('User ID not found.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* ── Search bar ────────────────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 150px', gap: 12 }}>
        <input
          placeholder="Search by name or email"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') performSearch();
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
          {searchLoading ? 'Search' : 'Search'}
        </button>
      </div>

      {/* ── Table panel ───────────────────────────────────────────────── */}
      <Panel
        style={{
          padding: 0,
          overflow: 'hidden',
          minHeight: 600,
          background: '#FFFFFF',
          borderColor: 'rgba(254, 189, 36, 0.28)',
        }}
      >
        {displayedRows.length > 0 ? (
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontFamily: "'Montserrat', sans-serif",
              opacity: isPending ? 0.5 : 1,
              transition: 'opacity 0.2s',
            }}
          >
            <thead style={{ background: '#E9DCB9' }}>
              <tr>
                {['User Name', 'Platform', 'Status', 'Joined', 'Last Active', 'Actions'].map((heading) => (
                  <th
                    key={heading}
                    style={{ textAlign: 'left', padding: '10px 18px', color: '#26303D', fontSize: 24 / 2.1, fontWeight: 700 }}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayedRows.map((row: any, index: number) => (
                <tr key={`${row[0]}-${index}`}>
                  <td style={{ padding: '14px 18px', color: '#C7A24C', borderTop: '1px solid #EFE7D7', fontSize: 14, fontWeight: 500 }}>{row[0]}</td>
                  <td style={{ padding: '14px 18px', color: '#4B5563', borderTop: '1px solid #EFE7D7', fontSize: 14, fontWeight: 600 }}>{row[1]}</td>
                  <td style={{ padding: '14px 18px', borderTop: '1px solid #EFE7D7' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        borderRadius: 7,
                        padding: '4px 10px',
                        fontSize: 14,
                        fontWeight: 600,
                        color: row[2] === 'Free' ? '#FF5A3C' : row[2] === 'Trial' ? '#8A8F9D' : '#16A34A',
                        background: row[2] === 'Free' ? '#FDEBE7' : row[2] === 'Trial' ? '#EEF0F4' : '#DFF5E7',
                      }}
                    >
                      {row[2]}
                    </span>
                  </td>
                  <td style={{ padding: '14px 18px', color: '#4B5563', borderTop: '1px solid #EFE7D7', fontSize: 14, fontWeight: 600 }}>{row[3]}</td>
                  <td style={{ padding: '14px 18px', color: '#4B5563', borderTop: '1px solid #EFE7D7', fontSize: 14, fontWeight: 600 }}>{row[4]}</td>
                  <td style={{ padding: '14px 18px', color: '#4B5563', borderTop: '1px solid #EFE7D7', fontSize: 14, fontWeight: 600 }}>
                    <button
                      onClick={() => handleAction(row[0], index)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#C7A24C',
                        padding: 0,
                      }}
                      title="View Details"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={{ height: '100%', minHeight: 560, display: 'grid', placeItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#22293A', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 18 }}>
                No user data available
              </div>
            </div>
          </div>
        )}

        {/* ── Pagination bar (hidden when search results are showing) ── */}
        {!searched && totalCount > 0 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 18px',
              borderTop: '1px solid #EFE7D7',
              background: '#FDFAF4',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            <span style={{ fontSize: 13, color: '#6E7487', fontWeight: 500 }}>
              {totalCount === 0 ? 'No results' : `Showing ${firstItem}–${lastItem} of ${totalCount}`}
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <PaginationBtn onClick={() => goToPage(1)} disabled={page === 1 || isPending} label="«" />
              <PaginationBtn onClick={() => goToPage(page - 1)} disabled={page === 1 || isPending} label="‹" />

              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                .reduce<(number | '...')[]>((acc, p, idx, arr) => {
                  if (idx > 0 && p - (arr[idx - 1] as number) > 1) acc.push('...');
                  acc.push(p);
                  return acc;
                }, [])
                .map((p, i) =>
                  p === '...' ? (
                    <span key={`ellipsis-${i}`} style={{ fontSize: 13, color: '#9CA3AF', padding: '0 4px' }}>…</span>
                  ) : (
                    <PaginationBtn
                      key={p}
                      onClick={() => goToPage(p as number)}
                      disabled={isPending}
                      active={p === page}
                      label={String(p)}
                    />
                  )
                )}

              <PaginationBtn onClick={() => goToPage(page + 1)} disabled={page === totalPages || isPending} label="›" />
              <PaginationBtn onClick={() => goToPage(totalPages)} disabled={page === totalPages || isPending} label="»" />
            </div>
          </div>
        )}

        {/* Pagination is rendered above when totalCount > 0 and no result is selected */}
      </Panel>
    </div>
  );
}

import { useState } from "react";
import {
  LayoutDashboard, Users, Tag, Link2, Search, ChevronDown,
  ArrowUp, ArrowDown, Plus, X, Menu, DollarSign, RefreshCw,
  Clock, UserCheck, Zap, Eye, Download, Target, Globe, Layers,
  Filter, Hash, ChevronRight, Copy, Edit3, Trash2, CheckCircle,
  AlertCircle, TrendingUp, TrendingDown, Lock, LogIn, Mail,
  Smartphone, BarChart2, Award, ExternalLink, MoreHorizontal,
  Minus, Send, Shield, Star, Percent, Gift, UserPlus
} from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Cell, PieChart, Pie
} from "recharts";

/* ═══════════════════════════ DESIGN TOKENS */
const G = {
  gold: "#C9A84C", goldL: "#E2C46B", goldD: "#9A7A2A",
  goldPale: "#F7F0DC", goldGhost: "#FDF9EE",
  cream: "#FDFAF4", white: "#FFFFFF",
  dark: "#18140D", darkM: "#2C2416",
  slate: "#6B6355", slateL: "#9C9280",
  border: "#EDE4CC", borderL: "#F5EFE0",
  red: "#C0392B", redL: "#FDECEB",
  green: "#1A7A4A", greenL: "#E8F7EE",
  blue: "#1A4A8A", blueL: "#E8EEF7",
  amber: "#B45309", amberL: "#FEF3C7",
  purple: "#5B2D8E", purpleL: "#F0E8FF",
};

/* ═══════════════════════════ MOCK DATA */
const mrrData = [
  { m: "Oct", mrr: 32400 }, { m: "Nov", mrr: 35200 }, { m: "Dec", mrr: 38900 },
  { m: "Jan", mrr: 41200 }, { m: "Feb", mrr: 44800 }, { m: "Mar", mrr: 48320 },
];
const dauData = [
  { d: "Mon", dau: 4120 }, { d: "Tue", dau: 4380 }, { d: "Wed", dau: 5100 },
  { d: "Thu", dau: 4750 }, { d: "Fri", dau: 4200 }, { d: "Sat", dau: 3800 }, { d: "Sun", dau: 3350 },
];
const platformData = [
  { name: "iOS", value: 14200 }, { name: "Android", value: 8100 }, { name: "Web", value: 2591 },
];
const geoData = [
  { country: "United States", users: 9820, pct: 39.5 },
  { country: "United Kingdom", users: 3240, pct: 13.0 },
  { country: "Canada", users: 2110, pct: 8.5 },
  { country: "Australia", users: 1890, pct: 7.6 },
  { country: "Germany", users: 1420, pct: 5.7 },
  { country: "Other", users: 6411, pct: 25.7 },
];
const retentionCohorts = [
  { cohort: "Jan", d1: 78, d7: 52, d30: 31 },
  { cohort: "Feb", d1: 81, d7: 55, d30: 33 },
  { cohort: "Mar", d1: 79, d7: 58, d30: 36 },
];
const engagementBreakdown = [
  { name: "Notification Score", max: 35, avg: 24.2 },
  { name: "Weekly Presence", max: 25, avg: 17.8 },
  { name: "Exercise Progress", max: 20, avg: 12.4 },
  { name: "Session Quality", max: 10, avg: 6.9 },
  { name: "Consistency", max: 10, avg: 5.7 },
];
const growthDrivers = [
  { rank: 1, behavior: "Completing 3 exercises in first month", impact: "+42%", metric: "30-day retention", score: 87.4 },
  { rank: 2, behavior: "Enabling notifications (≥40% engagement)", impact: "+31%", metric: "Engagement", score: 74.1 },
  { rank: 3, behavior: "Completing onboarding within 48 hrs", impact: "+28%", metric: "Trial conversion", score: 61.8 },
];
const coupons = [
  { code: "ZEST30", type: "% off", value: "30%", applies: "Both", duration: "Recurring 3mo", expiry: "2026-06-30", maxUses: 200, uses: 142, perUser: 1, revenue: 4820, convRate: 68, retention: 74, status: "Active" },
  { code: "NEWLIFE50", type: "% off", value: "50%", applies: "Monthly", duration: "One-time", expiry: "2026-04-15", maxUses: 100, uses: 88, perUser: 1, revenue: 2640, convRate: 74, retention: 71, status: "Active" },
  { code: "FLATOFF10", type: "$ off", value: "$10", applies: "Both", duration: "One-time", expiry: "None", maxUses: 500, uses: 320, perUser: 1, revenue: 8960, convRate: 61, retention: 68, status: "Active" },
  { code: "LAUNCH2024", type: "% off", value: "25%", applies: "Yearly", duration: "Recurring 6mo", expiry: "2025-12-31", maxUses: 500, uses: 500, perUser: 1, revenue: 22400, convRate: 55, retention: 81, status: "Exhausted" },
  { code: "FREETRIAL14", type: "Free trial", value: "14 days", applies: "Both", duration: "One-time", expiry: "2026-08-01", maxUses: 1000, uses: 241, perUser: 1, revenue: 6820, convRate: 58, retention: 69, status: "Active" },
];
const affiliates = [
  { id: "AFF-001", name: "Jessica Moore", handle: "@jessicacoaches", email: "jess@moorelife.com", type: "Influencer", tier: "Gold", joined: "Jan 10 2026", clicks: 8420, signups: 612, conversions: 284, revenue: 11360, commissionRate: 20, commissionEarned: 2272, commissionPaid: 1800, status: "Active", code: "JESS20", lastPayout: "Mar 1" },
  { id: "AFF-002", name: "Mindful Mia Podcast", handle: "@mindfulmiapod", email: "mia@mindfulpod.com", type: "Podcast", tier: "Silver", joined: "Feb 2 2026", clicks: 4210, signups: 298, conversions: 121, revenue: 4840, commissionRate: 15, commissionEarned: 726, commissionPaid: 500, status: "Active", code: "MIA15", lastPayout: "Mar 1" },
  { id: "AFF-003", name: "Ryan Wellness Co.", handle: "@ryanwellness", email: "ryan@wellco.com", type: "Coach", tier: "Gold", joined: "Dec 15 2025", clicks: 6840, signups: 520, conversions: 198, revenue: 7920, commissionRate: 20, commissionEarned: 1584, commissionPaid: 1584, status: "Active", code: "RYAN20", lastPayout: "Mar 1" },
  { id: "AFF-004", name: "Clarity Space", handle: "@clarityspace", email: "hello@clarityspace.io", type: "Brand", tier: "Platinum", joined: "Nov 1 2025", clicks: 14200, signups: 1120, conversions: 488, revenue: 19520, commissionRate: 25, commissionEarned: 4880, commissionPaid: 4000, status: "Active", code: "CLARITY25", lastPayout: "Mar 1" },
  { id: "AFF-005", name: "Bloom & Grow", handle: "@bloomgrow", email: "team@bloomgrow.co", type: "Creator", tier: "Bronze", joined: "Mar 5 2026", clicks: 890, signups: 62, conversions: 18, revenue: 720, commissionRate: 10, commissionEarned: 72, commissionPaid: 0, status: "Pending", code: "BLOOM10", lastPayout: "—" },
  { id: "AFF-006", name: "Sarah True", handle: "@sarahtruepath", email: "sarah@truepath.com", type: "Coach", tier: "Silver", joined: "Jan 28 2026", clicks: 2940, signups: 184, conversions: 72, revenue: 2880, commissionRate: 15, commissionEarned: 432, commissionPaid: 432, status: "Active", code: "SARAH15", lastPayout: "Feb 1" },
];
const affiliateTrend = [
  { m: "Oct", revenue: 2100, signups: 180 }, { m: "Nov", revenue: 3400, signups: 241 },
  { m: "Dec", revenue: 5200, signups: 380 }, { m: "Jan", revenue: 8400, signups: 520 },
  { m: "Feb", revenue: 11200, signups: 690 }, { m: "Mar", revenue: 14800, signups: 840 },
];

/* ═══════════════════════════ SHARED COMPONENTS */
const Card = ({ children, style = {} }) => (
  <div style={{
    background: G.white, border: `1px solid ${G.border}`, borderRadius: 16,
    padding: "22px 24px", boxShadow: "0 2px 16px rgba(180,150,60,0.06)", ...style
  }}>
    {children}
  </div>
);

const GoldTopBar = () => (
  <div style={{
    height: 3, background: `linear-gradient(90deg,${G.goldL},${G.goldD})`,
    margin: "-22px -24px 18px", borderTopLeftRadius: 16, borderTopRightRadius: 16
  }} />
);

const KpiCard = ({ label, value, delta, icon: Icon, invertDelta, sub }) => {
  const pos = invertDelta ? delta < 0 : delta > 0;
  return (
    <div style={{
      background: G.white, border: `1px solid ${G.border}`, borderRadius: 16,
      padding: "18px 20px", boxShadow: "0 2px 12px rgba(180,150,60,0.06)", overflow: "hidden", position: "relative"
    }}>
      <GoldTopBar />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
        <span style={{
          fontSize: 11, fontFamily: "'Cormorant Garamond',serif", letterSpacing: "0.09em",
          color: G.slate, textTransform: "uppercase", fontWeight: 600
        }}>{label}</span>
        <div style={{
          width: 32, height: 32, borderRadius: 9, background: G.goldPale,
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <Icon size={15} color={G.goldD} />
        </div>
      </div>
      <div style={{
        fontSize: 27, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700,
        color: G.dark, lineHeight: 1, marginBottom: sub ? 4 : 6
      }}>{value}</div>
      {sub && <div style={{ fontSize: 10, color: G.slateL, marginBottom: 5 }}>{sub}</div>}
      {delta !== undefined && (
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {pos ? <ArrowUp size={11} color={G.green} /> : <ArrowDown size={11} color={G.red} />}
          <span style={{ fontSize: 11, color: pos ? G.green : G.red, fontWeight: 600 }}>{Math.abs(delta)}%</span>
          <span style={{ fontSize: 10, color: G.slateL }}>vs last mo</span>
        </div>
      )}
    </div>
  );
};

const SecHead = ({ icon: Icon, title, subtitle, action }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10, background: G.goldPale,
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
      }}>
        <Icon size={17} color={G.goldD} />
      </div>
      <div>
        <div style={{ fontSize: 15, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: G.dark }}>{title}</div>
        {subtitle && <div style={{ fontSize: 11, color: G.slateL, marginTop: 1 }}>{subtitle}</div>}
      </div>
    </div>
    {action}
  </div>
);

const Badge = ({ children, color = G.goldPale, text = G.goldD, size = 11 }) => (
  <span style={{
    background: color, color: text, fontSize: size, fontWeight: 700,
    padding: "3px 9px", borderRadius: 6, letterSpacing: "0.03em", whiteSpace: "nowrap"
  }}>{children}</span>
);

const GoldBtn = ({ children, onClick, small, outline, full }) => (
  <button onClick={onClick} style={{
    background: outline ? "transparent" : `linear-gradient(135deg,${G.goldL},${G.goldD})`,
    color: outline ? G.goldD : G.white,
    border: outline ? `1.5px solid ${G.goldD}` : "none",
    borderRadius: 10, padding: small ? "7px 14px" : "10px 20px",
    fontSize: small ? 11 : 13, fontWeight: 700, cursor: "pointer",
    display: "flex", alignItems: "center", gap: 6, letterSpacing: "0.04em",
    boxShadow: outline ? "none" : "0 4px 14px rgba(180,150,60,0.3)",
    flexShrink: 0, width: full ? "100%" : undefined,
    justifyContent: full ? "center" : undefined,
  }}>{children}</button>
);

const ProgressBar = ({ value, max, color = G.gold, height = 7 }) => (
  <div style={{ height, background: G.borderL, borderRadius: 4, overflow: "hidden" }}>
    <div style={{
      height: "100%", width: `${Math.min((value / max) * 100, 100)}%`,
      background: `linear-gradient(90deg,${G.goldL},${color})`, borderRadius: 4
    }} />
  </div>
);

const Th = ({ children, right }) => (
  <th style={{
    textAlign: right ? "right" : "left", fontSize: 10, color: G.slateL, fontWeight: 700,
    padding: "7px 12px", letterSpacing: "0.07em", textTransform: "uppercase",
    borderBottom: `1px solid ${G.border}`, whiteSpace: "nowrap"
  }}>{children}</th>
);
const Td = ({ children, style = {} }) => (
  <td style={{
    padding: "10px 12px", fontSize: 12, color: G.dark,
    borderBottom: `1px solid ${G.borderL}`, ...style
  }}>{children}</td>
);

const TT = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: G.white, border: `1px solid ${G.border}`, borderRadius: 10,
      padding: "10px 14px", fontSize: 11, boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
    }}>
      <div style={{ fontWeight: 700, color: G.dark, marginBottom: 4 }}>{label}</div>
      {payload.map(p => (
        <div key={p.name} style={{ color: p.color || G.gold }}>{p.name}: <b>{p.value?.toLocaleString?.()}</b></div>
      ))}
    </div>
  );
};

/* ═══════════════════════════ LOGIN PAGE */
function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = () => {
    if (!email || !pw) { setErr("Please enter your email and password."); return; }
    setLoading(true); setErr("");
    setTimeout(() => {
      if (email === "admin@zestia.com" && pw === "Bitcot@123") { onLogin(); }
      else { setErr("Incorrect credentials. Hint: admin@zestia.com / Bitcot@123"); setLoading(false); }
    }, 900);
  };

  return (
    <div style={{
      minHeight: "100vh", background: G.dark, display: "flex", alignItems: "center",
      justifyContent: "center", fontFamily: "'DM Sans',sans-serif", position: "relative", overflow: "hidden"
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0;}@keyframes spin{to{transform:rotate(360deg)}}`}</style>

      {/* radial glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 800, height: 800, borderRadius: "50%",
        background: `radial-gradient(circle,${G.goldD}1A 0%,transparent 68%)`, pointerEvents: "none"
      }} />

      {/* decorative rays */}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i / 24) * 360;
        return <div key={i} style={{
          position: "absolute", top: "50%", left: "50%",
          width: 1, height: 280, background: `linear-gradient(180deg,transparent 0%,${G.goldD}20 50%,transparent 100%)`,
          transform: `rotate(${a}deg)`, transformOrigin: "top center", pointerEvents: "none"
        }} />;
      })}

      <div style={{
        position: "relative", background: G.darkM, border: `1px solid ${G.goldD}50`,
        borderRadius: 24, padding: "44px 48px", width: 440,
        boxShadow: `0 32px 80px rgba(0,0,0,0.55),inset 0 1px 0 ${G.goldL}15`
      }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 34 }}>
          <svg width="70" height="70" viewBox="0 0 100 100" style={{ marginBottom: 10, display: "block", margin: "0 auto 10px" }}>
            {Array.from({ length: 22 }).map((_, i) => {
              const a = (i / 22) * Math.PI * 2;
              return <line key={i}
                x1={50 + Math.cos(a) * 30} y1={50 + Math.sin(a) * 30}
                x2={50 + Math.cos(a) * 44} y2={50 + Math.sin(a) * 44}
                stroke={G.goldL} strokeWidth="1.4" strokeOpacity="0.65" />;
            })}
            <text x="50" y="64" textAnchor="middle"
              fontFamily="'Cormorant Garamond',serif" fontSize="52"
              fontWeight="700" fill="url(#zg)">Z</text>
            <defs>
              <linearGradient id="zg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={G.goldL} />
                <stop offset="100%" stopColor={G.goldD} />
              </linearGradient>
            </defs>
          </svg>
          <div style={{
            fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 700,
            color: G.goldL, letterSpacing: "0.04em", lineHeight: 1
          }}>Zestia</div>
          <div style={{
            fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.16em",
            textTransform: "uppercase", marginTop: 4
          }}>Admin Console</div>
        </div>

        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textAlign: "center", marginBottom: 26 }}>
          Sign in to continue
        </div>

        {/* Email field */}
        <div style={{ marginBottom: 13 }}>
          <label style={{
            fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.35)", display: "block",
            marginBottom: 6, letterSpacing: "0.1em", textTransform: "uppercase"
          }}>Email Address</label>
          <div style={{ position: "relative" }}>
            <Mail size={13} style={{
              position: "absolute", left: 13, top: "50%",
              transform: "translateY(-50%)", color: "rgba(255,255,255,0.2)"
            }} />
            <input value={email} onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === "Enter" && submit()}
              placeholder="admin@zestia.com" type="email"
              style={{
                width: "100%", padding: "12px 13px 12px 36px", borderRadius: 12,
                border: `1px solid rgba(201,168,76,${err ? 0.6 : 0.22})`,
                background: "rgba(255,255,255,0.04)", color: G.white, fontSize: 13,
                fontFamily: "'DM Sans',sans-serif"
              }} />
          </div>
        </div>

        {/* Password field */}
        <div style={{ marginBottom: 18 }}>
          <label style={{
            fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.35)", display: "block",
            marginBottom: 6, letterSpacing: "0.1em", textTransform: "uppercase"
          }}>Password</label>
          <div style={{ position: "relative" }}>
            <Lock size={13} style={{
              position: "absolute", left: 13, top: "50%",
              transform: "translateY(-50%)", color: "rgba(255,255,255,0.2)"
            }} />
            <input value={pw} onChange={e => setPw(e.target.value)}
              onKeyDown={e => e.key === "Enter" && submit()}
              placeholder="••••••••••" type="password"
              style={{
                width: "100%", padding: "12px 13px 12px 36px", borderRadius: 12,
                border: `1px solid rgba(201,168,76,${err ? 0.6 : 0.22})`,
                background: "rgba(255,255,255,0.04)", color: G.white, fontSize: 13,
                fontFamily: "'DM Sans',sans-serif"
              }} />
          </div>
        </div>

        {/* Error */}
        {err && (
          <div style={{
            background: "rgba(192,57,43,0.14)", border: "1px solid rgba(192,57,43,0.35)",
            borderRadius: 10, padding: "9px 13px", fontSize: 11, color: "#E8A09A", marginBottom: 14,
            display: "flex", gap: 7, alignItems: "center"
          }}>
            <AlertCircle size={13} />{err}
          </div>
        )}

        {/* Submit button */}
        <button onClick={submit} disabled={loading} style={{
          width: "100%", padding: "13px",
          borderRadius: 12, border: "none",
          background: loading ? `rgba(201,168,76,0.35)` : `linear-gradient(135deg,${G.goldL},${G.goldD})`,
          color: G.white, fontSize: 14, fontWeight: 700, cursor: loading ? "default" : "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          boxShadow: loading ? "none" : `0 6px 22px rgba(180,150,60,0.38)`,
          letterSpacing: "0.04em", fontFamily: "'DM Sans',sans-serif"
        }}>
          {loading
            ? <><div style={{
              width: 14, height: 14, borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.25)", borderTop: "2px solid white",
              animation: "spin 0.75s linear infinite"
            }} />Signing in…</>
            : <><LogIn size={15} />Sign In to Dashboard</>
          }
        </button>

        <div style={{
          textAlign: "center", marginTop: 14, fontSize: 10,
          color: "rgba(255,255,255,0.16)"
        }}>
          Forgot password? Contact your system administrator.
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════ 1. EXECUTIVE SNAPSHOT */
function SectionOverview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
        <KpiCard label="Total Active Users" value="24,891" delta={12.4} icon={Users} sub="DAU 4,120 · WAU 9,800 · MAU 24,891" />
        <KpiCard label="New Users (30d)" value="3,204" delta={8.1} icon={UserCheck} sub="Today 112 · This week 741" />
        <KpiCard label="Download → Paid" value="13.2%" delta={1.4} icon={Target} sub="Trial → Paid conversion: 44.3%" />
        <KpiCard label="MRR" value="$48,320" delta={6.7} icon={DollarSign} sub="ARR $579,840" />
        <KpiCard label="Net Revenue" value="$41,072" delta={4.2} icon={TrendingUp} sub="After Apple/Google 15% fees" />
        <KpiCard label="Monthly Churn" value="2.3%" delta={-0.4} icon={RefreshCw} invertDelta sub="Cohort churn: 1.8%" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 18 }}>
        <Card>
          <SecHead icon={DollarSign} title="MRR Trend" subtitle="Monthly Recurring Revenue · 6-month view" />
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={mrrData}>
              <defs>
                <linearGradient id="mg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={G.goldL} stopOpacity={0.28} />
                  <stop offset="95%" stopColor={G.goldL} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={G.borderL} vertical={false} />
              <XAxis dataKey="m" tick={{ fontSize: 10, fill: G.slateL }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: G.slateL }} axisLine={false} tickLine={false} tickFormatter={v => `$${v / 1000}K`} />
              <Tooltip content={<TT />} formatter={v => `$${v.toLocaleString()}`} />
              <Area type="monotone" dataKey="mrr" name="MRR" stroke={G.gold} strokeWidth={2.5}
                fill="url(#mg)" dot={{ r: 3, fill: G.gold, stroke: G.white, strokeWidth: 2 }} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <SecHead icon={Award} title="Avg Engagement Score" subtitle="Composite 0–100 · updated daily" />
          <div style={{ textAlign: "center", padding: "6px 0 14px" }}>
            <div style={{
              fontSize: 54, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700,
              color: G.goldD, lineHeight: 1
            }}>67.0</div>
            <div style={{ fontSize: 11, color: G.slateL, marginTop: 3, marginBottom: 10 }}>out of 100</div>
            <ProgressBar value={67} max={100} height={10} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {engagementBreakdown.map(e => (
              <div key={e.name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ fontSize: 10, color: G.slate, width: 128, flexShrink: 0 }}>{e.name}</div>
                <div style={{ flex: 1 }}><ProgressBar value={e.avg} max={e.max} height={5} /></div>
                <div style={{ fontSize: 10, fontWeight: 700, color: G.goldD, width: 42, textAlign: "right" }}>{e.avg}/{e.max}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <SecHead icon={Zap} title="Top 3 Growth Drivers"
          subtitle="Auto-generated weekly · weighted: 0.4×Day30 + 0.4×Conversion + 0.2×Day7" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
          {growthDrivers.map(d => (
            <div key={d.rank} style={{
              background: `linear-gradient(145deg,${G.goldGhost},#FFFDF7)`,
              borderRadius: 14, padding: "18px 20px", border: `1px solid ${G.border}`
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  background: `linear-gradient(135deg,${G.goldL},${G.goldD})`,
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: G.white }}>#{d.rank}</span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: G.dark, lineHeight: 1.3 }}>{d.behavior}</span>
              </div>
              <div style={{
                fontSize: 28, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700,
                color: G.goldD, marginBottom: 2
              }}>{d.impact}</div>
              <div style={{ fontSize: 11, color: G.slate, marginBottom: 10 }}>{d.metric}</div>
              <Badge color={G.goldPale} text={G.goldD} size={10}>Driver Score: {d.score}</Badge>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <SecHead icon={BarChart2} title="Daily Active Users" subtitle="Last 7 days" />
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={dauData} barSize={38}>
            <CartesianGrid strokeDasharray="3 3" stroke={G.borderL} vertical={false} />
            <XAxis dataKey="d" tick={{ fontSize: 11, fill: G.slateL }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: G.slateL }} axisLine={false} tickLine={false} tickFormatter={v => `${v / 1000}K`} />
            <Tooltip content={<TT />} />
            <Bar dataKey="dau" name="DAU" radius={[6, 6, 0, 0]}>
              {dauData.map((_, i) => <Cell key={i} fill={i === 2 ? G.goldD : G.goldL} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}

/* ═══════════════════════════ 2. USERS & DEMOGRAPHICS */
function SectionUsers() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
        <KpiCard label="Total Users" value="24,891" delta={12.4} icon={Users} />
        <KpiCard label="Paid Subscribers" value="12,261" delta={9.2} icon={CheckCircle} />
        <KpiCard label="Free Users" value="8,420" delta={3.1} icon={UserCheck} />
        <KpiCard label="Trial Users" value="4,210" delta={18.4} icon={Clock} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18 }}>
        <Card>
          <SecHead icon={Smartphone} title="By Platform" subtitle="Total 24,891 users" />
          <ResponsiveContainer width="100%" height={148}>
            <PieChart>
              <Pie data={platformData} cx="50%" cy="50%" innerRadius={40} outerRadius={62}
                paddingAngle={4} dataKey="value">
                {platformData.map((_, i) => <Cell key={i} fill={[G.goldL, G.gold, G.goldD][i]} />)}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 10, border: `1px solid ${G.border}`, fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {platformData.map((p, i) => (
              <div key={p.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 3, background: [G.goldL, G.gold, G.goldD][i] }} />
                  <span style={{ fontSize: 12, color: G.dark }}>{p.name}</span>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 10, color: G.slateL }}>{((p.value / 24891) * 100).toFixed(1)}%</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: G.goldD }}>{p.value.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SecHead icon={Layers} title="User Segments" subtitle="Subscription & engagement tiers" />
          <div style={{ marginBottom: 14 }}>
            {[
              { label: "Free", value: 8420, color: G.slateL },
              { label: "Trial", value: 4210, color: G.amber },
              { label: "Monthly Paid", value: 7840, color: G.gold },
              { label: "Yearly Paid", value: 4421, color: G.goldD },
            ].map(s => (
              <div key={s.label} style={{ marginBottom: 9 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: 11, color: G.slate }}>{s.label}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: G.dark }}>{s.value.toLocaleString()}</span>
                </div>
                <ProgressBar value={s.value} max={24891} color={s.color} height={7} />
              </div>
            ))}
          </div>
          <div style={{ height: 1, background: G.borderL, margin: "2px 0 12px" }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
            {[
              { label: "Full-price", value: "61%" }, { label: "Coupon users", value: "22%" },
              { label: "Affiliate users", value: "17%" }, { label: "Highly engaged", value: "38%" },
            ].map(s => (
              <div key={s.label} style={{ background: G.goldGhost, borderRadius: 9, padding: "8px 10px" }}>
                <div style={{ fontSize: 10, color: G.slateL }}>{s.label}</div>
                <div style={{ fontSize: 17, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: G.goldD }}>{s.value}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SecHead icon={Globe} title="Geography" subtitle="Top countries by user count" />
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {geoData.map(g => (
              <div key={g.country}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: 11, color: G.dark }}>{g.country}</span>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span style={{ fontSize: 10, color: G.slateL }}>{g.users.toLocaleString()}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: G.goldD }}>{g.pct}%</span>
                  </div>
                </div>
                <ProgressBar value={g.pct} max={100} height={5} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
        {[
          { label: "Monthly subscribers", value: "7,840", sub: "63.9% of paid", icon: RefreshCw },
          { label: "Yearly subscribers", value: "4,421", sub: "36.1% of paid", icon: CheckCircle },
          { label: "ARPU", value: "$3.92/mo", sub: "Avg revenue per user", icon: DollarSign },
          { label: "LTV estimate", value: "$52.40", sub: "Avg lifetime value", icon: Award },
        ].map(s => <KpiCard key={s.label} label={s.label} value={s.value} icon={s.icon} sub={s.sub} />)}
      </div>
    </div>
  );
}

/* ═══════════════════════════ 3. COUPON MANAGEMENT */
function SectionCoupons() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    code: "", type: "% off", value: "", applies: "Both",
    duration: "One-time", expiry: "", maxUses: "100", perUser: "1"
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
        <KpiCard label="Active Coupons" value="4" icon={Tag} />
        <KpiCard label="Total Redemptions" value="1,291" delta={18.4} icon={Hash} />
        <KpiCard label="Revenue via Coupons" value="$45,140" delta={9.1} icon={DollarSign} />
        <KpiCard label="Avg Conv. Rate" value="65%" delta={2.8} icon={Target} />
      </div>

      <Card>
        <SecHead icon={Tag} title="Coupon Codes"
          subtitle="Create and track discount codes · per-user limits · expiry controls"
          action={<GoldBtn small onClick={() => setShowModal(true)}><Plus size={13} />New Coupon</GoldBtn>} />
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 920 }}>
            <thead>
              <tr>
                <Th>Code</Th><Th>Type</Th><Th>Value</Th><Th>Applies To</Th>
                <Th>Duration</Th><Th>Expiry</Th><Th>Uses / Max</Th>
                <Th right>Revenue</Th><Th right>Conv %</Th><Th right>Retention</Th>
                <Th>Status</Th><Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {coupons.map(c => {
                const pct = Math.round((c.uses / c.maxUses) * 100);
                return (
                  <tr key={c.code}>
                    <Td>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ fontFamily: "monospace", fontWeight: 700, color: G.goldD, fontSize: 13 }}>{c.code}</span>
                        <button style={{ background: "none", border: "none", cursor: "pointer", color: G.slateL, padding: 2 }}>
                          <Copy size={10} />
                        </button>
                      </div>
                    </Td>
                    <Td><Badge>{c.type}</Badge></Td>
                    <Td style={{ fontWeight: 700, color: G.dark }}>{c.value}</Td>
                    <Td style={{ color: G.slate }}>{c.applies}</Td>
                    <Td style={{ color: G.slateL, fontSize: 11 }}>{c.duration}</Td>
                    <Td style={{ color: G.slateL, fontSize: 11 }}>{c.expiry === "None" ? "No expiry" : c.expiry}</Td>
                    <Td>
                      <div style={{ minWidth: 130 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                          <span style={{ fontSize: 10, color: G.dark, fontWeight: 600 }}>{c.uses}/{c.maxUses}</span>
                          <span style={{ fontSize: 10, fontWeight: 700, color: c.uses >= c.maxUses ? G.red : G.goldD }}>{pct}%</span>
                        </div>
                        <ProgressBar value={c.uses} max={c.maxUses} color={c.uses >= c.maxUses ? G.red : G.gold} height={5} />
                      </div>
                    </Td>
                    <Td style={{ textAlign: "right", color: G.green, fontWeight: 700 }}>${c.revenue.toLocaleString()}</Td>
                    <Td style={{ textAlign: "right" }}>{c.convRate}%</Td>
                    <Td style={{ textAlign: "right" }}>{c.retention}%</Td>
                    <Td>
                      <Badge color={c.status === "Active" ? G.greenL : c.status === "Exhausted" ? G.redL : G.amberL}
                        text={c.status === "Active" ? G.green : c.status === "Exhausted" ? G.red : G.amber}>
                        {c.status}
                      </Badge>
                    </Td>
                    <Td>
                      <div style={{ display: "flex", gap: 5 }}>
                        <button style={{
                          background: G.goldPale, border: "none", borderRadius: 6,
                          padding: "4px 8px", fontSize: 10, color: G.goldD, cursor: "pointer",
                          fontWeight: 600, display: "flex", alignItems: "center", gap: 3
                        }}>
                          <Edit3 size={10} />Edit
                        </button>
                        <button style={{
                          background: G.redL, border: "none", borderRadius: 6,
                          padding: "4px 8px", fontSize: 10, color: G.red, cursor: "pointer",
                          fontWeight: 600, display: "flex", alignItems: "center", gap: 3
                        }}>
                          <Trash2 size={10} />
                        </button>
                      </div>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {showModal && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(24,20,13,0.65)", zIndex: 200,
          display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(3px)"
        }}
          onClick={() => setShowModal(false)}>
          <div style={{
            background: G.white, borderRadius: 22, padding: "32px 36px", width: 500,
            boxShadow: "0 28px 70px rgba(0,0,0,0.25)", maxHeight: "92vh", overflowY: "auto"
          }}
            onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 700, color: G.dark }}>Create New Coupon</h3>
              <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", cursor: "pointer", color: G.slateL }}><X size={18} /></button>
            </div>
            <GoldTopBar />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ gridColumn: "1/-1" }}>
                <label style={{ fontSize: 11, fontWeight: 700, color: G.dark, display: "block", marginBottom: 5 }}>Code Name <span style={{ color: G.slateL, fontWeight: 400 }}>(blank = auto-generate)</span></label>
                <input value={form.code} onChange={e => setForm({ ...form, code: e.target.value })} placeholder="e.g. ZEST30"
                  style={{ width: "100%", padding: "10px 13px", borderRadius: 10, border: `1px solid ${G.border}`, fontSize: 12, background: G.cream, color: G.dark }} />
              </div>
              {[
                { field: "type", label: "Discount Type", options: ["% off", "$ off", "Free trial (X days)"] },
                { field: "applies", label: "Applies To", options: ["Monthly", "Yearly", "Both"] },
              ].map(f => (
                <div key={f.field}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: G.dark, display: "block", marginBottom: 5 }}>{f.label}</label>
                  <select value={form[f.field]} onChange={e => setForm({ ...form, [f.field]: e.target.value })}
                    style={{ width: "100%", padding: "10px 13px", borderRadius: 10, border: `1px solid ${G.border}`, fontSize: 12, background: G.cream, color: G.dark }}>
                    {f.options.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: G.dark, display: "block", marginBottom: 5 }}>Value</label>
                <input value={form.value} onChange={e => setForm({ ...form, value: e.target.value })}
                  placeholder={form.type === "% off" ? "e.g. 30" : form.type === "$ off" ? "e.g. 10.00" : "days"}
                  style={{ width: "100%", padding: "10px 13px", borderRadius: 10, border: `1px solid ${G.border}`, fontSize: 12, background: G.cream, color: G.dark }} />
              </div>
              {[
                { field: "duration", label: "Duration", options: ["One-time", "Recurring — 2 months", "Recurring — 3 months", "Recurring — 6 months", "Forever"] },
                { field: "maxUses", label: "Max Uses", options: ["1", "5", "10", "25", "50", "100", "250", "500", "Unlimited"] },
                { field: "perUser", label: "Per-User Limit", options: ["1", "2", "5", "Unlimited"] },
              ].map(f => (
                <div key={f.field}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: G.dark, display: "block", marginBottom: 5 }}>{f.label}</label>
                  <select value={form[f.field]} onChange={e => setForm({ ...form, [f.field]: e.target.value })}
                    style={{ width: "100%", padding: "10px 13px", borderRadius: 10, border: `1px solid ${G.border}`, fontSize: 12, background: G.cream, color: G.dark }}>
                    {f.options.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
              <div style={{ gridColumn: "1/-1" }}>
                <label style={{ fontSize: 11, fontWeight: 700, color: G.dark, display: "block", marginBottom: 5 }}>Expiration Date <span style={{ color: G.slateL, fontWeight: 400 }}>(optional)</span></label>
                <input type="date" value={form.expiry} onChange={e => setForm({ ...form, expiry: e.target.value })}
                  style={{ width: "100%", padding: "10px 13px", borderRadius: 10, border: `1px solid ${G.border}`, fontSize: 12, background: G.cream, color: G.dark }} />
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
              <button onClick={() => setShowModal(false)} style={{
                flex: 1, padding: "10px", borderRadius: 10,
                border: `1px solid ${G.border}`, background: "transparent", fontSize: 12, color: G.slateL, cursor: "pointer"
              }}>Cancel</button>
              <div style={{ flex: 2 }}><GoldBtn onClick={() => setShowModal(false)} full><Plus size={14} />Create Coupon</GoldBtn></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════ 4. AFFILIATE PROGRAM */
const TIERS = {
  Bronze: { color: G.amber, bg: G.amberL, rate: "10%", minSales: 0 },
  Silver: { color: "#5A5A6A", bg: "#EEECF2", rate: "15%", minSales: 500 },
  Gold: { color: G.goldD, bg: G.goldPale, rate: "20%", minSales: 2000 },
  Platinum: { color: G.purple, bg: G.purpleL, rate: "25%", minSales: 5000 },
};

const TierBadge = ({ tier }) => {
  const t = TIERS[tier] || TIERS.Bronze;
  return <Badge color={t.bg} text={t.color}>{tier}</Badge>;
};

function SectionAffiliates() {
  const [showAdd, setShowAdd] = useState(false);
  const [detail, setDetail] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [newForm, setNewForm] = useState({ name: "", email: "", handle: "", type: "Influencer", commissionRate: "15" });

  const totalRevenue = affiliates.reduce((a, x) => a + x.revenue, 0);
  const totalSignups = affiliates.reduce((a, x) => a + x.signups, 0);
  const totalOwed = affiliates.reduce((a, x) => a + (x.commissionEarned - x.commissionPaid), 0);

  const filtered = activeTab === "all"
    ? affiliates
    : affiliates.filter(a => a.status === activeTab || a.tier === activeTab);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
        <KpiCard label="Active Affiliates" value={affiliates.filter(a => a.status === "Active").length.toString()} delta={20.0} icon={UserPlus} />
        <KpiCard label="Affiliate Signups (mo)" value={totalSignups.toLocaleString()} delta={21.4} icon={Users} sub="via affiliate links" />
        <KpiCard label="Affiliate Revenue (mo)" value={`$${totalRevenue.toLocaleString()}`} delta={32.1} icon={DollarSign} sub="from affiliate-referred subs" />
        <KpiCard label="Commission Owed" value={`$${totalOwed.toLocaleString()}`} icon={Gift} sub="total unpaid earned" />
      </div>

      {/* Trend + Tier structure */}
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 18 }}>
        <Card>
          <SecHead icon={TrendingUp} title="Affiliate Revenue Trend" subtitle="Revenue & signups driven by affiliates · 6 months" />
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={affiliateTrend}>
              <defs>
                <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={G.goldL} stopOpacity={0.28} />
                  <stop offset="95%" stopColor={G.goldL} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={G.borderL} vertical={false} />
              <XAxis dataKey="m" tick={{ fontSize: 10, fill: G.slateL }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="r" tick={{ fontSize: 10, fill: G.slateL }} axisLine={false} tickLine={false} tickFormatter={v => `$${v / 1000}K`} />
              <YAxis yAxisId="s" orientation="right" tick={{ fontSize: 10, fill: G.slateL }} axisLine={false} tickLine={false} />
              <Tooltip content={<TT />} />
              <Area yAxisId="r" type="monotone" dataKey="revenue" name="Revenue" stroke={G.gold} strokeWidth={2.5} fill="url(#ag)" dot={{ r: 3, fill: G.gold }} />
              <Line yAxisId="s" type="monotone" dataKey="signups" name="Signups" stroke={G.goldD} strokeWidth={2} dot={{ r: 3, fill: G.goldD }} strokeDasharray="4 2" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <SecHead icon={Award} title="Commission Tier Structure" subtitle="Rates auto-applied by total revenue driven" />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {Object.entries(TIERS).map(([tier, t]) => (
              <div key={tier} style={{
                background: t.bg, borderRadius: 12, padding: "12px 16px",
                border: `1px solid ${t.color}28`, display: "flex", justifyContent: "space-between", alignItems: "center"
              }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: t.color }}>{tier}</div>
                  <div style={{ fontSize: 10, color: t.color, opacity: 0.65 }}>
                    {tier === "Bronze" ? "Entry level" : `Min $${t.minSales.toLocaleString()} revenue`}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 24, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: t.color }}>{t.rate}</div>
                  <div style={{ fontSize: 9, color: t.color, opacity: 0.6 }}>commission</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Affiliate Table */}
      <Card>
        <SecHead icon={Link2} title="Affiliate Partners"
          subtitle="Click any row to view full profile · track clicks, signups, conversions, and commissions"
          action={<GoldBtn small onClick={() => setShowAdd(true)}><Plus size={13} />Add Affiliate</GoldBtn>} />

        <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
          {["all", "Active", "Pending", "Platinum", "Gold", "Silver", "Bronze"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: "5px 13px", borderRadius: 20, fontSize: 11, fontWeight: 600, cursor: "pointer",
              background: activeTab === tab ? `linear-gradient(135deg,${G.goldL},${G.goldD})` : G.goldGhost,
              color: activeTab === tab ? G.white : G.goldD,
              border: `1px solid ${activeTab === tab ? "transparent" : G.border}`,
            }}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</button>
          ))}
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 1020 }}>
            <thead>
              <tr>
                <Th>Affiliate</Th><Th>Type</Th><Th>Tier</Th><Th>Code</Th>
                <Th right>Clicks</Th><Th right>Signups</Th><Th right>Conv.</Th>
                <Th right>Conv %</Th><Th right>Revenue</Th>
                <Th right>Earned</Th><Th right>Paid</Th><Th right>Owed</Th>
                <Th>Status</Th><Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(a => {
                const cp = a.signups > 0 ? ((a.conversions / a.signups) * 100).toFixed(1) : "0";
                const owed = a.commissionEarned - a.commissionPaid;
                return (
                  <tr key={a.id} style={{ cursor: "pointer" }} onClick={() => setDetail(a)}>
                    <Td>
                      <div>
                        <div style={{ fontWeight: 700, color: G.dark }}>{a.name}</div>
                        <div style={{ fontSize: 10, color: G.slateL }}>{a.handle} · {a.email}</div>
                      </div>
                    </Td>
                    <Td><Badge color={G.blueL} text={G.blue}>{a.type}</Badge></Td>
                    <Td><TierBadge tier={a.tier} /></Td>
                    <Td>
                      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <span style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 700, color: G.goldD }}>{a.code}</span>
                        <button style={{ background: "none", border: "none", cursor: "pointer", color: G.slateL, padding: 1 }} onClick={e => e.stopPropagation()}>
                          <Copy size={10} />
                        </button>
                      </div>
                    </Td>
                    <Td style={{ textAlign: "right" }}>{a.clicks.toLocaleString()}</Td>
                    <Td style={{ textAlign: "right" }}>{a.signups.toLocaleString()}</Td>
                    <Td style={{ textAlign: "right", fontWeight: 600 }}>{a.conversions.toLocaleString()}</Td>
                    <Td style={{ textAlign: "right" }}>
                      <Badge color={parseFloat(cp) >= 40 ? G.greenL : parseFloat(cp) >= 20 ? G.amberL : G.redL}
                        text={parseFloat(cp) >= 40 ? G.green : parseFloat(cp) >= 20 ? G.amber : G.red}>{cp}%</Badge>
                    </Td>
                    <Td style={{ textAlign: "right", color: G.green, fontWeight: 700 }}>${a.revenue.toLocaleString()}</Td>
                    <Td style={{ textAlign: "right", color: G.goldD, fontWeight: 600 }}>${a.commissionEarned.toLocaleString()}</Td>
                    <Td style={{ textAlign: "right", color: G.slateL }}>${a.commissionPaid.toLocaleString()}</Td>
                    <Td style={{ textAlign: "right" }}>
                      {owed > 0
                        ? <span style={{ color: G.red, fontWeight: 700 }}>${owed.toLocaleString()}</span>
                        : <span style={{ color: G.green, fontSize: 11 }}>✓ Paid</span>}
                    </Td>
                    <Td>
                      <Badge color={a.status === "Active" ? G.greenL : G.amberL}
                        text={a.status === "Active" ? G.green : G.amber}>{a.status}</Badge>
                    </Td>
                    <Td>
                      <div style={{ display: "flex", gap: 5 }} onClick={e => e.stopPropagation()}>
                        <button style={{
                          background: G.goldPale, border: "none", borderRadius: 6,
                          padding: "4px 9px", fontSize: 10, color: G.goldD, cursor: "pointer", fontWeight: 600
                        }}>
                          View
                        </button>
                        {owed > 0 && (
                          <button style={{
                            background: G.greenL, border: "none", borderRadius: 6,
                            padding: "4px 9px", fontSize: 10, color: G.green, cursor: "pointer", fontWeight: 600
                          }}>
                            Pay
                          </button>
                        )}
                      </div>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Commission footer summary */}
        <div style={{
          display: "flex", gap: 0, marginTop: 16, background: G.goldGhost, borderRadius: 12,
          border: `1px solid ${G.border}`, overflow: "hidden"
        }}>
          {[
            { label: "Total commission earned", value: `$${affiliates.reduce((a, x) => a + x.commissionEarned, 0).toLocaleString()}` },
            { label: "Total commission paid", value: `$${affiliates.reduce((a, x) => a + x.commissionPaid, 0).toLocaleString()}`, color: G.green },
            { label: "Total commission owed", value: `$${totalOwed.toLocaleString()}`, color: G.red },
            { label: "Avg commission rate", value: `${(affiliates.reduce((a, x) => a + x.commissionRate, 0) / affiliates.length).toFixed(1)}%` },
          ].map((s, i, arr) => (
            <div key={s.label} style={{
              flex: 1, padding: "14px 18px", textAlign: "center",
              borderRight: i < arr.length - 1 ? `1px solid ${G.border}` : "none"
            }}>
              <div style={{ fontSize: 10, color: G.slateL, marginBottom: 3 }}>{s.label}</div>
              <div style={{ fontSize: 19, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: s.color || G.goldD }}>{s.value}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* ── Affiliate Detail Drawer ── */}
      {detail && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(24,20,13,0.5)", zIndex: 200,
          display: "flex", justifyContent: "flex-end", backdropFilter: "blur(2px)"
        }}
          onClick={() => setDetail(null)}>
          <div style={{
            background: G.white, width: 440, height: "100%", overflowY: "auto",
            boxShadow: "-20px 0 60px rgba(0,0,0,0.18)", padding: 28
          }}
            onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
              <div>
                <div style={{ fontSize: 20, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: G.dark }}>{detail.name}</div>
                <div style={{ fontSize: 11, color: G.slateL }}>{detail.handle} · {detail.id}</div>
              </div>
              <button onClick={() => setDetail(null)} style={{ background: "none", border: "none", cursor: "pointer", color: G.slateL }}><X size={18} /></button>
            </div>
            <div style={{ height: 3, background: `linear-gradient(90deg,${G.goldL},${G.goldD})`, borderRadius: 4, marginBottom: 18 }} />

            <div style={{ display: "flex", gap: 7, marginBottom: 18, flexWrap: "wrap" }}>
              <TierBadge tier={detail.tier} />
              <Badge color={G.blueL} text={G.blue}>{detail.type}</Badge>
              <Badge color={detail.status === "Active" ? G.greenL : G.amberL}
                text={detail.status === "Active" ? G.green : G.amber}>{detail.status}</Badge>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9, marginBottom: 18 }}>
              {[
                { l: "Email", v: detail.email }, { l: "Coupon Code", v: detail.code },
                { l: "Commission Rate", v: `${detail.commissionRate}%` }, { l: "Joined", v: detail.joined },
                { l: "Last Payout", v: detail.lastPayout }, { l: "Affiliate ID", v: detail.id },
              ].map(s => (
                <div key={s.l} style={{ background: G.goldGhost, borderRadius: 10, padding: "9px 12px" }}>
                  <div style={{ fontSize: 10, color: G.slateL }}>{s.l}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: G.dark, marginTop: 2 }}>{s.v}</div>
                </div>
              ))}
            </div>

            <div style={{ fontSize: 12, fontWeight: 700, color: G.dark, marginBottom: 10 }}>Performance</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9, marginBottom: 18 }}>
              {[
                { l: "Clicks", v: detail.clicks.toLocaleString(), c: G.goldD },
                { l: "Signups", v: detail.signups.toLocaleString(), c: G.goldD },
                { l: "Conversions", v: detail.conversions.toLocaleString(), c: G.green },
                { l: "Revenue Generated", v: `$${detail.revenue.toLocaleString()}`, c: G.green },
                { l: "Commission Earned", v: `$${detail.commissionEarned.toLocaleString()}`, c: G.goldD },
                { l: "Commission Paid", v: `$${detail.commissionPaid.toLocaleString()}`, c: G.slateL },
              ].map(s => (
                <div key={s.l} style={{ background: G.white, border: `1px solid ${G.borderL}`, borderRadius: 10, padding: "10px 12px" }}>
                  <div style={{ fontSize: 10, color: G.slateL }}>{s.l}</div>
                  <div style={{ fontSize: 18, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: s.c }}>{s.v}</div>
                </div>
              ))}
            </div>

            {(detail.commissionEarned - detail.commissionPaid) > 0 && (
              <div style={{ background: G.redL, borderRadius: 12, padding: "14px 16px", marginBottom: 18, border: `1px solid ${G.red}28` }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: G.red, marginBottom: 2 }}>Commission Outstanding</div>
                <div style={{ fontSize: 24, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: G.red, marginBottom: 10 }}>
                  ${(detail.commissionEarned - detail.commissionPaid).toLocaleString()}
                </div>
                <GoldBtn small><CheckCircle size={12} />Mark as Paid</GoldBtn>
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {[
                { l: "Edit Affiliate Details", i: Edit3, bg: G.goldPale, c: G.goldD },
                { l: "Change Tier", i: Award, bg: G.goldPale, c: G.goldD },
                { l: "Update Commission Rate", i: Percent, bg: G.goldPale, c: G.goldD },
                { l: "Send Message", i: Send, bg: G.blueL, c: G.blue },
                { l: "View Referral Links", i: ExternalLink, bg: G.blueL, c: G.blue },
                { l: "Deactivate Affiliate", i: Trash2, bg: G.redL, c: G.red },
              ].map(a => (
                <button key={a.l} style={{
                  display: "flex", alignItems: "center", gap: 8, padding: "9px 14px",
                  borderRadius: 10, border: `1px solid ${a.c}22`, background: a.bg,
                  cursor: "pointer", fontSize: 12, fontWeight: 600, color: a.c, textAlign: "left"
                }}>
                  <a.i size={13} />{a.l}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Add Affiliate Modal ── */}
      {showAdd && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(24,20,13,0.65)", zIndex: 200,
          display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(3px)"
        }}
          onClick={() => setShowAdd(false)}>
          <div style={{
            background: G.white, borderRadius: 22, padding: "32px 36px", width: 480,
            boxShadow: "0 28px 70px rgba(0,0,0,0.25)"
          }} onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 700, color: G.dark }}>Add New Affiliate</h3>
              <button onClick={() => setShowAdd(false)} style={{ background: "none", border: "none", cursor: "pointer", color: G.slateL }}><X size={18} /></button>
            </div>
            <GoldTopBar />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                { f: "name", l: "Full Name", p: "e.g. Jessica Moore", col: "1/-1" },
                { f: "email", l: "Email Address", p: "e.g. jessica@example.com", col: "1/-1" },
                { f: "handle", l: "Social Handle / Website", p: "@handle or https://…" },
              ].map(x => (
                <div key={x.f} style={{ gridColumn: x.col }}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: G.dark, display: "block", marginBottom: 5 }}>{x.l}</label>
                  <input value={newForm[x.f]} onChange={e => setNewForm({ ...newForm, [x.f]: e.target.value })}
                    placeholder={x.p} style={{
                      width: "100%", padding: "10px 13px", borderRadius: 10,
                      border: `1px solid ${G.border}`, fontSize: 12, background: G.cream, color: G.dark
                    }} />
                </div>
              ))}
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: G.dark, display: "block", marginBottom: 5 }}>Affiliate Type</label>
                <select value={newForm.type} onChange={e => setNewForm({ ...newForm, type: e.target.value })}
                  style={{ width: "100%", padding: "10px 13px", borderRadius: 10, border: `1px solid ${G.border}`, fontSize: 12, background: G.cream, color: G.dark }}>
                  {["Influencer", "Podcast", "Coach", "Brand", "Creator", "Other"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: G.dark, display: "block", marginBottom: 5 }}>Starting Commission Rate</label>
                <select value={newForm.commissionRate} onChange={e => setNewForm({ ...newForm, commissionRate: e.target.value })}
                  style={{ width: "100%", padding: "10px 13px", borderRadius: 10, border: `1px solid ${G.border}`, fontSize: 12, background: G.cream, color: G.dark }}>
                  {["10", "15", "20", "25", "30"].map(o => <option key={o}>{o}%</option>)}
                </select>
              </div>
              <div style={{
                gridColumn: "1/-1", background: G.goldGhost, borderRadius: 10,
                padding: "11px 14px", border: `1px solid ${G.border}`, fontSize: 11, color: G.goldD, lineHeight: 1.6
              }}>
                <b>Auto-generated on save:</b> unique referral code, tracking link, and affiliate dashboard invite email.
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <button onClick={() => setShowAdd(false)} style={{
                flex: 1, padding: "10px", borderRadius: 10,
                border: `1px solid ${G.border}`, background: "transparent", fontSize: 12, color: G.slateL, cursor: "pointer"
              }}>Cancel</button>
              <div style={{ flex: 2 }}>
                <GoldBtn onClick={() => setShowAdd(false)} full>
                  <UserPlus size={14} />Add Affiliate & Send Invite
                </GoldBtn>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════ NAVIGATION */
const NAV = [
  { id: "overview", label: "Executive Snapshot", icon: LayoutDashboard },
  { id: "users", label: "Users & Demographics", icon: Users },
  { id: "coupons", label: "Coupon Management", icon: Tag },
  { id: "affiliates", label: "Affiliate Program", icon: Link2 },
];

/* ═══════════════════════════ ROOT */
export default function ZestiaApp() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [active, setActive] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!loggedIn) return <LoginPage onLogin={() => setLoggedIn(true)} />;

  const sections = {
    overview: <SectionOverview />,
    users: <SectionUsers />,
    coupons: <SectionCoupons />,
    affiliates: <SectionAffiliates />,
  };

  return (
    <div style={{
      display: "flex", height: "100vh", background: G.cream,
      fontFamily: "'DM Sans',sans-serif", overflow: "hidden"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:4px;height:4px;}
        ::-webkit-scrollbar-track{background:transparent;}
        ::-webkit-scrollbar-thumb{background:${G.border};border-radius:10px;}
        button{transition:opacity 0.15s;} button:hover{opacity:0.84;}
        input:focus,select:focus,textarea:focus{outline:2px solid ${G.goldL};outline-offset:0;}
        tr:hover td{background:${G.goldGhost};}
      `}</style>

      {/* SIDEBAR */}
      <aside style={{
        width: sidebarOpen ? 250 : 68, background: G.darkM, display: "flex",
        flexDirection: "column", transition: "width 0.22s ease", flexShrink: 0,
        borderRight: `1px solid rgba(255,255,255,0.05)`
      }}>

        <div style={{
          padding: "22px 16px 18px", borderBottom: `1px solid rgba(255,255,255,0.07)`,
          display: "flex", alignItems: "center", justifyContent: sidebarOpen ? "space-between" : "center"
        }}>
          {sidebarOpen && (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="32" height="32" viewBox="0 0 80 80">
                {Array.from({ length: 16 }).map((_, i) => {
                  const a = (i / 16) * Math.PI * 2;
                  return <line key={i} x1={40 + Math.cos(a) * 22} y1={40 + Math.sin(a) * 22}
                    x2={40 + Math.cos(a) * 36} y2={40 + Math.sin(a) * 36}
                    stroke={G.goldL} strokeWidth="1.5" strokeOpacity="0.6" />;
                })}
                <text x="40" y="51" textAnchor="middle" fontFamily="'Cormorant Garamond',serif"
                  fontSize="36" fontWeight="700" fill={G.goldL}>Z</text>
              </svg>
              <div>
                <div style={{
                  fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 700,
                  color: G.goldL, letterSpacing: "0.04em", lineHeight: 1
                }}>Zestia</div>
                <div style={{
                  fontSize: 9, color: "rgba(255,255,255,0.26)", letterSpacing: "0.13em",
                  textTransform: "uppercase", marginTop: 2
                }}>Admin Console</div>
              </div>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{
            background: "transparent",
            border: "none", cursor: "pointer", color: "rgba(255,255,255,0.28)", padding: 4,
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <Menu size={15} />
          </button>
        </div>

        <nav style={{ flex: 1, padding: "14px 8px", display: "flex", flexDirection: "column", gap: 2 }}>
          {NAV.map(item => {
            const on = active === item.id;
            return (
              <button key={item.id} onClick={() => setActive(item.id)} title={!sidebarOpen ? item.label : ""} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: sidebarOpen ? "10px 13px" : "10px", borderRadius: 11,
                background: on ? "rgba(201,168,76,0.14)" : "transparent",
                border: on ? "1px solid rgba(201,168,76,0.28)" : "1px solid transparent",
                cursor: "pointer", color: on ? G.goldL : "rgba(255,255,255,0.35)",
                transition: "all 0.14s", textAlign: "left", width: "100%",
                justifyContent: sidebarOpen ? "flex-start" : "center",
              }}>
                <span style={{ width: 18, height: 18, display: "grid", placeItems: "center", flexShrink: 0, lineHeight: 0 }}>
                  <item.icon size={17} style={{ display: "block" }} />
                </span>
                {sidebarOpen && <span style={{ fontSize: 12, fontWeight: on ? 600 : 400, whiteSpace: "nowrap" }}>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div style={{ padding: "12px 8px", borderTop: `1px solid rgba(255,255,255,0.07)` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px" }}>
            <div style={{
              width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
              background: `linear-gradient(135deg,${G.goldL},${G.goldD})`,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: G.white }}>ZA</span>
            </div>
            {sidebarOpen && (
              <>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.62)" }}>Zestia Admin</div>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,0.26)" }}>Super Admin</div>
                </div>
                <button onClick={() => setLoggedIn(false)} title="Sign out"
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "rgba(255,255,255,0.2)", padding: 3, display: "flex"
                  }}>
                  <LogIn size={13} style={{ transform: "scaleX(-1)" }} />
                </button>
              </>
            )}
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column" }}>
        <header style={{
          background: G.white, borderBottom: `1px solid ${G.border}`,
          padding: "14px 28px", display: "flex", alignItems: "center",
          justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10, flexShrink: 0
        }}>
          <div>
            <h1 style={{
              fontFamily: "'Cormorant Garamond',serif", fontSize: 23, fontWeight: 700,
              color: G.dark, lineHeight: 1
            }}>{NAV.find(n => n.id === active)?.label}</h1>
            <p style={{ fontSize: 11, color: G.slateL, marginTop: 2 }}>
              Thursday, 26 March 2026 · Last synced 3 min ago
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button style={{
              background: G.goldGhost, border: `1px solid ${G.border}`, borderRadius: 10,
              padding: "7px 13px", fontSize: 11, color: G.goldD, fontWeight: 600, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 5
            }}>
              <Download size={12} />Export
            </button>
            <button style={{
              background: G.goldGhost, border: `1px solid ${G.border}`, borderRadius: 10,
              padding: "7px 13px", fontSize: 11, color: G.goldD, fontWeight: 600, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 5
            }}>
              <Filter size={12} />Filter<ChevronDown size={11} />
            </button>
          </div>
        </header>

        <div style={{ padding: "26px 28px", flex: 1 }}>
          {sections[active]}
        </div>
      </main>
    </div>
  );
}

import React, { useState, useEffect, useRef } from "react";
import {
  Lock, KeyRound, Users, FileCheck2, ArrowRight, Github, Twitter, Sparkles,
  Calculator, Scale, Landmark, LineChart, FileSignature, FolderLock, Receipt, MessageSquare,
  Check, ChevronDown, Mail, Phone, MapPin, ShieldCheck, ServerCog, Fingerprint, History,
  Monitor, Laptop, Puzzle, Download as DownloadIcon, BookOpen, LifeBuoy, Newspaper,
  ExternalLink, X, Eye, EyeOff, Layers, Menu,
} from "lucide-react";

function GoogleIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18">
      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" />
      <path fill="#FBBC05" d="M3.964 10.706A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" />
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58z" />
    </svg>
  );
}

// ---------------------------------------------
// Design tokens — back to white / red only
// ---------------------------------------------
const COLORS = {
  bg: "#ffffff",
  card: "#ffffff",
  cardAlt: "#fafafa",
  cardBorder: "#ecebee",
  text: "#15131a",
  textDim: "#6c6a75",
  red: "#ff0421",
  redDark: "#c9031a",
  redSoft: "rgba(255,4,33,0.08)",
  redSoft2: "rgba(255,4,33,0.14)",
  // LexCase product accent — orange
  orange: "#f97316",
  orangeDark: "#c2410c",
  orangeSoft: "rgba(249,115,22,0.10)",
  orangeSoft2: "rgba(249,115,22,0.18)",
  // AccounTrack product accent — blue
  blue: "#0ea5e9",
  blueDark: "#0369a1",
  blueSoft: "rgba(14,165,233,0.10)",
  blueSoft2: "rgba(14,165,233,0.18)",
  // TaxPlan Pro product accent — green
  green: "#16a34a",
  greenDark: "#15803d",
  greenSoft: "rgba(22,163,74,0.10)",
  greenSoft2: "rgba(22,163,74,0.18)",
  // FinInsight product accent — purple
  purple: "#8b5cf6",
  purpleDark: "#6d28d9",
  purpleSoft: "rgba(139,92,246,0.10)",
  purpleSoft2: "rgba(139,92,246,0.18)",
};

const GRADIENT_BRAND = `linear-gradient(135deg, ${COLORS.red}, ${COLORS.redDark})`;
const GRADIENT_ORANGE = `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.orangeDark})`;
const GRADIENT_BLUE = `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.blueDark})`;
const GRADIENT_GREEN = `linear-gradient(135deg, ${COLORS.green}, ${COLORS.greenDark})`;
const GRADIENT_PURPLE = `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.purpleDark})`;

// ---------------------------------------------
// Global keyframes for subtle, tasteful motion
// ---------------------------------------------
function MotionStyles() {
  return (
    <style>{`
      @keyframes floatY { 0% { transform: translateY(0); } 50% { transform: translateY(-16px); } 100% { transform: translateY(0); } }
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      @keyframes pulseSoft { 0%, 100% { opacity: 0.55; transform: scale(1); } 50% { opacity: 1; transform: scale(1.08); } }
      @keyframes logoShimmer { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
      @keyframes logoPop { 0% { opacity: 0; transform: scale(0.7) rotate(-8deg); } 60% { opacity: 1; transform: scale(1.08) rotate(3deg); } 100% { opacity: 1; transform: scale(1) rotate(0deg); } }
      @keyframes orbitSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes dotPulse { 0%, 100% { opacity: 0.22; transform: translate(-50%, -50%) scale(0.75); } 30% { opacity: 1; transform: translate(-50%, -50%) scale(1.25); } 60% { opacity: 0.3; transform: translate(-50%, -50%) scale(0.8); } }
      @keyframes dotChase {
        0%, 100% { opacity: 0.25; transform: scale(0.75); box-shadow: none; }
        30% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 6px 2px rgba(255,4,33,0.7); }
      }
      .fade-up { animation: fadeInUp 700ms cubic-bezier(0.16,1,0.3,1) both; }
      .float-slow { animation: floatY 9s ease-in-out infinite; }
      .float-slower { animation: floatY 13s ease-in-out infinite; }
      .logo-mark { animation: logoPop 700ms cubic-bezier(0.34,1.56,0.64,1) both; transition: transform 300ms ease; }
      .logo-word { background-size: 200% auto; animation: logoShimmer 4s linear infinite; }
      .logo-group:hover .logo-mark { transform: rotate(-8deg) scale(1.12); }
      .nav-mobile-toggle { display: none; }
      @media (max-width: 880px) {
        .nav-links-desktop, .nav-actions-desktop { display: none !important; }
        .nav-mobile-toggle { display: flex !important; }
      }
      @media (max-width: 480px) {
        .hide-xs { display: none !important; }
      }
    `}</style>
  );
}

// ---------------------------------------------
// Decorative pattern layers
// ---------------------------------------------
function DotGridPattern({ style }) {
  return (
    <svg style={{ position: "absolute", pointerEvents: "none", ...style }} width="420" height="420" viewBox="0 0 420 420">
      <defs>
        <pattern id="dotgrid" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.6" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="420" height="420" fill="url(#dotgrid)" />
    </svg>
  );
}

function PlusPattern({ style }) {
  return (
    <svg style={{ position: "absolute", pointerEvents: "none", ...style }} width="360" height="360" viewBox="0 0 360 360">
      <defs>
        <pattern id="pluspattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M8 4 v8 M4 8 h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </pattern>
      </defs>
      <rect width="360" height="360" fill="url(#pluspattern)" />
    </svg>
  );
}

function AmbientBlobs() {
  return (
    <>
      <div className="float-slow" style={{
        position: "absolute", top: -260, left: -120, width: 560, height: 560,
        background: "radial-gradient(circle, rgba(255,4,33,0.14) 0%, rgba(255,4,33,0) 70%)",
        filter: "blur(10px)", pointerEvents: "none",
      }} />
      <div className="float-slower" style={{
        position: "absolute", top: -180, right: -160, width: 620, height: 620,
        background: "radial-gradient(circle, rgba(201,3,26,0.10) 0%, rgba(201,3,26,0) 70%)",
        filter: "blur(10px)", pointerEvents: "none",
      }} />
      <DotGridPattern style={{ top: 90, right: 0, color: COLORS.red, opacity: 0.14 }} />
      <PlusPattern style={{ bottom: 40, left: 0, color: COLORS.red, opacity: 0.12 }} />
    </>
  );
}

// ---------------------------------------------
// Shared hooks
// ---------------------------------------------
function useCountUp(target, duration = 1400, start) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return value;
}

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ---------------------------------------------
// Shared UI atoms
// ---------------------------------------------
function StatBlock({ label, value, suffix = "" }) {
  const [ref, inView] = useInView();
  const count = useCountUp(value, 1600, inView);
  return (
    <div ref={ref} style={{ textAlign: "left" }}>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
        fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1, color: COLORS.text,
      }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ marginTop: 8, fontSize: "0.85rem", color: COLORS.textDim, letterSpacing: "0.02em" }}>{label}</div>
    </div>
  );
}

function FeatureCard({ icon: Icon, eyebrow, title, desc, delay = 0, color = COLORS.red, soft = COLORS.redSoft, soft2 = COLORS.redSoft2, onClick }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      onClick={onClick}
      style={{
        background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 20,
        padding: "30px 26px", display: "flex", flexDirection: "column", gap: 14,
        boxShadow: "0 1px 2px rgba(20,18,30,0.04)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms, border-color 220ms ease, box-shadow 220ms ease`,
        cursor: onClick ? "pointer" : "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.boxShadow = `0 16px 32px -12px ${soft2}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = COLORS.cardBorder;
        e.currentTarget.style.boxShadow = "0 1px 2px rgba(20,18,30,0.04)";
      }}
    >
      <div style={{ width: 44, height: 44, borderRadius: 12, background: soft, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon size={21} color={color} strokeWidth={2.1} />
      </div>
      <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", color }}>{eyebrow}</div>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.15rem", fontWeight: 600, color: COLORS.text }}>{title}</div>
      <div style={{ fontSize: "0.9rem", color: COLORS.textDim, lineHeight: 1.7 }}>{desc}</div>
    </div>
  );
}

function RoleChip({ label }) {
  return (
    <div style={{ border: `1px solid ${COLORS.redSoft2}`, borderRadius: 999, padding: "8px 16px", fontSize: "0.85rem", fontWeight: 600, color: COLORS.redDark, background: COLORS.redSoft, whiteSpace: "nowrap" }}>
      {label}
    </div>
  );
}

function SectionEyebrow({ children, style, soft = COLORS.redSoft, soft2 = COLORS.redSoft2, colorDark = COLORS.redDark }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8, background: soft,
      border: `1px solid ${soft2}`, borderRadius: 999, padding: "6px 14px",
      fontSize: "0.78rem", fontWeight: 600, color: colorDark, marginBottom: 20, ...style,
    }}>
      {children}
    </div>
  );
}

function PrimaryButton({ children, style, onClick, gradient = GRADIENT_BRAND, shadow = "255,4,33" }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: gradient, color: "#fff", border: "none", borderRadius: 999,
        padding: "13px 26px", fontSize: "0.95rem", fontWeight: 700, cursor: "pointer",
        display: "flex", alignItems: "center", gap: 8,
        boxShadow: hover ? `0 14px 28px -8px rgba(${shadow},0.5)` : `0 10px 22px -10px rgba(${shadow},0.4)`,
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        transition: "all 200ms ease",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

function GhostButton({ children, onClick, style }) {
  return (
    <button onClick={onClick} style={{
      background: "#ffffff", color: COLORS.text, border: `1px solid ${COLORS.cardBorder}`,
      borderRadius: 999, padding: "13px 26px", fontSize: "0.95rem", fontWeight: 600, cursor: "pointer", ...style,
    }}>
      {children}
    </button>
  );
}

function AppLaunchModal({ open, onClose, appName, gradient, soft }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(10,10,15,0.5)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 20, width: "100%", maxWidth: 640, maxHeight: "85vh", overflow: "hidden", boxShadow: "0 30px 60px -20px rgba(0,0,0,0.35)" }}>
        <div style={{ background: gradient, padding: "16px 22px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ color: "#fff", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>{appName}</div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "#fff", borderRadius: 8, padding: 6, cursor: "pointer", display: "flex" }}>
            <X size={16} />
          </button>
        </div>
        <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: "0.82rem", color: COLORS.textDim }}>ตัวอย่างหน้าจอแอป (Demo Preview)</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
            {[1, 2, 3].map((i) => <div key={i} style={{ background: soft, borderRadius: 12, height: 70 }} />)}
          </div>
          <div style={{ background: COLORS.cardAlt, borderRadius: 12, height: 160, border: `1px solid ${COLORS.cardBorder}` }} />
          <div style={{ fontSize: "0.82rem", color: COLORS.textDim, textAlign: "center", marginTop: 6 }}>เข้าสู่ระบบเพื่อเริ่มใช้งาน {appName} เต็มรูปแบบ</div>
        </div>
      </div>
    </div>
  );
}

function OpenAppButton({ appName, gradient, soft, shadow }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PrimaryButton gradient={gradient} shadow={shadow} onClick={() => setOpen(true)}>
        เปิดแอป <ExternalLink size={16} />
      </PrimaryButton>
      <AppLaunchModal open={open} onClose={() => setOpen(false)} appName={appName} gradient={gradient} soft={soft} />
    </>
  );
}
function Logo({ onClick, size = "1.15rem", iconSize = 26 }) {
  return (
    <div
      className="logo-group"
      onClick={onClick}
      style={{ display: "inline-flex", alignItems: "center", gap: 9, cursor: onClick ? "pointer" : "default" }}
    >
      <span
        className="logo-mark"
        style={{
          width: iconSize, height: iconSize, borderRadius: "50%",
          background: "radial-gradient(circle at 35% 30%, #2a2732, #14121a 70%)",
          position: "relative", overflow: "hidden", flexShrink: 0,
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06), 0 6px 14px -6px rgba(20,18,26,0.5)",
        }}
      >
        {/* polkadot ring — dots light up one at a time, chasing around the circle */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * 2 * Math.PI - Math.PI / 2;
          const radius = iconSize * 0.31;
          const dotSize = Math.max(2.5, iconSize * 0.14);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <span
              key={i}
              style={{
                position: "absolute",
                top: `calc(50% + ${y}px - ${dotSize / 2}px)`,
                left: `calc(50% + ${x}px - ${dotSize / 2}px)`,
                width: dotSize, height: dotSize, borderRadius: "50%",
                background: COLORS.red,
                opacity: 0.3,
                animation: "dotChase 1.8s ease-in-out infinite",
                animationDelay: `${(i * 1.8) / 8}s`,
              }}
            />
          );
        })}
        {/* soft static core glow */}
        <span style={{
          position: "absolute", inset: "32%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,4,33,0.22), rgba(255,4,33,0) 70%)",
        }} />
      </span>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: size, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
        Obfice{" "}
        <span
          className="logo-word"
          style={{
            background: `linear-gradient(90deg, ${COLORS.red}, ${COLORS.redDark}, ${COLORS.red})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}
        >
          Stack
        </span>
      </span>
    </div>
  );
}


function PageHero({ eyebrow, title, gradientWord, desc, gradient = GRADIENT_BRAND, soft = COLORS.redSoft, soft2 = COLORS.redSoft2, colorDark = COLORS.redDark }) {
  return (
    <header style={{ position: "relative", zIndex: 2, maxWidth: 820, margin: "0 auto", textAlign: "center", padding: "90px 24px 30px" }}>
      <SectionEyebrow soft={soft} soft2={soft2} colorDark={colorDark}>{eyebrow}</SectionEyebrow>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2.1rem, 4.6vw, 3.4rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.2, margin: 0 }}>
        {title}{gradientWord && (
          <span style={{ background: gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> {gradientWord}</span>
        )}
      </h1>
      {desc && <p style={{ marginTop: 18, fontSize: "1.02rem", color: COLORS.textDim, maxWidth: 580, margin: "18px auto 0", lineHeight: 1.7 }}>{desc}</p>}
    </header>
  );
}

// ---------------------------------------------
// Nav dropdowns
// ---------------------------------------------
const PRODUCTS_MENU = [
  { icon: Users, key: "apps", label: "แอปทั้งหมด", desc: "รวมแอปสำหรับบัญชี กฎหมาย ภาษี และการเงิน" },
  { icon: Calculator, key: "accounting", label: "AccounTrack", desc: "แอปบัญชีสำหรับสำนักงานและนักบัญชี" },
  { icon: Scale, key: "lexcase", label: "LexCase", desc: "แอปจัดการคดีความสำหรับสำนักงานกฎหมาย" },
  { icon: Landmark, key: "taxplan", label: "TaxPlan Pro", desc: "แอปวางแผนภาษีก่อนยื่นจริง" },
  { icon: LineChart, key: "fininsight", label: "FinInsight", desc: "แอปวิเคราะห์งบการเงินและกระแสเงินสด" },
  { icon: ShieldCheck, key: "security", label: "ความปลอดภัยของข้อมูล", desc: "มาตรฐานการเข้ารหัสและการป้องกันข้อมูล" },
  { icon: DownloadIcon, key: "download", label: "ดาวน์โหลดโปรแกรม", desc: "ใช้งานผ่าน Windows, macOS หรือส่วนขยายเบราว์เซอร์" },
];

const SOLUTIONS_MENU = [
  { icon: Calculator, key: "apps", label: "สำหรับนักบัญชี", desc: "บันทึกบัญชีและปิดงบอัตโนมัติ" },
  { icon: Scale, key: "apps", label: "สำหรับนักกฎหมาย", desc: "จัดการคดีและเอกสารลูกความ" },
  { icon: Landmark, key: "apps", label: "สำหรับนักวางแผนภาษี", desc: "จำลองแผนภาษีก่อนยื่นจริง" },
  { icon: LineChart, key: "apps", label: "สำหรับนักวิเคราะห์การเงิน", desc: "แดชบอร์ดวิเคราะห์งบการเงิน" },
];

function NavDropdown({ label, items, setPage }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "relative" }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <span style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 4, color: COLORS.textDim, fontWeight: 500 }}>
        {label} <ChevronDown size={14} style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 180ms ease" }} />
      </span>
      {open && (
        <div className="fade-up" style={{
          position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 14,
          background: "#fff", border: `1px solid ${COLORS.cardBorder}`, borderRadius: 16,
          boxShadow: "0 20px 40px -16px rgba(20,18,30,0.18)", padding: 10, width: 300, zIndex: 20,
        }}>
          {items.map((item) => (
            <div
              key={item.label}
              onClick={() => setPage(item.key)}
              style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 12px", borderRadius: 10, cursor: "pointer" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.cardAlt)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <div style={{ width: 34, height: 34, borderRadius: 9, background: COLORS.redSoft, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <item.icon size={16} color={COLORS.red} />
              </div>
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: COLORS.text }}>{item.label}</div>
                <div style={{ fontSize: "0.76rem", color: COLORS.textDim, marginTop: 2 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Nav({ page, setPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const go = (key) => { setPage(key); setMobileOpen(false); };

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 30, backdropFilter: "blur(14px)",
      background: "rgba(255,255,255,0.9)", borderBottom: `1px solid ${COLORS.cardBorder}`,
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
        <div onClick={() => go("home")} style={{ flexShrink: 0 }}>
          <Logo />
        </div>

        <div className="nav-links-desktop" style={{ display: "flex", gap: 26, fontSize: "0.88rem", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          <NavDropdown label="ผลิตภัณฑ์" items={PRODUCTS_MENU} setPage={setPage} />
          <NavDropdown label="โซลูชั่น" items={SOLUTIONS_MENU} setPage={setPage} />
          <span onClick={() => go("resources")} style={{ cursor: "pointer", color: page === "resources" ? COLORS.text : COLORS.textDim, fontWeight: page === "resources" ? 700 : 500 }}>
            แหล่งข้อมูล
          </span>
          <span onClick={() => go("pricing")} style={{ cursor: "pointer", color: page === "pricing" ? COLORS.text : COLORS.textDim, fontWeight: page === "pricing" ? 700 : 500 }}>
            ราคา
          </span>
        </div>

        <div className="nav-actions-desktop" style={{ display: "flex", gap: 10, flexShrink: 0, alignItems: "center" }}>
          <GhostButton onClick={() => go("download")} style={{ padding: "9px 16px", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: 6 }}>
            <DownloadIcon size={15} /> ดาวน์โหลด
          </GhostButton>
          <span onClick={() => go("login")} style={{ cursor: "pointer", fontSize: "0.85rem", fontWeight: 600, color: COLORS.textDim }}>
            เข้าสู่ระบบ
          </span>
          <button onClick={() => go("signup")} style={{ background: GRADIENT_BRAND, color: "#fff", border: "none", borderRadius: 999, padding: "9px 20px", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer" }}>
            สมัครสมาชิก
          </button>
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: `1px solid ${COLORS.cardBorder}`, borderRadius: 10, padding: 8, cursor: "pointer", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
        >
          {mobileOpen ? <X size={20} color={COLORS.text} /> : <Menu size={20} color={COLORS.text} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fade-up" style={{
          borderTop: `1px solid ${COLORS.cardBorder}`, background: "#fff", maxHeight: "80vh", overflowY: "auto",
          padding: "18px 20px 26px", display: "flex", flexDirection: "column", gap: 22,
        }}>
          <MobileNavGroup title="ผลิตภัณฑ์" items={PRODUCTS_MENU} onSelect={go} />
          <MobileNavGroup title="โซลูชั่น" items={SOLUTIONS_MENU} onSelect={go} />

          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: COLORS.textDim, letterSpacing: "0.04em", marginBottom: 6 }}>เมนูอื่นๆ</div>
            {[["resources", "แหล่งข้อมูล"], ["pricing", "ราคา"], ["download", "ดาวน์โหลดโปรแกรม"]].map(([key, label]) => (
              <div key={key} onClick={() => go(key)} style={{ padding: "12px 4px", fontSize: "0.95rem", fontWeight: 600, color: COLORS.text, cursor: "pointer", borderBottom: `1px solid ${COLORS.cardBorder}` }}>
                {label}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <GhostButton onClick={() => go("login")} style={{ width: "100%", justifyContent: "center" }}>เข้าสู่ระบบ</GhostButton>
            <button onClick={() => go("signup")} style={{ background: GRADIENT_BRAND, color: "#fff", border: "none", borderRadius: 999, padding: "12px 20px", fontSize: "0.92rem", fontWeight: 700, cursor: "pointer", width: "100%" }}>
              สมัครสมาชิก
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function MobileNavGroup({ title, items, onSelect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: COLORS.textDim, letterSpacing: "0.04em", marginBottom: 6 }}>{title}</div>
      {items.map((item) => (
        <div
          key={item.label}
          onClick={() => onSelect(item.key)}
          style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 4px", borderBottom: `1px solid ${COLORS.cardBorder}`, cursor: "pointer" }}
        >
          <div style={{ width: 32, height: 32, borderRadius: 9, background: COLORS.redSoft, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <item.icon size={15} color={COLORS.red} />
          </div>
          <div style={{ fontSize: "0.92rem", fontWeight: 600, color: COLORS.text }}>{item.label}</div>
        </div>
      ))}
    </div>
  );
}

function Footer({ setPage }) {
  return (
    <footer style={{ position: "relative", zIndex: 2, borderTop: `1px solid ${COLORS.cardBorder}` }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 24px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 24 }}>
        <div>
          <div style={{ marginBottom: 10 }}><Logo size="1.05rem" iconSize={22} /></div>
          <div style={{ fontSize: "0.82rem", color: COLORS.textDim, lineHeight: 1.7 }}>แพลตฟอร์มรวมแอปสำหรับสำนักงานวิชาชีพ เข้ารหัสข้อมูลทุกชั้น</div>
        </div>
        {[
          { title: "ผลิตภัณฑ์", items: [["apps", "แอปทั้งหมด"], ["security", "ความปลอดภัย"], ["download", "ดาวน์โหลดโปรแกรม"]] },
          { title: "บริษัท", items: [["pricing", "ราคา"], ["contact", "ติดต่อเรา"]] },
          { title: "แหล่งข้อมูล", items: [["resources", "ศูนย์ช่วยเหลือ"], ["resources", "คำถามที่พบบ่อย"]] },
        ].map((col) => (
          <div key={col.title}>
            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: COLORS.text, marginBottom: 12 }}>{col.title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {col.items.map(([key, label], i) => (
                <span key={label + i} onClick={() => setPage(key)} style={{ fontSize: "0.85rem", color: COLORS.textDim, cursor: "pointer" }}>{label}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "20px 24px", borderTop: `1px solid ${COLORS.cardBorder}`, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div style={{ fontSize: "0.8rem", color: COLORS.textDim }}>© 2026 Obfice Stack. แนวคิด UI ตัวอย่างสำหรับการนำเสนอเท่านั้น</div>
        <div style={{ display: "flex", gap: 18, color: COLORS.textDim }}><Github size={17} /><Twitter size={17} /></div>
      </div>
    </footer>
  );
}

// ---------------------------------------------
// HOME PAGE — with subtle motion
// ---------------------------------------------
const TRUST_ITEMS = [
  "สำนักงานบัญชี ศิริกุล", "ที่ปรึกษาภาษี แอคคิวเรท", "สำนักงานกฎหมาย ธรรมนิติ",
  "บริษัทวิเคราะห์การเงิน คลาริตี้", "สำนักงานบัญชี เมโทรโพลิแทน", "ที่ปรึกษาการเงิน เวลท์บริดจ์",
];

function TrustMarquee() {
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS];
  return (
    <div style={{ overflow: "hidden", position: "relative", zIndex: 2, padding: "18px 0", borderTop: `1px solid ${COLORS.cardBorder}`, borderBottom: `1px solid ${COLORS.cardBorder}` }}>
      <div style={{ textAlign: "center", fontSize: "0.75rem", color: COLORS.textDim, marginBottom: 14 }}>ได้รับความไว้วางใจจากสำนักงานทั่วประเทศ</div>
      <div style={{ display: "flex", width: "max-content", animation: "marquee 26s linear infinite", gap: 40 }}>
        {items.map((name, i) => (
          <span key={i} style={{ fontSize: "0.9rem", color: COLORS.textDim, fontWeight: 600, whiteSpace: "nowrap", opacity: 0.7 }}>{name}</span>
        ))}
      </div>
    </div>
  );
}

function HomePage({ setPage }) {
  return (
    <>
      <div style={{ position: "relative" }}>
        <AmbientBlobs />
        <header style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto", textAlign: "center", padding: "100px 24px 40px" }}>
          <div className="fade-up" style={{ animationDelay: "0ms" }}>
            <SectionEyebrow>
              <Sparkles size={13} style={{ animation: "pulseSoft 2.4s ease-in-out infinite" }} /> เข้ารหัสข้อมูลระดับองค์กร ตั้งแต่ต้นทางถึงปลายทาง
            </SectionEyebrow>
          </div>
          <h1 className="fade-up" style={{ animationDelay: "80ms", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, margin: 0 }}>
            รวมทุกแอปสำหรับสำนักงาน<br />
            <span style={{ background: GRADIENT_BRAND, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              ไว้ในที่เดียว ปลอดภัยตั้งแต่วันแรก
            </span>
          </h1>
          <p className="fade-up" style={{ animationDelay: "160ms", marginTop: 22, fontSize: "1.05rem", color: COLORS.textDim, maxWidth: 580, margin: "22px auto 0", lineHeight: 1.7 }}>
            แพลตฟอร์มเดียวสำหรับนักบัญชี นักกฎหมาย นักวางแผนภาษี และนักวิเคราะห์การเงิน
            ข้อมูลลูกค้าถูกเข้ารหัสตลอดเวลา พร้อมระบบสมาชิกแบบแบ่งสิทธิ์การเข้าถึงตามบทบาท
          </p>
          <div className="fade-up" style={{ animationDelay: "240ms", marginTop: 34, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <PrimaryButton>เริ่มใช้งานฟรี 14 วัน <ArrowRight size={16} /></PrimaryButton>
            <GhostButton onClick={() => setPage("pricing")}>ดูแพ็กเกจราคา</GhostButton>
          </div>
          <div className="fade-up" style={{ animationDelay: "320ms", marginTop: 46, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <RoleChip label="นักบัญชี" />
            <RoleChip label="นักกฎหมาย" />
            <RoleChip label="นักวางแผนภาษี" />
            <RoleChip label="นักวิเคราะห์การเงิน" />
            <RoleChip label="ผู้บริหารสำนักงาน" />
          </div>
        </header>
      </div>

      <TrustMarquee />

      <section style={{ position: "relative", zIndex: 2, maxWidth: 1180, margin: "0 auto", padding: "70px 24px 90px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 18 }}>
        <FeatureCard delay={0} icon={Lock} eyebrow="เข้ารหัสข้อมูล" title="Encrypted by default" desc="ไฟล์และข้อมูลลูกค้าทุกชิ้นถูกเข้ารหัสทั้งขณะจัดเก็บและขณะส่งผ่านเครือข่าย" />
        <FeatureCard delay={80} icon={KeyRound} eyebrow="ระบบสมาชิก" title="สมัครสมาชิกตามทีม" desc="กำหนดสิทธิ์การเข้าถึงตามบทบาท เลือกแพ็กเกจรายเดือนหรือรายปี" />
        <FeatureCard delay={160} icon={Users} eyebrow="รวมทุกวิชาชีพ" title="แอปเฉพาะทางในที่เดียว" desc="เครื่องมือสำหรับงานบัญชี กฎหมาย ภาษี และการวิเคราะห์การเงิน เชื่อมข้อมูลถึงกัน" />
        <FeatureCard delay={240} icon={FileCheck2} eyebrow="ตรวจสอบได้" title="Audit trail ครบถ้วน" desc="ทุกการเข้าถึงและแก้ไขเอกสารถูกบันทึกไว้ ตรวจสอบย้อนหลังได้ทุกเมื่อ" />
      </section>

      <section style={{ position: "relative", zIndex: 2, borderTop: `1px solid ${COLORS.cardBorder}`, borderBottom: `1px solid ${COLORS.cardBorder}`, background: COLORS.redSoft }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 32 }}>
          <StatBlock label="สำนักงานที่ใช้งานอยู่" value={3200} suffix="+" />
          <StatBlock label="ผู้ใช้งานมืออาชีพ" value={18500} suffix="+" />
          <StatBlock label="เอกสารที่เข้ารหัสไว้" value={2400000} suffix="+" />
          <StatBlock label="Uptime เฉลี่ย" value={99} suffix=".98%" />
        </div>
      </section>
    </>
  );
}

// ---------------------------------------------
// APPS PAGE
// ---------------------------------------------
const APPS = [
  { icon: Calculator, name: "AccounTrack", tag: "บัญชี", desc: "บันทึกบัญชี กระทบยอด และปิดงบรายเดือนอัตโนมัติ พร้อมส่งออกรายงานภาษี" },
  { icon: Scale, name: "LexCase", tag: "กฎหมาย", desc: "จัดการคดีความ ติดตามนัดศาล และจัดเก็บเอกสารคดีแบบเข้ารหัสรายลูกความ" },
  { icon: Landmark, name: "TaxPlan Pro", tag: "วางแผนภาษี", desc: "จำลองสถานการณ์ภาษีหลายรูปแบบ เปรียบเทียบทางเลือกก่อนยื่นจริง" },
  { icon: LineChart, name: "FinInsight", tag: "วิเคราะห์การเงิน", desc: "แดชบอร์ดวิเคราะห์งบการเงินและกระแสเงินสดแบบเรียลไทม์" },
  { icon: FileSignature, name: "SignFlow", tag: "เอกสาร", desc: "ลงนามอิเล็กทรอนิกส์ที่มีผลทางกฎหมาย พร้อมประวัติการอนุมัติ" },
  { icon: FolderLock, name: "VaultDocs", tag: "จัดเก็บเอกสาร", desc: "คลังเอกสารกลางเข้ารหัสระดับองค์กร ค้นหาไฟล์ได้ในไม่กี่วินาที" },
  { icon: Receipt, name: "InvoiceHub", tag: "ออกใบแจ้งหนี้", desc: "สร้างและติดตามใบแจ้งหนี้ลูกค้า เชื่อมกับระบบบัญชีอัตโนมัติ" },
  { icon: MessageSquare, name: "ClientPortal", tag: "พอร์ทัลลูกค้า", desc: "ช่องทางสื่อสารและแชร์เอกสารกับลูกค้าอย่างปลอดภัยในที่เดียว" },
];

const APP_PAGE_MAP = {
  AccounTrack: { key: "accounting", color: COLORS.blue, soft: COLORS.blueSoft, soft2: COLORS.blueSoft2 },
  LexCase: { key: "lexcase", color: COLORS.orange, soft: COLORS.orangeSoft, soft2: COLORS.orangeSoft2 },
  "TaxPlan Pro": { key: "taxplan", color: COLORS.green, soft: COLORS.greenSoft, soft2: COLORS.greenSoft2 },
  FinInsight: { key: "fininsight", color: COLORS.purple, soft: COLORS.purpleSoft, soft2: COLORS.purpleSoft2 },
};

function AppsPage({ setPage }) {
  return (
    <div style={{ position: "relative" }}>
      <DotGridPattern style={{ top: 60, left: 0, color: COLORS.red, opacity: 0.14 }} />
      <PageHero eyebrow="แอปทั้งหมด" title="ชุดแอปพลิเคชัน" gradientWord="สำหรับทุกงานในสำนักงาน" desc="เลือกใช้เฉพาะแอปที่จำเป็น หรือรวมทุกแอปไว้ในแพ็กเกจเดียว ทุกแอปเชื่อมข้อมูลถึงกันและเข้ารหัสเหมือนกันทั้งหมด" />
      <section style={{ position: "relative", zIndex: 2, maxWidth: 1180, margin: "0 auto", padding: "20px 24px 100px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 18 }}>
        {APPS.map((app, i) => {
          const mapped = APP_PAGE_MAP[app.name];
          return (
            <FeatureCard
              key={app.name}
              delay={i * 40}
              icon={app.icon}
              eyebrow={app.tag}
              title={app.name}
              desc={app.desc}
              color={mapped ? mapped.color : COLORS.red}
              soft={mapped ? mapped.soft : COLORS.redSoft}
              soft2={mapped ? mapped.soft2 : COLORS.redSoft2}
              onClick={mapped ? () => setPage(mapped.key) : undefined}
            />
          );
        })}
      </section>
    </div>
  );
}

// ---------------------------------------------
// LEXCASE PAGE — dedicated product page, orange theme
// ---------------------------------------------
const LEXCASE_FEATURES = [
  { icon: Scale, title: "จัดการคดีความเป็นระบบ", desc: "รวมข้อมูลคดี คู่ความ และเอกสารทั้งหมดไว้ในหน้าเดียวต่อคดี ค้นหาย้อนหลังได้ทันที" },
  { icon: History, title: "ไทม์ไลน์คดีอัตโนมัติ", desc: "บันทึกความเคลื่อนไหวของคดีตามลำดับเวลา ตั้งแต่รับเรื่องจนถึงคำพิพากษา" },
  { icon: FolderLock, title: "แยกพื้นที่เอกสารรายลูกความ", desc: "เอกสารของลูกความแต่ละรายถูกเข้ารหัสและแยกจากกันโดยสมบูรณ์" },
  { icon: FileSignature, title: "ติดตามนัดศาลและกำหนดเวลา", desc: "แจ้งเตือนวันนัดพิจารณาคดีและกำหนดยื่นเอกสารล่วงหน้าอัตโนมัติ" },
  { icon: Users, title: "มอบหมายงานในทีมกฎหมาย", desc: "แบ่งงานให้ทนายความและผู้ช่วยตามคดี พร้อมติดตามความคืบหน้า" },
  { icon: Receipt, title: "บันทึกชั่วโมงทำงานต่อคดี", desc: "คิดค่าบริการตามชั่วโมงทำงานจริง และออกใบแจ้งหนี้แยกตามคดีได้ทันที" },
];

function LexCasePage({ setPage }) {
  return (
    <div style={{ position: "relative" }}>
      {/* Orange ambient backdrop, unique to this product page */}
      <div className="float-slow" style={{
        position: "absolute", top: -240, left: -140, width: 560, height: 560,
        background: "radial-gradient(circle, rgba(249,115,22,0.16) 0%, rgba(249,115,22,0) 70%)",
        filter: "blur(10px)", pointerEvents: "none",
      }} />
      <div className="float-slower" style={{
        position: "absolute", top: -160, right: -160, width: 560, height: 560,
        background: "radial-gradient(circle, rgba(194,65,12,0.12) 0%, rgba(194,65,12,0) 70%)",
        filter: "blur(10px)", pointerEvents: "none",
      }} />
      <DotGridPattern style={{ top: 100, right: 0, color: COLORS.orange, opacity: 0.16 }} />

      <header style={{ position: "relative", zIndex: 2, maxWidth: 860, margin: "0 auto", textAlign: "center", padding: "90px 24px 30px" }}>
        <SectionEyebrow soft={COLORS.orangeSoft} soft2={COLORS.orangeSoft2} colorDark={COLORS.orangeDark}>
          <Scale size={13} /> LexCase · แอปสำหรับสำนักงานกฎหมายโดยเฉพาะ
        </SectionEyebrow>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.18, margin: 0 }}>
          จัดการคดีความอย่างเป็นระบบ<br />
          <span style={{ background: GRADIENT_ORANGE, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            ไม่พลาดทุกนัดสำคัญ
          </span>
        </h1>
        <p style={{ marginTop: 20, fontSize: "1.02rem", color: COLORS.textDim, maxWidth: 580, margin: "20px auto 0", lineHeight: 1.7 }}>
          LexCase ออกแบบมาเพื่อทนายความและสำนักงานกฎหมายโดยเฉพาะ ตั้งแต่การจัดการคดี เอกสารลูกความ
          ไปจนถึงการติดตามนัดศาล ทุกข้อมูลเข้ารหัสและแยกเก็บเป็นรายคดี
        </p>
        <div style={{ marginTop: 32, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <OpenAppButton appName="LexCase" gradient={GRADIENT_ORANGE} soft={COLORS.orangeSoft} shadow="249,115,22" />
          <GhostButton onClick={() => setPage("contact")}>ขอเดโมสำหรับสำนักงาน</GhostButton>
        </div>
        <div style={{ marginTop: 40, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {["ทนายความ", "ผู้ช่วยทนายความ", "สำนักงานกฎหมายขนาดเล็ก-กลาง"].map((r) => (
            <div key={r} style={{ border: `1px solid ${COLORS.orangeSoft2}`, borderRadius: 999, padding: "8px 16px", fontSize: "0.85rem", fontWeight: 600, color: COLORS.orangeDark, background: COLORS.orangeSoft, whiteSpace: "nowrap" }}>
              {r}
            </div>
          ))}
        </div>
      </header>

      <section style={{ position: "relative", zIndex: 2, maxWidth: 1180, margin: "0 auto", padding: "60px 24px 90px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 18 }}>
        {LEXCASE_FEATURES.map((f, i) => (
          <FeatureCard key={f.title} delay={i * 60} icon={f.icon} eyebrow="LexCase" title={f.title} desc={f.desc} color={COLORS.orange} soft={COLORS.orangeSoft} soft2={COLORS.orangeSoft2} />
        ))}
      </section>

      <section style={{ position: "relative", zIndex: 2, borderTop: `1px solid ${COLORS.cardBorder}`, borderBottom: `1px solid ${COLORS.cardBorder}`, background: COLORS.orangeSoft }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "50px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 32 }}>
          <StatBlock label="คดีที่จัดการอยู่ในระบบ" value={41000} suffix="+" />
          <StatBlock label="สำนักงานกฎหมายที่ใช้งาน" value={860} suffix="+" />
          <StatBlock label="เวลาที่ประหยัดได้ต่อคดี" value={4} suffix=" ชม./สัปดาห์" />
        </div>
      </section>

      <section style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "60px 24px 100px" }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: 14 }}>พร้อมให้ทีมกฎหมายของคุณทำงานง่ายขึ้น</div>
        <p style={{ color: COLORS.textDim, maxWidth: 480, margin: "0 auto 26px", lineHeight: 1.7 }}>เริ่มทดลองใช้ LexCase ฟรี 14 วัน ไม่ต้องใช้บัตรเครดิต</p>
        <PrimaryButton gradient={GRADIENT_ORANGE} shadow="249,115,22" style={{ margin: "0 auto" }} onClick={() => setPage("signup")}>
          เริ่มใช้ LexCase <ArrowRight size={16} />
        </PrimaryButton>
      </section>
    </div>
  );
}

// ---------------------------------------------
// Generic themed app-page builder (used by the 3 pages below)
// ---------------------------------------------
function AppProductPage({
  setPage, appKey, icon: HeroIcon, eyebrowLabel, titleLine1, gradientWordLine2, desc,
  gradient, soft, soft2, colorDark, shadow, roleChips, features, stats, closingTitle, closingDesc,
}) {
  return (
    <div style={{ position: "relative" }}>
      <div className="float-slow" style={{
        position: "absolute", top: -240, left: -140, width: 560, height: 560,
        background: `radial-gradient(circle, ${soft2} 0%, transparent 70%)`,
        filter: "blur(10px)", pointerEvents: "none",
      }} />
      <DotGridPattern style={{ top: 100, right: 0, color: colorDark, opacity: 0.14 }} />

      <header style={{ position: "relative", zIndex: 2, maxWidth: 860, margin: "0 auto", textAlign: "center", padding: "90px 24px 30px" }}>
        <SectionEyebrow soft={soft} soft2={soft2} colorDark={colorDark}>
          <HeroIcon size={13} /> {eyebrowLabel}
        </SectionEyebrow>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.18, margin: 0 }}>
          {titleLine1}<br />
          <span style={{ background: gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {gradientWordLine2}
          </span>
        </h1>
        <p style={{ marginTop: 20, fontSize: "1.02rem", color: COLORS.textDim, maxWidth: 580, margin: "20px auto 0", lineHeight: 1.7 }}>{desc}</p>
        <div style={{ marginTop: 32, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <OpenAppButton appName={eyebrowLabel.split(" ·")[0]} gradient={gradient} soft={soft} shadow={shadow} />
          <GhostButton onClick={() => setPage("contact")}>ขอเดโมสำหรับสำนักงาน</GhostButton>
        </div>
        <div style={{ marginTop: 40, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {roleChips.map((r) => (
            <div key={r} style={{ border: `1px solid ${soft2}`, borderRadius: 999, padding: "8px 16px", fontSize: "0.85rem", fontWeight: 600, color: colorDark, background: soft, whiteSpace: "nowrap" }}>{r}</div>
          ))}
        </div>
      </header>

      <section style={{ position: "relative", zIndex: 2, maxWidth: 1180, margin: "0 auto", padding: "60px 24px 90px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 18 }}>
        {features.map((f, i) => (
          <FeatureCard key={f.title} delay={i * 60} icon={f.icon} eyebrow={eyebrowLabel.split(" ·")[0]} title={f.title} desc={f.desc} color={colorDark} soft={soft} soft2={soft2} />
        ))}
      </section>

      <section style={{ position: "relative", zIndex: 2, borderTop: `1px solid ${COLORS.cardBorder}`, borderBottom: `1px solid ${COLORS.cardBorder}`, background: soft }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "50px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 32 }}>
          {stats.map((s) => <StatBlock key={s.label} label={s.label} value={s.value} suffix={s.suffix} />)}
        </div>
      </section>

      <section style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "60px 24px 100px" }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: 14 }}>{closingTitle}</div>
        <p style={{ color: COLORS.textDim, maxWidth: 480, margin: "0 auto 26px", lineHeight: 1.7 }}>{closingDesc}</p>
        <PrimaryButton gradient={gradient} shadow={shadow} style={{ margin: "0 auto" }} onClick={() => setPage("signup")}>
          เริ่มใช้ {eyebrowLabel.split(" ·")[0]} <ArrowRight size={16} />
        </PrimaryButton>
      </section>
    </div>
  );
}

function AccountingPage({ setPage }) {
  return (
    <AppProductPage
      setPage={setPage}
      icon={Calculator}
      eyebrowLabel="AccounTrack · แอปบัญชีสำหรับสำนักงาน"
      titleLine1="ปิดงบไม่ต้องเร่ง"
      gradientWordLine2="บัญชีแม่นยำทุกเดือน"
      desc="AccounTrack ช่วยบันทึกบัญชี กระทบยอด และปิดงบรายเดือนโดยอัตโนมัติ พร้อมส่งออกรายงานภาษีได้ในไม่กี่คลิก"
      gradient={GRADIENT_BLUE} soft={COLORS.blueSoft} soft2={COLORS.blueSoft2} colorDark={COLORS.blueDark} shadow="14,165,233"
      roleChips={["นักบัญชี", "สำนักงานบัญชี", "เจ้าของกิจการ"]}
      features={[
        { icon: Receipt, title: "บันทึกรายรับ-รายจ่ายอัตโนมัติ", desc: "ดึงข้อมูลจากใบเสร็จและใบแจ้งหนี้ ลดการคีย์ข้อมูลซ้ำซ้อน" },
        { icon: Calculator, title: "กระทบยอดบัญชีธนาคาร", desc: "จับคู่รายการธนาคารกับสมุดบัญชีอัตโนมัติ ลดความผิดพลาด" },
        { icon: FileCheck2, title: "ปิดงบรายเดือนในไม่กี่นาที", desc: "สร้างงบทดลองและงบกำไรขาดทุนพร้อมส่งออกทันที" },
        { icon: Users, title: "แชร์งานในทีมบัญชี", desc: "มอบหมายงานลูกค้าแต่ละรายให้ทีมงาน พร้อมติดตามสถานะ" },
        { icon: FolderLock, title: "จัดเก็บเอกสารบัญชีเข้ารหัส", desc: "ใบเสร็จและเอกสารประกอบบัญชีถูกเข้ารหัสและค้นหาได้ง่าย" },
        { icon: LineChart, title: "รายงานสรุปสำหรับลูกค้า", desc: "สร้างรายงานสรุปการเงินที่เข้าใจง่ายส่งให้ลูกค้าได้ทันที" },
      ]}
      stats={[
        { label: "รายการบัญชีที่บันทึกต่อเดือน", value: 620000, suffix: "+" },
        { label: "สำนักงานบัญชีที่ใช้งาน", value: 1450, suffix: "+" },
        { label: "เวลาที่ประหยัดได้ต่อการปิดงบ", value: 6, suffix: " ชม./เดือน" },
      ]}
      closingTitle="ปิดงบเดือนนี้ให้เสร็จเร็วขึ้น"
      closingDesc="เริ่มทดลองใช้ AccounTrack ฟรี 14 วัน ไม่ต้องใช้บัตรเครดิต"
    />
  );
}

function TaxPlanPage({ setPage }) {
  return (
    <AppProductPage
      setPage={setPage}
      icon={Landmark}
      eyebrowLabel="TaxPlan Pro · แอปวางแผนภาษี"
      titleLine1="วางแผนภาษีล่วงหน้า"
      gradientWordLine2="ก่อนยื่นจริงทุกครั้ง"
      desc="TaxPlan Pro ช่วยจำลองสถานการณ์ภาษีหลายรูปแบบ เปรียบเทียบทางเลือก และวางแผนลดหย่อนก่อนถึงกำหนดยื่นจริง"
      gradient={GRADIENT_GREEN} soft={COLORS.greenSoft} soft2={COLORS.greenSoft2} colorDark={COLORS.greenDark} shadow="22,163,74"
      roleChips={["นักวางแผนภาษี", "นักบัญชี", "ที่ปรึกษาการเงิน"]}
      features={[
        { icon: Landmark, title: "จำลองสถานการณ์ภาษี", desc: "เปรียบเทียบแผนภาษีหลายรูปแบบก่อนตัดสินใจยื่นจริง" },
        { icon: Calculator, title: "คำนวณค่าลดหย่อนอัตโนมัติ", desc: "อัปเดตเกณฑ์ลดหย่อนล่าสุด คำนวณให้ทันทีแบบไม่ต้องจำเอง" },
        { icon: History, title: "ติดตามกำหนดยื่นภาษี", desc: "แจ้งเตือนกำหนดยื่นภาษีแต่ละประเภทล่วงหน้าอัตโนมัติ" },
        { icon: FileCheck2, title: "สร้างรายงานสรุปแผนภาษี", desc: "ส่งออกรายงานเปรียบเทียบแผนให้ลูกค้าตัดสินใจได้ง่ายขึ้น" },
        { icon: FolderLock, title: "จัดเก็บเอกสารภาษีเข้ารหัส", desc: "เอกสารประกอบการยื่นภาษีถูกเข้ารหัสและเรียกดูย้อนหลังได้" },
        { icon: Users, title: "ทำงานร่วมกับทีมบัญชี", desc: "เชื่อมข้อมูลกับ AccounTrack เพื่อวางแผนภาษีจากข้อมูลจริง" },
      ]}
      stats={[
        { label: "แผนภาษีที่จำลองไว้", value: 98000, suffix: "+" },
        { label: "ที่ปรึกษาภาษีที่ใช้งาน", value: 2100, suffix: "+" },
        { label: "ค่าเฉลี่ยภาษีที่ประหยัดได้ต่อแผน", value: 12, suffix: "%" },
      ]}
      closingTitle="วางแผนภาษีปีนี้ให้รอบคอบขึ้น"
      closingDesc="เริ่มทดลองใช้ TaxPlan Pro ฟรี 14 วัน ไม่ต้องใช้บัตรเครดิต"
    />
  );
}

function FinInsightPage({ setPage }) {
  return (
    <AppProductPage
      setPage={setPage}
      icon={LineChart}
      eyebrowLabel="FinInsight · แอปวิเคราะห์การเงิน"
      titleLine1="เห็นภาพการเงินชัดเจน"
      gradientWordLine2="ตัดสินใจได้เร็วขึ้น"
      desc="FinInsight รวมแดชบอร์ดวิเคราะห์งบการเงินและกระแสเงินสดแบบเรียลไทม์ ช่วยให้นักวิเคราะห์การเงินมองเห็นภาพรวมได้ในที่เดียว"
      gradient={GRADIENT_PURPLE} soft={COLORS.purpleSoft} soft2={COLORS.purpleSoft2} colorDark={COLORS.purpleDark} shadow="139,92,246"
      roleChips={["นักวิเคราะห์การเงิน", "ผู้บริหารสำนักงาน", "ที่ปรึกษาการลงทุน"]}
      features={[
        { icon: LineChart, title: "แดชบอร์ดวิเคราะห์งบการเงิน", desc: "ดูอัตราส่วนทางการเงินสำคัญและแนวโน้มได้แบบเรียลไทม์" },
        { icon: Receipt, title: "ติดตามกระแสเงินสด", desc: "คาดการณ์กระแสเงินสดล่วงหน้าเพื่อวางแผนสภาพคล่อง" },
        { icon: FileCheck2, title: "สร้างรายงานสำหรับผู้บริหาร", desc: "สรุปผลการดำเนินงานเป็นรายงานที่อ่านง่ายส่งได้ทันที" },
        { icon: History, title: "เปรียบเทียบผลประกอบการย้อนหลัง", desc: "ดูแนวโน้มย้อนหลังหลายปีเพื่อประกอบการตัดสินใจ" },
        { icon: Users, title: "แชร์ผลวิเคราะห์กับทีม", desc: "ส่งรายงานและแดชบอร์ดให้ทีมหรือผู้บริหารดูพร้อมกันได้" },
        { icon: FolderLock, title: "เชื่อมข้อมูลจากบัญชีโดยตรง", desc: "ดึงข้อมูลจาก AccounTrack มาวิเคราะห์ได้โดยไม่ต้องคีย์ซ้ำ" },
      ]}
      stats={[
        { label: "รายงานที่สร้างต่อเดือน", value: 54000, suffix: "+" },
        { label: "นักวิเคราะห์การเงินที่ใช้งาน", value: 3200, suffix: "+" },
        { label: "เวลาที่ประหยัดได้ต่อรายงาน", value: 3, suffix: " ชม." },
      ]}
      closingTitle="เห็นภาพการเงินที่ชัดเจนขึ้นวันนี้"
      closingDesc="เริ่มทดลองใช้ FinInsight ฟรี 14 วัน ไม่ต้องใช้บัตรเครดิต"
    />
  );
}

// ---------------------------------------------
// PRICING PAGE
// ---------------------------------------------
const PLANS = [
  { name: "บุคคลทั่วไป", price: "ฟรี", period: "", features: ["1 ผู้ใช้งาน", "จัดเก็บเอกสารสูงสุด 2GB", "แอปคำนวณภาษีเบื้องต้น", "รองรับผ่านอีเมล"] },
  { name: "ทีมงาน", price: "฿990", period: "/ผู้ใช้/เดือน", highlight: true, features: ["ผู้ใช้งานไม่จำกัด", "จัดเก็บเอกสาร 100GB ต่อทีม", "แอปครบทุกวิชาชีพ", "Audit trail และสิทธิ์ตามบทบาท", "รองรับผ่านแชทสด"] },
  { name: "องค์กร", price: "ติดต่อฝ่ายขาย", period: "", features: ["จัดเก็บข้อมูลไม่จำกัด", "เชื่อมต่อระบบภายในองค์กร (SSO)", "ผู้ดูแลระบบและ SLA เฉพาะราย", "ที่ปรึกษาความปลอดภัยส่วนตัว"] },
];

function PricingPage({ setPage }) {
  return (
    <div style={{ position: "relative" }}>
      <PlusPattern style={{ top: 60, left: 0, color: COLORS.red, opacity: 0.12 }} />
      <PageHero eyebrow="ราคา" title="เลือกแพ็กเกจที่" gradientWord="เหมาะกับขนาดของคุณ" desc="เริ่มต้นฟรีสำหรับใช้งานส่วนตัว หรืออัปเกรดเป็นทีมเมื่อสำนักงานของคุณเติบโตขึ้น ยกเลิกหรือเปลี่ยนแพ็กเกจได้ทุกเมื่อ" />
      <section style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", padding: "20px 24px 100px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {PLANS.map((plan) => (
          <div key={plan.name} style={{
            background: COLORS.card, borderRadius: 20, padding: "30px 26px",
            border: plan.highlight ? `2px solid ${COLORS.red}` : `1px solid ${COLORS.cardBorder}`,
            boxShadow: plan.highlight ? `0 20px 40px -18px ${COLORS.redSoft2}` : "0 1px 2px rgba(20,18,30,0.04)",
            display: "flex", flexDirection: "column", gap: 18, position: "relative",
          }}>
            {plan.highlight && (
              <div style={{ position: "absolute", top: -12, left: 26, background: COLORS.red, color: "#fff", fontSize: "0.7rem", fontWeight: 700, padding: "4px 12px", borderRadius: 999 }}>
                ยอดนิยม
              </div>
            )}
            <div style={{ fontSize: "0.8rem", fontWeight: 700, color: COLORS.red }}>{plan.name}</div>
            <div>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2rem", fontWeight: 700 }}>{plan.price}</span>
              <span style={{ fontSize: "0.85rem", color: COLORS.textDim }}>{plan.period}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {plan.features.map((f) => (
                <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: "0.88rem", color: COLORS.textDim }}>
                  <Check size={16} color={COLORS.red} style={{ flexShrink: 0, marginTop: 2 }} /> {f}
                </div>
              ))}
            </div>
            {plan.highlight ? (
              <PrimaryButton style={{ justifyContent: "center", width: "100%" }}>เริ่มใช้งาน <ArrowRight size={16} /></PrimaryButton>
            ) : (
              <GhostButton style={{ width: "100%" }} onClick={() => setPage("contact")}>
                {plan.price === "ติดต่อฝ่ายขาย" ? "ติดต่อฝ่ายขาย" : "เริ่มใช้งานฟรี"}
              </GhostButton>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

// ---------------------------------------------
// SECURITY PAGE
// ---------------------------------------------
const SECURITY_ITEMS = [
  { icon: Lock, title: "เข้ารหัสแบบ AES-256", desc: "ข้อมูลทุกชิ้นเข้ารหัสขณะจัดเก็บ และ TLS 1.3 ขณะส่งผ่านเครือข่าย" },
  { icon: Fingerprint, title: "ยืนยันตัวตนหลายชั้น", desc: "รองรับ 2FA และการเข้าสู่ระบบผ่านอุปกรณ์ที่ได้รับอนุญาตเท่านั้น" },
  { icon: ServerCog, title: "แยกพื้นที่จัดเก็บรายสำนักงาน", desc: "ข้อมูลของแต่ละสำนักงานถูกแยกจากกันโดยสมบูรณ์ ไม่ปะปนกัน" },
  { icon: History, title: "บันทึกประวัติการเข้าถึงทั้งหมด", desc: "Audit log ทุกการเปิดอ่าน แก้ไข หรือดาวน์โหลดเอกสาร ย้อนหลังตรวจสอบได้" },
  { icon: ShieldCheck, title: "ตรวจสอบความปลอดภัยสม่ำเสมอ", desc: "ทดสอบเจาะระบบ (penetration test) และประเมินความเสี่ยงเป็นประจำทุกไตรมาส" },
  { icon: KeyRound, title: "จัดการกุญแจเข้ารหัสแยกจากข้อมูล", desc: "กุญแจเข้ารหัสถูกเก็บแยกจากตัวข้อมูล ลดความเสี่ยงหากมีการเข้าถึงโดยไม่ได้รับอนุญาต" },
];

function SecurityPage() {
  return (
    <div style={{ position: "relative" }}>
      <DotGridPattern style={{ top: 80, right: 0, color: COLORS.red, opacity: 0.14 }} />
      <PageHero eyebrow="ความปลอดภัย" title="ข้อมูลของคุณ" gradientWord="ถูกปกป้องทุกชั้น" desc="ความปลอดภัยของข้อมูลลูกค้าคือหัวใจของ Obfice Stack เราออกแบบระบบตั้งแต่ต้นให้เข้ารหัสโดยค่าเริ่มต้น ไม่ใช่ตัวเลือกเสริม" />
      <section style={{ position: "relative", zIndex: 2, maxWidth: 1180, margin: "0 auto", padding: "20px 24px 100px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
        {SECURITY_ITEMS.map((item, i) => (
          <FeatureCard key={item.title} delay={i * 40} icon={item.icon} eyebrow="ความปลอดภัย" title={item.title} desc={item.desc} />
        ))}
      </section>
    </div>
  );
}

// ---------------------------------------------
// RESOURCES + FAQ PAGE
// ---------------------------------------------
const RESOURCE_CARDS = [
  { icon: BookOpen, title: "คู่มือเริ่มต้นใช้งาน", desc: "ขั้นตอนตั้งค่าทีมและนำเข้าข้อมูลครั้งแรกแบบละเอียด" },
  { icon: LifeBuoy, title: "ศูนย์ช่วยเหลือ", desc: "ค้นหาวิธีแก้ปัญหาที่พบบ่อย หรือติดต่อทีมสนับสนุน" },
  { icon: Newspaper, title: "บล็อกความรู้ภาษีและกฎหมาย", desc: "อัปเดตกฎระเบียบและเทคนิคการทำงานสำหรับสำนักงานวิชาชีพ" },
];

const FAQS = [
  { q: "ข้อมูลที่อัปโหลดถูกเข้ารหัสอย่างไร", a: "ทุกไฟล์ถูกเข้ารหัสด้วยมาตรฐาน AES-256 ก่อนจัดเก็บ และส่งผ่านการเชื่อมต่อ TLS 1.3 เสมอ กุญแจเข้ารหัสถูกแยกเก็บจากตัวข้อมูล" },
  { q: "สามารถยกเลิกสมาชิกได้ทุกเมื่อหรือไม่", a: "ได้ครับ สามารถยกเลิกหรือปรับเปลี่ยนแพ็กเกจได้ทุกเมื่อผ่านหน้าตั้งค่าบัญชี โดยไม่มีค่าปรับ" },
  { q: "เหมาะกับสำนักงานขนาดเล็กหรือไม่", a: "เหมาะมากครับ แพ็กเกจ 'ทีมงาน' คิดค่าบริการตามจำนวนผู้ใช้จริง จึงเริ่มต้นได้ตั้งแต่ทีม 2-3 คน" },
  { q: "ข้อมูลลูกค้าของแต่ละสำนักงานปะปนกันหรือไม่", a: "ไม่ปะปนกันครับ ระบบแยกพื้นที่จัดเก็บข้อมูลของแต่ละสำนักงานออกจากกันโดยสมบูรณ์" },
  { q: "มีโปรแกรมให้ดาวน์โหลดใช้งานแบบออฟไลน์หรือไม่", a: "มีครับ รองรับทั้งโปรแกรมสำหรับ Windows, macOS และส่วนขยายเบราว์เซอร์ Web Clipper สำหรับบันทึกหน้าเว็บเข้าคลังเอกสารโดยตรง" },
  { q: "หากลืมรหัสผ่านต้องทำอย่างไร", a: "สามารถรีเซ็ตรหัสผ่านผ่านอีเมลที่ลงทะเบียนไว้ หรือติดต่อฝ่ายสนับสนุนหากเปิดใช้การยืนยันตัวตนหลายชั้น" },
];

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div style={{ border: `1px solid ${COLORS.cardBorder}`, borderRadius: 14, overflow: "hidden" }}>
      <button onClick={onClick} style={{
        width: "100%", background: isOpen ? COLORS.cardAlt : "#fff", border: "none", cursor: "pointer",
        padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between",
        textAlign: "left", fontSize: "0.95rem", fontWeight: 600, color: COLORS.text,
      }}>
        {q}
        <ChevronDown size={18} color={COLORS.red} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 200ms ease", flexShrink: 0, marginLeft: 12 }} />
      </button>
      {isOpen && <div style={{ padding: "0 20px 18px", fontSize: "0.88rem", color: COLORS.textDim, lineHeight: 1.7 }}>{a}</div>}
    </div>
  );
}

function ResourcesPage() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div style={{ position: "relative" }}>
      <PlusPattern style={{ bottom: 30, right: 0, color: COLORS.red, opacity: 0.12 }} />
      <PageHero eyebrow="แหล่งข้อมูล" title="คู่มือ ความช่วยเหลือ" gradientWord="และคำถามที่พบบ่อย" desc="รวมทุกอย่างที่ช่วยให้ทีมของคุณเริ่มต้นและใช้งาน Obfice Stack ได้อย่างราบรื่น" />

      <section style={{ position: "relative", zIndex: 2, maxWidth: 1000, margin: "0 auto", padding: "10px 24px 50px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
        {RESOURCE_CARDS.map((r, i) => (
          <FeatureCard key={r.title} delay={i * 60} icon={r.icon} eyebrow="แหล่งข้อมูล" title={r.title} desc={r.desc} />
        ))}
      </section>

      <section style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto", padding: "20px 24px 100px" }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.3rem", marginBottom: 20, textAlign: "center" }}>คำถามที่พบบ่อย</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </section>
    </div>
  );
}

// ---------------------------------------------
// DOWNLOAD PAGE
// ---------------------------------------------
const DOWNLOADS = [
  { icon: Monitor, name: "Windows", version: "เวอร์ชัน 3.2.0", size: "148 MB", points: ["รองรับ Windows 10 ขึ้นไป", "ซิงก์อัตโนมัติกับคลังเอกสารบนคลาวด์", "แจ้งเตือนบนเดสก์ท็อป"] },
  { icon: Laptop, name: "macOS", version: "เวอร์ชัน 3.2.0", size: "162 MB", points: ["รองรับ macOS 12 ขึ้นไป", "รองรับชิป Apple Silicon และ Intel", "ซิงก์อัตโนมัติกับคลังเอกสารบนคลาวด์"] },
  { icon: Puzzle, name: "Web Clipper", version: "เวอร์ชัน 1.8.0", size: "ส่วนขยายเบราว์เซอร์", points: ["บันทึกหน้าเว็บและเอกสารออนไลน์เข้าคลังทันที", "รองรับ Chrome และ Edge", "เข้ารหัสข้อมูลก่อนอัปโหลดทุกครั้ง"] },
];

function DownloadCard({ d, delay }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 20, padding: "30px 26px",
      display: "flex", flexDirection: "column", gap: 16,
      opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(18px)",
      transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
    }}>
      <div style={{ width: 48, height: 48, borderRadius: 12, background: COLORS.redSoft, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <d.icon size={22} color={COLORS.red} />
      </div>
      <div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2rem", fontWeight: 700 }}>{d.name}</div>
        <div style={{ fontSize: "0.8rem", color: COLORS.textDim, marginTop: 4 }}>{d.version} · {d.size}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {d.points.map((p) => (
          <div key={p} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: "0.85rem", color: COLORS.textDim }}>
            <Check size={15} color={COLORS.red} style={{ flexShrink: 0, marginTop: 2 }} /> {p}
          </div>
        ))}
      </div>
      <PrimaryButton style={{ justifyContent: "center", width: "100%", marginTop: 4 }}>
        ดาวน์โหลด <DownloadIcon size={16} />
      </PrimaryButton>
    </div>
  );
}

function DownloadPage() {
  return (
    <div style={{ position: "relative" }}>
      <DotGridPattern style={{ top: 60, left: 0, color: COLORS.red, opacity: 0.14 }} />
      <PageHero eyebrow="ดาวน์โหลด" title="ใช้งาน Obfice Stack" gradientWord="บนอุปกรณ์ที่คุณถนัด" desc="เลือกโปรแกรมสำหรับเดสก์ท็อป หรือติดตั้งส่วนขยายเบราว์เซอร์เพื่อบันทึกเอกสารจากเว็บได้ทันที ทุกช่องทางเข้ารหัสข้อมูลมาตรฐานเดียวกัน" />
      <section style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", padding: "20px 24px 100px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {DOWNLOADS.map((d, i) => (
          <DownloadCard key={d.name} d={d} delay={i * 100} />
        ))}
      </section>
    </div>
  );
}

// ---------------------------------------------
// CONTACT PAGE
// ---------------------------------------------
function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });
  const [sent, setSent] = useState(false);

  const inputStyle = {
    width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${COLORS.cardBorder}`,
    fontSize: "0.9rem", color: COLORS.text, fontFamily: "inherit", outline: "none", boxSizing: "border-box",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ position: "relative" }}>
      <DotGridPattern style={{ top: 60, left: 0, color: COLORS.red, opacity: 0.14 }} />
      <PageHero eyebrow="ติดต่อเรา" title="ทีมงานพร้อม" gradientWord="ตอบทุกคำถาม" desc="ไม่ว่าจะสอบถามแพ็กเกจ ขอเดโม หรือแจ้งปัญหาการใช้งาน ทีมงานของเราตอบกลับภายใน 1 วันทำการ" />
      <section style={{ position: "relative", zIndex: 2, maxWidth: 1000, margin: "0 auto", padding: "20px 24px 100px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
        <form onSubmit={handleSubmit} style={{ background: COLORS.card, border: `1px solid ${COLORS.cardBorder}`, borderRadius: 20, padding: "28px", display: "flex", flexDirection: "column", gap: 14 }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 10px" }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: COLORS.redSoft, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                <Check size={24} color={COLORS.red} />
              </div>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>ส่งข้อความเรียบร้อยแล้ว</div>
              <div style={{ fontSize: "0.88rem", color: COLORS.textDim }}>ทีมงานจะติดต่อกลับภายใน 1 วันทำการ</div>
            </div>
          ) : (
            <>
              <div>
                <label style={{ fontSize: "0.82rem", fontWeight: 600, marginBottom: 6, display: "block" }}>ชื่อ-นามสกุล</label>
                <input style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="เช่น สมชาย ใจดี" />
              </div>
              <div>
                <label style={{ fontSize: "0.82rem", fontWeight: 600, marginBottom: 6, display: "block" }}>อีเมล</label>
                <input style={inputStyle} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@office.com" />
              </div>
              <div>
                <label style={{ fontSize: "0.82rem", fontWeight: 600, marginBottom: 6, display: "block" }}>หัวข้อ</label>
                <select style={inputStyle} value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })}>
                  <option value="">เลือกหัวข้อ</option>
                  <option value="demo">ขอเดโมสินค้า</option>
                  <option value="pricing">สอบถามแพ็กเกจ</option>
                  <option value="support">แจ้งปัญหาการใช้งาน</option>
                  <option value="other">อื่นๆ</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: "0.82rem", fontWeight: 600, marginBottom: 6, display: "block" }}>ข้อความ</label>
                <textarea style={{ ...inputStyle, minHeight: 100, resize: "vertical" }} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="รายละเอียดที่ต้องการสอบถาม" />
              </div>
              <button type="submit" style={{
                background: GRADIENT_BRAND, color: "#fff", border: "none", borderRadius: 999,
                padding: "13px 26px", fontSize: "0.95rem", fontWeight: 700, cursor: "pointer",
                display: "flex", alignItems: "center", gap: 8, justifyContent: "center",
                width: "100%", marginTop: 6, boxShadow: "0 10px 24px -8px rgba(255,4,33,0.4)",
              }}>
                ส่งข้อความ <ArrowRight size={16} />
              </button>
            </>
          )}
        </form>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { icon: Mail, label: "อีเมล", value: "hello@deskvault.example" },
            { icon: Phone, label: "โทรศัพท์", value: "02-123-4567 (จ.-ศ. 9:00-18:00)" },
            { icon: MapPin, label: "ที่อยู่สำนักงาน", value: "ชั้น 12 อาคารตัวอย่าง ถนนสุขุมวิท กรุงเทพฯ" },
          ].map((c) => (
            <div key={c.label} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: COLORS.redSoft, border: `1px solid ${COLORS.redSoft2}`, borderRadius: 16, padding: "18px" }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <c.icon size={18} color={COLORS.red} />
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: COLORS.red }}>{c.label}</div>
                <div style={{ fontSize: "0.9rem", color: COLORS.text, marginTop: 3 }}>{c.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ---------------------------------------------
// AUTH PAGES — Signup / Login (with Google sign-in)
// ---------------------------------------------
function AuthShell({ children }) {
  return (
    <div style={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "70px 24px" }}>
      <DotGridPattern style={{ top: 40, left: 0, color: COLORS.red, opacity: 0.12 }} />
      <PlusPattern style={{ bottom: 20, right: 0, color: COLORS.red, opacity: 0.1 }} />
      <div className="fade-up" style={{
        position: "relative", zIndex: 2, width: "100%", maxWidth: 420, background: "#fff",
        border: `1px solid ${COLORS.cardBorder}`, borderRadius: 22, padding: "34px 30px",
        boxShadow: "0 20px 50px -20px rgba(20,18,30,0.15)",
      }}>
        {children}
      </div>
    </div>
  );
}

function GoogleAuthButton({ label, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
      background: "#fff", border: `1px solid ${COLORS.cardBorder}`, borderRadius: 999,
      padding: "11px 20px", fontSize: "0.9rem", fontWeight: 600, color: COLORS.text, cursor: "pointer",
    }}>
      <GoogleIcon size={18} /> {label}
    </button>
  );
}

function AuthDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "18px 0" }}>
      <div style={{ flex: 1, height: 1, background: COLORS.cardBorder }} />
      <span style={{ fontSize: "0.78rem", color: COLORS.textDim }}>หรือ</span>
      <div style={{ flex: 1, height: 1, background: COLORS.cardBorder }} />
    </div>
  );
}

function PasswordInput({ value, onChange, placeholder, inputStyle }) {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <input
        type={visible ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ ...inputStyle, paddingRight: 40 }}
      />
      <button
        type="button"
        onClick={() => setVisible(!visible)}
        style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: COLORS.textDim, display: "flex" }}
      >
        {visible ? <EyeOff size={17} /> : <Eye size={17} />}
      </button>
    </div>
  );
}

function SignupPage({ setPage }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [status, setStatus] = useState(null); // null | "email" | "google"

  const inputStyle = {
    width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${COLORS.cardBorder}`,
    fontSize: "0.9rem", color: COLORS.text, fontFamily: "inherit", outline: "none", boxSizing: "border-box",
  };

  if (status) {
    return (
      <AuthShell>
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: COLORS.redSoft, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
            <Check size={24} color={COLORS.red} />
          </div>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>
            {status === "google" ? "เชื่อมต่อกับ Google สำเร็จ" : "สร้างบัญชีสำเร็จ"}
          </div>
          <div style={{ fontSize: "0.88rem", color: COLORS.textDim, marginBottom: 20 }}>
            (ตัวอย่าง UI เท่านั้น ยังไม่เชื่อมระบบจริง) ยินดีต้อนรับสู่ Obfice Stack
          </div>
          <GhostButton onClick={() => setPage("home")} style={{ width: "100%" }}>กลับหน้าแรก</GhostButton>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.3rem", textAlign: "center", marginBottom: 4 }}>
        สร้างบัญชี Obfice Stack
      </div>
      <div style={{ fontSize: "0.85rem", color: COLORS.textDim, textAlign: "center", marginBottom: 22 }}>
        เริ่มใช้งานฟรี 14 วัน ไม่ต้องใช้บัตรเครดิต
      </div>

      <GoogleAuthButton label="สมัครด้วย Google" onClick={() => setStatus("google")} />
      <AuthDivider />

      <form onSubmit={(e) => { e.preventDefault(); setStatus("email"); }} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input style={inputStyle} placeholder="ชื่อ-นามสกุล" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input style={inputStyle} type="email" placeholder="อีเมล" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <PasswordInput inputStyle={inputStyle} placeholder="รหัสผ่าน" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <PasswordInput inputStyle={inputStyle} placeholder="ยืนยันรหัสผ่าน" value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} />
        <div style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: "0.8rem", color: COLORS.textDim }}>
          <input type="checkbox" required style={{ marginTop: 3 }} />
          <span>ฉันยอมรับข้อกำหนดการใช้งานและนโยบายความเป็นส่วนตัวของ Obfice Stack</span>
        </div>
        <button type="submit" style={{
          background: GRADIENT_BRAND, color: "#fff", border: "none", borderRadius: 999,
          padding: "12px 20px", fontSize: "0.92rem", fontWeight: 700, cursor: "pointer", marginTop: 4,
        }}>
          สร้างบัญชี
        </button>
      </form>

      <div style={{ textAlign: "center", fontSize: "0.85rem", color: COLORS.textDim, marginTop: 20 }}>
        มีบัญชีอยู่แล้ว?{" "}
        <span onClick={() => setPage("login")} style={{ color: COLORS.red, fontWeight: 600, cursor: "pointer" }}>เข้าสู่ระบบ</span>
      </div>
    </AuthShell>
  );
}

function LoginPage({ setPage }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState(null);

  const inputStyle = {
    width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${COLORS.cardBorder}`,
    fontSize: "0.9rem", color: COLORS.text, fontFamily: "inherit", outline: "none", boxSizing: "border-box",
  };

  if (status) {
    return (
      <AuthShell>
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: COLORS.redSoft, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
            <Check size={24} color={COLORS.red} />
          </div>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>
            {status === "google" ? "เข้าสู่ระบบด้วย Google สำเร็จ" : "เข้าสู่ระบบสำเร็จ"}
          </div>
          <div style={{ fontSize: "0.88rem", color: COLORS.textDim, marginBottom: 20 }}>
            (ตัวอย่าง UI เท่านั้น ยังไม่เชื่อมระบบจริง) ยินดีต้อนรับกลับ
          </div>
          <GhostButton onClick={() => setPage("home")} style={{ width: "100%" }}>กลับหน้าแรก</GhostButton>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.3rem", textAlign: "center", marginBottom: 4 }}>
        เข้าสู่ระบบ Obfice Stack
      </div>
      <div style={{ fontSize: "0.85rem", color: COLORS.textDim, textAlign: "center", marginBottom: 22 }}>
        ยินดีต้อนรับกลับ เข้าสู่ระบบเพื่อใช้งานต่อ
      </div>

      <GoogleAuthButton label="เข้าสู่ระบบด้วย Google" onClick={() => setStatus("google")} />
      <AuthDivider />

      <form onSubmit={(e) => { e.preventDefault(); setStatus("email"); }} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input style={inputStyle} type="email" placeholder="อีเมล" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <PasswordInput inputStyle={inputStyle} placeholder="รหัสผ่าน" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.8rem", color: COLORS.textDim }}>
          <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <input type="checkbox" /> จดจำฉัน
          </label>
          <span style={{ cursor: "pointer", color: COLORS.red, fontWeight: 600 }}>ลืมรหัสผ่าน?</span>
        </div>
        <button type="submit" style={{
          background: GRADIENT_BRAND, color: "#fff", border: "none", borderRadius: 999,
          padding: "12px 20px", fontSize: "0.92rem", fontWeight: 700, cursor: "pointer", marginTop: 4,
        }}>
          เข้าสู่ระบบ
        </button>
      </form>

      <div style={{ textAlign: "center", fontSize: "0.85rem", color: COLORS.textDim, marginTop: 20 }}>
        ยังไม่มีบัญชี?{" "}
        <span onClick={() => setPage("signup")} style={{ color: COLORS.red, fontWeight: 600, cursor: "pointer" }}>สมัครสมาชิก</span>
      </div>
    </AuthShell>
  );
}

// ---------------------------------------------
// ROOT APP
// ---------------------------------------------
export default function OfficeSuiteLanding() {
  const [page, setPage] = useState("home");

  const PAGES = {
    home: <HomePage setPage={setPage} />,
    apps: <AppsPage setPage={setPage} />,
    accounting: <AccountingPage setPage={setPage} />,
    lexcase: <LexCasePage setPage={setPage} />,
    taxplan: <TaxPlanPage setPage={setPage} />,
    fininsight: <FinInsightPage setPage={setPage} />,
    pricing: <PricingPage setPage={setPage} />,
    security: <SecurityPage />,
    resources: <ResourcesPage />,
    download: <DownloadPage />,
    contact: <ContactPage />,
    signup: <SignupPage setPage={setPage} />,
    login: <LoginPage setPage={setPage} />,
  };

  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh", fontFamily: "'Inter', sans-serif", color: COLORS.text, position: "relative", overflow: "hidden" }}>
      <MotionStyles />
      <Nav page={page} setPage={setPage} />
      {PAGES[page]}
      <Footer setPage={setPage} />
    </div>
  );
}

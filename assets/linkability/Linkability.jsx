// Linkability.jsx
// Sigil — animated "Linkability is the mechanism" section.
// Drop this file in, import, and render <Linkability/>.
// Override colors via the CSS variables on .lnk (see <style> below).

import React from 'react';

const ACC = 'oklch(82% 0.16 175)';
const DIM_FILL = 'rgba(255,255,255,0.04)';
const DIM_STROKE = 'rgba(255,255,255,0.12)';

const styles = `
.lnk {
  --lnk-accent: ${ACC};
  --lnk-card: #131313;
  --lnk-stroke: rgba(255,255,255,0.06);
  --lnk-fg: #E8E6E1;
  --lnk-fg-dim: rgba(232,230,225,0.55);
  color: var(--lnk-fg);
  font-family: 'Inter', system-ui, sans-serif;
}
.lnk__card {
  background: var(--lnk-card);
  border: 1px solid var(--lnk-stroke);
  border-radius: 14px;
  padding: 56px 48px;
  display: grid; grid-template-columns: 1.15fr 1fr; gap: 48px; align-items: center;
}
@media (max-width: 880px) {
  .lnk__card { grid-template-columns: 1fr; padding: 36px 28px; gap: 28px; }
}
.lnk__visual {
  background: radial-gradient(ellipse at center, rgba(255,255,255,0.025), transparent 65%), #0E0E0E;
  border-radius: 12px;
  padding: 40px 20px;
  min-height: 340px;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.lnk__visual svg { width: 100%; height: auto; max-width: 460px; }
.lnk__copy h2 { font-size: 28px; font-weight: 600; letter-spacing: -0.018em; margin: 0 0 16px; }
.lnk__copy p { font-size: 15px; line-height: 1.6; color: var(--lnk-fg-dim); margin: 0 0 14px; }
.lnk__copy p strong { color: var(--lnk-fg); font-weight: 500; }
.lnk__copy p code {
  font-family: 'JetBrains Mono', monospace; font-size: 13px;
  background: rgba(255,255,255,0.05); padding: 2px 6px; border-radius: 4px; color: var(--lnk-fg);
}
.lnk-addr-text { font-family: 'JetBrains Mono', monospace; font-size: 11px; fill: var(--lnk-fg); }
.lnk-addr-text.dim { fill: var(--lnk-fg-dim); }
.lnk-cap { font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; }
@keyframes lnk-flow { to { stroke-dashoffset: -12; } }
@keyframes lnk-glow { 0%, 100% { opacity: 0.85; } 50% { opacity: 1; } }
@keyframes lnk-fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
.lnk-flow   { stroke-dasharray: 3 4; animation: lnk-flow 0.9s linear infinite; }
.lnk-glow   { animation: lnk-glow 2.2s ease-in-out infinite; }
.lnk-fade-1 { animation: lnk-fade-in 0.6s ease-out 0.2s both; }
.lnk-fade-2 { animation: lnk-fade-in 0.6s ease-out 0.5s both; }
.lnk-fade-3 { animation: lnk-fade-in 0.6s ease-out 0.8s both; }
@media (prefers-reduced-motion: reduce) {
  .lnk-flow, .lnk-glow, .lnk-fade-1, .lnk-fade-2, .lnk-fade-3 { animation: none; }
}
`;

function Diagram() {
  return (
    <svg viewBox="0 0 460 300" fill="none" aria-hidden="true">
      {/* passport */}
      <g className="lnk-fade-1">
        <rect x="18" y="86" width="80" height="110" rx="6" fill="rgba(255,255,255,0.08)"/>
        <rect x="18" y="86" width="80" height="110" rx="6" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        <circle cx="58" cy="125" r="10" fill={ACC}/>
        <rect x="33" y="148" width="50" height="3.5" fill={ACC} opacity="0.55"/>
        <rect x="33" y="157" width="50" height="3.5" fill={ACC} opacity="0.35"/>
        <rect x="33" y="166" width="50" height="3.5" fill={ACC} opacity="0.2"/>
        <text x="58" y="80" textAnchor="middle" className="lnk-cap" fill={ACC} opacity="0.7">PASSPORT</text>
      </g>

      {/* shared ID */}
      <g className="lnk-fade-2 lnk-glow">
        <rect x="148" y="118" width="104" height="46" rx="8" fill={ACC} opacity="0.12" stroke={ACC} strokeWidth="1"/>
        <text x="200" y="135" textAnchor="middle" className="lnk-cap" fill={ACC} opacity="0.85">SHARED ID</text>
        <text x="200" y="153" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill={ACC} fontWeight="500">0x71…a3</text>
      </g>

      {/* sigilized addresses */}
      <g className="lnk-fade-3">
        <rect x="318" y="68"  width="120" height="32" rx="6" fill={ACC} opacity="0.14" stroke={ACC} strokeWidth="1"/>
        <text x="378" y="88"  textAnchor="middle" className="lnk-addr-text">0xc8…2e</text>
        <rect x="318" y="125" width="120" height="32" rx="6" fill={ACC} opacity="0.14" stroke={ACC} strokeWidth="1"/>
        <text x="378" y="145" textAnchor="middle" className="lnk-addr-text">0x7d…06</text>
        <rect x="318" y="182" width="120" height="32" rx="6" fill={ACC} opacity="0.14" stroke={ACC} strokeWidth="1"/>
        <text x="378" y="202" textAnchor="middle" className="lnk-addr-text">0xa1…f7</text>
      </g>

      {/* private address */}
      <g>
        <rect x="318" y="240" width="120" height="32" rx="6" fill={DIM_FILL} stroke={DIM_STROKE} strokeWidth="1" strokeDasharray="3 3"/>
        <text x="378" y="260" textAnchor="middle" className="lnk-addr-text dim">0x4b…91</text>
        <text x="378" y="283" textAnchor="middle" className="lnk-cap" fill="rgba(232,230,225,0.4)">NOT SIGILIZED · PRIVATE</text>
      </g>

      {/* connectors */}
      <path d="M98 141 L148 141"                      stroke={ACC} strokeWidth="1.25" className="lnk-flow lnk-fade-2"/>
      <path d="M252 141 C 285 141, 285 84,  318 84"   stroke={ACC} strokeWidth="1.25" fill="none" className="lnk-flow lnk-fade-3"/>
      <path d="M252 141 L 318 141"                    stroke={ACC} strokeWidth="1.25" fill="none" className="lnk-flow lnk-fade-3"/>
      <path d="M252 141 C 285 141, 285 198, 318 198"  stroke={ACC} strokeWidth="1.25" fill="none" className="lnk-flow lnk-fade-3"/>
    </svg>
  );
}

export default function Linkability() {
  return (
    <section className="lnk">
      <style>{styles}</style>
      <div className="lnk__card">
        <div className="lnk__visual"><Diagram/></div>
        <div className="lnk__copy">
          <h2>Linkability is the mechanism</h2>
          <p>Every address you sigilize with the same passport shares the same on-chain ID. That's the whole point — it's what makes one-person-one-share work without each protocol running its own proof ceremony.</p>
          <p><strong>The visible consequence:</strong> anyone reading the chain can tell which of your sigilized addresses belong to the same passport.</p>
          <p><strong>The control sits with you, per wallet</strong> — addresses you don't sigilize stay pseudonymous. If you want a wallet kept separate, just don't register it.</p>
        </div>
      </div>
    </section>
  );
}

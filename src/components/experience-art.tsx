export function CulinaryArt() {
  return (
    <svg className="culinary-art" viewBox="0 0 540 320" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="plate"><stop stopColor="#fffefa"/><stop offset=".73" stopColor="#fcfbf6"/><stop offset="1" stopColor="#e5e1d5"/></radialGradient>
        <radialGradient id="soup"><stop stopColor="#eaa76a"/><stop offset="1" stopColor="#c5703c"/></radialGradient>
        <linearGradient id="leaf" x2="1" y2="1"><stop stopColor="#809852"/><stop offset="1" stopColor="#34533b"/></linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="220%"><feDropShadow dx="0" dy="15" stdDeviation="12" floodColor="#66543b" floodOpacity=".17"/></filter>
      </defs>
      <ellipse cx="273" cy="278" rx="140" ry="15" fill="#9d8868" opacity=".08"/>
      <g filter="url(#shadow)"><ellipse cx="270" cy="159" rx="128" ry="120" fill="url(#plate)"/><ellipse cx="270" cy="159" rx="106" ry="99" stroke="#ded9ca"/><ellipse cx="270" cy="159" rx="86" ry="80" fill="url(#soup)"/></g>
      <path d="M215 153c24-54 100-48 110-5s-70 75-98 30 58-73 81-33-49 57-64 29 31-41 45-21-14 30-23 16" stroke="#f8d792" strokeWidth="8" strokeLinecap="round"/>
      <path d="M222 144c31-42 81-19 77 14s-66 38-64 6 44-44 59-17" stroke="#ffe4a9" strokeWidth="3" strokeLinecap="round"/>
      <g fill="url(#leaf)"><path d="M268 152c-38-8-37-31-35-40 27 0 42 15 35 40Z"/><path d="M271 151c-6-29 12-45 26-47 11 26-1 44-26 47Z"/><path d="M273 157c20-22 42-13 48-5-15 22-32 23-48 5Z"/></g>
      <path d="m242 122 26 30m25-37-22 37m40 3-38 2" stroke="#aeb778"/>
      <g fill="#af3e28"><circle cx="229" cy="193" r="11"/><circle cx="309" cy="188" r="10"/></g><g fill="#ec8054"><path d="M222 190c4-8 12-7 15 0l-8 3Z"/><path d="M303 186c2-6 10-6 13 0l-7 3Z"/></g>
      <g fill="#52694a"><circle cx="236" cy="139" r="2"/><circle cx="303" cy="132" r="2"/><circle cx="256" cy="203" r="2"/><circle cx="292" cy="200" r="1.5"/><circle cx="216" cy="171" r="1.5"/></g>
      <g stroke="#a79e89" strokeWidth="3" strokeLinecap="round"><path d="M103 79v62c0 10 14 10 14 0V79m-7 0v174m-7-151h14"/><path d="M430 80v173m0-173c-18 23-18 64 0 66"/></g>
      <path d="M385 56c20-5 26-22 21-34-19 4-28 19-21 34Zm0 0-8 12" fill="#768563"/>
      <circle cx="157" cy="257" r="3" fill="#ae8661"/><circle cx="393" cy="240" r="2" fill="#ae8661"/>
    </svg>
  );
}

export function DeveloperArt() {
  return (
    <div className="developer-art" aria-hidden="true">
      <div className="floating-code">&lt;/&gt;</div>
      <div className="editor-window">
        <div className="editor-toolbar"><div className="window-dots"><i/><i/><i/></div><span>little-things.tsx</span><span>↗</span></div>
        <div className="editor-content"><div className="line-numbers">01<br/>02<br/>03<br/>04<br/>05<br/>06<br/>07</div><pre><span className="code-purple">const</span> experience = {"{"}{"\n"}  idea: <span className="code-green">&apos;something good&apos;</span>,{"\n"}  builtWith: [{"\n"}    <span className="code-green">&apos;creativity&apos;</span>,{"\n"}    <span className="code-green">&apos;care&apos;</span>{"\n"}  ],{"\n"}{"}"};<span className="code-cursor"/></pre></div>
        <div className="editor-status"><span><span className="status-dot"/> Made with intention</span><span>TypeScript</span></div>
      </div>
      <div className="floating-preview"><span className="preview-icon">✓</span><div>Idea → reality<span>One detail at a time.</span></div></div>
    </div>
  );
}

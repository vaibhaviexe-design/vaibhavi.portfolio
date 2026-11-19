/* MY STUDIO — hand-built SVG scene.
   Every object is drawn in local coordinates with its origin at the bottom-centre
   (y goes negative upward), so the same drawing can be placed in the wide desktop
   room and in the tall mobile room. */

const INK = '#3a1d1d';
const C = {
  crimson: '#6d1424', crimsonD: '#3d0912', gold: '#d9a441', goldL: '#f2d58d',
  green: '#2f6b4f', greenL: '#3a7a5c', pink: '#e0527f', blush: '#f8d4de', pinkL: '#f19ab6',
  mustard: '#e8b84a', blue: '#8fb3d9', cobalt: '#2d4a9e', cream: '#fbf1dc', wood: '#b8794a',
  woodD: '#8a5a3a', sage: '#7fae96', teal: '#1d3b3a', red: '#c8283f'
};
const sw = (w = 3) => `stroke="${INK}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;

/* ---------- interactive objects ---------- */
const OBJ = {};

OBJ.cake = {
  h: 420, w: 270,
  art: () => {
    const tier = (hw, bottom, h, fill, top) => `
      <path d="M${-hw} ${bottom} L${-hw} ${bottom - h} A${hw} ${hw * .16} 0 0 0 ${hw} ${bottom - h} L${hw} ${bottom} A${hw} ${hw * .16} 0 0 1 ${-hw} ${bottom} Z" fill="${fill}" ${sw()}/>
      <ellipse cx="0" cy="${bottom - h}" rx="${hw}" ry="${hw * .16}" fill="${top}" ${sw()}/>`;
    let dots = '';
    for (let x = -84; x <= 84; x += 28) dots += `<circle cx="${x}" cy="${-200 + 12}" r="9" fill="#fde3ea" ${sw(2)}/>`;
    for (let x = -54; x <= 54; x += 27) dots += `<circle cx="${x}" cy="${-270 + 9}" r="8" fill="#fde3ea" ${sw(2)}/>`;
    let sprinkles = '';
    [[-70,-150,'#e8b84a'],[-30,-140,'#8fb3d9'],[20,-158,'#e8b84a'],[62,-146,'#2f6b4f'],[-50,-232,'#fde3ea'],[8,-226,'#e8b84a'],[44,-238,'#8fb3d9'],[-18,-300,'#e8b84a'],[20,-296,'#2f6b4f']]
      .forEach(([x,y,c]) => sprinkles += `<rect x="${x}" y="${y}" width="10" height="4" rx="2" fill="${c}" transform="rotate(${(x*7)%60-30} ${x} ${y})"/>`);
    return `
    <ellipse cx="0" cy="-4" rx="100" ry="13" fill="${C.woodD}" ${sw()}/>
    <path d="M-32 -8 C-22 -30 -26 -70 -28 -110 L28 -110 C26 -70 22 -30 32 -8 Z" fill="#c98a56" ${sw()}/>
    <ellipse cx="0" cy="-112" rx="130" ry="20" fill="${C.goldL}" ${sw()}/>
    <g class="cake-body">
      ${tier(106, -118, 84, C.pinkL, '#fde3ea')}
      ${tier(74, -202, 70, C.pink, '#fde3ea')}
      ${tier(46, -272, 56, C.pinkL, '#fde3ea')}
      ${dots}${sprinkles}
      <path d="M0 -330 C4 -346 10 -352 14 -358" fill="none" ${sw(3)}/>
      <circle cx="-8" cy="-332" r="11" fill="#b81c3b" ${sw()}/>
      <circle cx="12" cy="-336" r="11" fill="#d0304e" ${sw()}/>
      <circle cx="-11" cy="-336" r="3" fill="#fff" opacity=".7"/>
    </g>
    <g class="dome">
      <path d="M-134 -124 C-136 -290 -92 -382 0 -382 C92 -382 136 -290 134 -124 Z" fill="rgba(210,235,255,.26)" stroke="${C.blue}" stroke-width="3.5"/>
      <path d="M-104 -200 C-108 -280 -84 -340 -40 -358" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".6"/>
      <circle cx="0" cy="-392" r="10" fill="${C.gold}" ${sw()}/>
    </g>`;
  }
};

OBJ.mannequin = {
  h: 470, w: 200,
  art: () => {
    let dots = '';
    for (let y = -400; y <= -200; y += 26) for (let x = -34; x <= 34; x += 22) {
      const lim = y > -330 && y < -270 ? 22 : 34;
      if (Math.abs(x) <= lim) dots += `<circle cx="${x + (y % 52 ? 11 : 0)}" cy="${y}" r="4" fill="${C.green}"/>`;
    }
    let hem = '';
    for (let x = -56; x <= 56; x += 14) hem += `<circle cx="${x}" cy="-190" r="8" fill="#fde3ea" ${sw(2.5)}/>`;
    return `
    <g class="mq-turn">
      <path d="M0 -14 Q-40 -14 -62 -4" fill="none" ${sw(5)}/><circle cx="-66" cy="-12" r="9" fill="none" ${sw(4)}/>
      <path d="M0 -14 Q40 -14 62 -4" fill="none" ${sw(5)}/><circle cx="66" cy="-12" r="9" fill="none" ${sw(4)}/>
      <path d="M0 -14 Q-10 -30 -30 -34" fill="none" ${sw(4)}/><path d="M0 -14 Q10 -30 30 -34" fill="none" ${sw(4)}/>
      <line x1="0" y1="-14" x2="0" y2="-196" ${sw(6)}/>
      <path d="M-22 -432 C-30 -428 -58 -424 -62 -408 C-60 -380 -48 -352 -44 -330 C-44 -310 -54 -280 -66 -250 C-72 -228 -70 -206 -62 -190 L62 -190 C70 -206 72 -228 66 -250 C54 -280 44 -310 44 -330 C48 -352 60 -380 62 -408 C58 -424 30 -432 22 -432 Z" fill="#f6bfcf" ${sw()}/>
      ${dots}${hem}
      <path d="M0 -432 L0 -192" fill="none" stroke="${INK}" stroke-width="2" stroke-dasharray="5 6" opacity=".6"/>
      <rect x="-9" y="-452" width="18" height="22" fill="#f6bfcf" ${sw()}/>
      <circle cx="0" cy="-460" r="8" fill="${C.gold}" ${sw()}/>
      <path d="M-16 -436 C-34 -396 -8 -380 -26 -338" fill="none" stroke="${C.mustard}" stroke-width="7" stroke-linecap="round"/>
      <path d="M-16 -436 C-34 -396 -8 -380 -26 -338" fill="none" stroke="${INK}" stroke-width="1.5" stroke-dasharray="3 5"/>
    </g>`;
  }
};

OBJ.bust = {
  h: 360, w: 190,
  art: () => {
    let curls = '', flowers = '';
    [[-34,-318],[-20,-330],[0,-336],[20,-330],[34,-318],[-40,-298],[40,-298]].forEach(([x,y]) => curls += `<circle cx="${x}" cy="${y}" r="15" fill="#223b82" ${sw(2.5)}/>`);
    [[-22,-340,C.pink],[4,-348,C.mustard],[26,-338,C.pinkL]].forEach(([x,y,c]) => flowers += `<g><circle cx="${x}" cy="${y}" r="9" fill="${c}" ${sw(2)}/><circle cx="${x}" cy="${y}" r="3" fill="${C.cream}"/></g>`);
    return `
    <rect x="-86" y="-146" width="172" height="14" rx="3" fill="#fbfaf5" ${sw()}/>
    <rect x="-74" y="-132" width="148" height="132" fill="#fbfaf5" ${sw()}/>
    <rect x="-36" y="-88" width="72" height="30" rx="3" fill="#f08a24" ${sw(2.5)}/>
    <path d="M-24 -72 q6 -12 12 0 t12 0 t12 0 t12 0" fill="none" stroke="${INK}" stroke-width="2.2"/>
    <g class="bust-fig">
      <path d="M-72 -146 C-80 -194 -62 -218 -34 -228 L34 -228 C62 -218 80 -194 72 -146 Z" fill="${C.cobalt}" ${sw()}/>
      <path d="M-50 -150 C-30 -190 10 -200 56 -170" fill="none" stroke="#6f8be0" stroke-width="4" stroke-linecap="round" opacity=".8"/>
      <path d="M-30 -226 C-4 -200 20 -214 34 -226" fill="none" stroke="#6f8be0" stroke-width="3" opacity=".8"/>
      <rect x="-16" y="-258" width="32" height="34" fill="#3a5bbd" ${sw()}/>
      ${curls}
      <ellipse cx="0" cy="-286" rx="38" ry="46" fill="#3a5bbd" ${sw()}/>
      <path d="M-24 -290 q8 7 16 0 M8 -290 q8 7 16 0" fill="none" ${sw(2.5)} stroke="${C.cream}"/>
      <path d="M0 -286 L-4 -272 L4 -270" fill="none" stroke="${C.cream}" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M-10 -258 q10 7 20 0" fill="none" stroke="${C.pinkL}" stroke-width="3.5" stroke-linecap="round"/>
      ${flowers}
    </g>`;
  }
};

OBJ.tv = {
  h: 360, w: 240,
  art: () => {
    let st = '';
    for (let i = 0; i < 70; i++) {
      const x = -86 + (i * 37) % 124, y = -244 + (i * 53) % 116;
      st += `<rect x="${x}" y="${y}" width="${6 + i % 4 * 3}" height="3" fill="${i % 3 ? '#e9f5f0' : '#6e8f87'}"/>`;
    }
    return `
    <path d="M-88 -104 L-98 0 M88 -104 L98 0" fill="none" stroke="${INK}" stroke-width="9" stroke-linecap="round"/>
    <path d="M-88 -104 L-98 0 M88 -104 L98 0" fill="none" stroke="${C.woodD}" stroke-width="5" stroke-linecap="round"/>
    <path d="M-20 -268 L-70 -350 M20 -268 L64 -344" fill="none" ${sw(4)}/>
    <circle cx="-72" cy="-353" r="5" fill="${C.mustard}" ${sw(2)}/><circle cx="66" cy="-347" r="5" fill="${C.mustard}" ${sw(2)}/>
    <rect x="-112" y="-270" width="224" height="170" rx="24" fill="#d58e4c" ${sw()}/>
    <rect x="-100" y="-258" width="146" height="146" rx="30" fill="#2a2018" ${sw(2)}/>
    <clipPath id="tvclip"><rect x="-94" y="-252" width="134" height="134" rx="26"/></clipPath>
    <rect x="-94" y="-252" width="134" height="134" rx="26" class="tv-screen" fill="${C.teal}"/>
    <g clip-path="url(#tvclip)"><rect x="-94" y="-252" width="134" height="134" fill="#7fd1b9" opacity=".22"/><g class="static">${st}</g></g>
    <path d="M-44 -212 L-44 -160 L-8 -186 Z" class="tv-play" fill="${C.cream}" ${sw(2)}/>
    <circle cx="76" cy="-230" r="13" fill="${C.gold}" ${sw(2.5)}/><line x1="76" y1="-230" x2="82" y2="-236" ${sw(2.5)}/>
    <circle cx="76" cy="-192" r="13" fill="${C.gold}" ${sw(2.5)}/><line x1="76" y1="-192" x2="70" y2="-198" ${sw(2.5)}/>
    <path d="M64 -166 H90 M64 -158 H90 M64 -150 H90 M64 -142 H90 M64 -134 H90" ${sw(2)}/>
    <circle cx="-96" cy="-116" r="3.5" fill="#e0527f"/>`;
  }
};

OBJ.typewriter = {
  h: 320, w: 290,
  art: () => {
    let keys = '';
    [[-182,-62,6],[-170,-52,5],[-158,-62,6]].forEach(() => {});
    [[-186, 7],[-174, 8],[-162, 7]].forEach(([y, n], r) => { for (let i = 0; i < n; i++) keys += `<circle cx="${-60 + i * 17 + (r % 2) * 8}" cy="${y}" r="6" fill="${C.cream}" ${sw(2)}/>`; });
    return `
    <rect x="-136" y="-150" width="272" height="18" rx="3" fill="${C.wood}" ${sw()}/>
    <rect x="-124" y="-132" width="18" height="132" fill="${C.woodD}" ${sw()}/><rect x="106" y="-132" width="18" height="132" fill="${C.woodD}" ${sw()}/>
    <rect x="-106" y="-132" width="212" height="34" fill="#c98a56" ${sw(2.5)}/><circle cx="0" cy="-115" r="5" fill="${C.gold}" ${sw(2)}/>
    <g class="paper"><rect x="-44" y="-300" width="88" height="104" rx="2" fill="#fffdf6" ${sw(2.5)}/>
      <path d="M-30 -276 H26 M-30 -262 H30 M-30 -248 H12 M-30 -234 H28 M-30 -220 H4" stroke="#b9b09a" stroke-width="3" stroke-linecap="round"/>
      <text x="-30" y="-282" font-family="'Special Elite','Courier New',monospace" font-size="13" fill="${INK}">Dear reader,</text></g>
    <path d="M-92 -150 L-80 -194 L80 -194 L92 -150 Z" fill="#4a7fa8" ${sw()}/>
    <rect x="-100" y="-214" width="200" height="22" rx="10" fill="#2c3a4a" ${sw()}/>
    <circle cx="-108" cy="-203" r="10" fill="${C.gold}" ${sw(2.5)}/><circle cx="108" cy="-203" r="10" fill="${C.gold}" ${sw(2.5)}/>
    <rect x="-96" y="-200" width="192" height="10" fill="#4a7fa8" opacity="0"/>
    ${keys}
    <path d="M100 -150 q4 -26 24 -24 q14 0 16 12 v12 z" fill="#f6bfcf" ${sw(2.5)}/>
    <rect x="88" y="-168" width="0" height="0"/>`;
  }
};

OBJ.cabinet = {
  h: 390, w: 190,
  art: () => {
    const drawer = (y, i) => `
      <g class="drawer d${i}"><rect x="-76" y="${y}" width="152" height="92" rx="4" fill="#6a9a82" ${sw(2.5)}/>
      <rect x="-24" y="${y + 18}" width="48" height="12" rx="3" fill="${C.gold}" ${sw(2.5)}/>
      <rect x="-30" y="${y + 44}" width="60" height="26" rx="2" fill="${C.cream}" ${sw(2)}/>
      <text x="0" y="${y + 62}" text-anchor="middle" font-family="'Special Elite','Courier New',monospace" font-size="15" fill="${INK}">${['A–F','G–P','Q–Z'][i]}</text></g>`;
    return `
    <rect x="-86" y="-300" width="172" height="300" rx="6" fill="${C.sage}" ${sw()}/>
    <rect x="-80" y="-294" width="160" height="288" rx="4" fill="#5f8c75" opacity=".5"/>
    ${drawer(-292, 0)}${drawer(-196, 1)}${drawer(-100, 2)}
    <rect x="-70" y="-324" width="48" height="26" rx="2" fill="${C.mustard}" ${sw(2.5)}/><rect x="-70" y="-334" width="18" height="10" rx="2" fill="${C.mustard}" ${sw(2.5)}/>
    <rect x="-56" y="-322" width="52" height="24" rx="2" fill="${C.pinkL}" ${sw(2.5)}/><rect x="-26" y="-332" width="18" height="10" rx="2" fill="${C.pinkL}" ${sw(2.5)}/>
    <path d="M24 -300 L28 -326 H62 L66 -300 Z" fill="#c98a56" ${sw(2.5)}/>
    <path d="M45 -326 C36 -352 24 -362 16 -378 M45 -326 C48 -356 52 -368 58 -384 M45 -326 C58 -346 72 -354 80 -362" fill="none" stroke="${C.green}" stroke-width="6" stroke-linecap="round"/>
    <circle cx="16" cy="-380" r="8" fill="#3a7a5c" ${sw(2)}/><circle cx="58" cy="-386" r="8" fill="#3a7a5c" ${sw(2)}/><circle cx="80" cy="-364" r="8" fill="#3a7a5c" ${sw(2)}/>`;
  }
};

OBJ.phone = {
  h: 290, w: 270,
  art: () => `
    <path d="M-60 -8 L-44 -196 M60 -8 L44 -196" fill="none" stroke="${INK}" stroke-width="9" stroke-linecap="round"/>
    <path d="M-60 -8 L-44 -196 M60 -8 L44 -196" fill="none" stroke="${C.woodD}" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="0" cy="-6" rx="78" ry="10" fill="${C.woodD}" ${sw()}/>
    <ellipse cx="0" cy="-198" rx="120" ry="18" fill="${C.wood}" ${sw()}/>
    <rect x="-120" y="-198" width="240" height="8" fill="${C.woodD}" opacity=".0"/>
    <g class="postcards">
      <rect x="-118" y="-246" width="70" height="48" rx="2" fill="${C.cream}" transform="rotate(-8 -83 -222)" ${sw(2.5)}/>
      <rect x="-112" y="-240" width="30" height="36" fill="${C.blue}" transform="rotate(-8 -83 -222)" opacity=".85"/>
      <path d="M-76 -230 H-56 M-76 -222 H-58 M-76 -214 H-62" stroke="${INK}" stroke-width="2" transform="rotate(-8 -83 -222)"/>
    </g>
    <path d="M-52 -214 C-62 -240 -46 -250 -30 -240 L30 -240 C46 -250 62 -240 52 -214 Z" fill="${C.red}" ${sw()}/>
    <circle cx="0" cy="-228" r="26" fill="${C.cream}" ${sw(2.5)}/>
    <circle cx="0" cy="-228" r="9" fill="${C.red}" ${sw(2)}/>
    ${[0,1,2,3,4,5,6,7].map(i => `<circle cx="${Math.cos(i*0.7+0.4)*17}" cy="${-228 + Math.sin(i*0.7+0.4)*17}" r="3.2" fill="${INK}"/>`).join('')}
    <g class="handset"><path d="M-70 -262 C-70 -276 -54 -276 -50 -268 L50 -268 C54 -276 70 -276 70 -262 C70 -248 56 -250 52 -256 L-52 -256 C-56 -250 -70 -248 -70 -262 Z" fill="#d93a52" ${sw()}/></g>
    <g class="envelope"><rect x="52" y="-248" width="64" height="44" rx="2" fill="#fffdf6" transform="rotate(7 84 -226)" ${sw(2.5)}/>
      <path d="M52 -248 L84 -226 L116 -248" fill="none" transform="rotate(7 84 -226)" ${sw(2.5)}/>
      <path d="M84 -218 c-8 -8 -6 -14 0 -12 c6 -2 8 4 0 12z" fill="${C.pink}" transform="rotate(7 84 -226)"/></g>`
};

/* ---------- decorative (non-interactive) ---------- */
function frame(x, y, w, h, kind, rot = 0) {
  const art = {
    hills: `<rect width="${w}" height="${h}" fill="#bcdcf0"/><path d="M0 ${h*.7} Q${w*.3} ${h*.45} ${w*.6} ${h*.65} T${w} ${h*.6} V${h} H0Z" fill="#6aa876"/><path d="M0 ${h*.85} Q${w*.4} ${h*.66} ${w} ${h*.8} V${h} H0Z" fill="#4c8f62"/><circle cx="${w*.74}" cy="${h*.24}" r="${h*.1}" fill="#f6d36a"/>`,
    vase: `<rect width="${w}" height="${h}" fill="#fbe9c8"/><path d="M${w*.36} ${h*.92} Q${w*.28} ${h*.7} ${w*.4} ${h*.58} H${w*.6} Q${w*.72} ${h*.7} ${w*.64} ${h*.92}Z" fill="#9b6fc4"/><path d="M${w*.5} ${h*.58} V${h*.25} M${w*.5} ${h*.58} L${w*.32} ${h*.3} M${w*.5} ${h*.58} L${w*.7} ${h*.32}" stroke="#3f8f55" stroke-width="3" fill="none"/><circle cx="${w*.5}" cy="${h*.22}" r="${w*.09}" fill="#c58be0"/><circle cx="${w*.32}" cy="${h*.28}" r="${w*.08}" fill="#e0527f"/><circle cx="${w*.7}" cy="${h*.3}" r="${w*.08}" fill="#c58be0"/>`,
    moon: `<rect width="${w}" height="${h}" fill="#4b4a82"/><path d="M${w*.42} ${h*.18} a${h*.14} ${h*.14} 0 1 0 ${h*.16} ${h*.22} a${h*.11} ${h*.11} 0 1 1 ${-h*.16} ${-h*.22}z" fill="#f6e08a"/><circle cx="${w*.2}" cy="${h*.3}" r="3" fill="#f6e08a"/><circle cx="${w*.78}" cy="${h*.62}" r="3" fill="#f6e08a"/><circle cx="${w*.3}" cy="${h*.75}" r="2.5" fill="#f6e08a"/><path d="M${w*.45} ${h} V${h*.7} L${w*.5} ${h*.55} L${w*.55} ${h*.7} V${h}Z" fill="#c9893a"/>`,
    cup: `<rect width="${w}" height="${h}" fill="#f6ecc9"/><path d="M${w*.28} ${h*.45} H${w*.72} Q${w*.7} ${h*.78} ${w*.5} ${h*.78} Q${w*.3} ${h*.78} ${w*.28} ${h*.45}Z" fill="#8fc78a" stroke="#3a1d1d" stroke-width="2"/><path d="M${w*.72} ${h*.52} q${w*.14} 0 ${w*.08} ${h*.14} q-${w*.04} ${h*.04} -${w*.1} ${h*.02}" fill="none" stroke="#3a1d1d" stroke-width="3"/><ellipse cx="${w*.5}" cy="${h*.85}" rx="${w*.3}" ry="${h*.05}" fill="#d9b86a"/>`,
    abstract: `<rect width="${w}" height="${h}" fill="#e46a3c"/><circle cx="${w*.4}" cy="${h*.45}" r="${w*.26}" fill="#2d4a9e"/><rect x="${w*.5}" y="${h*.35}" width="${w*.34}" height="${h*.5}" fill="#f6d36a"/><path d="M0 ${h} L${w*.3} ${h*.6} L${w*.6} ${h}Z" fill="#2f6b4f"/>`,
    portrait: `<rect width="${w}" height="${h}" fill="#e7a8b8"/><ellipse cx="${w*.5}" cy="${h*.42}" rx="${w*.2}" ry="${h*.2}" fill="#f6d9c6"/><path d="M${w*.2} ${h} Q${w*.5} ${h*.55} ${w*.8} ${h}Z" fill="#2d4a9e"/><path d="M${w*.3} ${h*.36} Q${w*.5} ${h*.1} ${w*.7} ${h*.36}" fill="#3a1d1d"/>`
  }[kind];
  return `<g transform="translate(${x} ${y}) rotate(${rot} ${w/2} ${h/2})" class="deco">
    <rect x="-12" y="-12" width="${w+24}" height="${h+24}" rx="5" fill="${C.gold}" ${sw(3)}/>
    <rect x="-6" y="-6" width="${w+12}" height="${h+12}" fill="#f6e3b0" stroke="${INK}" stroke-width="1.5"/>
    <svg x="0" y="0" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" overflow="hidden">${art}</svg>
    <rect x="${w+16}" y="${h-2}" width="22" height="14" fill="${C.cream}" ${sw(1.5)}/></g>`;
}

function flowers(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})" class="deco">
    <g class="sway"><path d="M0 -70 C-26 -120 -40 -150 -48 -190 M0 -70 C0 -130 4 -170 2 -214 M0 -70 C26 -120 44 -146 50 -178 M0 -70 C-10 -110 -24 -130 -22 -160" fill="none" stroke="${C.green}" stroke-width="5" stroke-linecap="round"/>
      <circle cx="-48" cy="-192" r="17" fill="${C.pink}" ${sw(2.5)}/><circle cx="2" cy="-216" r="19" fill="${C.mustard}" ${sw(2.5)}/><circle cx="50" cy="-180" r="17" fill="#b98be0" ${sw(2.5)}/><circle cx="-22" cy="-162" r="14" fill="${C.pinkL}" ${sw(2.5)}/>
      <circle cx="-48" cy="-192" r="5" fill="${C.cream}"/><circle cx="2" cy="-216" r="6" fill="${C.pink}"/><circle cx="50" cy="-180" r="5" fill="${C.cream}"/></g>
    <path d="M-30 0 Q-44 -40 -22 -70 H22 Q44 -40 30 0Z" fill="#7aa7d6" ${sw()}/><path d="M-28 -34 q14 10 28 0 t28 0" fill="none" stroke="${C.cream}" stroke-width="3"/></g>`;
}
function books(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})" class="deco">
    <rect x="-60" y="-28" width="120" height="28" rx="3" fill="${C.crimson}" ${sw()}/><rect x="-56" y="-56" width="110" height="28" rx="3" fill="${C.mustard}" ${sw()}/><rect x="-50" y="-82" width="96" height="26" rx="3" fill="${C.cobalt}" ${sw()}/>
    <path d="M-52 -14 H52 M-48 -42 H48" stroke="${C.cream}" stroke-width="2.5" opacity=".7"/></g>`;
}
function lamp(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})" class="deco">
    <ellipse cx="0" cy="-4" rx="40" ry="8" fill="${C.woodD}" ${sw()}/><line x1="0" y1="-6" x2="0" y2="-250" ${sw(7)}/><line x1="0" y1="-6" x2="0" y2="-250" stroke="${C.gold}" stroke-width="3.5"/>
    <path d="M-50 -250 L-30 -310 H30 L50 -250 Z" fill="#f6d36a" ${sw()}/><path d="M-50 -250 Q0 -232 50 -250" fill="none" ${sw(2.5)}/>
    <ellipse cx="0" cy="-250" rx="110" ry="70" fill="#ffe9a0" opacity=".16"/></g>`;
}
function sparkle(x, y, s = 1) {
  return `<path class="twinkle" d="M${x} ${y-14*s} Q${x+2*s} ${y-2*s} ${x+14*s} ${y} Q${x+2*s} ${y+2*s} ${x} ${y+14*s} Q${x-2*s} ${y+2*s} ${x-14*s} ${y} Q${x-2*s} ${y-2*s} ${x} ${y-14*s}Z" fill="${C.goldL}" ${sw(1.5)}/>`;
}

/* ---------- room shell shared by both layouts ---------- */
function defs() {
  return `<defs>
    <pattern id="stripes" width="72" height="20" patternUnits="userSpaceOnUse"><rect width="72" height="20" fill="${C.green}"/><rect width="36" height="20" fill="${C.greenL}"/></pattern>
    <pattern id="planks" width="400" height="46" patternUnits="userSpaceOnUse"><rect width="400" height="46" fill="#f2c9b4"/><path d="M0 45 H400 M120 0 V46 M300 23 V46 M60 23 V0" stroke="#d99f88" stroke-width="2" fill="none"/></pattern>
    <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff3bf" stop-opacity=".5"/><stop offset="1" stop-color="#fff3bf" stop-opacity="0"/></linearGradient>
    <linearGradient id="drape" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${C.crimsonD}"/><stop offset=".35" stop-color="${C.crimson}"/><stop offset=".6" stop-color="#8b1f36"/><stop offset="1" stop-color="${C.crimson}"/></linearGradient>
    <radialGradient id="vig" cx=".5" cy=".45" r=".8"><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".28"/></radialGradient>
  </defs>`;
}
function drape(side, W, H, top, hem) {
  const L = side === 'l', x0 = L ? 0 : W, sgn = L ? 1 : -1;
  const w = 150, cx = x0 + sgn * w;
  let folds = '';
  for (let i = 1; i < 6; i++) folds += `<path d="M${x0 + sgn * i * 24} ${top} C${x0 + sgn * (i * 24 + 10)} ${H * .4} ${x0 + sgn * (i * 24 - 8)} ${H * .7} ${x0 + sgn * (i * 24 + 16)} ${hem}" fill="none" stroke="${C.crimsonD}" stroke-width="3" opacity=".55"/>`;
  return `<g transform="translate(${x0} 0) scale(.5 1) translate(${-x0} 0)">
    <path d="M${x0} ${top} H${cx} C${x0 + sgn * 120} ${H * .35} ${x0 + sgn * 40} ${H * .55} ${x0 + sgn * 50} ${H * .66} C${x0 + sgn * 70} ${H * .72} ${x0 + sgn * 70} ${hem - 40} ${x0 + sgn * 62} ${hem} H${x0} Z" fill="url(#drape)" ${sw(3)}/>
    ${folds}
    <path d="M${x0 + sgn * 6} ${H * .6} Q${x0 + sgn * 60} ${H * .66} ${x0 + sgn * 78} ${H * .64}" fill="none" stroke="${C.gold}" stroke-width="9" stroke-linecap="round"/>
    <circle cx="${x0 + sgn * 80}" cy="${H * .645}" r="10" fill="${C.gold}" ${sw(2.5)}/>
    <path d="M${x0 + sgn * 80} ${H * .66} v38" stroke="${C.gold}" stroke-width="6" stroke-linecap="round"/><rect x="${x0 + sgn * 80 - 7}" y="${H * .66 + 30}" width="14" height="34" rx="6" fill="${C.gold}" ${sw(2)}/>
  </g>`;
}
function valance(W) {
  let sc = '';
  const n = Math.ceil(W / 70);
  for (let i = 0; i < n; i++) sc += `<path d="M${i * 70} 56 q35 46 70 0" fill="${C.crimson}" ${sw(3)}/><circle cx="${i * 70 + 35}" cy="84" r="5" fill="${C.gold}" ${sw(1.5)}/>`;
  return `<rect x="0" y="0" width="${W}" height="60" fill="${C.crimson}" ${sw(3)}/><rect x="0" y="48" width="${W}" height="12" fill="${C.gold}" ${sw(3)}/>${sc}`;
}

/* ---------- place an interactive object ---------- */
function place(key, o) {
  const d = OBJ[key];
  const { x, y, s = 1, room, label, tip, fs = 16, cue } = o;
  const tw = label.length * fs * .62 + 34;
  const dotX = d.w * s * .5 - 6, dotY = -d.h * s - 6;
  return `<g class="hot" data-obj="${key}" data-room="${room}" data-tip="${tip}" tabindex="0" role="link" aria-label="${tip}" transform="translate(${x} ${y})">
    <ellipse cx="0" cy="${6 * s}" rx="${d.w * s * .46}" ry="${12 * s}" fill="#000" opacity=".2" class="shadow"/>
    <g class="bob" style="animation-delay:${o.delay || 0}s"><g class="pop"><g class="art" transform="scale(${s})">${d.art()}</g></g></g>
    <rect class="hit" x="${-d.w * s * .55}" y="${-d.h * s - 14}" width="${d.w * s * 1.1}" height="${d.h * s + 44 + fs * 2}" rx="14" fill="transparent"/>
    <g class="plaque" transform="translate(0 ${fs * 2.1})"><rect x="${-tw / 2}" y="${-fs * 1.05}" width="${tw}" height="${fs * 1.6}" rx="3" fill="${C.cream}" ${sw(2)}/><text x="0" y="${fs * .1}" text-anchor="middle" font-family="'Special Elite','Courier New',monospace" font-size="${fs}" fill="${INK}">${label}</text></g>
    <g class="cue" transform="translate(${dotX} ${dotY})"><circle class="ring" r="${fs * 1.0}" fill="none" stroke="${C.goldL}" stroke-width="3"/><circle r="${fs * .9}" fill="${C.pink}" ${sw(2)}/><path d="M${-fs * .3} ${-fs * .05} l${fs * .26} ${fs * .3} l${fs * .4} ${-fs * .6}" fill="none" stroke="#fff" stroke-width="0"/><text y="${fs * .32}" text-anchor="middle" font-size="${fs * 1.0}" fill="#fff" font-family="'Fraunces',Georgia,serif" font-weight="700">${cue || '♥'}</text></g>
  </g>`;
}

/* ---------- the two layouts ---------- */
function sceneDesktop() {
  const W = 1700, H = 900, base = 770;
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" class="studio-svg" role="group" aria-label="MY STUDIO — an illustrated room. Click an object to open that part of the portfolio.">
  ${defs()}
  <rect width="${W}" height="660" fill="url(#stripes)"/>
  <rect y="540" width="${W}" height="120" fill="#235a41"/><rect y="536" width="${W}" height="8" fill="${C.gold}" ${sw(2)}/>
  <path d="M0 660 H${W}" ${sw(3)}/>
  <rect y="660" width="${W}" height="${H - 660}" fill="url(#planks)"/>
  <path d="M300 0 L620 0 L980 900 L520 900Z" fill="url(#beam)" opacity=".7"/><path d="M820 0 L1010 0 L1330 900 L1100 900Z" fill="url(#beam)" opacity=".4"/>
  ${frame(250, 130, 120, 150, 'vase', -2)}${frame(420, 96, 170, 120, 'hills', 1.5)}${frame(640, 150, 100, 130, 'moon', -1)}
  <g><rect x="820" y="96" width="260" height="110" rx="6" fill="${C.cream}" ${sw(3.5)}/><rect x="828" y="104" width="244" height="94" rx="3" fill="none" stroke="${C.crimson}" stroke-width="2"/>
  <text x="950" y="150" text-anchor="middle" font-family="'Fraunces',Georgia,serif" font-size="46" font-style="italic" font-weight="700" fill="${C.crimson}">my studio</text>
  <text x="950" y="181" text-anchor="middle" font-family="'Special Elite','Courier New',monospace" font-size="14" letter-spacing="3" fill="${INK}">EST. IN CURIOSITY</text></g>
  ${frame(1130, 120, 120, 150, 'cup', 2)}${frame(1310, 90, 150, 110, 'abstract', -1.5)}${frame(1500, 150, 90, 90, 'portrait', 2)}
  ${sparkle(230, 330, 1)}${sparkle(1250, 350, 1.2)}${sparkle(760, 330, .9)}
  ${lamp(795, 770, 1)}
  ${place('cake', { x: 232, y: base, room: 'bakery', label: '01 · BAKERY', tip: 'Have a slice of my social media work →', fs: 17, cue: '♥', delay: 0 })}
  ${place('mannequin', { x: 486, y: base + 4, room: 'fashion', label: '02 · FASHION', tip: 'Step into the fashion exhibition →', fs: 17, cue: '✦', delay: -1.2 })}
  ${place('bust', { x: 668, y: base, s: 1.0, room: 'about', label: '03 · ABOUT', tip: 'A little about the artist →', fs: 17, cue: '☺', delay: -2.4 })}
  ${place('tv', { x: 935, y: base, room: 'reels', label: '04 · REELS', tip: 'Watch something →', fs: 17, cue: '▶', delay: -3.1 })}
  ${place('typewriter', { x: 1205, y: base + 6, room: 'copy', label: '05 · COPYWRITING', tip: 'Words, ideas & everything in between →', fs: 17, cue: '✎', delay: -.6 })}
  ${place('cabinet', { x: 1425, y: base, room: 'resume', label: '06 · RESUME', tip: 'Open the files →', fs: 17, cue: '☰', delay: -1.9 })}
  ${place('phone', { x: 1587, y: base + 20, s: .72, room: 'contact', label: '07 · HELLO', tip: "Let's connect →", fs: 17, cue: '✉', delay: -2.8 })}
  ${flowers(1075, 790, .9)}${books(580, 790, .7)}${flowers(70, 790, .6)}
  
  <rect width="${W}" height="${H}" fill="url(#vig)" pointer-events="none"/>
  </svg>`;
}

function sceneMobile() {
  const W = 800, H = 2580, s = 1.12, fs = 27;
  const row = (y) => `<rect x="30" y="${y}" width="740" height="16" rx="8" fill="${C.wood}" ${sw(3)}/><rect x="30" y="${y + 16}" width="740" height="8" fill="${C.woodD}" opacity=".55"/>`;
  const r1 = 830, r2 = 1380, r3 = 1920, r4 = 2350;
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMin meet" xmlns="http://www.w3.org/2000/svg" class="studio-svg" role="group" aria-label="MY STUDIO — an illustrated room. Tap an object to open that part of the portfolio.">
  ${defs()}
  <rect width="${W}" height="${H}" fill="url(#stripes)"/>
  <path d="M-100 0 L260 0 L620 ${H} L220 ${H}Z" fill="url(#beam)" opacity=".5"/>
  <g transform="translate(0 40)"><rect x="190" y="116" width="420" height="140" rx="8" fill="${C.cream}" ${sw(4)}/><rect x="200" y="126" width="400" height="120" rx="4" fill="none" stroke="${C.crimson}" stroke-width="2.5"/>
  <text x="400" y="190" text-anchor="middle" font-family="'Fraunces',Georgia,serif" font-size="64" font-style="italic" font-weight="700" fill="${C.crimson}">my studio</text>
  <text x="400" y="228" text-anchor="middle" font-family="'Special Elite','Courier New',monospace" font-size="19" letter-spacing="4" fill="${INK}">EST. IN CURIOSITY</text></g>
  <g transform="translate(0 40)">${frame(48, 130, 100, 125, 'vase', -3)}${frame(660, 130, 90, 120, 'moon', 3)}</g>
  ${sparkle(400, 300, 1.2)}${sparkle(70, 1130, 1)}${sparkle(740, 1700, 1.1)}
  ${row(r1)}${row(r2)}${row(r3)}${row(r4)}
  ${place('cake', { x: 215, y: r1, s, room: 'bakery', label: '01 · BAKERY', tip: 'Have a slice of my social media work →', fs, cue: '♥', delay: 0 })}
  ${place('mannequin', { x: 590, y: r1, s, room: 'fashion', label: '02 · FASHION', tip: 'Step into the fashion exhibition →', fs, cue: '✦', delay: -1.2 })}
  ${place('bust', { x: 215, y: r2, s: 1.08, room: 'about', label: '03 · ABOUT', tip: 'A little about the artist →', fs, cue: '☺', delay: -2.4 })}
  ${place('tv', { x: 590, y: r2, s: 1.08, room: 'reels', label: '04 · REELS', tip: 'Watch something →', fs, cue: '▶', delay: -3.1 })}
  ${lamp(770, r2 - 10, .55)}${flowers(46, r2 - 10, .55)}
  ${place('typewriter', { x: 200, y: r3, s: .98, room: 'copy', label: '05 · COPYWRITING', tip: 'Words, ideas & everything in between →', fs, cue: '✎', delay: -.6 })}
  ${place('cabinet', { x: 600, y: r3, s: 1.08, room: 'resume', label: '06 · RESUME', tip: 'Open the files →', fs, cue: '☰', delay: -1.9 })}
  ${place('phone', { x: 400, y: r4, s: 1.1, room: 'contact', label: '07 · SAY HELLO', tip: "Let's connect →", fs, cue: '✉', delay: -2.8 })}
  ${books(130, r4 - 8, .8)}${flowers(690, r4 - 8, .8)}
  </svg>`;
}

window.MYSTUDIO_SCENES = { desktop: sceneDesktop, mobile: sceneMobile };

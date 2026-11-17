const S=[
{n:"Katana",jp:"刀",r:"Asia",c:"Japan",e:"c. 1400s–1870s",t:"Single-edged, curved",len:"60–73 cm blade",wt:"about 1.1 kg",img:"images/katana.jpg",k:{w:13,cv:12,g:20},
h:"The katana grew out of the older tachi and was worn edge-up through the sash, which made drawing and cutting a single motion. Smiths folded tamahagane steel and clay-coated the spine before quenching, so the edge hardens more than the back.",
f:"The wavy line along the edge, the hamon, is the visible border of the hardened steel."},
{n:"Wakizashi",jp:"脇差",r:"Asia",c:"Japan",e:"c. 1500s–1870s",t:"Short companion sword",len:"30–60 cm blade",wt:"about 0.6 kg",img:"images/wakizashi.jpg",k:{w:12,cv:8,g:20},
h:"Samurai wore the wakizashi beside the katana as a pair called the daishō. It stayed at the belt indoors, where a long sword was awkward, and in the Edo period many merchants were also allowed to carry one.",
f:"Samurai usually left the long sword at the door of a house but kept the wakizashi on."},
{n:"Jian",jp:"剑",r:"Asia",c:"China",e:"c. 700 BC–present",t:"Straight, double-edged",len:"60–80 cm blade",wt:"0.7–1.0 kg",img:"images/jian.jpg",k:{w:11,cv:0,g:24},
h:"China's jian appears by the Zhou dynasty and is among the oldest sword types still in use. Bronze examples were later joined by steel, and it came to be called the gentleman of weapons, as much a mark of scholarship as war.",
f:"The Sword of Goujian, a bronze jian about 2,500 years old, was found with almost no corrosion."},
{n:"Gladius",jp:"",r:"Europe",c:"Rome",e:"c. 200 BC–200 AD",t:"Short thrusting sword",len:"45–60 cm blade",wt:"0.7–1.0 kg",k:{w:15,cv:0,g:18},
h:"Roman legionaries adopted the gladius hispaniensis from Iberian fighters. Used behind a large shield, its short point reached through gaps in the enemy line, and it suited tight formations better than a long slashing blade.",
f:"Later Roman swords such as the Pompeii type had parallel edges for easier mass production."},
{n:"Longsword",jp:"",r:"Europe",c:"Germany, Italy, France",e:"c. 1300–1550",t:"Hand-and-a-half, double-edged",len:"about 90–110 cm blade",wt:"1.2–1.8 kg",k:{w:13,cv:0,g:46},
h:"Fighters held the longsword in one or two hands and used the cross guard, the pommel and half-swording grips as well as the edge. Surviving fencing manuals, starting with Johannes Liechtenauer's tradition in the 14th century, show it was a studied art.",
f:"Despite the myth, a real longsword is balanced and agile, not a heavy club."},
{n:"Rapier",jp:"",r:"Europe",c:"Spain, Italy",e:"c. 1500–1700",t:"Slender thrusting sword",len:"about 100–110 cm blade",wt:"0.9–1.2 kg",k:{w:7,cv:0,g:40},
h:"The rapier was a civilian sword for duels and street defence. Its narrow blade and protective hilt favoured the thrust, and masters such as Salvator Fabris wrote treatises that spread the style across Europe.",
f:"Its swept hilt of rings and bars shielded the hand before gloves were common in duels."},
{n:"Shamshir",jp:"",r:"Middle East",c:"Persia",e:"c. 1000s–1800s",t:"Deeply curved, single-edged",len:"about 75–90 cm blade",wt:"0.9–1.2 kg",k:{w:12,cv:26,g:30},
h:"The name means lion's claw or tail in Persian. Its strong curve made it ideal for slashing from horseback, and the finest blades used watered crucible steel with a flowing surface pattern.",
f:"Persian smiths valued blades forged from wootz steel for their pattern and edge."},
{n:"Cutlass",jp:"",r:"Europe",c:"England, France, America",e:"c. 1600–1900",t:"Short, broad, curved",len:"60–70 cm blade",wt:"about 1.0 kg",img:"images/cutlass.jpg",k:{w:20,cv:10,g:36},
h:"Sailors favoured the cutlass because its short, sturdy blade worked in the cramped spaces of a ship. It cut rope, rigging and cane as readily as it served in boarding actions, and navies issued it well into the 19th century.",
f:"Its shortness was a feature: a long sword tangles in rigging and bulkheads."}];
const parts=[["Pommel","The weight at the end of the hilt. It balances the blade and keeps the hand from sliding off.",440],["Grip","Where the hand holds the sword. Cord, leather or wire wrapping improves control.",398],["Guard","Also called the tsuba or cross. It protects the hand and can catch an opposing blade.",362],["Fuller","The shallow groove along the blade. It lightens the sword without losing stiffness.",250],["Tip","The point of the blade, shaped for thrusting, cutting or both.",28]];
function sil(k){const{w,cv,g}=k;return `<svg viewBox="0 0 100 460" fill="#17181a" aria-hidden="true"><path d="M${50+cv*.3},20Q${50+cv+w/2},190 ${50+w/2},360L${50-w/2},360Q${50+cv-w/2},190 ${50+cv*.3},20Z"/><rect x="${50-g/2}" y="358" width="${g}" height="8" rx="3"/><rect x="46" y="366" width="8" height="64"/><circle cx="50" cy="440" r="8"/><path d="M50 60V350" stroke="#e6e3da" stroke-width="1.2" opacity=".55"/><g id="mk"></g></svg>`}
const $=i=>document.getElementById(i);let reg="All",cur=S[0];
const regs=["All","Asia","Europe","Middle East"];
$("chips").innerHTML=regs.map(r=>`<button aria-pressed="${r==="All"}">${r}</button>`).join("");
$("chips").onclick=e=>{if(e.target.tagName!="BUTTON")return;reg=e.target.textContent;[...$("chips").children].forEach(b=>b.setAttribute("aria-pressed",b===e.target));list();const f=S.find(s=>reg=="All"||s.r==reg);show(f)};
function list(){$("idx").innerHTML=S.filter(s=>reg=="All"||s.r==reg).map(s=>`<button role="tab" data-n="${s.n}" aria-selected="${s.n==cur.n}">${s.n}<small>${s.c.split(",")[0]}</small></button>`).join("")}
$("idx").onclick=e=>{const b=e.target.closest("button");if(b)show(S.find(s=>s.n==b.dataset.n))};
function show(s){cur=s;list();const d=$("det");d.classList.remove("sw");void d.offsetWidth;
d.innerHTML=`<div class="plate">${s.jp?`<i>${s.jp}</i>`:""}${s.img?`<img src="${s.img}" alt="Illustration of a ${s.n}">`:sil(s.k)}</div><div><h3>${s.n}</h3><div class="meta"><div><span>Origin</span>${s.c}</div><div><span>Period</span>${s.e}</div><div><span>Type</span>${s.t}</div><div><span>Blade length</span>${s.len}</div><div><span>Weight</span>${s.wt}</div></div><p>${s.h}</p><p class="fact">${s.f}</p></div>`;d.classList.add("sw")}
$("ap").innerHTML=sil({w:14,cv:0,g:34}).replace('<g id="mk"></g>','<rect class="mark" id="bar" x="14" y="362" width="72" height="3" fill="#a8321f"/>');
$("parts").innerHTML=parts.map((p,i)=>`<button role="tab" data-y="${p[2]}" aria-selected="${i==2}">${p[0]}<p>${p[1]}</p></button>`).join("");
$("parts").onclick=e=>{const b=e.target.closest("button");if(!b)return;[...$("parts").children].forEach(x=>x.setAttribute("aria-selected",x===b));$("bar").setAttribute("y",b.dataset.y)};
show(S[0]);
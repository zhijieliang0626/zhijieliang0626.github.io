(function(){
const names = {en:"LIANG Zhijie", ja:"梁 志杰", zh:"梁志杰"};
const kana = "りょう しけつ";
const T = {
  en:{
    st_draft:"Draft", st_done:"Complete", written_in:"In", pages:"{n} pages", langname:{zh:"Chinese", ja:"Japanese", en:"English"}, notes_note:"Notes still in progress are marked Draft and updated as I write.", 
    count:"{n} photos", 
    nav_home:"Home", nav_about:"About Me", nav_research:"Research", nav_notes:"Notes", nav_interests:"Interests", nav_contact:"Contact",
    eyebrow:"Physics · Osaka University",
    position:"Undergraduate student, Department of Physics, School of Science, Osaka University",
    home_bio:"I am an undergraduate student in the Department of Physics at Osaka University, Japan. I am interested in condensed matter physics, especially superconductors, quasicrystals, and low-temperature physics.",
    btn_research:"Research", btn_contact:"Contact me",
    fig:"Meissner effect: below Tc, a superconductor expels the magnetic field.",
    h_intro:"Introduction", h_research:"Research", h_news:"What's new", h_contact:"Contact", h_profile:"Profile", h_hobbies:"Hobbies", h_topics:"Topics",
    more_about:"More about me →", more_research:"Research interests →", more_contact:"Contact details →",
    t_about:"About Me", t_research:"Research", t_notes:"Lecture Notes", t_photos:"Photos", t_interests:"Interests", t_contact:"Contact",
    lead_about:"A short introduction.", lead_research:"Topics in condensed matter physics that I am interested in.",
    lead_interests:"Things I enjoy outside of physics. Click a card to see my photos.", lead_notes:"Study notes I write while learning. Click PDF to open.", lead_photos:"Photos I took.",
    notes_empty:"No notes uploaded yet.", notes_empty2:"Lecture notes will be added here soon.", photos_empty:"No photos in this album yet.", photos_empty2:"Photos will be added here soon.", view:"View photos →", back:"← Back to Interests", close:"Close", lead_contact:"Feel free to contact me by email. Replace (at) with @.",
    about_bio:"I am from Suzhou, Jiangsu, China. I came to Japan in 2022 and now study physics at Osaka University. My main interest is condensed matter physics, in particular how materials behave at very low temperatures.",
    h_edu:"Education", edu:[["2027.04 –","Department of Basic Science, Department of Multidisciplinary Sciences, Graduate School of Arts and Sciences, The University of Tokyo"],["2023.04 – 2027.03","Department of Physics, School of Science, Osaka University"],["2022.10 – 2023.03","Center for Japanese Language and Culture (CJLC), Osaka University"]], l_from:"Hometown", from:"Suzhou, Jiangsu, China",
    l_name:"Name", l_aff:"Affiliation", l_campus:"Campus", l_mail:"Email",
    aff:"Department of Physics, School of Science, Osaka University", campus:"Toyonaka Campus, Osaka University",
    topics:[
      ["T < Tc","Superconductivity","Materials that lose all electrical resistance and expel magnetic fields below a critical temperature."],
      ["5-fold","Quasicrystals","Solids whose atoms are ordered but never repeat periodically, allowing symmetries that ordinary crystals cannot have."],
      ["T → 0 K","Low-temperature physics","The behavior of matter close to absolute zero, where quantum effects become visible on a large scale."]],
    kw:["Superconductivity","Quasicrystals","Low-temperature physics"],
    hobbies:[["f1","Motorsport","Formula 1","Watching the races."],["travel","Places","Travel","Visiting places I have not been to."],["cycling","Outdoors","Cycling","Exploring by bike."],["","Games","Apex Legends","Team battle royale."]],
    news:[["2026.10.20","Website launched."]],
    updated:"Last updated", copy:"Copy", copied:"Copied"
  },
  ja:{
    st_draft:"執筆中", st_done:"完成", written_in:"言語：", pages:"{n} ページ", langname:{zh:"中国語", ja:"日本語", en:"英語"}, notes_note:"「執筆中」のノートは書き進めながら随時更新しています。", 
    count:"{n} 枚", 
    nav_home:"ホーム", nav_about:"自己紹介", nav_research:"研究", nav_notes:"講義ノート", nav_interests:"趣味", nav_contact:"連絡先",
    eyebrow:"物理学 · 大阪大学",
    position:"大阪大学 理学部 物理学科 学部生",
    home_bio:"大阪大学理学部物理学科の学部生です。物性物理、特に超伝導体、準結晶、低温物理に興味を持っています。",
    btn_research:"研究について", btn_contact:"連絡先",
    fig:"マイスナー効果：Tc 以下で超伝導体は磁場を排除する。",
    h_intro:"はじめに", h_research:"研究", h_news:"お知らせ", h_contact:"連絡先", h_profile:"プロフィール", h_hobbies:"趣味", h_topics:"テーマ",
    more_about:"自己紹介へ →", more_research:"研究の詳細へ →", more_contact:"連絡先の詳細へ →",
    t_about:"自己紹介", t_research:"研究", t_notes:"講義ノート", t_photos:"写真", t_interests:"趣味", t_contact:"連絡先",
    lead_about:"簡単な自己紹介です。", lead_research:"物性物理の中で、興味を持っているテーマです。",
    lead_interests:"物理以外で好きなこと。カードを押すと写真が見られます。", lead_notes:"勉強しながら書いているノートです。PDF をクリックすると開きます。", lead_photos:"自分で撮った写真です。",
    notes_empty:"まだノートはありません。", notes_empty2:"講義ノートは近日追加予定です。", photos_empty:"このアルバムにはまだ写真がありません。", photos_empty2:"近日追加予定です。", view:"写真を見る →", back:"← 趣味に戻る", close:"閉じる", lead_contact:"ご連絡はメールでお願いします。(at) を @ に置き換えてください。",
    about_bio:"中国江蘇省蘇州市の出身です。2022年に来日し、現在は大阪大学で物理学を学んでいます。主な関心は物性物理で、特に極低温での物質のふるまいに興味があります。",
    h_edu:"学歴", edu:[["2027.04 –","東京大学大学院 総合文化研究科 広域科学専攻 相関基礎科学系"],["2023.04 – 2027.03","大阪大学 理学部 物理学科"],["2022.10 – 2023.03","大阪大学 日本語日本文化教育センター（CJLC）"]], l_from:"出身", from:"中国 江蘇省 蘇州市",
    l_name:"氏名", l_aff:"所属", l_campus:"キャンパス", l_mail:"メール",
    aff:"大阪大学 理学部 物理学科", campus:"大阪大学 豊中キャンパス",
    topics:[
      ["T < Tc","超伝導","ある臨界温度以下で電気抵抗が完全になくなり、磁場を排除する現象。"],
      ["5回対称","準結晶","原子が規則正しく並びながらも周期的には繰り返さない固体。通常の結晶では許されない対称性を持つ。"],
      ["T → 0 K","低温物理","絶対零度近くでの物質のふるまい。量子効果が巨視的なスケールで現れる。"]],
    kw:["超伝導","準結晶","低温物理"],
    hobbies:[["f1","モータースポーツ","F1","レース観戦。"],["travel","おでかけ","旅行","行ったことのない場所を訪ねること。"],["cycling","アウトドア","サイクリング","自転車であちこち走ること。"],["","ゲーム","Apex Legends","チーム戦のバトルロイヤル。"]],
    news:[["2026.10.20","ウェブサイトを公開しました。"]],
    updated:"最終更新", copy:"コピー", copied:"コピーしました"
  },
  zh:{
    st_draft:"编写中", st_done:"已完成", written_in:"语言：", pages:"{n} 页", langname:{zh:"中文", ja:"日语", en:"英语"}, notes_note:"标为“编写中”的笔记还在写，会随时更新。", 
    count:"{n} 张照片", 
    nav_home:"主页", nav_about:"自我介绍", nav_research:"研究", nav_notes:"讲义笔记", nav_interests:"兴趣", nav_contact:"联系方式",
    eyebrow:"物理学 · 大阪大学",
    position:"大阪大学 理学部 物理学科 本科生",
    home_bio:"我是日本大阪大学理学部物理学科的本科生，对凝聚态物理感兴趣，特别是超导体、准晶和低温物理。",
    btn_research:"研究方向", btn_contact:"联系我",
    fig:"迈斯纳效应：在 Tc 以下，超导体会把磁场排出体外。",
    h_intro:"简介", h_research:"研究", h_news:"动态", h_contact:"联系方式", h_profile:"基本信息", h_hobbies:"兴趣", h_topics:"方向",
    more_about:"查看自我介绍 →", more_research:"查看研究兴趣 →", more_contact:"查看联系方式 →",
    t_about:"自我介绍", t_research:"研究", t_notes:"讲义笔记", t_photos:"照片", t_interests:"兴趣", t_contact:"联系方式",
    lead_about:"关于我的简单介绍。", lead_research:"我在凝聚态物理中感兴趣的方向。",
    lead_interests:"物理之外喜欢的事情。点击卡片可以看我拍的照片。", lead_notes:"我在学习时整理的笔记，点击 PDF 即可打开。", lead_photos:"我自己拍的照片。",
    notes_empty:"还没有上传笔记。", notes_empty2:"讲义笔记会陆续放在这里。", photos_empty:"这个相册还没有照片。", photos_empty2:"照片会陆续放在这里。", view:"查看照片 →", back:"← 返回兴趣", close:"关闭", lead_contact:"欢迎通过邮件联系我，请把 (at) 换成 @。",
    about_bio:"我来自中国江苏苏州，2022 年来到日本，目前在大阪大学学习物理。主要关注凝聚态物理，尤其是物质在极低温下的行为。",
    h_edu:"学习经历", edu:[["2027.04 –","东京大学 研究生院 综合文化研究科 广域科学专攻 相关基础科学系"],["2023.04 – 2027.03","大阪大学 理学部 物理学科"],["2022.10 – 2023.03","大阪大学 日本语日本文化教育中心（CJLC）"]], l_from:"来自", from:"中国 江苏 苏州",
    l_name:"姓名", l_aff:"所属", l_campus:"校区", l_mail:"邮箱",
    aff:"大阪大学 理学部 物理学科", campus:"大阪大学 丰中校区",
    topics:[
      ["T < Tc","超导","在某一临界温度以下，电阻完全消失并排斥磁场的现象。"],
      ["五重对称","准晶","原子排列有序但不呈周期性重复的固体，具有普通晶体不允许的对称性。"],
      ["T → 0 K","低温物理","研究接近绝对零度时物质的行为，此时量子效应会在宏观尺度上显现。"]],
    kw:["超导","准晶","低温物理"],
    hobbies:[["f1","赛车","F1","看比赛。"],["travel","出行","旅行","去没去过的地方看看。"],["cycling","户外","骑行","骑车到处转转。"],["","游戏","Apex 英雄","团队竞技的大逃杀游戏。"]],
    news:[["2026.10.20","个人网站上线。"]],
    updated:"最后更新", copy:"复制", copied:"已复制"
  }
};
/* ===== 笔记：PDF 放在 notes 文件夹。status 填 "draft"（编写中）或 "done"（完成） ===== */
const NOTES = [
  { file:"notes/superconductor-notes.pdf", status:"draft", updated:"2026.09.28", pages:16, lang:"ja",
    title:{en:"Superconductivity Notes", ja:"超伝導ノート", zh:"超导笔记"},
    topics:{en:"Basics of superconductivity · BCS theory", ja:"超伝導現象の基礎 · BCS理論", zh:"超导现象基础 · BCS 理论"} },
  { file:"notes/semiconductor-notes.pdf", status:"draft", updated:"2026.10.02", pages:37, lang:"zh",
    title:{en:"Semiconductor Notes", ja:"半導体の学習ノート", zh:"半导体学习笔记"},
    topics:{en:"Devices · band theory · carriers · conduction", ja:"デバイス · バンド理論 · キャリア · 電気伝導", zh:"器件 · 能带理论 · 载流子 · 电导"} }
];

/* ===== 照片 =====
   每个相册（f1 / travel / cycling）里放若干“合集”。照片放在 photos/相册/合集文件夹/ 里，
   每张照片准备两份：xxx.jpg（大图，长边约 2000px）和 xxx-thumb.jpg（缩略图，长边约 900px）。 */
const ALBUMS = {
  f1: [
    { id:"f1-singapore-2026", dir:"photos/f1/singapore-2026", date:"2026.10",
      title:{en:"2026 Singapore Grand Prix", ja:"2026 F1 シンガポールグランプリ", zh:"2026 F1 新加坡大奖赛"},
      place:{en:"Marina Bay Street Circuit", ja:"マリーナベイ・ストリート・サーキット", zh:"滨海湾街道赛道"},
      photos:[
      {f:"sg2026-01", w:900, h:600, cap:"Ferrari · #44"},
      {f:"sg2026-02", w:900, h:469, cap:"Racing Bulls · #30"},
      {f:"sg2026-03", w:900, h:774, cap:"Mercedes"},
      {f:"sg2026-04", w:900, h:559, cap:"Ferrari · #16"},
      {f:"sg2026-05", w:900, h:600, cap:"Audi"},
      {f:"sg2026-06", w:900, h:600, cap:{en:"The circuit at night", ja:"夜のサーキット", zh:"夜色中的赛道"}},
      {f:"sg2026-07", w:900, h:691, cap:"Ferrari · #44"},
      {f:"sg2026-08", w:900, h:514, cap:"Ferrari · #16"},
      {f:"sg2026-09", w:900, h:601, cap:"Ferrari · #44"},
      {f:"sg2026-10", w:900, h:600, cap:"Ferrari · #44"},
      {f:"sg2026-11", w:900, h:770, cap:"Haas"},
      ] }
  ],
  travel: [
  ],
  cycling: [
  ]
};

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const cards = a => a.map(([tag,t,x]) => `<li><span class="tag">${esc(tag)}</span><h3>${esc(t)}</h3><p>${esc(x)}</p></li>`).join("");
const hobbyCards = (a,d) => a.map(([key,tag,t,x]) => key
  ? `<li><a class="card-link" href="photos.html#${key}"><span class="tag">${esc(tag)}</span><h3>${esc(t)}</h3><p>${esc(x)}</p><span class="go">${esc(d.view)}</span></a></li>`
  : `<li><span class="tag">${esc(tag)}</span><h3>${esc(t)}</h3><p>${esc(x)}</p></li>`).join("");
const empty = (a,b) => `<div class="empty"><strong>${esc(a)}</strong><span>${esc(b)}</span></div>`;
let album = "f1", shown = [];
const pick = (v,l) => v && typeof v === "object" ? (v[l] || v.en) : (v || "");
function renderPhotos(d){
  const l = cur, keys = Object.keys(ALBUMS);
  const h = (location.hash || "").slice(1);
  let coll = null;
  for(const k of keys){ const c = (ALBUMS[k]||[]).find(c => c.id === h); if(c){ coll = c; album = k; } }
  if(!coll && keys.includes(h)) album = h;
  const albumName = k => (d.hobbies.find(x => x[0] === k) || [])[2] || k;
  const count = n => d.count.replace("{n}", n);
  if(coll){
    shown = coll.photos.map((p,i) => ({src:`${coll.dir}/${p.f}.jpg`, cap:pick(p.cap,l), n:i+1}));
    const th = p => `${coll.dir}/${p.f}-thumb.jpg`;
    const fig = (p,i,cls) => `<figure class="${cls}"><button type="button" data-i-photo="${i}" aria-label="${esc(pick(p.cap,l))}"><img src="${esc(i===0 ? `${coll.dir}/${p.f}.jpg` : th(p))}" width="${p.w}" height="${p.h}" alt="${esc(pick(p.cap,l))}" ${i?'loading="lazy"':''}></button><figcaption><span class="num">${String(i+1).padStart(2,"0")}</span>${esc(pick(p.cap,l))}</figcaption></figure>`;
    $("photoHead").innerHTML = `<a class="back" href="#${album}">← ${esc(albumName(album))}</a>
      <span class="eyebrow">${esc(albumName(album))}</span>
      <h1 class="page-title">${esc(pick(coll.title,l))}</h1>
      <p class="coll-meta"><span>${esc(pick(coll.place,l))}</span><span>${esc(coll.date)}</span><span>${esc(count(coll.photos.length))}</span></p>`;
    $("gallery").innerHTML = fig(coll.photos[0],0,"lead-photo") + `<div class="masonry">${coll.photos.slice(1).map((p,i) => fig(p,i+1,"")).join("")}</div>`;
    document.title = `${pick(coll.title,l)} | ${names[l]}`;
    return;
  }
  const list = ALBUMS[album] || [];
  shown = [];
  $("photoHead").innerHTML = `<a class="back" href="interests.html">${esc(d.back)}</a>
    <h1 class="page-title">${esc(albumName(album))}</h1>
    <p class="lead">${esc(d.lead_photos)}</p>
    <nav class="albums" aria-label="Albums">${keys.map(k => `<a href="#${k}" aria-current="${k===album}">${esc(albumName(k))}</a>`).join("")}</nav>`;
  $("gallery").innerHTML = list.length
    ? `<ul class="collections">${list.map(c => { const p = c.photos[0]; return `<li><a href="#${c.id}">
        <img src="${esc(`${c.dir}/${p.f}-thumb.jpg`)}" alt="" width="${p.w}" height="${p.h}">
        <span class="info"><span class="t">${esc(pick(c.title,l))}</span><span class="m">${esc(pick(c.place,l))} · ${esc(count(c.photos.length))}</span></span></a></li>`; }).join("")}</ul>`
    : empty(d.photos_empty, d.photos_empty2) + `<div class="slots" aria-hidden="true"><span></span><span></span><span></span></div>`;
}
let cur = "en";

function setLang(l){
  if(!T[l]) l = "en";
  cur = l;
  const d = Object.assign({name:names[l]}, T[l]);
  document.documentElement.lang = l === "zh" ? "zh-CN" : l;
  document.querySelectorAll("[data-i]").forEach(el => { const v = d[el.dataset.i]; if(v != null) el.textContent = v; });
  const alts = { en:[["zh-CN",names.zh],["ja",kana]], zh:[["en",names.en],["ja",kana]], ja:[["ja",kana],["en",names.en]] }[l];
  if($("altNames")) $("altNames").innerHTML = alts.map(([lg,t]) => `<span lang="${lg}">${t}</span>`).join("");
  if($("nameRows")) $("nameRows").textContent = `${names.en} / ${names.zh} / ${kana}`;
  if($("keywords")) $("keywords").innerHTML = d.kw.map(k => `<li>${esc(k)}</li>`).join("");
  if($("topics")) $("topics").innerHTML = cards(d.topics);
  if($("hobbies")) $("hobbies").innerHTML = hobbyCards(d.hobbies, d);
  if($("notes")) $("notes").innerHTML = NOTES.length
    ? `<ul class="notes">${NOTES.map(n => `<li>
        <span class="nstatus ${n.status}">${esc(n.status === "done" ? d.st_done : d.st_draft)}</span>
        <span class="nt">${esc(pick(n.title,l))}<span class="nc">${esc(pick(n.topics,l))}</span>
          <span class="nm">${esc(d.written_in)} ${esc(d.langname[n.lang]||n.lang)} · ${esc(d.pages.replace("{n}", n.pages))} · ${esc(d.updated)} ${esc(n.updated)}</span></span>
        <a class="pdf" href="${esc(n.file)}" target="_blank" rel="noopener">PDF ↗</a></li>`).join("")}</ul>`
    : empty(d.notes_empty, d.notes_empty2);
  if($("eduList")) $("eduList").innerHTML = d.edu.map(([t,s]) => `<li><time>${t}</time><span>${esc(s)}</span></li>`).join("");
  if($("newsList")) $("newsList").innerHTML = d.news.map(([t,s]) => `<li><time>${t}</time><span>${esc(s)}</span></li>`).join("");
  const page = document.body.dataset.page;
  document.title = page === "home" ? names[l] : `${d["t_"+page] || ""} | ${names[l]}`;
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === l));
  try{ localStorage.setItem("lang", l); }catch(_){}
  if($("gallery")) renderPhotos(d);
}

const navPage = document.body.dataset.page === "photos" ? "interests" : document.body.dataset.page;
document.querySelectorAll(".nav a").forEach(a => { if(a.dataset.page === navPage) a.setAttribute("aria-current","page"); });
window.addEventListener("hashchange", () => { if($("gallery")) renderPhotos(Object.assign({}, T[cur])); });

/* lightbox */
let lbIndex = -1;
function openLB(i){
  if(!shown.length) return; lbIndex = (i + shown.length) % shown.length;
  let lb = $("lightbox");
  if(!lb){
    lb = document.createElement("div"); lb.id = "lightbox"; lb.className = "lightbox"; lb.setAttribute("role","dialog"); lb.setAttribute("aria-modal","true");
    lb.innerHTML = `<button class="lb-close" type="button">✕</button><button class="lb-prev" type="button">‹</button><button class="lb-next" type="button">›</button><img alt=""><p></p>`;
    document.body.appendChild(lb);
    lb.querySelector(".lb-close").onclick = closeLB;
    lb.querySelector(".lb-prev").onclick = () => openLB(lbIndex-1);
    lb.querySelector(".lb-next").onclick = () => openLB(lbIndex+1);
    lb.addEventListener("click", e => { if(e.target === lb) closeLB(); });
  }
  const p = shown[lbIndex];
  lb.querySelector("img").src = p.src; lb.querySelector("img").alt = p.cap || "";
  lb.querySelector("p").textContent = (p.n ? `${String(p.n).padStart(2,"0")} / ${String(shown.length).padStart(2,"0")}   ` : "") + (p.cap || "");
  lb.querySelector(".lb-close").setAttribute("aria-label", T[cur].close);
  lb.hidden = false; lb.querySelector(".lb-close").focus();
}
function closeLB(){ const lb = $("lightbox"); if(lb) lb.hidden = true; }
document.addEventListener("click", e => { const b = e.target.closest("[data-i-photo]"); if(b) openLB(+b.dataset.iPhoto); });
document.addEventListener("keydown", e => {
  const lb = $("lightbox"); if(!lb || lb.hidden) return;
  if(e.key === "Escape") closeLB(); if(e.key === "ArrowLeft") openLB(lbIndex-1); if(e.key === "ArrowRight") openLB(lbIndex+1);
});
document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
let saved = null; try{ saved = localStorage.getItem("lang"); }catch(_){}
const nav = (navigator.language || "").toLowerCase();
setLang(saved || (nav.startsWith("ja") ? "ja" : nav.startsWith("zh") ? "zh" : "en"));

const btn = $("copyBtn");
if(btn) btn.addEventListener("click", () => {
  const t = $("mail").textContent.replace("(at)","@");
  const sel = () => { const r=document.createRange(); r.selectNodeContents($("mail")); const s=getSelection(); s.removeAllRanges(); s.addRange(r); };
  try{ navigator.clipboard.writeText(t).then(() => { btn.textContent = T[cur].copied; setTimeout(()=>btn.textContent=T[cur].copy,1500); }, sel); }catch(_){ sel(); }
});

/* Superconductivity drawings: Meissner effect (hero) and Abrikosov vortex lattice (strips) */
function colors(){
  const cs = getComputedStyle(document.documentElement), g = n => cs.getPropertyValue(n).trim();
  return {a:g("--tile-a"), b:g("--tile-b"), edge:g("--tile-edge"), field:g("--field"), fg:g("--fg"), muted:g("--muted"), surface:g("--surface"), mono:g("--mono")};
}
function setup(cv){
  const w = cv.clientWidth, h = cv.clientHeight; if(!w || !h) return null;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  cv.width = Math.round(w*dpr); cv.height = Math.round(h*dpr);
  const ctx = cv.getContext("2d"); ctx.setTransform(dpr,0,0,dpr,0,0); ctx.clearRect(0,0,w,h);
  return {ctx,w,h};
}
function meissner(cv){
  const S = setup(cv); if(!S) return; const {ctx,w,h} = S, c = colors();
  const R = Math.min(w,h)*0.24, cx = w/2, cy = h/2, a = R;
  // field lines of a uniform field bent around a perfect diamagnet (cylinder): psi = y(1 - a^2/r^2)
  const lineY = y0 => { const out = []; const c0 = y0; const sgn = Math.sign(c0) || 1, cc = Math.abs(c0);
    for(let x=-w/2-4; x<=w/2+4; x+=2){
      let lo = Math.sqrt(Math.max(a*a - x*x, 0)), hi = cc + a + 50;
      for(let k=0;k<40;k++){ const m=(lo+hi)/2, f = m*(1 - a*a/(x*x+m*m)) - cc; if(f>0) hi=m; else lo=m; }
      out.push([cx+x, cy + sgn*(lo+hi)/2]);
    } return out; };
  ctx.strokeStyle = c.field; ctx.lineWidth = 1.4; ctx.lineCap = "round";
  const n = 6, gap = (h/2) / (n+0.5);
  for(let i=-n;i<=n;i++){
    if(i===0) continue;
    const pts = lineY(i*gap*0.92);
    ctx.beginPath(); pts.forEach(([x,y],k) => k ? ctx.lineTo(x,y) : ctx.moveTo(x,y)); ctx.stroke();
    // arrow at ~ 1/6 width
    const k = Math.floor(pts.length*0.14), [x1,y1] = pts[k], [x2,y2] = pts[k+3], ang = Math.atan2(y2-y1,x2-x1);
    ctx.save(); ctx.translate(x2,y2); ctx.rotate(ang); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(-7,-3.5); ctx.lineTo(-7,3.5); ctx.closePath(); ctx.fillStyle = c.field; ctx.fill(); ctx.restore();
  }
  // straight centre line stops at the body
  ctx.beginPath(); ctx.moveTo(0,cy); ctx.lineTo(cx-R-6,cy); ctx.moveTo(cx+R+6,cy); ctx.lineTo(w,cy); ctx.stroke();
  // superconductor
  const grd = ctx.createRadialGradient(cx-R*0.35, cy-R*0.35, R*0.1, cx, cy, R);
  grd.addColorStop(0, c.a); grd.addColorStop(1, c.a);
  ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.fillStyle = grd; ctx.fill();
  ctx.fillStyle = "#FFFFFF"; ctx.font = `500 ${Math.round(R*0.32)}px ${c.mono || "monospace"}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillText("B = 0", cx, cy);
  ctx.fillStyle = c.muted; ctx.font = `500 12px ${c.mono || "monospace"}`; ctx.textAlign = "left"; ctx.textBaseline = "top";
  ctx.fillText("B →", 10, 10);
  ctx.textAlign = "right"; ctx.fillText("T < Tc", w-10, 10);
}
function vortices(cv){
  const S = setup(cv); if(!S) return; const {ctx,w,h} = S, c = colors();
  ctx.fillStyle = c.b; ctx.fillRect(0,0,w,h);
  const d = 26, rowH = d*Math.sqrt(3)/2;
  for(let r=-1, y=-rowH; y<h+rowH; r++, y+=rowH){
    for(let x = (r%2 ? d/2 : 0) - d; x < w + d; x += d){
      for(let k=3;k>=1;k--){ ctx.beginPath(); ctx.arc(x,y,k*3.6,0,Math.PI*2); ctx.strokeStyle = c.field; ctx.globalAlpha = 0.18*k/3+0.05; ctx.lineWidth = 1; ctx.stroke(); }
      ctx.globalAlpha = 1; ctx.beginPath(); ctx.arc(x,y,2.4,0,Math.PI*2); ctx.fillStyle = c.a; ctx.fill();
    }
  }
}
function draw(cv){ cv.classList.contains("strip") ? vortices(cv) : meissner(cv); }
const canvases = [...document.querySelectorAll("canvas.sc")];
const redraw = () => canvases.forEach(draw);
redraw();
let rt; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(redraw, 120); });
try{ matchMedia("(prefers-color-scheme: dark)").addEventListener("change", redraw); }catch(_){}
new MutationObserver(redraw).observe(document.documentElement, {attributes:true, attributeFilter:["data-theme"]});
if(document.fonts && document.fonts.ready) document.fonts.ready.then(redraw);
})();

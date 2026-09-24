import React, { useEffect, useRef } from "react";

/**
 * Viral Vision – marketing site as a single React component.
 *
 * The markup and CSS below are injected verbatim (dangerouslySetInnerHTML)
 * because the page is built from large hand-authored SVG illustrations —
 * converting every SVG attribute to JSX/camelCase would be hundreds of
 * error-prone renames for no behavioural benefit. All the *interactive*
 * parts (hero video player, service tabs, count-up numbers, contact form)
 * are wired up for real with React hooks in the effect below, scoped to
 * this component's own root element (via useRef), so you can safely drop
 * multiple instances on a page or mount/unmount it like any component.
 *
 * Edit the two constants below to point at your own video and inbox.
 */

const HERO_VIDEO_SRC = ""; // e.g. "/videos/viral-vision-intro.mp4" — leave empty to keep the animated intro
const CONTACT_EMAIL = "hello@viralvision.com"; // where the contact form sends its message

const STYLES = `

:root{
  --bark:#241d14; --olive:#332b1e; --olive-2:#43392a;
  --gold:#d4af7a; --gold-hi:#ecd6a8; --gold-lo:#a9814d;
  --green:#0f2c21; --green-2:#17402f; --ivory:#f2e9d8;
  --bg:var(--bark); --fg:var(--ivory); --fg-soft:#cbbfa6; --line:rgba(212,175,122,.28);
  --paper:#f2e9d8; --paper-2:#e8dcc4; --ink:#241d14; --ink-soft:#5b4f3c;
  --paper-line:rgba(36,29,20,.2); --paper-accent:#1c5a42;
  --display:Marcellus,"Times New Roman",Georgia,serif;
  --body:"Hanken Grotesk",system-ui,-apple-system,"Segoe UI",sans-serif;
}
@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]){
    --paper:#2b241a; --paper-2:#352d20; --ink:#f2e9d8; --ink-soft:#c9bda4;
    --paper-line:rgba(212,175,122,.25); --paper-accent:#d4af7a;
  }
}
:root[data-theme="dark"]{
  --paper:#2b241a; --paper-2:#352d20; --ink:#f2e9d8; --ink-soft:#c9bda4;
  --paper-line:rgba(212,175,122,.25); --paper-accent:#d4af7a;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--fg);font:400 17px/1.6 var(--body);-webkit-font-smoothing:antialiased}
h1,h2,h3{font-family:var(--display);font-weight:400;line-height:1.1;margin:0}
p{margin:0}
a{color:inherit}
button{font:inherit;color:inherit}
:focus-visible{outline:2px solid var(--gold-hi);outline-offset:3px;border-radius:4px}
.wrap{max-width:1160px;margin:0 auto;padding:0 24px}
.defs{position:absolute;width:0;height:0;overflow:hidden}

/* nav */
.nav{display:flex;align-items:center;justify-content:space-between;padding:22px 0}
.brand{display:flex;align-items:center;gap:12px;text-decoration:none}
.brand svg{width:34px;height:34px}
.brand span{font-family:var(--display);letter-spacing:.22em;font-size:16px;color:var(--gold-hi)}
.nav ul{display:flex;gap:28px;list-style:none;margin:0;padding:0}
.nav ul a{text-decoration:none;color:var(--fg-soft);font-size:15px}
.nav ul a:hover{color:var(--gold-hi)}
.btn{display:inline-block;padding:13px 24px;border-radius:999px;text-decoration:none;font-weight:600;font-size:15px;border:1px solid var(--gold);cursor:pointer;background:transparent;color:var(--gold-hi)}
.btn.solid{background:linear-gradient(135deg,var(--gold-hi),var(--gold) 55%,var(--gold-lo));color:var(--bark);border-color:transparent}
.btn:hover{filter:brightness(1.08)}
.btn.small{padding:9px 18px;font-size:14px}

/* hero */
.hero{display:grid;grid-template-columns:1.12fr 1fr;gap:56px;align-items:center;padding:20px 0 96px}
.vid{position:relative;aspect-ratio:16/9;border-radius:20px;overflow:hidden;border:1px solid var(--gold-lo);background:var(--green);box-shadow:0 30px 60px -30px rgba(0,0,0,.7),0 0 0 6px rgba(212,175,122,.08)}
.vid svg.stage,.vid video{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:cover}
.vid .scrim{position:absolute;left:0;right:0;bottom:0;height:34%;background:linear-gradient(to top,rgba(8,20,15,.85),transparent);pointer-events:none}
.cap{position:absolute;left:18px;right:18px;bottom:42px;font-family:var(--display);font-size:clamp(15px,2.1vw,21px);color:var(--ivory);min-height:1.3em}
.ctrl{position:absolute;left:14px;right:14px;bottom:10px;display:flex;align-items:center;gap:12px}
.ctrl button{width:26px;height:26px;padding:0;border:0;border-radius:50%;background:rgba(242,233,216,.16);display:grid;place-items:center;cursor:pointer}
.ctrl button svg{width:12px;height:12px;fill:var(--ivory)}
.bar{flex:1;height:3px;background:rgba(242,233,216,.22);border-radius:2px;overflow:hidden}
.bar i{display:block;height:100%;width:0;background:var(--gold)}
.stage.paused *{animation-play-state:paused!important}
.hero h1{font-size:clamp(38px,5vw,62px);margin-bottom:22px}
.hero p.lead{color:var(--fg-soft);max-width:34em;margin-bottom:32px;font-size:18px}
.hero .row{display:flex;gap:14px;flex-wrap:wrap}
.hero small{display:block;margin-top:28px;color:var(--fg-soft);font-size:14px}

/* generic sections */
.sec{padding:100px 0}
.sec h2{font-size:clamp(30px,3.8vw,46px);margin-bottom:16px;max-width:16em}
.sec .sub{color:var(--fg-soft);max-width:36em;margin-bottom:52px}

/* services */
.svc{display:grid;grid-template-columns:250px 1fr;gap:48px}
.tabs{display:flex;flex-direction:column;border-left:1px solid var(--line)}
.tab{background:none;border:0;text-align:left;padding:16px 22px;cursor:pointer;color:var(--fg-soft);font-size:17px;position:relative;margin-left:-1px;border-left:2px solid transparent}
.tab:hover{color:var(--ivory)}
.tab[aria-selected="true"]{color:var(--gold-hi);border-left-color:var(--gold);font-weight:600}
.panel{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
.panel[hidden]{display:none}
.ill{width:100%;height:auto;display:block;background:linear-gradient(160deg,var(--green-2),var(--green));border:1px solid var(--line);border-radius:18px}
.panel h3{font-size:28px;margin-bottom:12px}
.panel p{color:var(--fg-soft);margin-bottom:18px}
.ticks{list-style:none;margin:0;padding:0;display:grid;gap:8px}
.ticks li{position:relative;padding-left:22px;font-size:16px}
.ticks li::before{content:"";position:absolute;left:2px;top:.62em;width:7px;height:7px;background:var(--gold);transform:rotate(45deg)}

/* svg animation for illustrations */
.ill *{transform-box:fill-box}
.on .pop{animation:pop .55s var(--d,0s) both cubic-bezier(.2,.8,.2,1);transform-origin:center}
.on .wipe{animation:wipe .6s var(--d,0s) both cubic-bezier(.2,.8,.2,1);transform-origin:left center}
.on .rise{animation:rise .7s var(--d,0s) both cubic-bezier(.2,.8,.2,1);transform-origin:center bottom}
.on .draw{stroke-dasharray:420;animation:draw 1.4s var(--d,.4s) both ease-out}
.on .ping{animation:ping 2.4s var(--d,0s) infinite ease-out;transform-origin:center}
.on .bob{animation:bob 2.6s var(--d,0s) infinite ease-in-out}
.on .orbit{animation:spin 14s linear infinite;transform-origin:140px 150px;transform-box:view-box}
@keyframes pop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:scale(1)}}
@keyframes wipe{from{opacity:0;transform:scaleX(0)}to{opacity:1;transform:scaleX(1)}}
@keyframes rise{from{opacity:0;transform:scaleY(0)}to{opacity:1;transform:scaleY(1)}}
@keyframes draw{from{stroke-dashoffset:420}to{stroke-dashoffset:0}}
@keyframes ping{0%{opacity:.7;transform:scale(.4)}100%{opacity:0;transform:scale(1.6)}}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes cursor{0%{transform:translate(0,0)}55%{transform:translate(-110px,-60px)}100%{transform:translate(-110px,-60px)}}

/* hero scene animation */
.stage .scene{opacity:0;transition:opacity .5s}
.stage[data-scene="1"] .s1,.stage[data-scene="2"] .s2,.stage[data-scene="3"] .s3,.stage[data-scene="4"] .s4,.stage[data-scene="5"] .s5{opacity:1}
.stage *{transform-box:fill-box}
.stage[data-scene="1"] .eye{transform-origin:center;animation:eyeopen 1s .2s both cubic-bezier(.2,.8,.2,1)}
.stage[data-scene="1"] .iris{animation:look 2.6s 1.1s ease-in-out both}
.stage[data-scene="1"] .ray{animation:fadein .6s var(--d,0s) both}
.stage[data-scene="1"] .spark{transform-origin:center;animation:twinkle 1.4s var(--d,0s) infinite}
.stage[data-scene="2"] .pop{transform-origin:center;animation:pop .55s var(--d,0s) both cubic-bezier(.2,.8,.2,1)}
.stage[data-scene="2"] .wipe{transform-origin:left center;animation:wipe .6s var(--d,0s) both cubic-bezier(.2,.8,.2,1)}
.stage[data-scene="2"] .bob{animation:bob 1.6s 1.2s infinite ease-in-out}
.stage[data-scene="3"] .typer{transform-origin:left center;animation:typer 1.5s .4s steps(15) both}
.stage[data-scene="3"] .result{animation:slideup .7s 2.1s both cubic-bezier(.2,.8,.2,1)}
.stage[data-scene="3"] .ghost{animation:fadein .6s 2.6s both}
.stage[data-scene="4"] .phone{animation:slideup .7s both cubic-bezier(.2,.8,.2,1)}
.stage[data-scene="4"] .chip1{animation:chipl .6s .8s both cubic-bezier(.2,.8,.2,1)}
.stage[data-scene="4"] .chip2{animation:chipl .6s 1.4s both cubic-bezier(.2,.8,.2,1)}
.stage[data-scene="4"] .fh{animation:floatup 2.4s var(--d,0s) infinite ease-out}
.stage[data-scene="4"] .beat{animation:beat .9s .8s infinite;transform-origin:center}
.stage[data-scene="4"] .rise{transform-origin:center bottom;animation:rise .7s var(--d,0s) both cubic-bezier(.2,.8,.2,1)}
.stage[data-scene="4"] .fadein{animation:fadein .6s var(--d,0s) both}
.stage[data-scene="5"] .slab{animation:slab 1s var(--d,0s) both cubic-bezier(.2,.8,.2,1)}
.stage[data-scene="5"] .word{animation:fadein 1s 1s both}
.stage[data-scene="5"] .tag{animation:fadein 1s 1.5s both}
@keyframes eyeopen{from{transform:scaleY(.04)}to{transform:scaleY(1)}}
@keyframes look{0%{transform:translateX(0)}30%{transform:translateX(-34px)}65%{transform:translateX(34px)}100%{transform:translateX(0)}}
@keyframes twinkle{0%,100%{opacity:.2;transform:scale(.6)}50%{opacity:1;transform:scale(1.2)}}
@keyframes typer{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes slideup{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
@keyframes chipl{from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:translateX(0)}}
@keyframes fadein{from{opacity:0}to{opacity:1}}
@keyframes floatup{0%{opacity:0;transform:translateY(20px) scale(.6)}20%{opacity:1}100%{opacity:0;transform:translateY(-110px) scale(1.1)}}
@keyframes beat{0%,100%{transform:scale(1)}40%{transform:scale(1.35)}}
@keyframes slab{from{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}

/* math band */
.math{background:var(--green);position:relative;overflow:hidden;border-block:1px solid var(--gold-lo)}
.math::before{content:"";position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Cg fill='none' stroke='%23d4af7a' stroke-opacity='.16' stroke-width='1.2'%3E%3Cpath d='M-20 300 C120 240 200 320 340 220 S560 120 820 160'/%3E%3Cpath d='M200 -20 C230 80 180 140 260 220 S380 330 350 430'/%3E%3Cpath d='M560 -20 C600 60 520 120 600 200 S760 240 820 330'/%3E%3C/g%3E%3C/svg%3E") center/cover}
.math .wrap{position:relative}
.flow{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:8px}
.step{padding:8px 28px 8px 0;position:relative}
.step:not(:last-child)::after{content:"";position:absolute;right:14px;top:34px;width:20px;height:2px;background:var(--gold)}
.step:not(:last-child)::before{content:"";position:absolute;right:14px;top:29px;width:9px;height:9px;border-top:2px solid var(--gold);border-right:2px solid var(--gold);transform:rotate(45deg) translate(-2px,2px)}
.step b{display:block;font-family:var(--display);font-weight:400;font-size:clamp(34px,4vw,52px);color:var(--gold-hi);line-height:1.1}
.step span{color:var(--fg-soft);font-size:15px}
.fine{margin-top:36px;font-size:14px;color:var(--fg-soft)}

/* packages */
.paper{background:var(--paper);color:var(--ink)}
.paper .sub{color:var(--ink-soft)}
.packs{display:grid;grid-template-columns:1fr 1.12fr 1fr;gap:28px;align-items:stretch}
.pk{border:1px solid var(--paper-line);border-radius:18px;padding:34px 30px}
.pk h3{font-size:26px;margin-bottom:6px}
.pk .who{color:var(--ink-soft);font-size:15px;margin-bottom:20px}
.pk .price{font-family:var(--display);font-size:32px;line-height:1.15;margin-bottom:4px}
.pk .price small{display:block;font-family:var(--body);font-size:14px;color:var(--ink-soft);margin-top:4px}
.pk .ticks{margin-top:24px;padding-top:22px;border-top:1px solid var(--paper-line)}
.pk .ticks li::before{background:var(--paper-accent)}
.pk .plus{font-size:14px;color:var(--ink-soft);margin-top:24px;padding-top:20px;border-top:1px solid var(--paper-line)}
.pk .plus + .ticks{margin-top:14px;padding-top:0;border-top:0}
.pk.main{background:linear-gradient(170deg,var(--green-2),var(--green));color:var(--ivory);border:1px solid var(--gold);margin-block:-22px;padding-block:56px;box-shadow:0 30px 50px -30px rgba(15,44,33,.8)}
.pk.main .who,.pk.main .price small,.pk.main .plus{color:#cfc3aa}
.pk.main .ticks,.pk.main .plus{border-color:var(--line)}
.pk.main .ticks li::before{background:var(--gold)}
.pk .badge{display:inline-block;background:var(--gold);color:var(--bark);font-size:13px;font-weight:600;padding:4px 12px;border-radius:999px;margin-bottom:16px}
.only{margin-top:56px;display:flex;gap:20px;align-items:center;justify-content:space-between;flex-wrap:wrap;border:1px dashed var(--paper-line);border-radius:14px;padding:22px 28px}
.only p{max-width:40em}
.only b{font-family:var(--display);font-weight:400;font-size:22px}
.paper .btn{color:var(--ink);border-color:var(--ink)}

/* process */
.steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(5,1fr);gap:24px;position:relative;counter-reset:s}
.steps::before{content:"";position:absolute;left:0;right:0;top:27px;height:1px;background:var(--line)}
.steps li{position:relative}
.steps .ico{width:56px;height:56px;border-radius:50%;background:var(--bark);border:1px solid var(--gold-lo);display:grid;place-items:center;margin-bottom:18px;position:relative}
.steps .ico svg{width:28px;height:28px;fill:none;stroke:var(--gold);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.steps h3{font-size:20px;margin-bottom:6px}
.steps p{color:var(--fg-soft);font-size:15px}

/* contact */
.contact{background:var(--olive);border-top:1px solid var(--line)}
.cgrid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}
form{display:grid;gap:14px}
label{display:grid;gap:6px;font-size:14px;color:var(--fg-soft)}
input,select,textarea{font:inherit;color:var(--ivory);background:rgba(0,0,0,.22);border:1px solid var(--line);border-radius:10px;padding:12px 14px;width:100%}
select option{color:#241d14}
textarea{min-height:96px;resize:vertical}
input::placeholder,textarea::placeholder{color:#9c917b}
.tworow{display:grid;grid-template-columns:1fr 1fr;gap:14px}
footer{padding:36px 0;border-top:1px solid var(--line);color:var(--fg-soft);font-size:14px}
footer .wrap{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}

@media (max-width:980px){
  .hero{grid-template-columns:1fr;gap:36px;padding-bottom:72px}
  .svc{grid-template-columns:1fr;gap:28px}
  .tabs{flex-direction:row;overflow-x:auto;border-left:0;border-bottom:1px solid var(--line)}
  .tab{white-space:nowrap;border-left:0;border-bottom:2px solid transparent;margin:0 0 -1px;padding:12px 16px}
  .tab[aria-selected="true"]{border-bottom-color:var(--gold)}
  .panel{grid-template-columns:1fr}
  .packs{grid-template-columns:1fr}
  .pk.main{margin-block:0;padding-block:34px}
  .steps{grid-template-columns:1fr;gap:28px}
  .steps::before{display:none}
  .steps li{display:grid;grid-template-columns:56px 1fr;column-gap:18px}
  .steps .ico{grid-row:span 2;margin:0}
  .flow{grid-template-columns:1fr 1fr;row-gap:28px}
  .step:nth-child(2)::after,.step:nth-child(2)::before{display:none}
  .cgrid{grid-template-columns:1fr;gap:40px}
  .nav ul{display:none}
  .sec{padding:72px 0}
}
@media (max-width:520px){
  .tworow{grid-template-columns:1fr}
}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-delay:0s!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}
}

`;

const BODY_HTML = `
<!-- shared gradients and the V mark -->
<svg class="defs" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="goldG" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f0dcb0"/><stop offset=".5" stop-color="#d4af7a"/><stop offset="1" stop-color="#a9814d"/>
    </linearGradient>
    <linearGradient id="greenG" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0c2a1f"/><stop offset=".6" stop-color="#153a2b"/><stop offset="1" stop-color="#0a2018"/>
    </linearGradient>
    <linearGradient id="marble" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d2a1f"/><stop offset="1" stop-color="#174632"/>
    </linearGradient>
    <symbol id="vmark" viewBox="0 0 100 100">
      <polygon points="0.4,12.5 22,12.5 50,79 42,99.5" fill="url(#goldG)"/>
      <polygon points="21.5,0.9 48.6,0.9 73.8,58.4 59,92.9" fill="url(#greenG)" stroke="#d4af7a" stroke-width=".8"/>
      <path d="M32 10 L40 32 L37 48 M40 32 L52 44" stroke="#a9814d" stroke-width=".6" fill="none" opacity=".8"/>
      <path d="M67.3 0.4 H100 L73.8 58.4 L76 40 Q75 18 67.3 0.4 Z" fill="url(#goldG)"/>
    </symbol>
    <symbol id="heart" viewBox="-16 -16 32 32">
      <path d="M0 10 C-16 -2 -13 -15 -6 -15 C-2 -15 0 -12 0 -10 C0 -12 2 -15 6 -15 C13 -15 16 -2 0 10Z"/>
    </symbol>
  </defs>
</svg>

<header class="wrap">
  <nav class="nav" aria-label="Main">
    <a class="brand" href="#top" aria-label="Viral Vision home">
      <svg viewBox="0 0 100 100" aria-hidden="true"><use href="#vmark"/></svg>
      <span>VIRAL VISION</span>
    </a>
    <ul>
      <li><a href="#services">Services</a></li>
      <li><a href="#packages">Packages</a></li>
      <li><a href="#process">Process</a></li>
    </ul>
    <a class="btn solid small" href="#contact">Get in touch</a>
  </nav>
</header>

<main id="top">

<!-- HERO: the small video comes first -->
<section class="wrap hero" aria-label="Introduction">
  <div class="vid" id="vid">
    <svg class="stage" id="scene" data-scene="1" viewBox="0 0 640 360" role="img" aria-label="Short animation: Viral Vision turns your vision into a website, gets you found on Google, and grows your followers and leads.">
      <rect width="640" height="360" fill="url(#marble)"/>
      <g fill="none" stroke="#d4af7a" stroke-opacity=".16" stroke-width="1.2">
        <path d="M-10 250 C120 200 200 270 320 190 S520 90 660 130"/>
        <path d="M120 -10 C150 70 100 120 170 190 S290 290 260 370"/>
        <path d="M470 -10 C500 60 430 110 500 180 S620 220 660 290"/>
      </g>

      <!-- scene 1: vision -->
      <g class="scene s1">
        <g stroke="#d4af7a" stroke-width="3" stroke-linecap="round">
          <line class="ray" style="--d:1.0s" x1="229.1" y1="97.5" x2="203.1" y2="82.5"/>
          <line class="ray" style="--d:1.1s" x1="252.5" y1="69.6" x2="233.2" y2="46.6"/>
          <line class="ray" style="--d:1.2s" x1="284.1" y1="51.3" x2="273.8" y2="23.1"/>
          <line class="ray" style="--d:1.3s" x1="320" y1="45" x2="320" y2="15"/>
          <line class="ray" style="--d:1.2s" x1="355.9" y1="51.3" x2="366.2" y2="23.1"/>
          <line class="ray" style="--d:1.1s" x1="387.5" y1="69.6" x2="406.8" y2="46.6"/>
          <line class="ray" style="--d:1.0s" x1="410.9" y1="97.5" x2="436.9" y2="82.5"/>
        </g>
        <clipPath id="eyeclip"><path d="M130 165 Q320 35 510 165 Q320 295 130 165 Z"/></clipPath>
        <g class="eye">
          <path d="M130 165 Q320 35 510 165 Q320 295 130 165 Z" fill="#0a2018" stroke="#d4af7a" stroke-width="4"/>
          <g clip-path="url(#eyeclip)">
            <g class="iris">
              <circle cx="320" cy="165" r="62" fill="url(#goldG)"/>
              <circle cx="320" cy="165" r="38" fill="#0a2018"/>
              <svg x="298" y="143" width="44" height="44" viewBox="0 0 100 100"><use href="#vmark"/></svg>
            </g>
          </g>
        </g>
        <g fill="#ecd6a8">
          <circle class="spark" style="--d:1.4s" cx="150" cy="70" r="4"/>
          <circle class="spark" style="--d:1.9s" cx="495" cy="60" r="5"/>
          <circle class="spark" style="--d:2.2s" cx="110" cy="230" r="3.5"/>
          <circle class="spark" style="--d:1.6s" cx="535" cy="225" r="4"/>
        </g>
      </g>

      <!-- scene 2: we build the website -->
      <g class="scene s2">
        <g transform="translate(110 10)">
          <rect x="30" y="30" width="360" height="240" rx="14" fill="#0f2c21" stroke="#d4af7a" stroke-width="2"/>
          <line x1="30" y1="62" x2="390" y2="62" stroke="#d4af7a" stroke-opacity=".5"/>
          <circle cx="50" cy="46" r="4" fill="#d4af7a"/><circle cx="64" cy="46" r="4" fill="#d4af7a" fill-opacity=".6"/><circle cx="78" cy="46" r="4" fill="#d4af7a" fill-opacity=".3"/>
          <rect class="wipe" style="--d:.1s" x="52" y="84" width="200" height="22" rx="4" fill="url(#goldG)"/>
          <rect class="wipe" style="--d:.3s" x="52" y="116" width="150" height="9" rx="4.5" fill="#f2e9d8" fill-opacity=".6"/>
          <rect class="wipe" style="--d:.4s" x="52" y="132" width="120" height="9" rx="4.5" fill="#f2e9d8" fill-opacity=".35"/>
          <rect class="pop" style="--d:.7s" x="52" y="158" width="78" height="28" rx="14" fill="#f2e9d8"/>
          <rect class="pop" style="--d:.55s" x="270" y="82" width="100" height="104" rx="10" fill="#17402f" stroke="#d4af7a" stroke-opacity=".7"/>
          <svg class="pop" style="--d:.8s" x="292" y="98" width="56" height="56" viewBox="0 0 100 100"><use href="#vmark"/></svg>
          <rect class="pop" style="--d:.9s" x="52" y="206" width="96" height="50" rx="8" fill="#17402f" stroke="#d4af7a" stroke-opacity=".4"/>
          <rect class="pop" style="--d:1s" x="162" y="206" width="96" height="50" rx="8" fill="#17402f" stroke="#d4af7a" stroke-opacity=".4"/>
          <rect class="pop" style="--d:1.1s" x="272" y="206" width="98" height="50" rx="8" fill="#17402f" stroke="#d4af7a" stroke-opacity=".4"/>
          <g class="bob"><path d="M200 210 l0 26 l7 -6 l5 11 l5 -2 l-5 -11 l9 0z" fill="#ecd6a8" stroke="#241d14" stroke-width="1.2"/></g>
        </g>
      </g>

      <!-- scene 3: found on Google -->
      <g class="scene s3">
        <rect x="110" y="56" width="420" height="56" rx="28" fill="#f2e9d8"/>
        <circle cx="146" cy="82" r="9" fill="none" stroke="#0f2c21" stroke-width="3"/>
        <line x1="153" y1="89" x2="161" y2="98" stroke="#0f2c21" stroke-width="3" stroke-linecap="round"/>
        <clipPath id="tc"><rect class="typer" x="182" y="66" width="330" height="34"/></clipPath>
        <text x="182" y="92" font-size="22" fill="#241d14" clip-path="url(#tc)" font-family="Hanken Grotesk, system-ui, sans-serif">plumber near me</text>
        <g class="result">
          <rect x="110" y="136" width="420" height="94" rx="14" fill="#f2e9d8" stroke="#d4af7a" stroke-width="3"/>
          <circle cx="158" cy="183" r="22" fill="#0f2c21"/>
          <path d="M158 171 a9 9 0 0 1 9 9 c0 8 -9 17 -9 17 s-9 -9 -9 -17 a9 9 0 0 1 9 -9z" fill="#d4af7a"/>
          <circle cx="158" cy="180" r="3.5" fill="#0f2c21"/>
          <text x="196" y="174" font-size="22" font-weight="600" fill="#241d14" font-family="Hanken Grotesk, system-ui, sans-serif">Your Business</text>
          <text x="196" y="199" font-size="17" fill="#a9814d" font-family="Hanken Grotesk, system-ui, sans-serif">★★★★★</text>
          <text x="282" y="199" font-size="16" fill="#5b4f3c" font-family="Hanken Grotesk, system-ui, sans-serif">4.9, open now</text>
          <circle cx="492" cy="183" r="24" fill="url(#goldG)"/>
          <text x="492" y="191" text-anchor="middle" font-size="22" font-weight="700" fill="#241d14" font-family="Hanken Grotesk, system-ui, sans-serif">#1</text>
        </g>
        <g class="ghost" fill="#f2e9d8" fill-opacity=".14">
          <rect x="110" y="246" width="420" height="14" rx="7"/><rect x="110" y="268" width="300" height="10" rx="5"/>
        </g>
      </g>

      <!-- scene 4: growth -->
      <g class="scene s4">
        <g class="phone">
          <rect x="70" y="26" width="120" height="246" rx="22" fill="#0a2018" stroke="#d4af7a" stroke-width="3"/>
          <circle cx="92" cy="54" r="9" fill="url(#goldG)"/>
          <rect x="106" y="49" width="50" height="6" rx="3" fill="#f2e9d8" fill-opacity=".7"/><rect x="106" y="59" width="34" height="5" rx="2.5" fill="#f2e9d8" fill-opacity=".35"/>
          <rect x="82" y="76" width="96" height="96" rx="8" fill="url(#greenG)" stroke="#d4af7a" stroke-opacity=".6"/>
          <svg x="106" y="94" width="48" height="48" viewBox="0 0 100 100"><use href="#vmark"/></svg>
          <use class="beat" href="#heart" x="82" y="184" width="20" height="20" fill="#ecd6a8"/>
          <rect x="110" y="190" width="60" height="7" rx="3.5" fill="#f2e9d8" fill-opacity=".5"/>
          <rect x="82" y="218" width="88" height="6" rx="3" fill="#f2e9d8" fill-opacity=".3"/><rect x="82" y="232" width="64" height="6" rx="3" fill="#f2e9d8" fill-opacity=".3"/>
        </g>
        <g class="chip1"><rect x="190" y="70" width="98" height="32" rx="16" fill="#f2e9d8"/><text x="239" y="92" text-anchor="middle" font-size="15" font-weight="600" fill="#241d14" font-family="Hanken Grotesk, system-ui, sans-serif">+128 likes</text></g>
        <g class="chip2"><rect x="190" y="228" width="88" height="32" rx="16" fill="#d4af7a"/><text x="234" y="250" text-anchor="middle" font-size="15" font-weight="600" fill="#241d14" font-family="Hanken Grotesk, system-ui, sans-serif">New lead</text></g>
        <use class="fh" style="--d:0s" href="#heart" x="34" y="190" width="18" height="18" fill="#ecd6a8"/>
        <use class="fh" style="--d:.8s" href="#heart" x="200" y="150" width="22" height="22" fill="#d4af7a"/>
        <use class="fh" style="--d:1.5s" href="#heart" x="206" y="112" width="16" height="16" fill="#ecd6a8"/>
        <use class="fh" style="--d:.4s" href="#heart" x="44" y="120" width="14" height="14" fill="#d4af7a"/>
        <text id="leadNum" x="322" y="120" font-size="78" fill="#ecd6a8" font-family="Marcellus, Georgia, serif">+0</text>
        <text x="324" y="146" font-size="18" fill="#cbbfa6" font-family="Hanken Grotesk, system-ui, sans-serif">new leads a month</text>
        <line x1="322" y1="278" x2="580" y2="278" stroke="#d4af7a" stroke-opacity=".5"/>
        <g fill="url(#goldG)">
          <rect class="rise" style="--d:.3s" x="326" y="254" width="28" height="24" rx="3"/>
          <rect class="rise" style="--d:.45s" x="366" y="242" width="28" height="36" rx="3"/>
          <rect class="rise" style="--d:.6s" x="406" y="226" width="28" height="52" rx="3"/>
          <rect class="rise" style="--d:.75s" x="446" y="208" width="28" height="70" rx="3"/>
          <rect class="rise" style="--d:.9s" x="486" y="190" width="28" height="88" rx="3"/>
          <rect class="rise" style="--d:1.05s" x="526" y="166" width="28" height="112" rx="3"/>
        </g>
      </g>

      <!-- scene 5: brand -->
      <g class="scene s5">
        <svg x="268" y="26" width="104" height="106" viewBox="0 0 100 100" overflow="visible">
          <polygon class="slab" style="--d:0s" points="0.4,12.5 22,12.5 50,79 42,99.5" fill="url(#goldG)"/>
          <polygon class="slab" style="--d:.25s" points="21.5,0.9 48.6,0.9 73.8,58.4 59,92.9" fill="url(#greenG)" stroke="#d4af7a" stroke-width=".8"/>
          <path class="slab" style="--d:.5s" d="M67.3 0.4 H100 L73.8 58.4 L76 40 Q75 18 67.3 0.4 Z" fill="url(#goldG)"/>
        </svg>
        <text class="word" x="320" y="192" text-anchor="middle" font-size="34" letter-spacing="9" fill="#ecd6a8" font-family="Marcellus, Georgia, serif">VIRAL VISION</text>
        <text class="tag" x="320" y="226" text-anchor="middle" font-size="16" letter-spacing="5" fill="#cbbfa6" font-family="Hanken Grotesk, system-ui, sans-serif">From Vision to Viral</text>
      </g>
    </svg>
    <div class="scrim"></div>
    <div class="cap" id="cap"></div>
    <div class="ctrl">
      <button id="pp" type="button" aria-label="Pause video"><svg viewBox="0 0 12 12" aria-hidden="true"><path id="ppIcon" d="M2 1h3v10H2zM7 1h3v10H7z"/></svg></button>
      <div class="bar" aria-hidden="true"><i id="prog"></i></div>
    </div>
  </div>

  <div>
    <h1>More calls for your local business</h1>
    <p class="lead">Viral Vision builds your website, gets you found on Google, and runs your social media and ad campaigns, all from one team.</p>
    <div class="row">
      <a class="btn solid" href="#contact">Get in touch</a>
      <a class="btn" href="#packages">See packages</a>
    </div>
    <small>For roofers, plumbers, movers, lawyers and other local U.S. businesses.</small>
  </div>
</section>

<!-- SERVICES -->
<section class="sec" id="services" style="border-top:1px solid var(--line)">
  <div class="wrap">
    <h2>Five services, one team</h2>
    <p class="sub">Pick one, or let us run all of them together. Tap a service to see what we handle.</p>

    <div class="svc">
      <div class="tabs" role="tablist" aria-label="Services" aria-orientation="vertical">
        <button class="tab" role="tab" id="t0" aria-controls="p0" aria-selected="true">Website design</button>
        <button class="tab" role="tab" id="t1" aria-controls="p1" aria-selected="false" tabindex="-1">Social media</button>
        <button class="tab" role="tab" id="t2" aria-controls="p2" aria-selected="false" tabindex="-1">Google and local SEO</button>
        <button class="tab" role="tab" id="t3" aria-controls="p3" aria-selected="false" tabindex="-1">Google Ads</button>
        <button class="tab" role="tab" id="t4" aria-controls="p4" aria-selected="false" tabindex="-1">Meta Ads</button>
      </div>

      <div>
        <!-- Website -->
        <div class="panel on" role="tabpanel" id="p0" aria-labelledby="t0">
          <svg class="ill" viewBox="0 0 420 300" role="img" aria-label="A website page assembling itself">
            <rect x="30" y="30" width="360" height="240" rx="14" fill="#0f2c21" stroke="#d4af7a" stroke-width="2"/>
            <line x1="30" y1="62" x2="390" y2="62" stroke="#d4af7a" stroke-opacity=".5"/>
            <circle cx="50" cy="46" r="4" fill="#d4af7a"/><circle cx="64" cy="46" r="4" fill="#d4af7a" fill-opacity=".6"/><circle cx="78" cy="46" r="4" fill="#d4af7a" fill-opacity=".3"/>
            <rect class="wipe" style="--d:.1s" x="52" y="84" width="200" height="22" rx="4" fill="url(#goldG)"/>
            <rect class="wipe" style="--d:.3s" x="52" y="116" width="150" height="9" rx="4.5" fill="#f2e9d8" fill-opacity=".6"/>
            <rect class="wipe" style="--d:.4s" x="52" y="132" width="120" height="9" rx="4.5" fill="#f2e9d8" fill-opacity=".35"/>
            <rect class="pop" style="--d:.7s" x="52" y="158" width="78" height="28" rx="14" fill="#f2e9d8"/>
            <rect class="pop" style="--d:.55s" x="270" y="82" width="100" height="104" rx="10" fill="#17402f" stroke="#d4af7a" stroke-opacity=".7"/>
            <svg class="pop" style="--d:.8s" x="292" y="98" width="56" height="56" viewBox="0 0 100 100"><use href="#vmark"/></svg>
            <rect class="pop" style="--d:.9s" x="52" y="206" width="96" height="50" rx="8" fill="#17402f" stroke="#d4af7a" stroke-opacity=".4"/>
            <rect class="pop" style="--d:1s" x="162" y="206" width="96" height="50" rx="8" fill="#17402f" stroke="#d4af7a" stroke-opacity=".4"/>
            <rect class="pop" style="--d:1.1s" x="272" y="206" width="98" height="50" rx="8" fill="#17402f" stroke="#d4af7a" stroke-opacity=".4"/>
            <g class="bob"><path d="M200 210 l0 26 l7 -6 l5 11 l5 -2 l-5 -11 l9 0z" fill="#ecd6a8" stroke="#241d14" stroke-width="1.2"/></g>
          </svg>
          <div>
            <h3>A website that turns visitors into calls</h3>
            <p>Fast, mobile-first, and built around one job: getting people to request a quote.</p>
            <ul class="ticks">
              <li>New WordPress or Shopify site</li>
              <li>Landing pages and quote or booking forms</li>
              <li>Analytics and Search Console setup</li>
              <li>Speed, maintenance, hosting and domain help</li>
            </ul>
          </div>
        </div>

        <!-- Social -->
        <div class="panel" role="tabpanel" id="p1" aria-labelledby="t1" hidden>
          <svg class="ill" viewBox="0 0 420 300" role="img" aria-label="A phone showing a grid of social media posts">
            <rect x="140" y="14" width="140" height="272" rx="24" fill="#0a2018" stroke="#d4af7a" stroke-width="2.5"/>
            <circle class="pop" style="--d:.1s" cx="168" cy="48" r="11" fill="none" stroke="#d4af7a" stroke-width="2.5"/>
            <circle class="pop" style="--d:.2s" cx="210" cy="48" r="11" fill="none" stroke="#d4af7a" stroke-width="2.5"/>
            <circle class="pop" style="--d:.3s" cx="252" cy="48" r="11" fill="none" stroke="#d4af7a" stroke-width="2.5"/>
            <g>
              <rect class="pop" style="--d:.3s" x="154" y="78" width="36" height="36" rx="4" fill="url(#goldG)"/>
              <rect class="pop" style="--d:.4s" x="192" y="78" width="36" height="36" rx="4" fill="#17402f" stroke="#d4af7a" stroke-opacity=".6"/>
              <rect class="pop" style="--d:.5s" x="230" y="78" width="36" height="36" rx="4" fill="#f2e9d8"/>
              <rect class="pop" style="--d:.6s" x="154" y="116" width="36" height="36" rx="4" fill="#17402f" stroke="#d4af7a" stroke-opacity=".6"/>
              <rect class="pop" style="--d:.7s" x="192" y="116" width="36" height="36" rx="4" fill="#a9814d"/>
              <rect class="pop" style="--d:.8s" x="230" y="116" width="36" height="36" rx="4" fill="#17402f" stroke="#d4af7a" stroke-opacity=".6"/>
              <rect class="pop" style="--d:.9s" x="154" y="154" width="36" height="36" rx="4" fill="#f2e9d8"/>
              <rect class="pop" style="--d:1s" x="192" y="154" width="36" height="36" rx="4" fill="url(#goldG)"/>
              <rect class="pop" style="--d:1.1s" x="230" y="154" width="36" height="36" rx="4" fill="#17402f" stroke="#d4af7a" stroke-opacity=".6"/>
            </g>
            <rect x="156" y="208" width="100" height="7" rx="3.5" fill="#f2e9d8" fill-opacity=".45"/><rect x="156" y="222" width="70" height="7" rx="3.5" fill="#f2e9d8" fill-opacity=".25"/>
            <g class="bob"><use href="#heart" x="238" y="238" width="24" height="24" fill="#ecd6a8"/></g>
            <g class="pop" style="--d:1.2s"><circle cx="70" cy="130" r="34" fill="#d4af7a"/><path d="M62 114 L88 130 L62 146Z" fill="#241d14"/><text x="70" y="188" text-anchor="middle" font-size="14" fill="#cbbfa6" font-family="Hanken Grotesk, system-ui, sans-serif">4 to 8 Reels</text></g>
            <g class="pop" style="--d:1.4s"><rect x="304" y="100" width="92" height="34" rx="17" fill="#f2e9d8"/><text x="350" y="122" text-anchor="middle" font-size="15" font-weight="600" fill="#241d14" font-family="Hanken Grotesk, system-ui, sans-serif">12 posts</text><text x="350" y="160" text-anchor="middle" font-size="14" fill="#cbbfa6" font-family="Hanken Grotesk, system-ui, sans-serif">every month</text></g>
          </svg>
          <div>
            <h3>Content your customers actually see</h3>
            <p>Instagram and Facebook, with TikTok added when it fits. You send raw photos and video; we turn them into polished posts.</p>
            <ul class="ticks">
              <li>Content calendar, captions and hashtags</li>
              <li>Graphic design, Reels and Stories</li>
              <li>Scheduling and comment monitoring</li>
              <li>Monthly analytics</li>
            </ul>
          </div>
        </div>

        <!-- Local SEO -->
        <div class="panel" role="tabpanel" id="p2" aria-labelledby="t2" hidden>
          <svg class="ill" viewBox="0 0 420 300" role="img" aria-label="A map with a pin dropping on a local business listing ranked number one">
            <rect x="30" y="30" width="360" height="240" rx="14" fill="#123826" stroke="#d4af7a" stroke-opacity=".5"/>
            <g fill="none" stroke="#d4af7a" stroke-opacity=".28" stroke-width="6" stroke-linecap="round">
              <path d="M30 150 H390"/><path d="M130 30 V270"/><path d="M300 30 V270"/><path d="M30 220 C120 200 240 240 390 190"/>
            </g>
            <rect x="70" y="42" width="280" height="30" rx="15" fill="#f2e9d8"/>
            <text x="90" y="62" font-size="15" fill="#241d14" font-family="Hanken Grotesk, system-ui, sans-serif">roofer in Paramus NJ</text>
            <g transform="translate(210 132)">
              <circle class="ping" style="--d:.6s" cx="0" cy="22" r="34" fill="none" stroke="#d4af7a" stroke-width="2"/>
              <circle class="ping" style="--d:1.4s" cx="0" cy="22" r="34" fill="none" stroke="#d4af7a" stroke-width="2"/>
              <g class="bob"><path d="M0 -8 a22 22 0 0 1 22 22 c0 16 -22 38 -22 38 s-22 -22 -22 -38 a22 22 0 0 1 22 -22z" fill="url(#goldG)"/><circle cx="0" cy="14" r="8" fill="#0f2c21"/></g>
            </g>
            <g class="pop" style="--d:1.1s"><rect x="60" y="212" width="300" height="46" rx="12" fill="#f2e9d8"/><circle cx="90" cy="235" r="15" fill="url(#goldG)"/><text x="90" y="241" text-anchor="middle" font-size="16" font-weight="700" fill="#241d14" font-family="Hanken Grotesk, system-ui, sans-serif">#1</text><text x="116" y="231" font-size="15" font-weight="600" fill="#241d14" font-family="Hanken Grotesk, system-ui, sans-serif">Your business</text><text x="116" y="248" font-size="13" fill="#a9814d" font-family="Hanken Grotesk, system-ui, sans-serif">★★★★★  Open now</text></g>
          </svg>
          <div>
            <h3>Be the business that shows up first</h3>
            <p>When someone searches "plumber near me", we make sure it's your listing and your pages they find.</p>
            <ul class="ticks">
              <li>Google Business Profile optimization</li>
              <li>Location and service pages, on-page SEO</li>
              <li>Citations, reviews strategy and backlinks</li>
              <li>Rank tracking and monthly reports</li>
            </ul>
          </div>
        </div>

        <!-- Google Ads -->
        <div class="panel" role="tabpanel" id="p3" aria-labelledby="t3" hidden>
          <svg class="ill" viewBox="0 0 420 300" role="img" aria-label="A Google ad above a bar chart of leads growing month by month">
            <g class="pop" style="--d:.1s"><rect x="30" y="24" width="360" height="86" rx="12" fill="#f2e9d8"/><rect x="46" y="40" width="30" height="18" rx="4" fill="#241d14"/><text x="61" y="53" text-anchor="middle" font-size="12" font-weight="700" fill="#f2e9d8" font-family="Hanken Grotesk, system-ui, sans-serif">Ad</text><rect x="88" y="42" width="180" height="14" rx="4" fill="#1c5a42"/><rect x="46" y="70" width="290" height="8" rx="4" fill="#241d14" fill-opacity=".4"/><rect x="46" y="86" width="220" height="8" rx="4" fill="#241d14" fill-opacity=".25"/></g>
            <line x1="46" y1="270" x2="390" y2="270" stroke="#d4af7a" stroke-opacity=".5"/>
            <g fill="url(#goldG)">
              <rect class="rise" style="--d:.4s" x="60" y="240" width="34" height="30" rx="3"/>
              <rect class="rise" style="--d:.55s" x="112" y="225" width="34" height="45" rx="3"/>
              <rect class="rise" style="--d:.7s" x="164" y="208" width="34" height="62" rx="3"/>
              <rect class="rise" style="--d:.85s" x="216" y="188" width="34" height="82" rx="3"/>
              <rect class="rise" style="--d:1s" x="268" y="166" width="34" height="104" rx="3"/>
              <rect class="rise" style="--d:1.15s" x="320" y="138" width="34" height="132" rx="3"/>
            </g>
            <polyline class="draw" style="--d:1.2s" points="77,232 129,216 181,198 233,178 285,156 337,126" fill="none" stroke="#f2e9d8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <text x="46" y="292" font-size="13" fill="#cbbfa6" font-family="Hanken Grotesk, system-ui, sans-serif">Leads per month</text>
          </svg>
          <div>
            <h3>Pay for clicks that turn into customers</h3>
            <p>Every dollar is tracked to a call or a form, so you can see what your ad spend brings back.</p>
            <ul class="ticks">
              <li>Keyword research and campaign builds</li>
              <li>Ad copy, negative keywords, local targeting</li>
              <li>Conversion and call tracking</li>
              <li>Landing pages, A/B tests and reporting</li>
            </ul>
          </div>
        </div>

        <!-- Meta Ads -->
        <div class="panel" role="tabpanel" id="p4" aria-labelledby="t4" hidden>
          <svg class="ill" viewBox="0 0 420 300" role="img" aria-label="An audience target with people inside it, pointing to a Facebook and Instagram ad">
            <g fill="none" stroke="#d4af7a" stroke-width="1.5">
              <circle cx="140" cy="150" r="104" stroke-opacity=".25"/>
              <circle cx="140" cy="150" r="72" stroke-opacity=".45"/>
              <circle cx="140" cy="150" r="40" stroke-opacity=".8"/>
            </g>
            <circle class="ping" style="--d:0s" cx="140" cy="150" r="104" fill="none" stroke="#d4af7a" stroke-width="2"/>
            <circle cx="140" cy="150" r="10" fill="url(#goldG)"/>
            <g class="orbit">
              <g fill="#d4af7a"><circle cx="140" cy="98" r="6"/><circle cx="185" cy="170" r="6"/><circle cx="96" cy="176" r="6"/></g>
              <g fill="#f2e9d8" fill-opacity=".85"><circle cx="140" cy="60" r="6"/><circle cx="212" cy="120" r="6"/><circle cx="78" cy="122" r="6"/><circle cx="200" cy="216" r="6"/><circle cx="76" cy="218" r="6"/></g>
            </g>
            <path class="draw" style="--d:.5s" d="M250 150 H262" fill="none" stroke="#d4af7a" stroke-width="3" stroke-linecap="round"/>
            <g class="pop" style="--d:.7s"><rect x="266" y="52" width="128" height="196" rx="14" fill="#f2e9d8"/><rect x="278" y="66" width="104" height="82" rx="8" fill="url(#greenG)"/><svg x="308" y="76" width="44" height="44" viewBox="0 0 100 100"><use href="#vmark"/></svg><rect x="278" y="160" width="86" height="9" rx="4.5" fill="#241d14" fill-opacity=".7"/><rect x="278" y="176" width="64" height="7" rx="3.5" fill="#241d14" fill-opacity=".35"/><rect x="278" y="200" width="104" height="28" rx="14" fill="#1c5a42"/><text x="330" y="219" text-anchor="middle" font-size="14" font-weight="600" fill="#f2e9d8" font-family="Hanken Grotesk, system-ui, sans-serif">Book now</text></g>
            <g class="bob"><use href="#heart" x="368" y="34" width="24" height="24" fill="#d4af7a"/></g>
          </svg>
          <div>
            <h3>Show up in front of the right neighbors</h3>
            <p>Facebook and Instagram ads that find the people most likely to need you, then follow up with the ones who didn't call yet. Strong for real estate, home improvement, gyms, beauty, dental and restaurants.</p>
            <ul class="ticks">
              <li>Audience targeting and retargeting</li>
              <li>Creative, video ads and lead forms</li>
              <li>Pixel and Conversions API setup</li>
              <li>Testing and ongoing optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- MATH -->
<section class="sec math" aria-labelledby="mathH">
  <div class="wrap">
    <h2 id="mathH">When ads pay for themselves, the agency fee is easy to justify</h2>
    <p class="sub">Here's how the numbers can look for a local service business running Google Ads.</p>
    <div class="flow">
      <div class="step"><b data-count="4000" data-prefix="$">$0</b><span>spent on Google Ads</span></div>
      <div class="step"><b data-count="70">0</b><span>leads come in</span></div>
      <div class="step"><b data-count="20">0</b><span>customers get booked</span></div>
      <div class="step"><b data-count="25000" data-prefix="$">$0</b><span>in revenue</span></div>
    </div>
    <p class="fine">An illustrative example, not a client result. Your numbers will depend on your market and budget.</p>
  </div>
</section>

<!-- PACKAGES -->
<section class="sec paper" id="packages">
  <div class="wrap">
    <h2>Three packages, no menu of 25 services</h2>
    <p class="sub">Choose the level that fits where your marketing is today. Ad spend is paid separately, straight to Google or Meta.</p>

    <div class="packs">
      <article class="pk">
        <h3>Digital Foundation</h3>
        <p class="who">For businesses with weak online marketing.</p>
        <div class="price">Starting from $1,250<small>per month</small></div>
        <ul class="ticks">
          <li>Website maintenance</li>
          <li>Google Business Profile management</li>
          <li>Local SEO</li>
          <li>About 12 social posts a month</li>
          <li>Basic graphic design</li>
          <li>Review strategy</li>
          <li>Monthly reporting</li>
        </ul>
      </article>

      <article class="pk main">
        <span class="badge">Best fit for most businesses</span>
        <h3>Growth</h3>
        <p class="who">Paid ads on top of a solid foundation.</p>
        <div class="price">Starting from $2,250<small>per month, plus ad spend</small></div>
        <p class="plus">Everything in Digital Foundation, plus:</p>
        <ul class="ticks">
          <li>Google Ads management</li>
          <li>Meta Ads management</li>
          <li>Landing pages</li>
          <li>Conversion tracking</li>
          <li>Call and lead tracking</li>
          <li>More social content</li>
          <li>SEO content</li>
          <li>Monthly strategy call</li>
        </ul>
      </article>

      <article class="pk">
        <h3>Outsourced Marketing Department</h3>
        <p class="who">Replaces several in-house marketing hires.</p>
        <div class="price">Starting from $4,000<small>per month, plus ad spend</small></div>
        <ul class="ticks">
          <li>Website management and SEO</li>
          <li>Google Ads and Meta Ads</li>
          <li>Social media, graphics and video editing</li>
          <li>Email and SMS marketing</li>
          <li>CRM and automations</li>
          <li>Landing pages and reporting</li>
          <li>Dedicated account manager</li>
        </ul>
      </article>
    </div>

    <div class="only">
      <p><b>Just need a website?</b><br>A one-time website is $2,500. When it's live, you can move to a monthly growth plan to start bringing in traffic and leads.</p>
      <a class="btn" href="#contact">Ask about a website</a>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section class="sec" id="process">
  <div class="wrap">
    <h2>How a new website comes together</h2>
    <p class="sub">A simple, repeatable process, so you always know what happens next.</p>
    <ol class="steps">
      <li>
        <div class="ico"><svg viewBox="0 0 28 28" aria-hidden="true"><rect x="5" y="3" width="15" height="21" rx="2"/><path d="M9 9h7M9 13h7M9 17h4"/><path d="M17 21l7-7 2 2-7 7-3 1z"/></svg></div>
        <h3>You sign</h3><p>We agree on scope and start date.</p>
      </li>
      <li>
        <div class="ico"><svg viewBox="0 0 28 28" aria-hidden="true"><rect x="4" y="5" width="20" height="18" rx="2"/><circle cx="10" cy="11" r="2"/><path d="M4 20l6-5 4 3 4-4 6 6"/></svg></div>
        <h3>You share your info</h3><p>A short questionnaire, plus your logo and photos.</p>
      </li>
      <li>
        <div class="ico"><svg viewBox="0 0 28 28" aria-hidden="true"><rect x="4" y="4" width="20" height="6" rx="1"/><rect x="4" y="13" width="9" height="11" rx="1"/><rect x="16" y="13" width="8" height="5" rx="1"/><rect x="16" y="20" width="8" height="4" rx="1"/></svg></div>
        <h3>We design</h3><p>Our designers build your pages.</p>
      </li>
      <li>
        <div class="ico"><svg viewBox="0 0 28 28" aria-hidden="true"><path d="M4 6h20v13H12l-6 5v-5H4z"/><path d="M10 12l3 3 5-6"/></svg></div>
        <h3>You review</h3><p>Send changes and we revise.</p>
      </li>
      <li>
        <div class="ico"><svg viewBox="0 0 28 28" aria-hidden="true"><path d="M14 3c5 3 7 8 6 14l-6 5-6-5c-1-6 1-11 6-14z"/><circle cx="14" cy="11" r="2"/><path d="M8 19l-3 4 5-1M20 19l3 4-5-1"/></svg></div>
        <h3>We test and launch</h3><p>Your site goes live and traffic work begins.</p>
      </li>
    </ol>
  </div>
</section>

<!-- CONTACT -->
<section class="sec contact" id="contact">
  <div class="wrap cgrid">
    <div>
      <h2>Tell us about your business</h2>
      <p class="sub" style="margin-bottom:0">Share what you do and where you work. We'll reply with a plan that fits your goals and budget.</p>
    </div>
    <form id="cform">
      <div class="tworow">
        <label>Your name<input name="name" required autocomplete="name"></label>
        <label>Business name<input name="biz" required autocomplete="organization"></label>
      </div>
      <div class="tworow">
        <label>Phone<input name="phone" type="tel" autocomplete="tel"></label>
        <label>Email<input name="email" type="email" required autocomplete="email"></label>
      </div>
      <label>What do you need?
        <select name="need">
          <option>A new website</option>
          <option>Local SEO</option>
          <option>Social media</option>
          <option>Google or Meta Ads</option>
          <option>Full marketing package</option>
        </select>
      </label>
      <label>Anything else we should know?<textarea name="msg"></textarea></label>
      <button class="btn solid" type="submit">Send message</button>
    </form>
  </div>
</section>
</main>

<footer>
  <div class="wrap">
    <a class="brand" href="#top" aria-label="Viral Vision home"><svg viewBox="0 0 100 100" aria-hidden="true"><use href="#vmark"/></svg><span>VIRAL VISION</span></a>
    <span>From Vision to Viral</span>
  </div>
</footer>
`;

export default function ViralVisionSite() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cleanups = [];
    const on = (el, evt, fn) => {
      if (!el) return;
      el.addEventListener(evt, fn);
      cleanups.push(() => el.removeEventListener(evt, fn));
    };

    /* ---------------- Hero video / animated intro ---------------- */
    (function heroVideo() {
      const svg = root.querySelector("#scene");
      const cap = root.querySelector("#cap");
      const prog = root.querySelector("#prog");
      const pp = root.querySelector("#pp");
      const icon = root.querySelector("#ppIcon");
      const num = root.querySelector("#leadNum");
      const reduce =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const S = [
        "It all starts with your vision.",
        "We build a website that sells for you.",
        "We get you found on Google.",
        "Then we help it grow: more followers, more calls, more leads.",
        "",
      ];
      const D = 3.8;
      const TOTAL = S.length * D;
      let el = reduce ? D * 4 + 2 : 0;
      let playing = !reduce;
      let last = performance.now();
      let cur = -1;
      let raf = null;

      if (HERO_VIDEO_SRC && svg) {
        const v = document.createElement("video");
        v.src = HERO_VIDEO_SRC;
        v.muted = true;
        v.loop = true;
        v.autoplay = true;
        v.playsInline = true;
        v.setAttribute("playsinline", "");
        v.setAttribute("aria-label", "Viral Vision intro video");
        svg.replaceWith(v);

        const togglePlay = () => {
          if (v.paused) {
            v.play();
            icon && icon.setAttribute("d", "M2 1h3v10H2zM7 1h3v10H7z");
            pp && pp.setAttribute("aria-label", "Pause video");
          } else {
            v.pause();
            icon && icon.setAttribute("d", "M2 1l9 5-9 5z");
            pp && pp.setAttribute("aria-label", "Play video");
          }
        };
        on(pp, "click", togglePlay);

        const onTime = () => {
          if (v.duration && prog) prog.style.width = (v.currentTime / v.duration) * 100 + "%";
        };
        on(v, "timeupdate", onTime);
        return; // no rAF loop needed for the real video
      }

      if (!svg) return;

      function render() {
        const i = Math.min(S.length - 1, Math.floor(el / D));
        if (i !== cur) {
          cur = i;
          svg.setAttribute("data-scene", i + 1);
          if (cap) cap.textContent = S[i];
        }
        const frac = (el % D) / D;
        if (prog) prog.style.width = (el / TOTAL) * 100 + "%";
        if (num) {
          if (i === 3) num.textContent = "+" + Math.round(70 * Math.min(1, frac / 0.6));
          else if (i < 3) num.textContent = "+0";
          else num.textContent = "+70";
        }
      }
      function tick(now) {
        const dt = Math.min(0.1, (now - last) / 1000);
        last = now;
        if (playing) {
          el += dt;
          if (el >= TOTAL) el = 0;
        }
        render();
        raf = requestAnimationFrame(tick);
      }

      const togglePlay = () => {
        playing = !playing;
        svg.classList.toggle("paused", !playing);
        icon && icon.setAttribute("d", playing ? "M2 1h3v10H2zM7 1h3v10H7z" : "M2 1l9 5-9 5z");
        pp && pp.setAttribute("aria-label", playing ? "Pause video" : "Play video");
      };
      on(pp, "click", togglePlay);

      if (reduce) {
        svg.classList.add("paused");
        icon && icon.setAttribute("d", "M2 1l9 5-9 5z");
        pp && pp.setAttribute("aria-label", "Play video");
      }
      raf = requestAnimationFrame(tick);
      cleanups.push(() => raf && cancelAnimationFrame(raf));
    })();

    /* ---------------- Service tabs ---------------- */
    (function serviceTabs() {
      const tabs = Array.from(root.querySelectorAll(".tab"));
      if (!tabs.length) return;
      const panels = tabs.map((t) => root.querySelector("#" + t.getAttribute("aria-controls")));

      function pick(i, focus) {
        tabs.forEach((t, j) => {
          const isOn = j === i;
          t.setAttribute("aria-selected", isOn ? "true" : "false");
          t.tabIndex = isOn ? 0 : -1;
          if (panels[j]) {
            panels[j].hidden = !isOn;
            panels[j].classList.toggle("on", isOn);
          }
        });
        if (focus) tabs[i].focus();
      }

      tabs.forEach((t, i) => {
        const onClick = () => pick(i);
        const onKey = (e) => {
          const n = tabs.length;
          if (e.key === "ArrowDown" || e.key === "ArrowRight") {
            e.preventDefault();
            pick((i + 1) % n, true);
          }
          if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
            e.preventDefault();
            pick((i - 1 + n) % n, true);
          }
        };
        on(t, "click", onClick);
        on(t, "keydown", onKey);
      });
    })();

    /* ---------------- Count-up numbers ---------------- */
    let countObserver = null;
    (function countUp() {
      const els = root.querySelectorAll("[data-count]");
      if (!els.length) return;

      const fmt = (elm, n) => {
        elm.textContent = (elm.getAttribute("data-prefix") || "") + n.toLocaleString("en-US");
      };
      const run = (elm) => {
        const to = +elm.getAttribute("data-count");
        let t0 = null;
        let raf;
        const f = (t) => {
          if (t0 === null) t0 = t;
          const p = Math.min(1, (t - t0) / 1600);
          const eased = 1 - Math.pow(1 - p, 3);
          fmt(elm, Math.round(to * eased));
          if (p < 1) raf = requestAnimationFrame(f);
        };
        raf = requestAnimationFrame(f);
        cleanups.push(() => raf && cancelAnimationFrame(raf));
      };

      if (!("IntersectionObserver" in window)) {
        els.forEach((elm) => fmt(elm, +elm.getAttribute("data-count")));
        return;
      }
      countObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              run(entry.target);
              countObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      els.forEach((elm) => countObserver.observe(elm));
    })();

    /* ---------------- Contact form ---------------- */
    (function contactForm() {
      const form = root.querySelector("#cform");
      if (!form) return;
      const onSubmit = (e) => {
        e.preventDefault();
        const f = e.target;
        const g = (n) => f.elements[n].value;
        const body =
          "Name: " + g("name") +
          "\nBusiness: " + g("biz") +
          "\nPhone: " + g("phone") +
          "\nEmail: " + g("email") +
          "\nNeeds: " + g("need") +
          "\n\n" + g("msg");
        window.location.href =
          "mailto:" + CONTACT_EMAIL +
          "?subject=" + encodeURIComponent("New enquiry from " + g("biz")) +
          "&body=" + encodeURIComponent(body);
      };
      on(form, "submit", onSubmit);
    })();

    return () => {
      cleanups.forEach((fn) => fn());
      if (countObserver) countObserver.disconnect();
    };
  }, []);

  return (
    <div ref={rootRef}>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </div>
  );
}

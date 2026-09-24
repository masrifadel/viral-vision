"use client";

import { useEffect, useRef, useState } from "react";

const heroScenes = [
  "Viral Vision turns your vision into a brand people trust.",
  "We build high-converting websites that get found and get action.",
  "Search traffic, SEO, and ads work together to drive real leads.",
  "Your growth system keeps turning insight into momentum.",
  "From first impression to final conversion, we handle the whole funnel.",
];

export function Hero() {
  const [sceneIndex, setSceneIndex] = useState(1);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [title, setTitle] = useState(heroScenes[0]);
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cycle = setInterval(() => {
      if (paused) return;
      setSceneIndex((current) => {
        const next = current >= 5 ? 1 : current + 1;
        setTitle(heroScenes[next - 1]);
        return next;
      });
      setProgress((current) => (current >= 100 ? 0 : current + 20));
    }, 2200);

    return () => clearInterval(cycle);
  }, [paused]);

  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.setAttribute("data-scene", String(sceneIndex));
    }
  }, [sceneIndex]);

  const togglePlay = () => setPaused((current) => !current);

  return (
    <>
      <svg
        className="defs"
        aria-hidden="true"
        focusable="false"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
      >
        <defs>
          <linearGradient id="goldG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f0dcb0" />
            <stop offset="0.5" stopColor="#d4af7a" />
            <stop offset="1" stopColor="#a9814d" />
          </linearGradient>
          <linearGradient id="greenG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0c2a1f" />
            <stop offset="0.6" stopColor="#153a2b" />
            <stop offset="1" stopColor="#0a2018" />
          </linearGradient>
          <linearGradient id="marble" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0d2a1f" />
            <stop offset="1" stopColor="#174632" />
          </linearGradient>
          <symbol id="vmark" viewBox="0 0 100 100">
            <polygon
              points="0.4,12.5 22,12.5 50,79 42,99.5"
              fill="url(#goldG)"
            />
            <polygon
              points="21.5,0.9 48.6,0.9 73.8,58.4 59,92.9"
              fill="url(#greenG)"
              stroke="#d4af7a"
              strokeWidth="0.8"
            />
            <path
              d="M32 10 L40 32 L37 48 M40 32 L52 44"
              stroke="#a9814d"
              strokeWidth="0.6"
              fill="none"
              opacity="0.8"
            />
            <path
              d="M67.3 0.4 H100 L73.8 58.4 L76 40 Q75 18 67.3 0.4 Z"
              fill="url(#goldG)"
            />
          </symbol>
          <symbol id="heart" viewBox="-16 -16 32 32">
            <path d="M0 10 C-16 -2 -13 -15 -6 -15 C-2 -15 0 -12 0 -10 C0 -12 2 -15 6 -15 C13 -15 16 -2 0 10Z" />
          </symbol>
        </defs>
      </svg>

      <header className="wrap">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Viral Vision home">
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <use href="#vmark" />
            </svg>
            <span>VIRAL VISION</span>
          </a>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#packages">Packages</a>
            </li>
            <li>
              <a href="#process">Process</a>
            </li>
          </ul>
          <a className="btn solid small" href="#contact">
            Get in touch
          </a>
        </nav>
      </header>

      <section className="wrap hero" id="top" aria-label="Introduction">
        <div className="hero-copy">
          <h1>More calls for your local business</h1>
          <p className="lead">
            Viral Vision builds your website, gets you found on Google, and
            runs your social media and ad campaigns, all from one team.
          </p>
          <div className="row">
            <a className="btn solid" href="#contact">
              Get in touch
            </a>
            <a className="btn" href="#packages">
              See packages
            </a>
          </div>
          <small>
            For roofers, plumbers, movers, lawyers and other local U.S.
            businesses.
          </small>
        </div>

        <div className="vid" id="vid">
          <div className="motion-label" aria-label="Animated preview">
            <span aria-hidden="true" />
            Animated preview
          </div>
          <div
            ref={sceneRef}
            className="stage"
            data-scene={sceneIndex}
            aria-live="polite"
          >
            <svg viewBox="0 0 640 360" role="img" aria-label={title}>
              <rect width="640" height="360" fill="url(#marble)" />
              <g
                fill="none"
                stroke="#d4af7a"
                strokeOpacity="0.16"
                strokeWidth="1.2"
              >
                <path d="M-10 250 C120 200 200 270 320 190 S520 90 660 130" />
                <path d="M120 -10 C150 70 100 120 170 190 S290 290 260 370" />
                <path d="M470 -10 C500 60 430 110 500 180 S620 220 660 290" />
              </g>

              <g className="scene s1">
                <g stroke="#d4af7a" strokeWidth="3" strokeLinecap="round">
                  <line
                    className="ray"
                    style={{ ["--d" as string]: "1.0s" }}
                    x1="229.1"
                    y1="97.5"
                    x2="203.1"
                    y2="82.5"
                  />
                  <line
                    className="ray"
                    style={{ ["--d" as string]: "1.1s" }}
                    x1="252.5"
                    y1="69.6"
                    x2="233.2"
                    y2="46.6"
                  />
                  <line
                    className="ray"
                    style={{ ["--d" as string]: "1.2s" }}
                    x1="284.1"
                    y1="51.3"
                    x2="273.8"
                    y2="23.1"
                  />
                  <line
                    className="ray"
                    style={{ ["--d" as string]: "1.3s" }}
                    x1="320"
                    y1="45"
                    x2="320"
                    y2="15"
                  />
                  <line
                    className="ray"
                    style={{ ["--d" as string]: "1.2s" }}
                    x1="355.9"
                    y1="51.3"
                    x2="366.2"
                    y2="23.1"
                  />
                  <line
                    className="ray"
                    style={{ ["--d" as string]: "1.1s" }}
                    x1="387.5"
                    y1="69.6"
                    x2="406.8"
                    y2="46.6"
                  />
                  <line
                    className="ray"
                    style={{ ["--d" as string]: "1.0s" }}
                    x1="410.9"
                    y1="97.5"
                    x2="436.9"
                    y2="82.5"
                  />
                </g>
                <clipPath id="eyeclip">
                  <path d="M130 165 Q320 35 510 165 Q320 295 130 165 Z" />
                </clipPath>
                <g className="eye">
                  <path
                    d="M130 165 Q320 35 510 165 Q320 295 130 165 Z"
                    fill="#0a2018"
                    stroke="#d4af7a"
                    strokeWidth="4"
                  />
                  <g clipPath="url(#eyeclip)">
                    <g className="iris">
                      <circle cx="320" cy="165" r="62" fill="url(#goldG)" />
                      <circle cx="320" cy="165" r="38" fill="#0a2018" />
                      <svg
                        x="298"
                        y="143"
                        width="44"
                        height="44"
                        viewBox="0 0 100 100"
                      >
                        <use href="#vmark" />
                      </svg>
                    </g>
                  </g>
                </g>
                <g fill="#ecd6a8">
                  <circle
                    className="spark"
                    style={{ ["--d" as string]: "1.4s" }}
                    cx="150"
                    cy="70"
                    r="4"
                  />
                  <circle
                    className="spark"
                    style={{ ["--d" as string]: "1.9s" }}
                    cx="495"
                    cy="60"
                    r="5"
                  />
                  <circle
                    className="spark"
                    style={{ ["--d" as string]: "2.2s" }}
                    cx="110"
                    cy="230"
                    r="3.5"
                  />
                  <circle
                    className="spark"
                    style={{ ["--d" as string]: "1.6s" }}
                    cx="535"
                    cy="225"
                    r="4"
                  />
                </g>
              </g>

              <g className="scene s2">
                <g transform="translate(110 10)">
                  <rect
                    x="30"
                    y="30"
                    width="360"
                    height="240"
                    rx="14"
                    fill="#0f2c21"
                    stroke="#d4af7a"
                    strokeWidth="2"
                  />
                  <line
                    x1="30"
                    y1="62"
                    x2="390"
                    y2="62"
                    stroke="#d4af7a"
                    strokeOpacity="0.5"
                  />
                  <circle cx="50" cy="46" r="4" fill="#d4af7a" />
                  <circle
                    cx="64"
                    cy="46"
                    r="4"
                    fill="#d4af7a"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="78"
                    cy="46"
                    r="4"
                    fill="#d4af7a"
                    fillOpacity="0.3"
                  />
                  <rect
                    className="wipe"
                    style={{ ["--d" as string]: ".1s" }}
                    x="52"
                    y="84"
                    width="200"
                    height="22"
                    rx="4"
                    fill="url(#goldG)"
                  />
                  <rect
                    className="wipe"
                    style={{ ["--d" as string]: ".3s" }}
                    x="52"
                    y="116"
                    width="150"
                    height="9"
                    rx="4.5"
                    fill="#f2e9d8"
                    fillOpacity="0.6"
                  />
                  <rect
                    className="wipe"
                    style={{ ["--d" as string]: ".4s" }}
                    x="52"
                    y="132"
                    width="120"
                    height="9"
                    rx="4.5"
                    fill="#f2e9d8"
                    fillOpacity="0.35"
                  />
                  <rect
                    className="pop"
                    style={{ ["--d" as string]: ".7s" }}
                    x="52"
                    y="158"
                    width="78"
                    height="28"
                    rx="14"
                    fill="#f2e9d8"
                  />
                  <rect
                    className="pop"
                    style={{ ["--d" as string]: ".55s" }}
                    x="270"
                    y="82"
                    width="100"
                    height="104"
                    rx="10"
                    fill="#17402f"
                    stroke="#d4af7a"
                    strokeOpacity="0.7"
                  />
                  <svg
                    className="pop"
                    style={{ ["--d" as string]: ".8s" }}
                    x="292"
                    y="98"
                    width="56"
                    height="56"
                    viewBox="0 0 100 100"
                  >
                    <use href="#vmark" />
                  </svg>
                  <rect
                    className="pop"
                    style={{ ["--d" as string]: ".9s" }}
                    x="52"
                    y="206"
                    width="96"
                    height="50"
                    rx="8"
                    fill="#17402f"
                    stroke="#d4af7a"
                    strokeOpacity="0.4"
                  />
                  <rect
                    className="pop"
                    style={{ ["--d" as string]: "1s" }}
                    x="162"
                    y="206"
                    width="96"
                    height="50"
                    rx="8"
                    fill="#17402f"
                    stroke="#d4af7a"
                    strokeOpacity="0.4"
                  />
                  <rect
                    className="pop"
                    style={{ ["--d" as string]: "1.1s" }}
                    x="272"
                    y="206"
                    width="98"
                    height="50"
                    rx="8"
                    fill="#17402f"
                    stroke="#d4af7a"
                    strokeOpacity="0.4"
                  />
                  <g className="bob">
                    <path
                      d="M200 210 l0 26 l7 -6 l5 11 l5 -2 l-5 -11 l9 0z"
                      fill="#ecd6a8"
                      stroke="#241d14"
                      strokeWidth="1.2"
                    />
                  </g>
                </g>
              </g>

              <g className="scene s3">
                <rect
                  x="110"
                  y="56"
                  width="420"
                  height="56"
                  rx="28"
                  fill="#f2e9d8"
                />
                <circle
                  cx="146"
                  cy="82"
                  r="9"
                  fill="none"
                  stroke="#0f2c21"
                  strokeWidth="3"
                />
                <line
                  x1="153"
                  y1="89"
                  x2="161"
                  y2="98"
                  stroke="#0f2c21"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <clipPath id="tc">
                  <rect
                    className="typer"
                    x="182"
                    y="66"
                    width="330"
                    height="34"
                  />
                </clipPath>
                <text
                  x="182"
                  y="92"
                  fontSize="22"
                  fill="#241d14"
                  clipPath="url(#tc)"
                  fontFamily="Hanken Grotesk, system-ui, sans-serif"
                >
                  plumber near me
                </text>
                <g className="result">
                  <rect
                    x="110"
                    y="136"
                    width="420"
                    height="94"
                    rx="14"
                    fill="#f2e9d8"
                    stroke="#d4af7a"
                    strokeWidth="3"
                  />
                  <circle cx="158" cy="183" r="22" fill="#0f2c21" />
                  <path
                    d="M158 171 a9 9 0 0 1 9 9 c0 8 -9 17 -9 17 s-9 -9 -9 -17 a9 9 0 0 1 9 -9z"
                    fill="#d4af7a"
                  />
                  <circle cx="158" cy="180" r="3.5" fill="#0f2c21" />
                  <text
                    x="196"
                    y="174"
                    fontSize="22"
                    fontWeight="600"
                    fill="#241d14"
                    fontFamily="Hanken Grotesk, system-ui, sans-serif"
                  >
                    Your Business
                  </text>
                  <text
                    x="196"
                    y="199"
                    fontSize="17"
                    fill="#a9814d"
                    fontFamily="Hanken Grotesk, system-ui, sans-serif"
                  >
                    ★★★★★
                  </text>
                  <text
                    x="282"
                    y="199"
                    fontSize="16"
                    fill="#5b4f3c"
                    fontFamily="Hanken Grotesk, system-ui, sans-serif"
                  >
                    4.9, open now
                  </text>
                  <circle cx="492" cy="183" r="24" fill="url(#goldG)" />
                  <text
                    x="492"
                    y="191"
                    textAnchor="middle"
                    fontSize="22"
                    fontWeight="700"
                    fill="#241d14"
                    fontFamily="Hanken Grotesk, system-ui, sans-serif"
                  >
                    #1
                  </text>
                </g>
                <g className="ghost" fill="#f2e9d8" fillOpacity="0.14">
                  <rect x="110" y="246" width="420" height="14" rx="7" />
                  <rect x="110" y="268" width="300" height="10" rx="5" />
                </g>
              </g>

              <g className="scene s4">
                <g className="phone">
                  <rect
                    x="70"
                    y="26"
                    width="120"
                    height="246"
                    rx="22"
                    fill="#0a2018"
                    stroke="#d4af7a"
                    strokeWidth="3"
                  />
                  <circle cx="92" cy="54" r="9" fill="url(#goldG)" />
                  <rect
                    x="106"
                    y="49"
                    width="50"
                    height="6"
                    rx="3"
                    fill="#f2e9d8"
                    fillOpacity="0.7"
                  />
                  <rect
                    x="106"
                    y="59"
                    width="34"
                    height="5"
                    rx="2.5"
                    fill="#f2e9d8"
                    fillOpacity="0.35"
                  />
                  <rect
                    x="82"
                    y="76"
                    width="96"
                    height="96"
                    rx="8"
                    fill="url(#greenG)"
                    stroke="#d4af7a"
                    strokeOpacity="0.6"
                  />
                  <svg
                    x="106"
                    y="94"
                    width="48"
                    height="48"
                    viewBox="0 0 100 100"
                  >
                    <use href="#vmark" />
                  </svg>
                  <use
                    className="beat"
                    href="#heart"
                    x="82"
                    y="184"
                    width="20"
                    height="20"
                    fill="#ecd6a8"
                  />
                  <rect
                    x="110"
                    y="190"
                    width="60"
                    height="7"
                    rx="3.5"
                    fill="#f2e9d8"
                    fillOpacity="0.5"
                  />
                  <rect
                    x="82"
                    y="218"
                    width="88"
                    height="6"
                    rx="3"
                    fill="#f2e9d8"
                    fillOpacity="0.3"
                  />
                  <rect
                    x="82"
                    y="232"
                    width="64"
                    height="6"
                    rx="3"
                    fill="#f2e9d8"
                    fillOpacity="0.3"
                  />
                </g>
                <g className="chip1">
                  <rect
                    x="190"
                    y="70"
                    width="98"
                    height="32"
                    rx="16"
                    fill="#f2e9d8"
                  />
                  <text
                    x="239"
                    y="92"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="600"
                    fill="#241d14"
                    fontFamily="Hanken Grotesk, system-ui, sans-serif"
                  >
                    +128 likes
                  </text>
                </g>
                <g className="chip2">
                  <rect
                    x="190"
                    y="228"
                    width="88"
                    height="32"
                    rx="16"
                    fill="#d4af7a"
                  />
                  <text
                    x="234"
                    y="250"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="600"
                    fill="#241d14"
                    fontFamily="Hanken Grotesk, system-ui, sans-serif"
                  >
                    New lead
                  </text>
                </g>
                <use
                  className="fh"
                  style={{ ["--d" as string]: "0s" }}
                  href="#heart"
                  x="34"
                  y="190"
                  width="18"
                  height="18"
                  fill="#ecd6a8"
                />
                <use
                  className="fh"
                  style={{ ["--d" as string]: ".8s" }}
                  href="#heart"
                  x="200"
                  y="150"
                  width="22"
                  height="22"
                  fill="#d4af7a"
                />
                <use
                  className="fh"
                  style={{ ["--d" as string]: "1.5s" }}
                  href="#heart"
                  x="206"
                  y="112"
                  width="16"
                  height="16"
                  fill="#ecd6a8"
                />
                <use
                  className="fh"
                  style={{ ["--d" as string]: ".4s" }}
                  href="#heart"
                  x="44"
                  y="120"
                  width="14"
                  height="14"
                  fill="#d4af7a"
                />
                <text
                  x="322"
                  y="120"
                  fontSize="78"
                  fill="#ecd6a8"
                  fontFamily="Marcellus, Georgia, serif"
                >
                  +0
                </text>
                <text
                  x="324"
                  y="146"
                  fontSize="18"
                  fill="#cbbfa6"
                  fontFamily="Hanken Grotesk, system-ui, sans-serif"
                >
                  new leads a month
                </text>
                <line
                  x1="322"
                  y1="278"
                  x2="580"
                  y2="278"
                  stroke="#d4af7a"
                  strokeOpacity="0.5"
                />
                <g fill="url(#goldG)">
                  <rect
                    className="rise"
                    style={{ ["--d" as string]: ".3s" }}
                    x="326"
                    y="254"
                    width="28"
                    height="24"
                    rx="3"
                  />
                  <rect
                    className="rise"
                    style={{ ["--d" as string]: ".45s" }}
                    x="366"
                    y="242"
                    width="28"
                    height="36"
                    rx="3"
                  />
                  <rect
                    className="rise"
                    style={{ ["--d" as string]: ".6s" }}
                    x="406"
                    y="226"
                    width="28"
                    height="52"
                    rx="3"
                  />
                  <rect
                    className="rise"
                    style={{ ["--d" as string]: ".75s" }}
                    x="446"
                    y="208"
                    width="28"
                    height="70"
                    rx="3"
                  />
                  <rect
                    className="rise"
                    style={{ ["--d" as string]: ".9s" }}
                    x="486"
                    y="190"
                    width="28"
                    height="88"
                    rx="3"
                  />
                  <rect
                    className="rise"
                    style={{ ["--d" as string]: "1.05s" }}
                    x="526"
                    y="166"
                    width="28"
                    height="112"
                    rx="3"
                  />
                </g>
              </g>

              <g className="scene s5">
                <svg
                  x="268"
                  y="26"
                  width="104"
                  height="106"
                  viewBox="0 0 100 100"
                  overflow="visible"
                >
                  <polygon
                    className="slab"
                    style={{ ["--d" as string]: "0s" }}
                    points="0.4,12.5 22,12.5 50,79 42,99.5"
                    fill="url(#goldG)"
                  />
                  <polygon
                    className="slab"
                    style={{ ["--d" as string]: ".25s" }}
                    points="21.5,0.9 48.6,0.9 73.8,58.4 59,92.9"
                    fill="url(#greenG)"
                    stroke="#d4af7a"
                    strokeWidth="0.8"
                  />
                  <path
                    className="slab"
                    style={{ ["--d" as string]: ".5s" }}
                    d="M67.3 0.4 H100 L73.8 58.4 L76 40 Q75 18 67.3 0.4 Z"
                    fill="url(#goldG)"
                  />
                </svg>
                <text
                  className="word"
                  x="320"
                  y="192"
                  textAnchor="middle"
                  fontSize="34"
                  letterSpacing="9"
                  fill="#ecd6a8"
                  fontFamily="Marcellus, Georgia, serif"
                >
                  VIRAL VISION
                </text>
                <text
                  className="tag"
                  x="320"
                  y="226"
                  textAnchor="middle"
                  fontSize="16"
                  letterSpacing="5"
                  fill="#cbbfa6"
                  fontFamily="Hanken Grotesk, system-ui, sans-serif"
                >
                  From Vision to Viral
                </text>
              </g>
            </svg>
          </div>
          <div className="scrim" />
          <div className="cap">{title}</div>
          <div className="ctrl">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={paused ? "Play animation" : "Pause animation"}
            >
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path
                  d={paused ? "M2 1l7 5-7 5V1z" : "M2 1h3v10H2zM7 1h3v10H7z"}
                  fill="currentColor"
                />
              </svg>
            </button>
            <div className="bar" aria-hidden="true">
              <i style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

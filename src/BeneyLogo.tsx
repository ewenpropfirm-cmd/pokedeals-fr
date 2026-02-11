import { AbsoluteFill } from "remotion";

export const BeneyLogo: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Container for the logo */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Excavator icon with "b" */}
        <div style={{ position: "relative", marginBottom: 20 }}>
          {/* Small "b" on the left */}
          <div
            style={{
              position: "absolute",
              left: -40,
              top: 30,
              fontSize: 48,
              fontWeight: 800,
              color: "#cc0000",
              fontStyle: "italic",
            }}
          >
            b
          </div>

          {/* Excavator SVG */}
          <svg
            width="200"
            height="180"
            viewBox="0 0 200 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cabin */}
            <rect x="60" y="80" width="50" height="45" fill="#1a1a1a" stroke="#000" strokeWidth="3" />
            {/* Window */}
            <rect x="65" y="85" width="40" height="25" fill="#4a4a4a" stroke="#000" strokeWidth="2" />

            {/* Arm base */}
            <polygon points="110,95 140,60 150,65 115,105" fill="#1a1a1a" stroke="#000" strokeWidth="2" />

            {/* Arm middle */}
            <polygon points="140,60 180,30 188,38 150,65" fill="#1a1a1a" stroke="#000" strokeWidth="2" />

            {/* Bucket arm */}
            <polygon points="180,30 195,10 200,15 188,38" fill="#1a1a1a" stroke="#000" strokeWidth="2" />

            {/* Bucket */}
            <path d="M195 10 L210 5 L215 20 L205 35 L195 25 Z" fill="#1a1a1a" stroke="#000" strokeWidth="2" />

            {/* Hydraulic cylinders */}
            <line x1="75" y1="80" x2="130" y2="50" stroke="#555" strokeWidth="4" />
            <line x1="145" y1="55" x2="175" y2="25" stroke="#555" strokeWidth="3" />

            {/* Body/base */}
            <rect x="40" y="125" width="90" height="25" fill="#1a1a1a" stroke="#000" strokeWidth="3" rx="3" />

            {/* Tracks */}
            <ellipse cx="55" cy="160" rx="20" ry="15" fill="#1a1a1a" stroke="#000" strokeWidth="3" />
            <ellipse cx="115" cy="160" rx="20" ry="15" fill="#1a1a1a" stroke="#000" strokeWidth="3" />
            <rect x="55" y="145" width="60" height="30" fill="#1a1a1a" />
            <line x1="35" y1="160" x2="135" y2="160" stroke="#000" strokeWidth="3" />

            {/* Track wheels */}
            <circle cx="50" cy="160" r="8" fill="#333" stroke="#000" strokeWidth="2" />
            <circle cx="75" cy="160" r="6" fill="#333" stroke="#000" strokeWidth="2" />
            <circle cx="95" cy="160" r="6" fill="#333" stroke="#000" strokeWidth="2" />
            <circle cx="120" cy="160" r="8" fill="#333" stroke="#000" strokeWidth="2" />
          </svg>
        </div>

        {/* "beney" text */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 800,
            color: "#cc0000",
            fontStyle: "italic",
            letterSpacing: -5,
            lineHeight: 0.9,
            textShadow: "3px 3px 0 #8b0000",
          }}
        >
          beney
        </div>

        {/* "terrassements" text */}
        <div
          style={{
            fontSize: 42,
            fontWeight: 600,
            color: "#1a1a1a",
            fontStyle: "italic",
            letterSpacing: 2,
            marginTop: -10,
          }}
        >
          terrassements
        </div>

        {/* "SARL" text */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#1a1a1a",
            letterSpacing: 3,
            marginTop: 10,
          }}
        >
          SARL
        </div>
      </div>
    </AbsoluteFill>
  );
};

import { AbsoluteFill, Img, staticFile } from "remotion";

// Sparkle component
const Sparkle: React.FC<{ size: number; top: string; left: string; opacity?: number }> = ({
  size,
  top,
  left,
  opacity = 1,
}) => (
  <div
    style={{
      position: "absolute",
      top,
      left,
      width: size,
      height: size,
      opacity,
    }}
  >
    <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
      <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
    </svg>
  </div>
);

// Dot component
const Dot: React.FC<{ size: number; top: string; left: string; opacity?: number }> = ({
  size,
  top,
  left,
  opacity = 0.6,
}) => (
  <div
    style={{
      position: "absolute",
      top,
      left,
      width: size,
      height: size,
      borderRadius: "50%",
      background: "white",
      opacity,
    }}
  />
);

// Floating card component
const FloatingCard: React.FC<{
  top: string;
  left: string;
  rotate: number;
  scale?: number;
  opacity?: number;
}> = ({ top, left, rotate, scale = 1, opacity = 0.15 }) => (
  <div
    style={{
      position: "absolute",
      top,
      left,
      width: 120 * scale,
      height: 170 * scale,
      background: `linear-gradient(135deg, rgba(255,255,255,${opacity}) 0%, rgba(255,255,255,${opacity * 0.5}) 100%)`,
      borderRadius: 12 * scale,
      transform: `rotate(${rotate}deg)`,
      border: `2px solid rgba(255,255,255,${opacity * 0.8})`,
      boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
    }}
  />
);

export const WhopBanner: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #c084fc 0%, #8b5cf6 30%, #7c3aed 60%, #6d28d9 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow effects */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(251,191,36,0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          right: "-5%",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Floating cards in background */}
      <FloatingCard top="5%" left="3%" rotate={-15} scale={0.8} opacity={0.1} />
      <FloatingCard top="60%" left="8%" rotate={12} scale={0.6} opacity={0.08} />
      <FloatingCard top="15%" left="85%" rotate={20} scale={0.9} opacity={0.12} />
      <FloatingCard top="55%" left="88%" rotate={-8} scale={0.7} opacity={0.1} />
      <FloatingCard top="75%" left="75%" rotate={15} scale={0.5} opacity={0.08} />

      {/* Sparkles */}
      <Sparkle size={35} top="8%" left="5%" opacity={0.9} />
      <Sparkle size={25} top="12%" left="92%" opacity={0.8} />
      <Sparkle size={30} top="78%" left="7%" opacity={0.7} />
      <Sparkle size={28} top="85%" left="90%" opacity={0.85} />
      <Sparkle size={20} top="25%" left="15%" opacity={0.6} />
      <Sparkle size={22} top="70%" left="95%" opacity={0.7} />
      <Sparkle size={18} top="45%" left="3%" opacity={0.5} />
      <Sparkle size={24} top="20%" left="75%" opacity={0.6} />
      <Sparkle size={20} top="50%" left="97%" opacity={0.55} />
      <Sparkle size={26} top="90%" left="50%" opacity={0.65} />

      {/* Dots */}
      <Dot size={12} top="15%" left="20%" opacity={0.4} />
      <Dot size={8} top="30%" left="88%" opacity={0.35} />
      <Dot size={14} top="65%" left="12%" opacity={0.45} />
      <Dot size={10} top="82%" left="82%" opacity={0.4} />
      <Dot size={8} top="10%" left="60%" opacity={0.3} />
      <Dot size={10} top="55%" left="5%" opacity={0.35} />
      <Dot size={12} top="92%" left="25%" opacity={0.4} />
      <Dot size={8} top="40%" left="92%" opacity={0.3} />

      {/* Main content container */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 80,
          zIndex: 10,
        }}
      >
        {/* Left - Logo with notification */}
        <div style={{ position: "relative" }}>
          <Img
            src={staticFile("logo.png")}
            style={{
              width: 500,
              height: "auto",
              filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.3))",
            }}
          />
          {/* Notification badge */}
          <Img
            src={staticFile("notif.png")}
            style={{
              position: "absolute",
              top: -20,
              right: 25,
              width: 95,
              height: 95,
              filter: "drop-shadow(0 5px 15px rgba(0,0,0,0.3))",
            }}
          />
        </div>

        {/* Right - Tagline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            fontStyle: "italic",
            color: "white",
            textShadow: `
              -3px -3px 0 #4c1d95,
              3px -3px 0 #4c1d95,
              -3px 3px 0 #4c1d95,
              3px 3px 0 #4c1d95,
              0 6px 20px rgba(0,0,0,0.3)
            `,
            lineHeight: 1.2,
          }}
        >
          Alertes Pokemon TCG
          <br />
          <span style={{ color: "#fbbf24" }}>les plus rapides</span>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          background: "linear-gradient(to top, rgba(109,40,217,0.5) 0%, transparent 100%)",
        }}
      />
    </AbsoluteFill>
  );
};

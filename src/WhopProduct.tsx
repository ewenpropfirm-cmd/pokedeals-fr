import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { z } from "zod";

export const whopSchema = z.object({
  style: z.enum(["clean", "dark", "energetic", "collector"]),
});

// Style 1: Clean & Minimal - White background, professional
export const StyleClean: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Subtle decorative circles */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(59, 130, 246, 0.08)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(251, 191, 36, 0.08)",
        }}
      />

      {/* Logo */}
      <Img
        src={staticFile("logo.png")}
        style={{
          width: 380,
          height: "auto",
          marginBottom: 40,
          filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.1))",
        }}
      />

      {/* Tagline */}
      <div
        style={{
          fontSize: 42,
          fontWeight: 600,
          color: "#1e3a5f",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Ne ratez plus aucun drop Pokemon
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 26,
          color: "#64748b",
          textAlign: "center",
          maxWidth: 800,
        }}
      >
        Alertes instantanees sur les meilleurs deals cartes Pokemon
      </div>

      {/* Badge */}
      <div
        style={{
          marginTop: 50,
          padding: "14px 40px",
          background: "#3b82f6",
          borderRadius: 50,
          color: "white",
          fontSize: 22,
          fontWeight: 600,
        }}
      >
        Rejoindre la communaute
      </div>
    </AbsoluteFill>
  );
};

// Style 2: Dark Premium - Luxurious dark theme with glowing accents
export const StyleDark: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(145deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Glowing orbs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Logo with glow */}
      <Img
        src={staticFile("logo.png")}
        style={{
          width: 360,
          height: "auto",
          marginBottom: 50,
          filter: "drop-shadow(0 0 40px rgba(251,191,36,0.4))",
        }}
      />

      {/* Tagline */}
      <div
        style={{
          fontSize: 44,
          fontWeight: 700,
          background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Ne ratez plus aucun drop Pokemon
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 26,
          color: "#94a3b8",
          textAlign: "center",
          maxWidth: 800,
        }}
      >
        Alertes instantanees sur les meilleurs deals cartes Pokemon
      </div>

      {/* Premium badge */}
      <div
        style={{
          marginTop: 50,
          padding: "16px 50px",
          background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
          borderRadius: 8,
          color: "#0f172a",
          fontSize: 22,
          fontWeight: 700,
          boxShadow: "0 0 30px rgba(251,191,36,0.4)",
        }}
      >
        ACCES PREMIUM
      </div>
    </AbsoluteFill>
  );
};

// Animated Sparkle component
const AnimatedSparkle: React.FC<{
  size: number;
  top: string;
  left: string;
  opacity?: number;
  delay?: number;
}> = ({ size, top, left, opacity = 1, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Twinkle animation
  const twinkle = interpolate(
    (frame + delay * 10) % 60,
    [0, 30, 60],
    [0.4, 1, 0.4],
    { extrapolateRight: "clamp" }
  );

  // Scale pulse
  const scale = interpolate(
    (frame + delay * 10) % 60,
    [0, 30, 60],
    [0.8, 1.2, 0.8],
    { extrapolateRight: "clamp" }
  );

  // Fade in at start
  const fadeIn = spring({
    frame: frame - delay * 3,
    fps,
    config: { damping: 20 },
  });

  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        opacity: opacity * twinkle * fadeIn,
        transform: `scale(${scale})`,
      }}
    >
      <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
        <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
      </svg>
    </div>
  );
};

// Animated Dot component
const AnimatedDot: React.FC<{
  size: number;
  top: string;
  left: string;
  opacity?: number;
  delay?: number;
}> = ({ size, top, left, opacity = 0.6, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Pulse animation
  const pulse = interpolate(
    (frame + delay * 15) % 45,
    [0, 22, 45],
    [0.5, 1, 0.5],
    { extrapolateRight: "clamp" }
  );

  // Fade in
  const fadeIn = spring({
    frame: frame - delay * 2,
    fps,
    config: { damping: 15 },
  });

  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "white",
        opacity: opacity * pulse * fadeIn,
      }}
    />
  );
};

// Style 3: Energetic - Purple gradient with sparkles (like Poke Alerts)
export const StyleEnergetic: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo animation - scale up with spring
  const logoScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Logo slight bounce
  const logoY = interpolate(
    spring({ frame: frame - 5, fps, config: { damping: 10 } }),
    [0, 1],
    [30, 0]
  );

  // Notification badge pop in (delayed)
  const notifScale = spring({
    frame: frame - 20,
    fps,
    config: { damping: 8, stiffness: 150 },
  });

  const notifRotate = interpolate(
    spring({ frame: frame - 20, fps, config: { damping: 8 } }),
    [0, 1],
    [-20, 0]
  );

  // Text animation - slide up and fade in
  const textY = interpolate(
    spring({ frame: frame - 30, fps, config: { damping: 15 } }),
    [0, 1],
    [40, 0]
  );

  const textOpacity = interpolate(
    frame,
    [30, 45],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #a78bfa 0%, #8b5cf6 50%, #7c3aed 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Animated Sparkles - edges */}
      <AnimatedSparkle size={28} top="8%" left="5%" opacity={0.9} delay={0} />
      <AnimatedSparkle size={20} top="15%" left="88%" opacity={0.8} delay={1} />
      <AnimatedSparkle size={24} top="75%" left="8%" opacity={0.7} delay={2} />
      <AnimatedSparkle size={22} top="70%" left="92%" opacity={0.85} delay={3} />
      <AnimatedSparkle size={18} top="25%" left="12%" opacity={0.6} delay={4} />
      <AnimatedSparkle size={16} top="85%" left="85%" opacity={0.7} delay={5} />
      <AnimatedSparkle size={20} top="50%" left="3%" opacity={0.5} delay={6} />
      <AnimatedSparkle size={18} top="40%" left="95%" opacity={0.6} delay={7} />

      {/* Animated Sparkles - center */}
      <AnimatedSparkle size={22} top="18%" left="35%" opacity={0.75} delay={1} />
      <AnimatedSparkle size={18} top="12%" left="58%" opacity={0.7} delay={2} />
      <AnimatedSparkle size={26} top="22%" left="70%" opacity={0.8} delay={0} />
      <AnimatedSparkle size={20} top="28%" left="28%" opacity={0.65} delay={3} />
      <AnimatedSparkle size={16} top="8%" left="45%" opacity={0.6} delay={4} />
      <AnimatedSparkle size={24} top="35%" left="20%" opacity={0.7} delay={2} />
      <AnimatedSparkle size={20} top="32%" left="78%" opacity={0.75} delay={5} />
      <AnimatedSparkle size={14} top="15%" left="25%" opacity={0.55} delay={6} />
      <AnimatedSparkle size={18} top="25%" left="82%" opacity={0.65} delay={1} />
      <AnimatedSparkle size={22} top="5%" left="65%" opacity={0.7} delay={3} />

      {/* Animated Dots */}
      <AnimatedDot size={8} top="20%" left="25%" opacity={0.5} delay={0} />
      <AnimatedDot size={6} top="30%" left="80%" opacity={0.4} delay={1} />
      <AnimatedDot size={10} top="60%" left="15%" opacity={0.5} delay={2} />
      <AnimatedDot size={7} top="80%" left="75%" opacity={0.4} delay={3} />
      <AnimatedDot size={5} top="12%" left="70%" opacity={0.3} delay={4} />
      <AnimatedDot size={8} top="45%" left="90%" opacity={0.4} delay={5} />
      <AnimatedDot size={6} top="65%" left="5%" opacity={0.35} delay={6} />
      <AnimatedDot size={9} top="88%" left="30%" opacity={0.45} delay={7} />
      <AnimatedDot size={7} top="18%" left="40%" opacity={0.45} delay={2} />
      <AnimatedDot size={5} top="25%" left="55%" opacity={0.4} delay={3} />
      <AnimatedDot size={8} top="10%" left="50%" opacity={0.5} delay={1} />
      <AnimatedDot size={6} top="22%" left="65%" opacity={0.35} delay={4} />
      <AnimatedDot size={9} top="30%" left="35%" opacity={0.45} delay={0} />
      <AnimatedDot size={5} top="15%" left="75%" opacity={0.4} delay={5} />
      <AnimatedDot size={7} top="35%" left="25%" opacity={0.4} delay={6} />
      <AnimatedDot size={6} top="28%" left="72%" opacity={0.35} delay={2} />

      {/* Logo with notification badge - animated */}
      <div
        style={{
          position: "relative",
          marginBottom: 15,
          transform: `scale(${logoScale}) translateY(${logoY}px)`,
        }}
      >
        <Img
          src={staticFile("logo.png")}
          style={{
            width: 420,
            height: "auto",
            filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.2))",
          }}
        />
        {/* Notification badge - animated pop */}
        <Img
          src={staticFile("notif.png")}
          style={{
            position: "absolute",
            top: -10,
            right: 40,
            width: 70,
            height: 70,
            filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.3))",
            transform: `scale(${notifScale}) rotate(${notifRotate}deg)`,
          }}
        />
      </div>

      {/* Tagline - animated */}
      <div
        style={{
          fontSize: 38,
          fontWeight: 700,
          fontStyle: "italic",
          color: "white",
          textAlign: "center",
          marginTop: -20,
          maxWidth: 800,
          textShadow: `
            -2px -2px 0 #4c1d95,
            2px -2px 0 #4c1d95,
            -2px 2px 0 #4c1d95,
            2px 2px 0 #4c1d95,
            -3px 0 0 #4c1d95,
            3px 0 0 #4c1d95,
            0 -3px 0 #4c1d95,
            0 3px 0 #4c1d95
          `,
          lineHeight: 1.4,
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
        }}
      >
        Les alertes restock et drop les plus rapides<br />pour tous les produits Pokemon TCG
      </div>
    </AbsoluteFill>
  );
};

// Static Sparkle for features page
const StaticSparkle: React.FC<{ size: number; top: string; left: string; opacity?: number }> = ({
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

// Static Dot for features page
const StaticDot: React.FC<{ size: number; top: string; left: string; opacity?: number }> = ({
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

// Style 5: Features Page - "Pourquoi PokeDeals?" with benefits list (STATIC)
export const StyleFeatures: React.FC = () => {
  const benefits = [
    "Les alertes restock et drop les plus rapides pour tous les produits Pokemon TCG",
    "Accès anticipé aux liens produits avant les drops",
    "Informations exclusives de sources internes chez les revendeurs",
    "Données scrapées de tous les grands groupes Pokemon Restock",
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #a78bfa 0%, #8b5cf6 50%, #7c3aed 100%)",
        display: "flex",
        flexDirection: "row",
        fontFamily: "system-ui, sans-serif",
        overflow: "hidden",
        padding: 60,
      }}
    >
      {/* Static Sparkles */}
      <StaticSparkle size={28} top="5%" left="3%" opacity={0.9} />
      <StaticSparkle size={22} top="8%" left="92%" opacity={0.8} />
      <StaticSparkle size={20} top="85%" left="5%" opacity={0.7} />
      <StaticSparkle size={24} top="80%" left="88%" opacity={0.85} />
      <StaticSparkle size={18} top="45%" left="55%" opacity={0.6} />
      <StaticSparkle size={16} top="20%" left="50%" opacity={0.5} />

      {/* Static Dots */}
      <StaticDot size={10} top="15%" left="8%" opacity={0.5} />
      <StaticDot size={8} top="90%" left="45%" opacity={0.4} />
      <StaticDot size={12} top="75%" left="10%" opacity={0.5} />
      <StaticDot size={9} top="25%" left="95%" opacity={0.4} />
      <StaticDot size={7} top="60%" left="52%" opacity={0.35} />

      {/* Left side - Text content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingRight: 40,
        }}
      >
        {/* Badge N°1 */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(255,255,255,0.15)",
            padding: "8px 20px",
            borderRadius: 30,
            marginBottom: 20,
            width: "fit-content",
          }}
        >
          <span style={{ fontSize: 22, color: "#fbbf24" }}>🏆</span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "white",
              letterSpacing: 1,
            }}
          >
            N°1 EN FRANCE
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            fontStyle: "italic",
            color: "white",
            marginBottom: 40,
            textShadow: `
              -3px -3px 0 #4c1d95,
              3px -3px 0 #4c1d95,
              -3px 3px 0 #4c1d95,
              3px 3px 0 #4c1d95,
              -4px 0 0 #4c1d95,
              4px 0 0 #4c1d95,
              0 -4px 0 #4c1d95,
              0 4px 0 #4c1d95
            `,
          }}
        >
          Pourquoi PokeDeals?
        </div>

        {/* Benefits list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {benefits.map((benefit, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 15,
                }}
              >
                {/* Arrow icon */}
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "12px solid transparent",
                    borderBottom: "12px solid transparent",
                    borderLeft: "18px solid #6d28d9",
                    marginTop: 4,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    color: "white",
                    textShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    lineHeight: 1.3,
                  }}
                >
                  {benefit}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right side - Phone mockup */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 400,
          transform: "rotate(-5deg)",
        }}
      >
        {/* Phone frame */}
        <div
          style={{
            width: 280,
            height: 560,
            background: "linear-gradient(145deg, #1f2937 0%, #111827 100%)",
            borderRadius: 40,
            border: "4px solid #374151",
            padding: 12,
            position: "relative",
            boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
          }}
        >
          {/* Notch */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: "50%",
              transform: "translateX(-50%)",
              width: 100,
              height: 25,
              background: "#000",
              borderRadius: 15,
            }}
          />

          {/* Screen content */}
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#1f2937",
              borderRadius: 30,
              padding: 20,
              paddingTop: 50,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {/* Fake notification bars */}
            {[0.9, 0.7, 0.85, 0.6, 0.75, 0.5, 0.8].map((width, i) => (
              <div
                key={i}
                style={{
                  height: 35,
                  background: i === 0 ? "#3b82f6" : "#374151",
                  borderRadius: 8,
                  width: `${width * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Notification badge */}
          <Img
            src={staticFile("notif.png")}
            style={{
              position: "absolute",
              top: 120,
              right: -20,
              width: 60,
              height: 60,
              filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.3))",
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Style 4: Collector's Edition - Card-themed, golden accents
export const StyleCollector: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Card-like frame */}
      <div
        style={{
          position: "absolute",
          inset: 30,
          border: "3px solid",
          borderImage: "linear-gradient(135deg, #ffd700, #ffaa00, #ffd700) 1",
          borderRadius: 20,
        }}
      />

      {/* Corner decorations */}
      {[
        { top: 20, left: 20 },
        { top: 20, right: 20 },
        { bottom: 20, left: 20 },
        { bottom: 20, right: 20 },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            ...pos,
            width: 60,
            height: 60,
            border: "2px solid #ffd700",
            borderRadius: 10,
            opacity: 0.6,
          }}
        />
      ))}

      {/* Sparkle effects */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "20%",
          fontSize: 30,
          color: "#ffd700",
          opacity: 0.6,
        }}
      >
        ✦
      </div>
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "25%",
          fontSize: 24,
          color: "#ffd700",
          opacity: 0.4,
        }}
      >
        ✦
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "30%",
          fontSize: 20,
          color: "#ffd700",
          opacity: 0.5,
        }}
      >
        ✦
      </div>

      {/* Logo */}
      <Img
        src={staticFile("logo.png")}
        style={{
          width: 350,
          height: "auto",
          marginBottom: 40,
          filter: "drop-shadow(0 0 20px rgba(255,215,0,0.3))",
        }}
      />

      {/* Tagline with gold gradient */}
      <div
        style={{
          fontSize: 42,
          fontWeight: 700,
          background: "linear-gradient(90deg, #ffd700, #ffaa00, #ffd700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Ne ratez plus aucun drop Pokemon
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 24,
          color: "#a0aec0",
          textAlign: "center",
          maxWidth: 800,
          letterSpacing: 1,
        }}
      >
        Alertes instantanees sur les meilleurs deals cartes Pokemon
      </div>

      {/* Collector badge */}
      <div
        style={{
          marginTop: 50,
          padding: "16px 45px",
          background: "transparent",
          border: "2px solid #ffd700",
          borderRadius: 8,
          color: "#ffd700",
          fontSize: 20,
          fontWeight: 600,
          letterSpacing: 3,
          textTransform: "uppercase",
        }}
      >
        Edition Collector
      </div>
    </AbsoluteFill>
  );
};

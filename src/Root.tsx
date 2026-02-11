import "./index.css";
import { Composition } from "remotion";
import {
  StyleClean,
  StyleDark,
  StyleEnergetic,
  StyleFeatures,
  StyleCollector,
} from "./WhopProduct";
import { BeneyLogo } from "./BeneyLogo";
import { WhopBanner } from "./Banner";

// Whop product image dimensions (1280x720)
const WHOP_WIDTH = 1280;
const WHOP_HEIGHT = 720;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Style 1: Clean & Minimal */}
      {/* Style 2: Dark Premium */}
      {/* Style 3: Energetic & Bold */}
      <Composition
        id="Style3-Energetic"
        component={StyleEnergetic}
        durationInFrames={90}
        fps={30}
        width={WHOP_WIDTH}
        height={WHOP_HEIGHT}
      />
      {/* Style 5: Features Page - Static */}
      <Composition
        id="Style5-Features"
        component={StyleFeatures}
        durationInFrames={1}
        fps={30}
        width={WHOP_WIDTH}
        height={WHOP_HEIGHT}
      />
      {/* Style 4: Collector's Edition */}

      {/* Whop Banner 16:9 */}
      <Composition
        id="WhopBanner"
        component={WhopBanner}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

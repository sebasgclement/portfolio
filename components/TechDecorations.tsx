// components/TechDecorations.tsx
import { FaCircle, FaCode, FaTools } from "react-icons/fa";
import { SiJavascript, SiPython, SiPhp, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiSymfony, SiDjango, SiExpress, SiNodedotjs, SiTailwindcss, SiSass, SiBootstrap, SiMui, SiMongodb, SiMysql, SiPostgresql, SiGraphql, SiFigma, SiFramer, SiGithub } from "react-icons/si";

export default function TechDecorations() {
  return (
    <>
      {/* Puntos dispersos */}
      <div className="absolute top-12 right-20 opacity-30 z-10 hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <g fill="#ffffff" fillOpacity="0.3">
            {[0, 20, 40, 60, 80].map((y) =>
              [0, 20, 40, 60, 80].map((x) => (
                <circle key={`${x}-${y}`} cx={x + 10} cy={y + 10} r="2" />
              ))
            )}
          </g>
        </svg>
      </div>

      {/* Escalerita tech */}
      <div className="absolute bottom-12 left-10 opacity-30 z-10 hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path
            d="M0 80V60H20V40H40V20H60V0"
            stroke="#ffffff"
            strokeOpacity="0.4"
            strokeWidth="4"
          />
        </svg>
      </div>
    </>
  );
}

// components/AboutDecorations.tsx
export default function AboutDecorations() {
    return (
      <>
        {/* Rejilla de puntos tech arriba derecha */}
        <div className="absolute top-10 right-10 opacity-10 z-0 hidden lg:block animate-pulse">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
            <g fill="#ffffff" fillOpacity="0.1">
              {[...Array(5)].map((_, y) =>
                [...Array(5)].map((_, x) => (
                  <circle key={`${x}-${y}`} cx={x * 20 + 10} cy={y * 20 + 10} r="2" />
                ))
              )}
            </g>
          </svg>
        </div>
  
        {/* Línea tech inferior izquierda */}
        <div className="absolute bottom-8 left-8 opacity-10 z-0 hidden lg:block">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path
              d="M0 80V60H20V40H40V20H60V0"
              stroke="#ffffff"
              strokeOpacity="0.15"
              strokeWidth="3"
            />
          </svg>
        </div>
      </>
    );
  }
  
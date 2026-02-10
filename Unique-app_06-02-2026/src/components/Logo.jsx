export default function Logo({ size = 36 }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
      >
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <path
          d="M50 5L90 30V70L50 95L10 70V30L50 5Z"
          fill="url(#g)"
        />
        <path
          d="M35 65V35H45V55H65V35H75V65H35Z"
          fill="white"
        />
      </svg>

<Link to="/login" className="flex items-center gap-2">
  <img src={logo} className="w-9 h-9" />
  <span className="font-bold">UNIQUΞ</span>
</Link>
      {/* <span className="text-xl font-bold tracking-widest">
        UNIQU<span className="text-purple-400">Ξ</span>
      </span> */}
    </div>
  );
}

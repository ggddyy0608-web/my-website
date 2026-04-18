import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-zinc-900/95 backdrop-blur border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <NavLink to="/" className="text-amber-400 font-bold tracking-widest text-sm whitespace-nowrap">
          <span className="md:hidden">BANBAN</span>
          <span className="hidden md:inline">BANBAN TRAINING CENTER</span>
        </NavLink>
        <nav className="flex items-center gap-1">
          {[
            { to: '/', label: '메인', end: true },
            { to: '/profile', label: '프로필', end: false },
            { to: '/blog', label: '블로그', end: false },
          ].map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-amber-400 text-black'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

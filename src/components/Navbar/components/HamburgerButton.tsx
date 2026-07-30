type HamburgerButtonProps = {
  isOpen: boolean
  onClick: () => void
}

function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-sm p-2 text-stone-700 transition-colors hover:bg-stone-100 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 md:hidden"
      aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      onClick={onClick}
    >
      <span className="sr-only">
        {isOpen ? 'Cerrar menú' : 'Abrir menú'}
      </span>
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
        )}
      </svg>
    </button>
  )
}

export default HamburgerButton

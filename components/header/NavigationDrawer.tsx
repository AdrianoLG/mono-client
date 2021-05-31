import Link from 'next/link'

const NavigationDrawer = () => (
  <nav className="top-16">
    <div className="arrow-up">
      <div className="triangle"></div>
    </div>
    <ul className="float-right w-full py-4">
      <Link href="/">
        <a>
          <li className="navigationDrawerOption">Opciones</li>
        </a>
      </Link>
      <Link href="/">
        <a>
          <li className="navigationDrawerOption">Salir</li>
        </a>
      </Link>
    </ul>
  </nav>
)

export default NavigationDrawer

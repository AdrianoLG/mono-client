import { Transition } from '@tailwindui/react'
import { useState } from 'react'
import NavigationDrawer from './NavigationDrawer'
import Logo from '../utils/Logo'
import Menu from './Menu'
import Overlay from '../utils/Overlay'

const Navbar = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpened(!isDrawerOpened)
  }

  return (
    <>
      <div className="bg-primary">
        <div className="container">
          <header className="header">
            <Logo />
            <Menu toggleDrawer={toggleDrawer} />
            <Transition
              show={isDrawerOpened}
              enter="transition duration-150 ease-in-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition duration-200 ease-in-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="navigationDrawer"
            >
              <NavigationDrawer />
            </Transition>
          </header>
        </div>
      </div>
      {isDrawerOpened ? <Overlay toggleDrawer={toggleDrawer} /> : ''}
    </>
  )
}

export default Navbar

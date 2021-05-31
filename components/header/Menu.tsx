import Image from 'next/image'

const Menu = ({ toggleDrawer }: any) => (
  <button className="mr-2 p-2" onClick={toggleDrawer}>
    <Image src="/menu.svg" height={30} width={30} />
  </button>
)

export default Menu

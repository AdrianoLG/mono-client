const Overlay = ({ toggleDrawer }: any) => (
  <div
    className="absolute w-full h-full bg-transparent top-0 left-0 z-10"
    onClick={toggleDrawer}
  ></div>
)

export default Overlay

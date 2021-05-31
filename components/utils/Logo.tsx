import Image from 'next/image'

const Logo = () => (
  <>
    <div className="flex items-center px-2 py-2">
      <div className="ml-1 mr-1 inline">
        <Image src="/logo.svg" height={50} width={50} />
      </div>
      <h1 className="text-white font-serif text-4xl inline">Mono</h1>
    </div>
  </>
)

export default Logo

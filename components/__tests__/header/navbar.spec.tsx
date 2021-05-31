import Navbar from '../../header/Navbar'
import { render } from '@testing-library/react'

describe('Navbar is working', () => {
  it('Should contain <header>', () => {
    const { container } = render(<Navbar />)
    const header = container.querySelector('header')
    expect(header).toBeInTheDocument()
  })
})

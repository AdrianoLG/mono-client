import Home from '../index'
import { render } from '@testing-library/react'

describe('Home is working', () => {
  it('Should contain <main>', () => {
    const { container } = render(<Home />)
    const main = container.querySelector('main')
    expect(main).toBeInTheDocument()
  })
})

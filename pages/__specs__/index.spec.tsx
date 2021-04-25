import Home from '../index'
import { render } from '@testing-library/react'

describe('Home is working', () => {
  it('Should return h1 text', () => {
    const { getByText } = render(<Home />)
    expect(getByText('Mono App')).toBeInTheDocument()
  })
})

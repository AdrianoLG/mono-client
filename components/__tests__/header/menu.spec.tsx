import Menu from '../../header/Menu'
import { render } from '@testing-library/react'

describe('Menu is working', () => {
  it('Should detect menu button', () => {
    const { container } = render(<Menu />)
    const button = container.querySelector('button')
    expect(button).toBeInTheDocument()
  })
})

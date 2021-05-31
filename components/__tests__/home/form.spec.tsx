import Form from '../../home/Form'
import { render } from '@testing-library/react'

describe('Form is working', () => {
  it('Should contain <h2>', () => {
    const { container } = render(<Form />)
    const h2 = container.querySelector('h2')
    expect(h2).toBeInTheDocument()
  })
})

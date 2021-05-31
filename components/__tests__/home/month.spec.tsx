import Month from '../../home/Month'
import { render } from '@testing-library/react'

describe('Month is working', () => {
  it('Should contain <h2>', () => {
    const { container } = render(<Month />)
    const h2 = container.querySelector('h2')
    expect(h2).toBeInTheDocument()
  })
  it('Should contain <table>', () => {
    const { container } = render(<Month />)
    const table = container.querySelector('table')
    expect(table).toBeInTheDocument()
  })
})

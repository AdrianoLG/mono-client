import NavigationDrawer from '../../header/NavigationDrawer'
import { render } from '@testing-library/react'

describe('NavigationDrawer is working', () => {
  it('Should contain <nav>', () => {
    const { container } = render(<NavigationDrawer />)
    const nav = container.querySelector('nav')
    expect(nav).toBeInTheDocument()
  })

  it('Should contain <ul>', () => {
    const { container } = render(<NavigationDrawer />)
    const ul = container.querySelector('ul')
    expect(ul).toBeInTheDocument()
  })

  it('Should contain <li> with navigationDrawerOption class', () => {
    const { container } = render(<NavigationDrawer />)
    const li = container.querySelector('li')
    expect(li).toBeInTheDocument()
    expect(li).toHaveClass('navigationDrawerOption')
  })
})

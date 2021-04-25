import { render } from '@testing-library/react'
import Prueba from '../prueba'

describe('Prueba is working', () => {
  it('Should detect h1', () => {
    const { getByText } = render(<Prueba />)
    expect(getByText('Prueba')).toBeInTheDocument()
  })
})

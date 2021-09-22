
/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import NavLink from '../components/navegationLink'

describe('Home', () => {
  it('renders a heading', () => {

    let data = { name:"about", href:"/about"};
    render(<NavLink name={data.name} href={data.href} />)

    const link = screen.getByRole('link', {
      name: data.name,
    })

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', data.href);
  })
})

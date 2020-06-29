import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

describe('App', () => {
  it('should contains name', () => {
    const { getByText } = render(<App value="Hello Function Component!" />)
    getByText('Hello Function Component!')
  })
})

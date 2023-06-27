import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CartSuccess from './CartSuccess';

describe('CartSuccess component', () => {
  test('Kembali ke service 1 jika klik link', () => {
    render(
      <BrowserRouter>
        <CartSuccess />
      </BrowserRouter>
    );

    const link = screen.getByRole('link', { name: /Lanjutkan Belanja/i });
    fireEvent.click(link);
  });
});

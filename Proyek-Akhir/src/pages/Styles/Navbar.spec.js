import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('navigasi ke halaman login berhasil', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);

    expect(window.location.pathname).toBe('/login');
  });
});

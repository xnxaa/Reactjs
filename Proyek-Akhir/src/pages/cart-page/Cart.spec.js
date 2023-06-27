import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import rootReducer from '../../store/reducers';
import Cart from './Cart';

const store = createStore(rootReducer);
const mock = new MockAdapter(axios);

test('Memunculkan gambar ketika keranjang kosong', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    </Provider>
  );

  const image = screen.getByAltText('Cart');
  expect(image).toBeInTheDocument();

  const message = screen.getByText(/Keranjang Kamu masih kosong nih/i);
  expect(message).toBeInTheDocument();
});


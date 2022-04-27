import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the potator', () => {
  render(<App />);
  const potatoElement = screen.getByText(/🥔/i);
  expect(potatoElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main page search blocks', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /^пошук$/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /швидкий пошук/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /акції на dim auto/i })).toBeInTheDocument();
});

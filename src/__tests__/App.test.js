import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('Renders the initial app with H2', () => {
  render(<App />);
  const linkElement = screen.getByText(/Surreal Estate/i);
  expect(linkElement).toBeInTheDocument();
});

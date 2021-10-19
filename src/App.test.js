import { render, screen } from '@testing-library/react';
import App from './App';
import { MOODS } from './helper/getMood';

test('default mood is good', () => {
  render(<App />);
  const defMood = screen.getByTestId('mood');
  expect(defMood.textContent).toBe('jó');
});

test('new mood is from the given array', () => {
  render(<App />);
  screen.getByTestId('surpriseButton').click();
  const defMood = screen.getByTestId('mood');
  expect(MOODS.includes(defMood.textContent)).toBe(true);
});

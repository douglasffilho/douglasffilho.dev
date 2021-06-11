import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Heading } from './Heading';

describe('Heading', () => {
  it('should have no accessibility violations', async () => {
    render(<Heading>a11y</Heading>);
    expect(await axe(screen.getByText('a11y'))).toHaveNoViolations();
  });

  it('renders without crashing', () => {
    render(<Heading>Heading</Heading>);
    expect(screen.getByText(/heading/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../../frontend/src/landing_page/home/Hero';

describe('Hero Component', () => {

    test('renders Hero component correctly', () => {
        render(<Hero />);

        const heroImage = screen.getByAltText('Hero Image');

        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', '/assets/images/homeHero.png');
    });

    test('renders heading and description', () => {
        render(<Hero />);

        const signupButton = screen.getByRole('button', { name: /Signup Now/i });

        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });

});
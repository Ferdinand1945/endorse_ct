import {render, screen, cleanup} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import { MemoryRouter } from 'react-router-dom';

test('test should render Navbar component', ()=> {
    render(<Navbar/>, {wrapper: MemoryRouter} );
    const navbarElement = screen.getByTestId('navbar-1');
    expect(navbarElement).toBeInTheDocument();
    expect(navbarElement).toBeVisible();
})
import React from 'react';
import Card from "./card";
import { render, screen } from "@testing-library/react";

test('Render card component', () => {
    render(<Card />)

    const song = screen.getByTestId('song-image')
    const title = screen.getByLabelText('song-title')
    const album = screen.getByLabelText('song-album')
    const button = screen.getByLabelText('song-button')

    expect(song).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(album).toBeInTheDocument()
    expect(button).toBeInTheDocument()
});
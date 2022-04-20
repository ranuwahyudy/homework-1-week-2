import { render } from "@testing-library/react"
import React from "react"
import Card from "./card"

test('Render track component', () => {
    render (
        <Card 
            uri={"testuri"} 
            image={"testimage"} 
            title={"It'll Be Okay"} 
            album={"When You're Gone"} 
            selectState={function (uri: string): void {
                throw new Error("Function not implemented.")
        } } 
        isSelected={false}
        isSelectedSongs={undefined} />
    );
    expect(screen.getByText(image)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(album)).toBeInTheDocument();
})
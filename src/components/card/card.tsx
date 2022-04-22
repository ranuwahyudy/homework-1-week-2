import React from "react";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import Cards from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../styles/Styles";

const Card = ({ uri, image, title, album, isSelectedSongs, selectState }:any) => {
    return (
        <>
            <Cards sx={{ display: 'flex', backgroundColor: "#000000", borderRadius: "10px", padding: "15px", alignItems: "center" }}>
                <CardMedia
                    data-testid="song-image"
                    component="img"
                    sx={{ width: 120, height: 120, objectFit: "cover", borderRadius: "7px" }}
                    image={image}
                    alt="Album"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", paddingLeft: "15px" }}>
                    <ThemeProvider theme={theme}>
                        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", '&:last-child': { padding: 0 } }}>
                            <Typography component="div" color={grey[50]} data-testid="song-title">
                                {title}
                            </Typography>
                            <Typography variant="subtitle2" color={grey[400]} component="div" gutterBottom data-testid="song-album">
                                {album}
                            </Typography>
                            {isSelectedSongs.includes(uri) ? (
                                <ThemeProvider theme={theme}>
                                    <Button onClick={() => selectState(uri)} variant="contained" size="small" data-testid="song-button">DESELECT</Button>
                                </ThemeProvider>
                            ) : (
                                <ThemeProvider theme={theme}>
                                    <Button onClick={() => selectState(uri)} variant="contained" size="small" color="secondary" data-testid="song-button">SELECT</Button>
                                </ThemeProvider>
                            )}
                        </CardContent>
                    </ThemeProvider>
                </Box>
            </Cards>
        </>
    );
}

export default Card;
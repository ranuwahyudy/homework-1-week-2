import React from "react";
// import PropTypes from 'prop-types';
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import Cards from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../styles/Styles";
import { songInterface } from "components/search/search";

const Card = ({ uri, image, title, album, isSelectedSongs, selectState }: songInterface) => {
    return (
        <>
            <Cards sx={{ display: 'flex', backgroundColor: "#000000", borderRadius: "10px", padding: "15px", alignItems: "center" }}>
                <CardMedia
                    component="img"
                    sx={{ width: 120, height: 120, objectFit: "cover", borderRadius: "7px" }}
                    image={image}
                    alt="Album"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", paddingLeft: "15px" }}>
                    <ThemeProvider theme={theme}>
                        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px", '&:last-child': { padding: 0 } }}>
                            <Typography component="div" color={grey[50]}>
                                {title}
                            </Typography>
                            <Typography variant="subtitle2" color={grey[400]} component="div" gutterBottom>
                                {album}
                            </Typography>
                            {isSelectedSongs.includes(uri) ? (
                                <ThemeProvider theme={theme}>
                                    <Button onClick={() => selectState(uri)} variant="contained" size="small">DESELECT</Button>
                                </ThemeProvider>
                            ) : (
                                <ThemeProvider theme={theme}>
                                    <Button onClick={() => selectState(uri)} variant="contained" size="small" color="secondary">SELECT</Button>
                                </ThemeProvider>
                            )}
                        </CardContent>
                    </ThemeProvider>
                </Box>
            </Cards>
        </>
    );
}

// Card.propTypes = {
//     uri: PropTypes.string,
//     image: PropTypes.string,
//     title: PropTypes.string,
//     album: PropTypes.string,
//     selectState: PropTypes.func,
//     isSelectedSongs: PropTypes.array
// }

export default Card;
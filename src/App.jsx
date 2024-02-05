import React from "react";
import { AppBar, makeStyles, Card, CardActions, CardContent, Button, CssBaseline, Typography, Grid, Toolbar, Container} from "@mui/material";
 import { PhotoCamera } from "@mui/icons-material";
 import { css } from '@emotion/react';
 const App = () => {
    const containerStyle = css`
        background-color: #f0f0f0;
        color: #333;
        &:hover {
            background-color: #ddd;
        }
    `;
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth='sm'>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            This is a photo album that can be used to showcase any media type as long as the data size is not that much long.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button css={containerStyle} variant="contained" color="primary">See my photos...</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">Secondary action</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default App;
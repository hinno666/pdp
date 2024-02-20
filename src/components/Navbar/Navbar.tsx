import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import CatchingPokemon from "@mui/icons-material/CatchingPokemon"
import { Container } from "@mui/material"

export const Navbar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth='lg'>
                <Toolbar>
                    <IconButton size="large" edge='start' color="inherit" aria-label="logo">
                        <CatchingPokemon />
                    </IconButton>
                    <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>
                        SENLA
                    </Typography>
                    <Stack direction='row' spacing={2}>

                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

import { Container, Grid, Typography } from "@material-ui/core";
import About from "../About/About";
import NavBar from "../NavBar/NavBar";

function Home() {
    return (
        <div>
            <NavBar />
            <Container>
                <Grid>
                    <Typography variant="h1" component="h2" gutterBottom>
                        Salutations!
                    </Typography>
                    <About />
                </Grid>
            </Container>
        </div>
    )
}

export default Home;
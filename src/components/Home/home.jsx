import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import About from "../About/About";
import NavBar from "../NavBar/NavBar";
import Experience from "../Experience/Experience";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavBar />
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h1" component="h2" gutterBottom>
                            Salutations!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <About />
                    </Grid>
                    <Grid item xs={12}>
                        <Experience />
                    </Grid>
                    {/* <Projects />
                    <Contact /> */}
                </Grid>
            </Container>
        </div>
    )
}

export default Home;
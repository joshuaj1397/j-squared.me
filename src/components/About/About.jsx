import { Box, Card, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import gpoy from "./it-me.jpg";

const useStyles = makeStyles({
    media: {
        height: 340,
    }
})

function About() {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Box display="flex" justifyContent="center">
                <Grid item xs={4}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={gpoy}
                            title="Yours truly"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Joshua Johnson
                            </Typography>
                            <Typography>
                                I am a software engineer, champion for equality, and race car driver! 😊 I am based in the Austin, Texas area right now and am working at Citi. I specialize in microservices, but have professional experience with full stack development as well.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Box>
        </Grid>
    )
}

export default About;
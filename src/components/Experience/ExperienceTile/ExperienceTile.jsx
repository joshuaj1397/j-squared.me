import { Card, CardContent, CardHeader, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: "left"
    }
}));

function ExperienceTile(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <div className={classes.root}>
                <Card raised={true}>
                    <CardHeader
                        title={props.title}
                        subheader={props.time}
                    />
                    <CardContent>
                        <Typography>
                            {props.description}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </Grid>
    )
}

export default ExperienceTile;
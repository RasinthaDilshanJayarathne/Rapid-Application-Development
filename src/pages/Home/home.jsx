import { withStyles } from "@mui/styles";
import { Component } from "react";
import { styleSheet } from "./styles";
import { Button, Grid, TextField, Typography, } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <Grid className={classes.container}>
                    <Grid className={classes.bodyContainer}>
                        <Grid className={classes.cardBodyContainer}>
                            <Grid className={classes.card}>
                                <Grid style={{ width: '25vw', height: '35vh', backgroundColor: '#999393', }}></Grid>
                            </Grid>
                            <Grid className={classes.card}>
                                <Grid style={{ width: '25vw', height: '35vh', backgroundColor: '#999393', }}></Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.cardBodyContainer}>
                            <Grid className={classes.card}>
                                <Grid style={{ width: '25vw', height: '35vh', backgroundColor: '#999393', }}></Grid>
                            </Grid>
                            <Grid className={classes.card}></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styleSheet)(Home)
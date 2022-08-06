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
                    <Grid className={classes.navBar}>
                        <Button style={{ width: '150px', backgroundColor: '#D9D9D9', color: 'black', marginLeft: '40px', border: '1px solid black' }}>Dashboard</Button>
                        <Button style={{ width: '150px', backgroundColor: '#D9D9D9', color: 'black', marginLeft: '450px', border: '1px solid black' }}>Product</Button>
                        <Button style={{ width: '100px', backgroundColor: '#D9D9D9', color: 'black', marginLeft: '50px', border: '1px solid black' }}>cart</Button>
                        <Typography variant="h4" gutterBottom component="div" style={{ marginLeft: '350px', marginTop: '10px' }}>
                            Rasintha
                        </Typography>
                    </Grid>
                    <Grid className={classes.bodyContainer}>
                        <Grid className={classes.cardBodyContainer}>
                            <Grid className={classes.card}>
                                <Card style={{ maxWidth: '500px', maxHeight: '400px'}}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid className={classes.card}>
                            <Card style={{ maxWidth: '500px', maxHeight: '400px'}}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid className={classes.cardBodyContainer}>
                            <Grid className={classes.card}>
                            <Card style={{ maxWidth: '500px', maxHeight: '400px'}}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </Card>
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
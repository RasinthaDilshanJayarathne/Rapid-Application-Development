import { withStyles } from "@mui/styles";
import { Component } from "react";
import { styleSheet } from "./styles";
import { Button, Grid, TextField, Typography,} from "@mui/material";

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
                        <Button style={{width:'150px',backgroundColor:'#D9D9D9',color:'black',marginLeft:'40px',border:'1px solid black'}}>Dashboard</Button>
                    </Grid>
                    <Grid className={classes.bodyContainer}></Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styleSheet)(Home)
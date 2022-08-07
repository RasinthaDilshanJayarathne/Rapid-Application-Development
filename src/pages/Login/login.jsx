import { withStyles } from "@mui/styles";
import { Component } from "react";
import { styleSheet } from "./styles";
import { Button, Grid, TextField, Typography, } from "@mui/material";

class Login extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { classes } = this.props;
        return(
            <>
            <Grid className={classes.container}>
                <Grid className={classes.loginContainer}>
                    
                </Grid>
            </Grid>
        </>
        )
    }
}

export default withStyles(styleSheet)(Login)
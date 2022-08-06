import { withStyles } from "@mui/styles";
import { Component } from "react";
import { styleSheet } from "./styles";
import { Button, Grid, TextField } from "@mui/material";

class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {classes} = this.props;
        return(
            <>
                 <Grid className={classes.container}>

                </Grid>
            </>
        )
    }
}

export default withStyles(styleSheet)(Home)
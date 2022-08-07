import { withStyles } from "@mui/styles";
import { Component } from "react";
import { styleSheet } from "./styles";

class Login extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { classes } = this.props;
        return(
            <>
            <Grid className={classes.container}>
               
            </Grid>
        </>
        )
    }
}

export default withStyles(styleSheet)(Login)
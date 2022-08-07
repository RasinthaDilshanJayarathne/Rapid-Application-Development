import { withStyles } from "@mui/styles";
import { Component } from "react";
import { styleSheet } from "./styles";
import { Button, Grid, TextField, Typography, } from "@mui/material";

class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <Grid className={classes.container}>
                    <Grid className={classes.loginContainer}>
                        <Grid className={classes.loginHeader}>
                            <Typography variant="h4" gutterBottom component="div">Login</Typography>
                        </Grid>
                        <Grid className={classes.loginFields}>
                            <TextField id="outlined-basic" label="User Name" variant="outlined" style={{ width: '500px', marginTop: '30px', backgroundColor: '#D9D9D9' }} />
                            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" style={{ width: '500px', backgroundColor: '#D9D9D9' }} />
                        </Grid>
                        <Grid className={classes.loginButton}>
                            <Button style={{ width: '150px', backgroundColor: '#7C8DEA', color: 'black' }}>Login</Button>
                        </Grid>
                        <Grid className={classes.loginClickHere}>
                            <Typography variant="h6" gutterBottom component="div" style={{marginLeft:'-170px'}}>Create new user account?<span>Click here</span></Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styleSheet)(Login)
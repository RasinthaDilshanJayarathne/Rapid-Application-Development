import { withStyles } from "@mui/styles";
import { Component } from "react";
import { styleSheet } from "./styles";
import { Button, Grid, TextField, Typography, } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
]

class Product extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.container}>
                <Grid className={classes.header}>
                    <Typography variant="h4" gutterBottom component="div" style={{ marginTop: '10px', marginLeft: '150px' }}>Product Manage</Typography>
                </Grid>
                <Grid className={classes.bodyContainer}>
                    <Grid className={classes.fieldContainer}>
                        <Grid className={classes.fieldFields}>
                            <TextField
                                style={{ width: '500px', marginTop: '-30px', backgroundColor: '#FAF3F3' }}
                                id="outlined-basic"
                                label="Title"
                                variant="outlined"

                            />
                            <Autocomplete
                                style={{ width: '500px', marginTop: '-380px', backgroundColor: '#FAF3F3' }}
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Categary" />}
                            />
                        </Grid>
                        <Grid className={classes.fieldFields}>
                            <TextField
                                style={{ width: '500px', marginTop: '-30px', backgroundColor: '#FAF3F3' }}
                                id="outlined-basic"
                                label="Price"
                                variant="outlined"
                            />
                            <TextField
                                style={{ width: '500px', marginTop: '-350px', backgroundColor: '#FAF3F3' }}
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                defaultValue="Default Value"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(Product)
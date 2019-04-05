import React from 'react'
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
})

class VQLoginForm extends React.Component {

    state = { email: '', password: '' }

    handleChange = (e) => {
        const { name } = e.target
        this.setState({ [name]: e.target.value })
    }

    //Form Login Submit
    handleSubmit = (e) => {
        e.preventDefault()

        if (true) { //check the username & password
            this.props.history.push('/actions')
            localStorage.setItem('credential', JSON.stringify(this.state))
        } else {
            localStorage.removeItem('credential')
        }
    }

 

    render() {
        const { classes } = this.props
        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}> <LockOutlinedIcon /> </Avatar>
                    <Typography component="h1" variant="h5"> Sign in </Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input type='text' id="email" name="email" autoComplete="email" autoFocus onChange={this.handleChange} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.handleChange} />
                        </FormControl>
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} > Sign in </Button>
                    </form>
                </Paper>
            </main>
        )
    }
}

VQLoginForm.propType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VQLoginForm)
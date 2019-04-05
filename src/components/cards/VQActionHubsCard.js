import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 180,
        margin: '10px'
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
};

class VQActionHubsCard extends React.Component {

    handleClick = (e) => {
        this.props.actions.push(this.props.location)
    }

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card} onClick={this.handleClick}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        className={classes.media}
                        height="140"
                        image={this.props.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2"> {this.props.name} </Typography>
                        <Typography component="p">{this.props.description} </Typography>
                    </CardContent>
                </CardActionArea>
                {/* 
                    <CardActions>
                    <Button size="small" variant="contained" color="primary"  fullWidth>Select</Button>
                </CardActions>
                */}
            </Card>
        )
    }
}

VQActionHubsCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VQActionHubsCard);
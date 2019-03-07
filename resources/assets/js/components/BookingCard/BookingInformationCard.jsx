import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import classnames from 'classnames';

const styles = theme => ({
    cardWrapper: {
        width: '100%',
        maxWidth: 900,
        margin: "0 auto",
        marginBottom: 40,
        [theme.breakpoints.down("sm")]: {
            borderRadius: 0
        },
        // backgroundImage: "url(http://localhost:8100/images/tour.jpg)",
        // backgroundSize: "cover"
    },
    card: {
      width: '100%'
    },
    media: {
        objectFit: 'cover',
    },
    action: {
        width: "100%",
    },
    content: {
        // opacity: 0.1
    },
    expand: {
        transform: 'rotate(0deg)',
        // marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

class BookingInformationCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleExpandClick = this.handleExpandClick.bind(this);
    }

    handleOnClick() {
        this.props.callback(true);
    }

    handleExpandClick() {
        this.setState(state => ({ expanded: !state.expanded }));
    };


    render () {
        const { classes } = this.props;
        if (!this.props.cardData) {
            return (<div></div>);
        }
        const data = this.props.cardData;

        return (
            <div className={classes.cardWrapper}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        className={classes.media}
                        height="480"
                        image={data.photo}
                        title="Contemplative Reptile"
                    />

                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="headline" component="h2">
                            {data.title}
                        </Typography>

                            <Typography gutterBottom variant="body2" component="h3">
                                Початок: {data.tour_start}
                            </Typography>
                            <Typography gutterBottom variant="body2" component="h3">
                                Закінчення: {data.tour_end}
                            </Typography>
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                            <Typography gutterBottom variant="body2" component="h3">
                                Вікова категорія: {data.age}
                            </Typography>
                            <Typography component="p">
                                {data.description}
                            </Typography>
                            <Typography gutterBottom variant="body2" component="h3">
                                Ціна: {data.cost} грн + трансфер
                            </Typography>
                        </Collapse>
                    </CardContent>

                </CardActionArea>
                <CardActions>
                    <Button size="small" color="secondary" className={classes.action} onClick={this.handleOnClick}>
                        Забронювати
                    </Button>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
            </Card>
            </div>
        )
    }
}

export default withStyles(styles)(BookingInformationCard);

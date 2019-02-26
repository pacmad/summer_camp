import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	card: {
		maxWidth: 900,
		margin: "0 auto",
		marginBottom: 40,
		[theme.breakpoints.down("sm")]: {
			borderRadius: 0
		},
		// backgroundImage: "url(http://localhost:8100/images/tour.jpg)",
		// backgroundSize: "cover"
	},
	media: {
		objectFit: 'cover',
	},
	action: {
		width: "100%",
	},
	content: {
		// opacity: 0.1
	}
});

class BookingInformationCard extends Component {

	constructor(props) {
		super(props);
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick() {
		this.props.callback(true);
	}

	render () {
		const { classes } = this.props;
		if (!this.props.cardData) {
			return (<div></div>);
		}
		const data = this.props.cardData;

		return (
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
						<Typography gutterBottom variant="body2" component="h3">
							Вікова категорія: {data.age}
						</Typography>
						<Typography component="p">
							{data.description}
						</Typography>
						<Typography gutterBottom variant="body2" component="h3">
							Ціна: {data.cost} грн + трансфер
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="secondary" className={classes.action} onClick={this.handleOnClick}>
						Забронювати
					</Button>
				</CardActions>
			</Card>
		)
	}
}

export default withStyles(styles)(BookingInformationCard);

import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'react-materialize';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { GetData } from '../../functions/GetData';

import './Catalog.css';

const styles = theme => ({
	root: {

			width: "50% !important",


		[theme.breakpoints.down("xs")]: {
			width: "100% !important",
		},
	},
	image: {
		position: "relative",
        height: 400,
		[theme.breakpoints.down("xs")]: {
			width: "100% !important",
		},
		"&:hover, &$focusVisible": {
			zIndex: 1,
			"& $imageBackdrop": {
				opacity: 0.15
			},
			"& $imageMarked": {
				opacity: 0
			},
			"& $imageTitle": {
				border: "4px solid currentColor"
			}
		}
	},
	focusVisible: {},
	imageButton: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: theme.palette.common.white
	},
	imageSrc: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: "cover",
		backgroundPosition: "center 40%"
	},
	imageBackdrop: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.4,
		transition: theme.transitions.create("opacity")
	},
	imageTitle: {
		position: "relative",
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`
	},
	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: "absolute",
		bottom: -2,
		left: "calc(50% - 9px)",
		transition: theme.transitions.create("opacity")
	}
});

class Catalog extends Component {

	constructor(props)
	{
		super(props);
		this.state = {
			photoPath: "./" + this.props.photoPath,
			title: this.props.title,
			link: this.props.link,
			width: "100%"
		}
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Link to={this.props.link}>
				<ButtonBase
					focusRipple
					className={classes.image}
					focusVisibleClassName={classes.focusVisible}
					style={{
						width: this.state.width
					}}
					>
					<span
						className={classes.imageSrc}
						style={{
							backgroundImage: `url(${this.state.photoPath})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat"
						}}
						/>
					<span className={classes.imageBackdrop} />
					<span className={classes.imageButton}>
						<Typography
							component="span"
							variant="subheading"
							color="inherit"
							className={classes.imageTitle}
							>
							{this.state.title}
							<span className={classes.imageMarked} />
						</Typography>
					</span>
				</ButtonBase>
			</Link>
			</div>
		);
	}
}

export default withStyles(styles)(Catalog);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            '../images/carousel/DSC_3895.JPG',
    },
    {
        label: 'Bird',
        imgPath:
            '../images/carousel/DSC_4732.JPG',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            '../images/carousel/IMG_20180712_104622.jpg',
    },
    {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
            '../images/carousel/IMG_20180712_105556.jpg',
    },
    {
        label: '5',
        imgPath:
            '../images/carousel/IMG_20180716_195556.jpg',
    },
    {
        label: '4',
        imgPath:
            '../images/carousel/IMG_20180717_163008_BURST2.jpg',
    },
    {
        label: '1',
        imgPath:
            '../images/carousel/IMG_20180819_103334_HDR.jpg',
    },
    // {
    //     label: 'Goč, Serbia',
    //     imgPath:
    //         '../images/carousel/IMG_20180713_102645.jpg',
    // },

    // {
    //     label: '3',
    //     imgPath:
    //         '../images/carousel/IMG_20180718_124448.jpg',
    // },
    // {
    //     label: '2',
    //     imgPath:
    //         '../images/carousel/IMG_20180718_131336.jpg',
    // },

];

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: '24px auto',
        [theme.breakpoints.down("md")]: {
            maxWidth: 640,
        },
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: '#e0e0e0',
    },
    mobileStepper: {
        backgroundColor: '#e0e0e0',
    },
    img: {
        display: 'block',
        overflow: 'hidden',
        width: '100%',
        height: 720,
        // maxWidth: 400,
        [theme.breakpoints.down("md")]: {
            height: 480,
        },
        [theme.breakpoints.down("sm")]: {
            height: 320,
        },
    },
});

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
        };
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleStepChange = this.handleStepChange.bind(this);
    }

    handleNext() {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack() {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleStepChange(activeStep) {
        this.setState({ activeStep });
    };

    render() {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = tutorialSteps.length;

        return (
            <div className={classes.root}>
                <Paper square elevation={0} className={classes.header}>

                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.img} src={step.imgPath} alt={step.label} />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    className={classes.mobileStepper}
                    nextButton={
                        <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        </Button>
                    }
                />
            </div>
        );
    }
}

Carousel.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Carousel);

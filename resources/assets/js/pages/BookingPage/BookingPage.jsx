import React, { Component } from 'react';

import { GetData } from '../../functions/GetData';
import Navbar from '../../components/Navbar/Navbar';
import BookingCard from '../../components/BookingCard/BookingCard';
import Foot from "../../components/Foot/Foot";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    discounts: {
        display: 'flex',
        margin: '0 auto',
        flexDirection: 'column',
        alignItems: 'center',
    },
    discountsText: {
        fontSize: '24px',
        textAlign: 'center',
        marginTop: 0,
    }
});

class BookingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            ready: false
        }
    }

    componentWillMount() {
        GetData('getTours')
            .then((result) => {
                console.log(result);
                this.setState({ data: result, ready: true });
            })
    }

    render() {
        const { classes } = this.props;
        if (!this.state.ready) {
            return (<div></div>);
        }

        const list = this.state.data.map(
            (tour, index) =>
                <BookingCard key={index} cardData={tour} />
        )
        return (
            <div id="child-root">
                <Navbar link="/" linkText="На головну" />
                <div id="main-body">
                    <div className={classes.discounts}>
                        <h2>Акції та знижки:</h2>
                        <p className={classes.discountsText}>
                            Раннє бронювання (за 45 діб до заїзду) - знижка 5% <br/>
                            Знижка на другу дитину в замовленні - 5%<br/>
                            Знижка на третю дитину в замовленні - 7%<br/>
                            Знижка на четверту дитину в замовленні - 10%<br/>
                            <em>Знижки не сумуються</em>
                        </p>

                    </div>
                    {list}
                    <Foot/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(BookingPage);

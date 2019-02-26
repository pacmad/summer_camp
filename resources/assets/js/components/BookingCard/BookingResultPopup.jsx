import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class BookingResultPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.callback(false);
    };

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogContent id={'dialog-scrollable'}>
                        <div><h4>{this.props.information.message}</h4></div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Закрити
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

}

export default BookingResultPopup;
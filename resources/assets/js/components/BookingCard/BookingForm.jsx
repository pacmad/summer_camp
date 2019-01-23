import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PostData } from '../../functions/PostData';

class BookingForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			fatherName: '',
			birthDate: '',
			address: '',
			parentInfo: '',
			tourId: ''
		};
		this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
	}

	// handleClickOpen() {
	// this.setState({ open: true });
	// };

    componentWillMount() {
        this.setState({tourId: this.props.tourId});
    }

	handleClose() {
		this.props.callback(false);
	};

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log('Event: ', event.target.name);
    };

    handleSubmit() {
    	// console.log('State: ', this.state);
        PostData('bookTour', this.state)
            .then((result) => {
                console.log(result);
            });
        // this.props.callback(false);
    };

	render() {
		return (
			<div>
				<Dialog
					open={this.props.open}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title"
					>
					<DialogTitle id="form-dialog-title">Анкета</DialogTitle>
					<DialogContent>
						<DialogContentText>
							To subscribe to this website, please enter your email address here. We will send
							updates occasionally.
						</DialogContentText>
						<TextField
							autoFocus
							margin="dense"
							id="firstName"
							label="Ім'я"
							type="text"
							fullWidth
							onChange={this.handleChange}
							name="firstName"
							/>
						<TextField
							margin="dense"
							id="lastName"
							label="Прізвище"
							type="text"
							fullWidth
                            onChange={this.handleChange}
                            name="lastName"
							/>
						<TextField
							margin="dense"
							id="fatherName"
							label="По-батькові"
							type="text"
							fullWidth
                            onChange={this.handleChange}
                            name="fatherName"
							/>
						<TextField
							margin="dense"
							id="date"
							label="Дата народження"
							type="date"
							fullWidth
                            onChange={this.handleChange}
                            name="birthDate"
							InputLabelProps={{
								shrink: true,
							}}
							/>
						<TextField
							margin="dense"
							id="address"
							label="Домашня адреса"
							type="text"
							fullWidth
                            onChange={this.handleChange}
                            name="address"
							/>
						<TextField
							id="parentsInfo"
							fullWidth
							label="ПІБ та контактний телефон батьків"
							multiline
							rowsMax="10"
							margin="dense"
                            onChange={this.handleChange}
                            name="parentsInfo"
							required={true}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="secondary">
							Закрити
						</Button>
						<Button onClick={this.handleSubmit} color="primary">
							Забронювати
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default BookingForm;

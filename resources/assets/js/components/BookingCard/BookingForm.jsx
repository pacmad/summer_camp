import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class BookingForm extends Component {
	constructor(props) {
		super(props);
		this.handleClose = this.handleClose.bind(this);
	}

	// handleClickOpen() {
	// this.setState({ open: true });
	// };

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
							/>
						<TextField
							margin="dense"
							id="lastName"
							label="Прізвище"
							type="text"
							fullWidth
							/>
						<TextField
							margin="dense"
							id="fatherName"
							label="По-батькові"
							type="text"
							fullWidth
							/>
						<TextField
							margin="dense"
							id="date"
							label="Дата народження"
							type="date"
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							/>
						<TextField
							margin="dense"
							id="adress"
							label="Домашня адреса"
							type="text"
							fullWidth
							/>
						<TextField
							id="parentsInfo"
							fullWidth
							label="ПІБ та контактний телефон батьків"
							multiline
							rowsMax="10"
							margin="dense"
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="secondary">
							Закрити
						</Button>
						<Button onClick={this.handleClose} color="primary">
							Забронювати
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default BookingForm;

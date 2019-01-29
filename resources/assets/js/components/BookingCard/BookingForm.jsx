import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
			tourId: '',
			size: 'm',
			gender: 'male',
            transferFirst: 'kiev',
            transferBack: 'kiev',
			needTransferFirst: true,
            needTransferBack: true,
		};
		this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTransfer = this.handleChangeTransfer.bind(this);
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

    handleChangeTransfer(event) {
    	console.log('name: ', event.target.name);
        this.setState({ [event.target.name]: !this.state[event.target.name] });
	}

    handleSubmit() {
    	if (!this.state.needTransferFirst) {
            this.state.transferFirst = '';
		}

        if (!this.state.needTransferBack) {
            this.state.transferBack = '';
        }

		delete this.state.needTransferFirst;
        delete this.state.needTransferBack;
        PostData('bookTour', this.state)
            .then((result) => {
                console.log(result);
            });
    };

	render() {

		const needTransferFirst = this.state.needTransferFirst;
		let transferFirst;
		if (needTransferFirst) {
			transferFirst = <FormControl component="fieldset" style={{marginTop: '16px'}}>
                					<FormLabel component="legend">Трансфер на базу з: </FormLabel>
									<RadioGroup
										style={{flexDirection: 'row'}}
										aria-label="transferFirst"
										name="transferFirst"
										value={this.state.transferFirst}
										onChange={this.handleChange}
										color={"primary"}
									>
										<FormControlLabel value="kiev" control={<Radio color={"primary"} />} label="Києва" />
										<FormControlLabel value="ivano-frankivsk" control={<Radio color={"primary"} />} label="Івано-Франківська" />
									</RadioGroup>
								</FormControl>
		} else {
            transferFirst = null;
		}


        const needTransferBack = this.state.needTransferBack;
        let transferBack;
        if (needTransferBack) {
            transferBack = <FormControl component="fieldset" style={{marginTop: '16px'}}>
                <FormLabel component="legend">Трансфер назад до: </FormLabel>
                <RadioGroup
                    style={{flexDirection: 'row'}}
                    aria-label="transferBack"
                    name="transferBack"
                    value={this.state.transferBack}
                    onChange={this.handleChange}
                    color={"primary"}
                >
                    <FormControlLabel value="kiev" control={<Radio color={"primary"} />} label="Києва" />
                    <FormControlLabel value="ivano-frankivsk" control={<Radio color={"primary"} />} label="Івано-Франківська" />
                </RadioGroup>
            </FormControl>
        } else {
            transferBack = null;
        }

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
                        <FormControl component="fieldset" style={{marginTop: '16px'}}>
                            <FormLabel component="legend">Розмір верхнього одягу (футболка)</FormLabel>
                            <RadioGroup
								style={{flexDirection: 'row'}}
                                aria-label="size"
                                name="size"
                                value={this.state.size}
                                onChange={this.handleChange}
								color={"primary"}
                            >
                                <FormControlLabel value="xs" control={<Radio color={"primary"} />} label="XS" />
                                <FormControlLabel value="s" control={<Radio color={"primary"} />} label="S" />
                                <FormControlLabel value="m" control={<Radio color={"primary"} />} label="M" />
                                <FormControlLabel value="l" control={<Radio color={"primary"} />} label="L" />
                                <FormControlLabel value="xl" control={<Radio color={"primary"} />} label="XL" />
                                <FormControlLabel value="xxl" control={<Radio color={"primary"} />} label="XXL" />
                            </RadioGroup>
                        </FormControl>

                        <FormControl component="fieldset" style={{marginTop: '16px'}}>
                            <FormLabel component="legend">Стать</FormLabel>
                            <RadioGroup
                                style={{flexDirection: 'row'}}
                                aria-label="gender"
                                name="gender"
                                value={this.state.gender}
                                onChange={this.handleChange}
                                color={"primary"}
                            >
                                <FormControlLabel value="male" control={<Radio color={"primary"} />} label="Хлопчик" />
                                <FormControlLabel value="female" control={<Radio color={"primary"} />} label="Дівчинка" />
                            </RadioGroup>
						</FormControl>

						<hr/>

                        <FormGroup column={"true"} style={{marginTop: '24px'}}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.needTransferFirst}
                                        color={"primary"}
                                        onChange={this.handleChangeTransfer}
                                        value={'true'}
										name={"needTransferFirst"}
                                    />
                                }
                                label="Трансфер туди"
                            />
							{transferFirst}
						</FormGroup>

                        <FormGroup column={"true"} style={{marginTop: '24px'}}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.needTransferBack}
                                        color={"primary"}
                                        onChange={this.handleChangeTransfer}
                                        value={'true'}
                                        name={"needTransferBack"}
                                    />
                                }
                                label="Трансфер назад"
                            />
							{transferBack}
                        </FormGroup>

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

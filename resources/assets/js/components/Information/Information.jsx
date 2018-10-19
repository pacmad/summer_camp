import React, { Component } from 'react';
import { GetData } from '../../functions/GetData';

import InformationList from './InformationList/InformationList';

import './Information.css';

class Information extends Component {

	constructor(props) {
		super(props);
		this.state = {
			allInfo: '',
			ready: false
		}
	}

	componentWillMount() {
		GetData('/getInformation').
		then((result) => {
			this.setState({allInfo: result, ready: true});
		})
	}

	render() {
		if (!this.state.ready) {
			return (<div></div>);
		}

		const info = this.state.allInfo;
		const lists = info.map(
			(record, i) => {
				if (record.type == 'list')
				return record;
			}
		)
		console.log(lists);
		const informationLists = lists.map(
			(record, i) =>
			<InformationList key={i} title={record.title} list={record.content} />
		)
		return (
			<div className="information-container">
				<div className="important-paragraph">
					<p className="important-paragraph-text">
						Будь ласка детально ознайомтесь з переліком документів,
						які потрібно мати з собою,
						списком необхідних речей та переліком захворювань,
						з якими ми не можемо прийняти дитину.
					</p>
				</div>
				<div className="paragraph">
					<div className="paragraph-title">Зв'язок та відвідування</div>
					<div className="paragraph-description">
						<p>
							На території садиби є зв’язок тільки оператора Vodafone,
							тому якщо у вашої дитини інший мобільний оператор,
							ви завжди зможете зателефонувати інструктору та дізнатися про все,
							що вас зацікавить і поговорити з дитиною.
							Відвідування дітей вільне, окрім днів,
							коли діти перебувають на виїзних екскурсіях.
							Щоб провести час з своєю дитиною за межами нашої садиби,
							вам потрібно буде заповнити заяву встановленого зразка.
							За межами садиби діти можуть перебувати тільки з батьками (опікунами).
							Прохання мати при собі документи, що засвідчують особу.
						</p>
					</div>
				</div>
				{informationLists}
				<hr />
				<div className="important-paragraph">
					У випадку виявлення у день заїзду дитини хворої або такої,
					що за медичними показниками не може перебувати на відпочинку,
					керівництво зберігає за собою право відмовити у прийнятті її без відшкодування будь-яких витрат чи збитків.
				</div>
			</div>
		);
	}
}

export default Information;

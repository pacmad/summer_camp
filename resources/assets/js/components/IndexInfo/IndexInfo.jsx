import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import './IndexInfo.css';

class IndexInfo extends Component {

	render() {
		return (
			<div>
				<p className="first-paragraph index-info">
					<em>
						Шукаєта місце, де б Ваша дитина могла оздоровитися,
						знайти нових друзів, отримати масу вражень, розширити свій кругозір,
						та просто гарно провести канікули?
					</em>
				</p>
				<div className="second-paragraph index-info">
					Тоді Вам саме до нас!
				</div>
				<div className="third-paragraph-container">
					<p className="third-paragraph index-info">
						«Дріада» — це найкращий спосіб показати Вашим дітям чарівну природу Карпат,
						навчити цінувати та любити її. З нами ваша дитина побуває на мальовничих вершинах та водоспадах,
						відвідає цікаві екскурсії.
						Ми навчаємо дітей правилам поведінки в туристичних походах, основам скелелазіння,
						проводимо цікаві майстер-класи, граємо у веселі ігри.
						Разом із опануванням туристичних навичок діти приймають участь у творчих конкурсах,
						вчаться працювати в команді, розвивають свою креативність, відкривають у собі нові таланти та здібності.
					</p>
				</div>

			</div>
		);
	}
}

export default IndexInfo;

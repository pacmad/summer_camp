import axios from 'axios';

export function GetData(type) {
	// let BaseUrl = 'http://litodriada.com.ua/index.php/';
	let BaseUrl = 'http://localhost/';
	return new Promise((resolve, reject) => {
		axios.get(BaseUrl + type)
		.then(res => {
			resolve(res.data);
		})
		.catch(error => {
			reject(error);
		});
	});
}

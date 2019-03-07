import axios from 'axios';

export function PostData(type, userData) {
    // let BaseUrl = 'http://litodriada.com.ua/index.php/';
    let BaseUrl = 'http://localhost/';
    return new Promise((resolve, reject) => {
        axios.post(BaseUrl + type, userData)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

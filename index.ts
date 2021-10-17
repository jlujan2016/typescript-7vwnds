const urlApi = 'https://estadistapi.inei.gob.pe/api/v1/ubigeo/';
let getData = fetch(urlApi);
//getData.then((response) => response.json()).then((data) => console.log(data));

const examplePromise = new Promise((resolve, reject) => {
  resolve({
    name: 'jose',
    lastname: 'lujan',
  });
});

examplePromise.then((res) => console.log('Lapromesa es: ', res));

const APIURL = 'https://anapioficeandfire.com/api/characters?name='

const charAPI = async (char) => { 
    const response = await fetch(`${APIURL}${char.split().join('+')}`);
    const data = await response.json();
    if(data.length) return Promise.resolve(data);
    // if(response.ok) return Promise.resolve(data) --> seria o certo se tivesse 'error';
    console.log(data)
    return Promise.reject('Erro! Verifique o nome digitado.');
    // return Promise.reject('Erro! Verifique o nome digitado.') --> A API não retorna um erro --> erro caseiro.
}

// const charAPI = (char) => (
//   fetch(`${APIURL}${char.split().join('+')}`)
//     .then((response) => (
//       response
//         .json()
//         .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
//     ))
// );


export default charAPI;

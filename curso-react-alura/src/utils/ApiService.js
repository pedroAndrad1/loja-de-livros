const urlBase = 'http://localhost:8000/api/autor';

const consomeAPI = (segmento = '', method = 'GET', body) =>{
    return fetch(`${urlBase}/${segmento}`,{
        method,
        headers: {'content-type': 'application/json'},
        body,
    })
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
}

const ApiService = {


    ListaAutores : () => consomeAPI(),

    CriaAutor : autor => consomeAPI('', 'POST', autor),

    ListaNomes: () => consomeAPI('nome'),

    ListaLivros: () => consomeAPI(),

    RemoveAutor: id => consomeAPI(id,'DELETE'),
    
    TrataErros : res =>{
        if(!res.ok){
            
            throw Error(res.responseText);
        }
        return res;
    } 

}
export default ApiService;
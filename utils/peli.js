const fetch = require('node-fetch');

const peli ={

    getPeli: async (url)=>{
        
        let response = await fetch(url);
        let peli= await response.json()
        return peli
    }

}

module.exports=peli;
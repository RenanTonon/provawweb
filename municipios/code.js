async function getEstado(uf) {
    try {
        const uf = uf;
      const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
        
      const jsonData = await data.json();
      const dado = jsonData;
      alert(dado);
      for(i=0;i < dado.length;i++){
        const mainer = document.querySelector("#listax");
        const p = document.createElement('li');
        p.textContent = dado[i].nome;
        mainer.appendChild(p);
      }
      
    } catch (error) {
      console.error(error)
    }
  }


  getEstado("11");

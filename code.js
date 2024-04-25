async function getEstado() {

    try {
      const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
  
      const jsonData = await data.json();
      const dado = jsonData;

      for(i=0;i < dado.length;i++){
        const mainer = document.querySelector("#lista");
        const p = document.createElement('li');
        p.textContent = dado[i].nome;
        mainer.appendChild(p);
      }
      
    } catch (error) {
      console.error(error)
    }
  }
getEstado();



  
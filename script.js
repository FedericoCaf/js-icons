const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];


/*
    0. inizializzare i dati
    1. ciclare l'array di oggetti
    2. per ogni ciclo generare un template HTML con i dati dinamici
    3. stamparlo in pagina
*/



/***************** 
    FUNCTIONS
 *****************/

const generateIcons = (icon) =>{
    /*
        1. destrutturiamo l'oggetto in base a quallo che ci serve
        2. creo il template HTML
        3. return del template
    */
    
    const {name, prefix, family, color} = icon;

    const boxHtml = `
        <div class="box">
            <i class="${family} ${prefix}${name}" style="color:${color}"></i>
            <p>${name}</p>
        </div>
    `;
    return boxHtml;
    
}

const printIcons = (iconsToPrint) => {
    /*
        1. resettare il container
        2. cliclare le icone
        3. ad ogni ciclo generare l'HTML dell'icona
        4. aggiungerla al container
    */
    container.innerHTML = '';
    iconsToPrint.forEach( (icon) =>{
       container.innerHTML += generateIcons(icon);
    });
    
    // versione compatta dello stsseo forEach
    //iconsToPrint.forEach( icon => container.innerHTML += generateIcons(icon));
 
}

const onChangeSelect = (event) => {
    /*
        1. prendere il value della select
        2. in base al tipo filtrare l'array delle icone
        3. invocare la funzione per stamparle
    */
    const selectedType = event.target.value;

    let iconSelected = [];
    if(selectedType === 'all'){
        // se ho scelto all le icone da stampare sono tutte
        iconSelected = icons;
    }else{
        // altrimenti devo filtrare l'array
        iconSelected = icons.filter((icon)=>{
            // sintassi più 'verbosa'
            // if(selectedType === icon.type)
            // {
            //     return true
            // }
            // return false

            // sintassi più compatta e preferibile
            return selectedType === icon.type;
        }); 

        // sintassi con il return implicito
        //iconSelected = icons.filter(icon => selectedType === icon.type);
    }
    //console.log(iconSelected);
    printIcons(iconSelected);

};


// esempio con funzione non arrow
/*function onChangeSelect(){
    // in questo caso posso usare this
    console.log(this.value);
   const selectedType = this.value;
   let iconSelected = [];
    if(selectedType === 'all'){
        iconSelected = icons;
    }else{
        iconSelected = icons.filter(icon => selectedType === icon.type);
    }
    printIcons(iconSelected);
}*/


/***************** 
    RENDER PAGE
 *****************/
const container = document.querySelector('.container');
// al change della select chiamo la funzione che filtra l'array delle icone
document.querySelector('select').addEventListener('change', onChangeSelect)
// al caircamento della pagina invio tutto l'array delle icone alla funzione che si occupa di stamparle in pagina
printIcons(icons);





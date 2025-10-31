const menuPizzaArray = [
    {name: 'MARINARA', description: 'Pomodoro di San Marzano, aglio, origano.', price: '€4,00'},
    {name: 'MARGHERITA', description: 'Pomodoro di San Marzano, fior di latte di Agerola.', price: '€5,00'},
    {name: 'ZINGARA', description: 'Pomodorini, fior di latte di Agerola, crudo di Parma, rucola, scaglie.', price: '€8,00'},
    {name: 'CARRETTIERA', description: 'Provola di Agerola, friarielli Km 0, salsiccia.', price: '€8,00'},
    {name: 'LA SAPORITA', description: 'Fior di latte di Agerola, gorgonzola, scamorza, emmenthal.', price: '€7,00'},
    {name: 'TEDESCA', description: 'Fior di latte di Agerola, wurstel, patatine.', price: '€6,50'},
    {name: 'VALTELLINA', description: 'Fior di latte di Agerola, bresaola, rucola, scaglie.', price: '€8,50'},
    {name: 'MIMOSA', description: 'Fior di latte di Agerola, panna, prosciutto cotto, mais.', price: '€7,00'},
    {name: 'SFIZIOSA', description: 'Fior di latte ,gorgonzola, crema di noci e speck.', price: '€8,00'},
    {name: 'CILENTANA', description: 'Fior di latte salamino piccante di maialino nero casertano, olive nere, pomodori secchi del Cilento e scaglie di caciotta del caseificio Sparago.', price: '€9,00'},
    {name: 'VERACE', description: 'Pomodoro San Marzano, mozzarella di bufala e olio evo.', price: '€7,00'},
    {name: 'COCOZZA', description: 'Fior di latte, vellutata di zucca, funghi porcini e salsiccia di maialino nero casertano.', price: '€9,00'},
    {name: "A' NONN", description: 'Fior di latte di Agerola, sugo e carne alla genovese e formaggio grattugiato.', price: '€9,00'},
    {name: 'ZUCCOTTO', description: 'Vellutata di zucca, provola di Agerola, pancetta, scaglie di Parmigiano.', price: '€8,50'},
    {name: 'CAPRICCIOSA', description: 'Pomodoro di San Marzano, fior di latte di Agerola, carciofotti, funghi champignon, prosciutto cotto, olive nere.', price: '€7,50'},
    {name: 'PARMIGIANA', description: 'Pomodoro di San Marzano, parmigiana di melanzane, provola di Agerola e scaglia di parmigiano in cottura', price: '€6,00', img: ''},
    {name: 'DIAVOLA', description: 'Pomodoro di San Marzano,, fior di latte di Agerola, salame piccante.', price: '€6,00'},
    {name: 'SICILIANA', description: 'Pomodoro di San Marzano,, fior di latte di Agerola, melanzane a funghetto.', price: '€6,00'},
    {name: 'CAMPAGNOLA', description: 'Pomodorini, provola di Agerola, verdure di stagione.', price: '€7,50'}
]

const menuDrinkArray = [
    {name: 'Cocke', price: '€4,00'}
]

const menuPastaArray = [
    
]

const menuBox = document.querySelector('.menu-container');
let menuHtml = '';

const btnPizza = document.querySelector('.btn-pizza');
const btnDrink = document.querySelector('.btn-drink');
const btnPasta = document.querySelector('.btn-pasta');

let changes = 'pizza';

/*btnPizza.addEventListener('click', () => changes = 'pizza')
btnDrink.addEventListener('click', () => changes = 'drink')
btnPasta.addEventListener('click', () => changes = 'pasta')*/

if (changes === 'pizza') {
    menuPizzaArray.forEach(item => {
    menuHtml += `<div class="menu-box"><h4>${item.name}</h4><p>${item.description}</p><p>${item.price}<p></div>`;
})
} else if (changes === 'drink') {
    menuDrinkArray.forEach(item => {
    menuHtml += `<div class="menu-box"><h4>${item.name}</h4><p>${item.price}<p></div>`;
})
}

menuBox.innerHTML = menuHtml;
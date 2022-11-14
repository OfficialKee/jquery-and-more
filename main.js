let clickHere = $('<div> Click Here </div>');

let body = $('body')

body.append(clickHere);

let uL = $('<ul></ul>');

body.append(uL);

let submitBox = $('#submit');


clickHere.on('click',()=>{
    
    let li = $(`<li>${submitBox.val()}</li>`)

    uL.append(li)
})


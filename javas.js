var i=0;

var customerArray = [
    {'name':'Ava', 'Email':'ava@waiin.com', 'address':'xyz street, pune', 'joining_date':'15/05/21', 'action':'none'},
    {'name':'Oliver', 'Email':'oli@waiin.com', 'address':'abc street, pune', 'joining_date':'20/04/21', 'action':'none'},
    {'name':'Mio', 'Email':'mio@waiin.com', 'address':'mnp street, pune', 'joining_date':'10/02/21', 'action':'none'},
]

function buildTable(data){

    var table=document.getElementById('Customer-table')

    for(var i=0; i<data.length; i++)
    {
        var row=`<tr>
                     <td>${data[i].name}</td>
                     <td>${data[i].Email}</td>
                     <td>${data[i].address}</td>
                     <td>${data[i].joining_date}</td>
                     <td>${data[i].action}</td>
                 </tr>`

            table.innerHTML+=row;     
    }
}

let button=document.getElementById('button');

button.addEventListener('click',function(){
    if(i<1){
    buildTable(customerArray);
    i++;
    }
});

let fontChangeElement=document.getElementById("left");
let font_element=document.getElementById("fonts");
font_element.addEventListener("change", function(){
    if(font_element.value==150)
    {
        fontChangeElement.style.fontSize="large";
    }

    else if(font_element.value==50){
        fontChangeElement.style.fontSize="small";
    }

    else{
        fontChangeElement.style.fontSize="medium";
    }
});

let enlargesc=document.getElementById("enlarge");
let removing_element=document.getElementById("right");
let leftsc=document.getElementById("left");
enlargesc.addEventListener('click', function(){
    removing_element.style.display= 'none';
    leftsc.style.width='100%';
    fontChangeElement.style.fontSize="large";

})
















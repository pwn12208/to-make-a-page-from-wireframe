document.getElementById('5').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display= 'flex';
    document.querySelector('.left').style.background="grey";
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display= 'none';
});

/*function buildTable(data){

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

})*/
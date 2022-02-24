// dom element 
const dev_add_form  = document.getElementById('dev_add_form');
const dev_data = document.getElementById('dev_data');
const dev_card = document.getElementById('dev_card');

dev_add_form.addEventListener('submit', function(e){
    e.preventDefault();

    const name  = document.getElementById('name');
    const age   = document.getElementById('age');
    const loc   = document.getElementById('location');
    const skill = document.getElementById('skill');
    
})

fetch('http://localhost:5050/devs').then( data => data.json()).then( data =>{
    
    let dev_data_output = '';

    data.map( (dev,index) => {
       dev_data.innerHTML +=`
       <tr>
            <td> ${'0'+(index+1)}</td>
            <td>${dev.name}</td>
            <td>${dev.age}</td>
            <td>${dev.location}</td>
            <td>${dev.skill}</td>
            <td><img style="width:40px; height: 40px; object-fit: cover;" src="${dev.photo}" ></td>
            <td>
                
                <a onclick="viewFunction(${dev.id});" href="#dev_view" data-bs-toggle="modal" class="btn btn-success btn-sm"> <i class="fa fa-eye"></i></a>
                <a href="#dev_edit" data-bs-toggle="modal" class="btn btn-light btn-sm"> <i class="fa fa-edit"></i></a>
                <a href="#dev_delete" data-bs-toggle="modal" class="btn btn-danger btn-sm"> <i class="fa fa-trash"></i></a>
            </td>
        </tr>
       `;
    })
})

function viewFunction(id){

 
    fetch(`http://localhost:5050/devs/${id}`).then( data => data.json()).then( data =>{
        dev_card.innerHTML =`
        <div class="card" style="text-align: center;">
        <img style="height: 400px; object-fit: cover;" class="w-100" src="${data.photo}">
        <div class="card-header">
            <h4 style="font-weight: bold; margin-top: 20px;">${data.name}</h4>
            <h4 style="color: brown; font-weight: lighter; margin-top: 10px;">${data.skill}</h4>
            <button class="btn btn-dark my-3" >More Information</button>
        </div>
    </div>
        `;
    })

}




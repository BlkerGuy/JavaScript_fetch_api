"use strict";

document.querySelector('.sect').addEventListener('click', Change)
let image = document.querySelector('img')
let arrowimg= document.querySelector('#arrowimg');
let arrowtarget= document.querySelector('#arrowtarget');
let btn_Area=document.querySelector('.mydiv')
function Change(e) {
    arrowtarget.remove();
    btn_Area.remove()
    e.preventDefault();
    image.src = 'https://i.stack.imgur.com/hzk6C.gif';
    let takeTarget = e.target;

    if (takeTarget.text == 'Posts') {
        Posts();
        document.querySelector('.nametarget').innerText = takeTarget.text;
    }
    if (takeTarget.text == 'Comments') {
        Comments();
        document.querySelector('.nametarget').innerText = takeTarget.text;
    }
    if (takeTarget.text == 'Albums') {
        Albums();
        document.querySelector('.nametarget').innerText = takeTarget.text;
    }
    if (takeTarget.text == 'Photos') {
        Photos();
        document.querySelector('.nametarget').innerText = takeTarget.text;
    }
    if (takeTarget.text == 'Todos') {
        Todos();
        document.querySelector('.nametarget').innerText = takeTarget.text;
    }
    if (takeTarget.text == 'Users') {
        Users();
        document.querySelector('.nametarget').innerText = takeTarget.text;
    }

    setTimeout(rmLoading,300);
        

}

function rmLoading() {
    image.src='';
    arrowimg.src='';

}

function Posts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            response.json()
                .then(result => {
                    let tbl = `
                    <tr>
                    <th colspan="4" class="text-center"><h2>Posts</h2></th>
                    </tr>
                    <tr>
                     <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">Subject</th>
                        <th scope="col" class="text-center">Content</th>
                      </tr>`
                    result.forEach((element, index) => {
                        tbl += `
                                    <tr>
                                    <th scope="row">${index + 1}.</th>
                                    <td>${element.id}</td>
                                    <td>${element.title}</td>
                                    <td>${element.body}</td>
                                  </tr>`
                    });
                    document.querySelector('table').innerHTML = tbl;
                })
        })
}

function Comments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            response.json()
                .then(result => {
                    let tbl = `
                    <tr>
                    <th colspan="5" class="text-center"><h2>Comments</h2></th>
                    </tr>
                    <tr>
                     <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col" class="text-center">Content</th>
                                  </tr>`
                    result.forEach((element, index) => {
                        tbl += `
                                    <tr>
                                    <th scope="row">${index + 1}.</th>
                                    <td>${element.id}</td>
                                    <td>${element.name}</td>
                                    <td>${element.email}</td>
                                    <td>${element.body}</td>
                                  </tr>`
                    });
                    document.querySelector('table').innerHTML = tbl

                })
        })
}

function Albums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => {
            response.json()
                .then(result => {
                    let tbl = ` 
                    <tr>
                    <th colspan="3" class="text-center"><h2>Albums</h2></th>
                    </tr>
                    <tr>
                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Subject</th>
                                  </tr>`
                    result.forEach((element, index) => {
                        tbl += `
                                    <tr>
                                    <th scope="row">${index + 1}.</th>
                                    <td>${element.id}</td>
                                    <td>${element.title}</td>
                                  </tr>`
                    });
                    let table = document.querySelector('table');
                    table.innerHTML = tbl
                    table.setAttribute('class', 'd-flex' + " " + 'justify-content-center');
                })
        })
}

function Photos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            response.json()
                .then(result => {
                    let tbl = `
                    <tr>
                    <th colspan="5" class="text-center"><h2>Photos</h2></th>
                    </tr>
                    <tr>
                     <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Photos</th>

                                    <th scope="col">Subject</th>
                                    <th scope="col" class="text-center">Links</th>
                                  </tr>`
                    result.forEach((element, index) => {
                        tbl += `
                                    <tr>
                                    <th scope="row">${index + 1}.</th>
                                    <td>${element.id}</td>
                                    <td class="py-1"><img src="${element.thumbnailUrl}.jpg" alt="View" /></td>
                                    <td>${element.title}</td>
                                    <td> <a href="${element.url}" class=" text-dark" target="_blank">Click to Show Image</a></td>
                                  </tr>`
                    });
                    let table = document.querySelector('table');
                    table.innerHTML = tbl
                    table.setAttribute('class', 'd-flex' + " " + 'justify-content-center');


                })
        })

}

function Todos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            response.json()
                .then(result => {
                    let tbl = `
                    <tr>
                    <th colspan="4" class="text-center"><h2>Todos</h2></th>
                    </tr>
                    <tr>
                     <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Completed</th>
                                  </tr>`
                    result.forEach((element, index) => {
                        tbl += `
                                    <tr>
                                    <th scope="row">${index + 1}.</th>
                                    <td>${element.id}</td>
                                    <td>${element.title}</td>
                                    <td>${((element.completed) ? 'Completed <i class="fa-regular fa-circle-check text-success"></i>' : 'Not Completed <i class="fa-regular fa-circle-xmark text-danger"></i>')}</td>
                                  </tr>`
                    });
                    let table = document.querySelector('table');
                    table.innerHTML = tbl
                    table.setAttribute('class', 'd-flex' + " " + 'justify-content-center');

                })
        })
}

function Users() {
    let getData = GetCountry();
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            response.json()
                .then(result => {
                    let tbl = ` 
                    <tr>
                    <th colspan="9" class="text-center"><h2>Users Data</h2></th>
                    </tr>
                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Email
                                        </th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Website</th>
                                        <th scope="col">Company</th>
                                      </tr>`
                    result.forEach((element, index) => {
                        tbl += `
                                        <tr>
                                        <th scope="row">${index + 1}.</th>
                                        <td>${element.id}</td>
                                        <td>${element.name}</td>
                                        <td>${element.username}</td>
                                        <td>${element.email}</td>
                                        <td class="pt-2">
                                        <ul type="none" class="p-0" style="font-size:13px; line-height:1.3;">
            <li>Street: ${element.address.street}</li>
            <li>Suite: ${element.address.suite}</li>
            <li>City: ${element.address.city}</li>
            <li>Zipcode: ${element.address.zipcode}</li>
            <li>
                <ul type="none" class="p-0">
                     <li>Country:${(getData != undefined) ? getData.name : 'none'}</li>
                </ul>
            </li>
        </ul>
                                        </td>
                                        <td>${element.phone}</td>
                                        <td>
                                        <a href="#" target="_blank" class="text-black">${element.website}</a></td>
                                        <td>
                                        <ul type="none" class="p-0" style="font-size:10px;">
        <li>${element.company.name}</li>
        <li>${element.company.catchPhrase}</li>
        <li>${element.company.bs}</li>
    </ul>
                                        </td>

                                      </tr>`
                    });
                    document.querySelector('table').innerHTML = tbl

                })
        })
}

function GetCountry() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            response.json().then(res => {
                res.forEach((element, index) => {
                    getData(element.address.geo.lat, element.address.geo.lng)
                });
            })
        })
}

function getData(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d479d3bf9c94ea562ecd0cc819118096&units=metric`)
        // fetch('https://api.openweathermap.org/data/2.5/weather?latx=44.34&lon=10.99&appid=d479d3bf9c94ea562ecd0cc819118096')
        .then(function (resp) { return resp.json() })
        .then(function (data) { return data });
}


document.querySelector('#arrowtarget').addEventListener('click',()=>{
   arrowimg.src='https://media.tenor.com/MlHKXX_Uh40AAAAi/klick-click.gif'
   setTimeout(rmLoading,1800);
})

let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.documentElement.scrollTop = 0;
}


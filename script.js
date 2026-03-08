let books = JSON.parse(localStorage.getItem("books")) || []
let id = books.length + 1

function login(){

let u = document.getElementById("username").value
let p = document.getElementById("password").value

if(u==="admin" && p==="1234"){

window.location="dashboard.html"

}
else{
alert("Wrong login")
}

}

function logout(){

window.location="index.html"

}

function addBook(){

let name = document.getElementById("bookName").value
let author = document.getElementById("authorName").value
let category = document.getElementById("category").value

if(name==""||author==""||category==""){
alert("Fill all fields")
return
}

books.push({
id:id++,
name:name,
author:author,
category:category,
status:"Available"
})

localStorage.setItem("books",JSON.stringify(books))

displayBooks()

}

function displayBooks(){

let table=""

books.forEach((b,i)=>{

table+=`
<tr>
<td>${b.id}</td>
<td>${b.name}</td>
<td>${b.author}</td>
<td>${b.category}</td>
<td>${b.status}</td>
<td>

<button onclick="issueBook(${i})">Issue</button>
<button onclick="returnBook(${i})">Return</button>
<button onclick="deleteBook(${i})">Delete</button>

</td>
</tr>
`

})

let list=document.getElementById("bookList")

if(list) list.innerHTML=table

}

function deleteBook(i){

books.splice(i,1)

localStorage.setItem("books",JSON.stringify(books))

displayBooks()

}

function issueBook(i){

books[i].status="Issued"

localStorage.setItem("books",JSON.stringify(books))

displayBooks()

}

function returnBook(i){

books[i].status="Available"

localStorage.setItem("books",JSON.stringify(books))

displayBooks()

}

function searchBook(){

let value=document.getElementById("search").value.toLowerCase()

let rows=document.querySelectorAll("#bookList tr")

rows.forEach(row=>{

let text=row.innerText.toLowerCase()

row.style.display=text.includes(value)?"":"none"

})

}

displayBooks()
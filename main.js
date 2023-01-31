let form = document.querySelector('#addform');
let itemlist=document.querySelector('#items');
itemlist.addEventListener('click',removeelement);
function removeelement(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure???'))
        {
            let li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}
form.addEventListener('submit',additem);
 function additem(val){
    val.preventDefault();

    let item = document.querySelector("#submition").value;
    let item2 = document.querySelector("#description").value;
    
    //create one element
    let li=document.createElement('li');
    li.className = 'list-group-item';
    let text=document.createTextNode(item+' '+item2);
    li.appendChild(text);
    items.appendChild(li);

    let deletebtn = document.createElement('button');
    deletebtn.className = "btn btn-danger btn-sm float-right delete";
    let deltext = document.createTextNode('X');
    deletebtn.appendChild(deltext);
    li.appendChild(deletebtn)
 }

 let filter = document.querySelector('#filter');
 filter.addEventListener('keyup',filteritem);
 function filteritem(elementvalue){
     let text = elementvalue.target.value.toLowerCase();
     let itemslist = document.getElementsByTagName('li');
     let arrayofitemlist = Array.from(itemslist);
     for(let i=0;i<arrayofitemlist.length;i++)
     {
         if(arrayofitemlist[i].firstChild.textContent.toLowerCase().indexOf(text)!=-1)
         {
             arrayofitemlist[i].style.display = 'block';
         }
         else
         {
             arrayofitemlist[i].style.display = 'none';
         }
     }
 }
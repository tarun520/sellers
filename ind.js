function addtostorage(event)
{
    event.preventDefault();
    let sellingprice=event.target.sellingprice.value;
    let productname=event.target.productname.value;
    let choosecat=event.target.choosecat.value;

    let obj={
        sellingprice,
        productname,
        choosecat
    }
    axios.post('https://crudcrud.com/api/bfa8f8e285a64bc88aab53609dd110f1/validatedata',obj)
    .then((res)=>{
        console.log(res.data)
        addtolist(res.data)
    })
    .catch((err)=>console.log(err))
}
function addtolist(data)
{
    let cat1=document.getElementById('1')
    let cat2=document.getElementById('2')
    let cat3=document.getElementById('3')
    let childele=document.createElement('li')
    childele.id=`${data._id}`;
    childele.innerHTML=`<h6>${data.sellingprice}-${data.productname}-${data.choosecat}</h6>`
    let dele=document.createElement('input')
    dele.type='button'
    dele.value='Delete'
    dele.className='btn btn-primary mx-1'
    dele.onclick=()=>{
        axios.delete(`https://crudcrud.com/api/bfa8f8e285a64bc88aab53609dd110f1/validatedata/${data._id}`)
    .then(
        removechild(`${data._id}`,`${data.choosecat}`)
    )
    .catch(
        (err)=>console.log(err)
    )
    }
    childele.appendChild(dele)
    if(data.choosecat==='Electronics')
    {
        cat1.appendChild(childele)
    }
    else if(data.choosecat==='foods')
    {
        cat2.appendChild(childele)
    }
    else if(data.choosecat==='skincare')
    {
        cat3.appendChild(childele)
    }
}

function removechild(userid,category)
{
    let cat1=document.getElementById('1')
    let cat2=document.getElementById('2')
    let cat3=document.getElementById('3')
    if(category==='Electronics')
    {
        let childele=document.getElementById(userid)
        if(childele)
        {
            cat1.removeChild(childele);
        }
       
    }
    else if(category==='foods')
    {
        
        let childele=document.getElementById(userid)
        if(childele)
        {
            cat2.removeChild(childele);
        }
        
    }
    else if(category==='skincare')
    {
        let childele=document.getElementById(userid)
        if(childele)
        {
            cat3.removeChild(childele);  
        }
        
    }
}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get(`https://crudcrud.com/api/bfa8f8e285a64bc88aab53609dd110f1/validatedata`)
    .then((res)=>{
        for(var i=0;i<res.data.length;i++)
        {
            addtolist(res.data[i])
        }
    })
})
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
    axios.post('https://crudcrud.com/api/06f68e49a63147b88f4731456799820a/validatedata',obj)
    .then((res)=>{
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
    childele.textContent=`${data.sellingprice}-${data.productname}-${data.choosecat}`
    let dele=document.createElement('input')
    dele.type='button'
    dele.value='Delete'
    dele.onclick=()=>{
        axios.delete(`https://crudcrud.com/api/06f68e49a63147b88f4731456799820a/validatedata/${data.id}`)
    .then(
        removechild(`'${data._id}',${data.choosecat}`)
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
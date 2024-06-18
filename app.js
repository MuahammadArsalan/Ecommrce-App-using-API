

let div = document.querySelector('#data-div')



axios('https://fakestoreapi.com/products')

.then((res)=>{
    console.log(res.data);
    res.data.map((items)=>{
div.innerHTML += `
<div class="mt-4">
<div class="card" style="width: 18rem;">
  <img src="${items.image}" width="70px" height="250px" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Category :${items.category}</h5>
    <p class="card-text">Descripton : ${items.title
    }</p>
    <h4 class="card-text">Price : ${items.price
    }</h4>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
</div>
`
    })
})
.catch((err)=>{console.log(err);})



// fetch('https://fakestoreapi.com/products/1')

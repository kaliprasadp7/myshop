const mens_clothing_div = document.getElementById("mens-clothing");
const womens_clothing_div = document.getElementById("Womens-clothing");
const jewellery_div = document.getElementById("jewellery");
const electronics_div = document.getElementById("electronics");

if (!localStorage.getItem('currentUser')) {
  // Redirect user to shop page if accesstoken exists and user is trying to access signup page
  window.location.href = '/';
}

fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => {
  data.forEach((item)=>{
    if (item.category === "men's clothing") {
      mens_clothing_div.innerHTML += `<div class="item">
      <img src="${item.image}" alt="Item" />
      <div class="info">
        <div class="row">
          <div class="price">$${item.price}</div>
          <div class="sized">S,M,L</div>
        </div>
        <div class="colors">
          Colors:
          <div class="row">
            <div class="circle" style="background-color: #000"></div>
            <div class="circle" style="background-color: #4938af"></div>
            <div class="circle" style="background-color: #203d3e"></div>
          </div>
        </div>
        <div class="row">Rating:${item.rating.rate}</div>
      </div>
      <button id="addBtn">Add to Cart</button>
    </div>`;
    }

    if (item.category === "women's clothing") {
      womens_clothing_div.innerHTML += `<div class="item">
      <img src="${item.image}" alt="Item" />
      <div class="info">
        <div class="row">
          <div class="price">$${item.price}</div>
          <div class="sized">S,M,L</div>
        </div>
        <div class="colors">
          Colors:
          <div class="row">
            <div class="circle" style="background-color: #000"></div>
            <div class="circle" style="background-color: #4938af"></div>
            <div class="circle" style="background-color: #203d3e"></div>
          </div>
        </div>
        <div class="row">Rating:${item.rating.rate}</div>
      </div>
      <button id="addBtn">Add to Cart</button>
    </div>`;
    }

    if (item.category === "jewelery") {
      jewellery_div.innerHTML += `<div class="item">
      <img src="${item.image}" alt="Item" />
      <div class="info">
        <div class="row">
          <div class="price">$${item.price}</div>
          <div class="sized">S,M,L</div>
        </div>
        <div class="colors">
          Colors:
          <div class="row">
            <div class="circle" style="background-color: #000"></div>
            <div class="circle" style="background-color: #4938af"></div>
            <div class="circle" style="background-color: #203d3e"></div>
          </div>
        </div>
        <div class="row">Rating:${item.rating.rate}</div>
      </div>
      <button id="addBtn">Add to Cart</button>
    </div>`;
    }

    if (item.category === "electronics") {
      electronics_div.innerHTML += `<div class="item">
      <img src="${item.image}" alt="Item" />
      <div class="info">
        <div class="row">
          <div class="price">$${item.price}</div>
          <div class="sized">S,M,L</div>
        </div>
        <div class="colors">
          Colors:
          <div class="row">
            <div class="circle" style="background-color: #000"></div>
            <div class="circle" style="background-color: #4938af"></div>
            <div class="circle" style="background-color: #203d3e"></div>
          </div>
        </div>
        <div class="row">Rating:${item.rating.rate}</div>
      </div>
      <button id="addBtn">Add to Cart</button>
    </div>`;
    }

  })
})
const filters = document.querySelectorAll(".filter");
const mens_clothing_div = document.getElementById("mens-clothing");
const womens_clothing_div = document.getElementById("Womens-clothing");
const jewellery_div = document.getElementById("jewellery");
const electronics_div = document.getElementById("electronics");

const mens_section = document.getElementById("mens-section");
const womens_section = document.getElementById("womens-section");
const jewellery_section = document.getElementById("jewellery-section");
const electronics_section = document.getElementById("electronics-section");

const search_bar = document.getElementById("search-bar");

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
      <div class="product-name">${item.title}</div>
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
      <div class="product-name">${item.title}</div>
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
      <div class="product-name">${item.title}</div>
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
      <div class="product-name">${item.title}</div>
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

    //filter items by name using search bar
    search_bar.addEventListener("keyup", function() {
      const search_value = this.value.toLowerCase();
    
      // Loop through all items and hide/show based on search value
      const items = document.querySelectorAll(".item");
      items.forEach(item => {
        const title = item.querySelector(".product-name").innerText.toLowerCase();
        if (title.includes(search_value)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });

  })
})

//filtering

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");

    // Show or hide the corresponding sections based on the selected filter
    if (filter.innerText === "All") {
      mens_section.style.display = "block";
      womens_section.style.display = "block";
      jewellery_section.style.display = "block";
      electronics_section.style.display = "block";
    } else if (filter.innerText === "Mens") {
      mens_section.style.display = "block";
      womens_section.style.display = "none";
      jewellery_section.style.display = "none";
      electronics_section.style.display = "none";
    } else if (filter.innerText === "Womens") {
      mens_section.style.display = "none";
      womens_section.style.display = "block";
      jewellery_section.style.display = "none";
      electronics_section.style.display = "none";
    } else if (filter.innerText === "Jewellery") {
      mens_section.style.display = "none";
      womens_section.style.display = "none";
      jewellery_section.style.display = "block";
      electronics_section.style.display = "none";
    } else if (filter.innerText === "Electronics") {
      mens_section.style.display = "none";
      womens_section.style.display = "none";
      jewellery_section.style.display = "none";
      electronics_section.style.display = "block";
    }
  });
});


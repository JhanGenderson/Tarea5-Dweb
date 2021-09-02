var arrProducts = [];

function addProduct(){
    var Name = document.getElementById("pName").value;
    var Price = document.getElementById("pPrice").value;
    var Category = document.getElementById("sProduct").value;
    var Image = document.getElementById("pDocument").files[0].name;

    var objProduct = new Object();
    objProduct.Name = Name;
    objProduct.Price = Price;
    objProduct.Category = Category;
    objProduct.Image = "img/" + Image;

    arrProducts.push(objProduct);

    setProduct()
}

function setProduct(){
    var divProducts = document.getElementById("divProducts");
    divProducts.innerHTML = "";

    for(var i = 0; i < arrProducts.length; i++){
        var Figura = document.createElement("figure");
        var Imagen = document.createElement("img");
        var pArea = document.createElement("p");
        var pName = document.createElement("strong");
        var pPrice = document.createElement("p");
        var Articulo = document.createElement("article");

        Figura.setAttribute("class", "foto-juguetes");
        Figura.appendChild(Imagen);
        Imagen.setAttribute("src", arrProducts[i].Image);

        // pArea.setAttribute("class", "category-producto");
        pArea.innerHTML = arrProducts[i].Category;

        pName.innerHTML = arrProducts[i].Name;

        pPrice.innerHTML = "$" + arrProducts[i].Price + ".00";

        Articulo.setAttribute("class", "productos");
        Articulo.appendChild(Figura);
        Articulo.appendChild(pArea);
        Articulo.appendChild(pName);
        Articulo.appendChild(pPrice);

        divProducts.appendChild(Articulo);
    }
}
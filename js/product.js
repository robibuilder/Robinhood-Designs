        //let productID = 0
        const myUrl = new URL(window.location.href);
        var productType = myUrl.searchParams.get("type");
        var productID = myUrl.searchParams.get("id");

        console.log("type: " + productType);
        console.log("id: " + productID);

        getProductByID(productType, productID);

        //productID = 2

        function getProductByID(type, id){
            var url = "https://robinhood-designs-api.netlify.app/.netlify/functions/app/";
            var batteriesID = type + "/" + id.toString();
            url = url + batteriesID;

            console.log(url);

            fetch(url)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error();
            })
            .then(data => { 
                var text = "Purchase";
                var purchaseLink = text.link(data.link);
                var imagePath = "<img class='img-grid' src='" + data.image + "' alt='telsa'>";

                document.getElementById("title").innerHTML = data.title;
                document.getElementById("price").innerHTML = data.price;
                document.getElementById("link").innerHTML = purchaseLink;
                document.getElementById("description").innerHTML = data.description;
                document.getElementById("image").innerHTML = imagePath;
            })
            .catch((error) => {
                document.getElementById("title").innerHTML = "PRODUCT_TITLE";
                document.getElementById("price").innerHTML = "PRODUCT_PRICE";
                document.getElementById("link").innerHTML = "PRODUCT_LINK";
                document.getElementById("description").innerHTML = "PRODUCT_DESCRIPTION";
                document.getElementById("image").innerHTML = "IMAGE_PATH.HTML";
            })
        }
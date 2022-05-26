        //let productID = 0
        const myUrl = new URL(window.location.href);
        var productType = myUrl.searchParams.get("type");
        var productID = myUrl.searchParams.get("id");

        console.log("type: " + productType);
        console.log("id: " + productID);

        getProductByID(productType, productID);

        //productID = 2

        function getProductByID(type, id){
            //var url = "https://robinhood-designs-api.netlify.app/.netlify/functions/app/";
            var url = "https://priceless-kare-3dd76e.netlify.app/.netlify/functions/app/";

            var batteriesID = type + "/" + id;
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

                console.log("data.title " + data.title)
                console.log("data.price " + data.price)

                document.getElementById("title").innerHTML = data.title;
                document.getElementById("price").innerHTML = data.price;
                document.getElementById("link").innerHTML = purchaseLink;
                document.getElementById("description").innerHTML = data.description;
                document.getElementById("image").innerHTML = imagePath;
            })
            .catch((error) => {
                var text = "Purchase";
                var purchaseLink = text.link("http://jacobrobinett.com");

                document.getElementById("title").innerHTML = "PRODUCT_TITLE";
                document.getElementById("price").innerHTML = "PRODUCT_PRICE";
                document.getElementById("link").innerHTML = purchaseLink;
                document.getElementById("description").innerHTML = "PRODUCT_DESCRIPTION";
                document.getElementById("image").innerHTML = "<img class='img-grid' src='images/hart_battery.png' alt='telsa'>";
            })
        }
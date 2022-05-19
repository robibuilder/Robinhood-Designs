        //document.body.onload = getAllBatteries;
        getAllProducts("featured");

        function getAllProducts(type){
            // prod URL:
            var url = "https://robinhood-designs-api.netlify.app/.netlify/functions/app/" + type;
            // dev URL
            //var url = "https://priceless-kare-3dd76e.netlify.app/.netlify/functions/app/" + type;

            let numProducts = browserCheck();

            fetch(url)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error();
            })
            .then(data => { 
                data.map(product => {
                    var link = "product.html?type=" + product.type + "&id=" + product.id;
                    console.log(link);
                    if (product.active === "true")
                    {
                        for(let i = 0; i < numProducts; i++){
                            addCol(product.image, product.title, product.price, link, type);
                        }
                    }
                })
            })
            .catch((error) => { // TODO: SET ERROR FOR PRODUCT PAGES
                var link = "product.html?type=" + type + "?id=0";
                addCol("images/hart_battery.png", "PRODUCT_TITLE ", "PRODUCT_PRICE", link, "featured");
            })
        }

        // addCol => create html elements that make up a product listing on the "Shop" page
        // i => product.image
        // t => product.title
        // p => product.price
        // l => product.link 
        function addCol(i, t, p, l, c){
            // create the column - lg only
            var col = document.createElement("div");
            col.className = "col-lg-4 col-sm-6";

            var a = document.createElement("a");
            //node = document.createTextNode("")
            a.href = l;

            var img = new Image();
            img.src = i;
            img.className = "img-grid";
            img.alt = "NOTHING TO SEE HERE!";

            // create the title element - h3
            var title = document.createElement("p-1");
            var node = document.createTextNode(t);
            title.appendChild(node);

            // append elements to the column
            a.appendChild(img);
            a.appendChild(title);

            col.appendChild(a);

            // get the row element within the main container & append
            var element = document.getElementById(c);
            element.appendChild(col);
        }

        function browserCheck(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                // true for mobile device
                return 2;
              }else{
                // false for not mobile device
                return 3;
              }
        }

        browserCheck()

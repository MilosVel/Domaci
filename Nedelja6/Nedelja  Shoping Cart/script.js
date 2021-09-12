/**
Zadatak
Treba implementirati simulaciju kupovine.

U kupovini najpre postoje grupe proizvoda (ProductGroup), svaka grupa ima sledeca polja:
    - title (naziv grupe, string koji nije prazan)
    - vat (Value Added Tax ili na srpskom PDV, decimalni broj veci od nule manji od 100
        predstavlja visinu PDV-a izrazenog u procentima koju ima svaki proizvod koji pripada grupi)

Tu su i proizvodi (Product), svaki proizvod karakterise sledece:
    - barCode (Bar kod proizvoda, celobrojna vrednost koja je veca od nule)
    - title (naziv proizvoda, string koji nije prazan)
    - price (decimalna vrednost veca od nule, predstavlja cenu proizvoda BEZ PDV-a!!!!!!)
    - group (polje koje ukazuje na grupu kojoj proizvod pripada)

Prilikom kupovine kreira se korpa (ShoppingCart) koja sadrzi stavke (ShoppingCartItem).
Svaka korpa (ShoppingCart)  u sebi moze da ima vise stavki (ShoppingCartItem - a) i cuva ih u atributu "items".

Svaka stavka korpe (ShoppingCartItem) sadrzi sledece:
    - product (polje koje ukazuje na proizvod)
    - quantity (decimalna vrednost veca od nule, koja ukazuje na kolicinu proizvoda u korpi)

Svaka korpa (ShoppingCart) treba da ima sledecu funkcionalnost:
    - addProduct(product, quantity = 1) - metoda kojom se neki proizvod (product)
        dodaje u korpu za odredjenu kolicinu (quantity). Prilikom dodavanja u korpu, ukoliko proizvod
        nije ranije bio dodat kreira se nova stavka korpe (ShoppingCartItem) i upisuje se kolicina koja se dodaje.
        Ukoliko je proizvod ranije vec dodat u korpu, u stavci na kojoj se nalazi proizvod uvecava se postojeca kolicina za onu koju dodajemo.

Na kraju kupovine odlazi se na kasu (Checkout).
Kasa (Checkout) ima mogucnost da stampa fiskalni racun za korpu kroz sledecu funkcionalnost:
    - printCheck(shoppingCart)
Fiskalni racun se stampa u HTML tabeli koja ima sledeci format (data vam je html struktura sa tabelom samo sa hederom):

*********************************************************************************************
Prod Group	        Product	                Price	        Quantity	    VAT	    Subtotal
Mlecni proizvodi	Mleko	                100	            2	            20	    200
Mlecni proizvodi	Pavlaka	                50	            2	            10	    100
Bezalkoholno pice	Sok od pomorandze 1l	120	            6	            40  	720
Sveze meso	        Juneci but kg	        800	            0.5	            30	    400
Konditori	        Cokolada Milka 300g	    280	            3	            100	    840

VAT/TOTAL	200/2260
*********************************************************************************************

Jedan red u tabeli predstavlja jednu stavku iz korpe.
U koloni "Prod. Group" se upisuje naziv grupe proizvoda.
U koloni "Product" se upisuje naziv proizvoda.
U koloni "Price" upisuje se cena po komadu SA PDV-om!!!
U koloni "Quantity" upisuje se kolicina proizvoda u korpi tj stavci korpe.
U koloni "VAT" upisuje se ukupan porez za unetu kolicinu proizvoda
U kolonu "Subtotal" upisuje se ukupan iznos za unetu kolicinu proizvoda.

Nakon ispisa stavki tabele u tfoot-u tabele ispisuje se ukupan porez i ukupnan iznos za celu korpu, u poslednje dve kolone.


Kreirati dve grupe proizvoda i 4 proizvoda.
Kreirati jednu korpu.
Dodati svaki proizvod u korpu vise puta.
Kreirati kasu i prikazati fiskalni racun.
 */
//



class ProductGroup {
    constructor(titleGroup, vat) {
        this.titleGroup = titleGroup
        this.vat = vat
    }
}

productGroup1 = new ProductGroup('Bela Tehnika', 20)
productGroup2 = new ProductGroup('Prehrambeni Proizvodi', 10)

// console.log(productGroup1)
// console.log(productGroup2)



class Product {
    constructor(barCode, title, price, group) {
        this.barCode = barCode
        this.title = title
        this.price = price
        this.group = group
    }
}

p1 = new Product(123, 'Televizor', 2000, productGroup1)
p2 = new Product(456, 'Laptop', 6000, productGroup1)
p3 = new Product(789, 'Meso', 1000, productGroup1)
p4 = new Product(101112, 'Hleb', 8000, productGroup2)
p5 = new Product(131415, 'Mleko', 4000, productGroup2)

// console.log(p1, p2, p3, p4, p5)



class ShopingCartItem {
    constructor(product, quantity = 1) {
        this.product = product
        this.quantity = quantity
    }
}

scItem1 = new ShopingCartItem(p1, 1)
scItem2 = new ShopingCartItem(p2, 2)
scItem3 = new ShopingCartItem(p3)
scItem4 = new ShopingCartItem(p4, 7)
scItem5 = new ShopingCartItem(p5, 9)

// console.log(scItem1, scItem2, scItem3, scItem4, scItem5)




class ShopingCart {
    constructor() {
        this.items = []
    }
    addProduct(scIte) {
        let scItem = { ...scIte }
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].product == scItem.product) {
                this.items[i].quantity += scItem.quantity
                return
            }
        }
        this.items.push(scItem)
    }
}

shopingCart = new ShopingCart()

shopingCart.addProduct(scItem1)
shopingCart.addProduct(scItem2)

shopingCart.addProduct(scItem2)
shopingCart.addProduct(scItem2)
shopingCart.addProduct(scItem2)

shopingCart.addProduct(scItem3)
shopingCart.addProduct(scItem4)
shopingCart.addProduct(scItem5)


console.log(shopingCart.items)



let tableBody = document.querySelector('.tbody')

class PrintCheckout {
    constructor() {
    }

    static print(a) {
        let ukupnaVrednost = 0
        let ukupniVat = 0
        for (let i = 0; i < shopingCart.items.length; i++) {
            ukupnaVrednost += shopingCart.items[i].product.price * shopingCart.items[i].quantity
            ukupniVat += shopingCart.items[i].product.group.vat

            let tableRow = document.createElement('tr')

            let tableData1 = document.createElement('td')
            tableData1.textContent = shopingCart.items[i].product.group.titleGroup
            let tableData2 = document.createElement('td')
            tableData2.textContent = shopingCart.items[i].product.title
            let tableData3 = document.createElement('td')
            tableData3.textContent = shopingCart.items[i].product.price
            let tableData4 = document.createElement('td')
            tableData4.textContent = shopingCart.items[i].quantity
            let tableData5 = document.createElement('td')
            tableData5.textContent = shopingCart.items[i].product.group.vat
            let tableData6 = document.createElement('td')
            tableData6.textContent = shopingCart.items[i].product.price * shopingCart.items[i].quantity

            tableRow.append(tableData1, tableData2, tableData3, tableData4, tableData5, tableData6)
            tableBody.append(tableRow)
        }
        let tableFooter = document.createElement('tfoot')
        tableFooter.innerHTML = ` VAT / TOTAL : ${ukupnaVrednost} / ${ukupniVat}`

        tableBody.append(tableFooter)
    }
}
PrintCheckout.print(shopingCart)


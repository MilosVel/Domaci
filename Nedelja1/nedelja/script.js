// Data su 4 stringa.
let string1 = "neki prvi string";
let string2 = "neki drugi string koji je i duzi string";
let string3 = "neki treci string koji je dugacak";
let string4 = "neki cetvrti";
//1. Proveriti koji je string najduzi i ispisati samo njega

//2. Ispisati najkraci string koji sadrzi rec "string"

//3. sastaviti sve stringove bez prve reci "neki" osim ako string sadrzi deo recenice "string koji je", takve stringove izostaviti

//SA CASA ZADACI

//1. Na osnovu kolicine i cene artikla ispisati ukupnu cenu
//Kolicina je zadata u gramima
//cena je zadata po kilogramu

//2. Dopuniti 4. zadatak sa casa kolicinom novca, i ispisati racun (ako nema dovoljno novca ispisati poruku)

// RESENJA
// 1. (ovde bi mogao da nastane problem ako su stringovi jednaki)
a = string1.length;
b = string2.length;
c = string3.length;
d = string4.length;

if (a > b && a > c && a > d) {
  console.log(`string1 je najduzi. Njegova duzina je ${a} karaktera`);
} else if (b > a && b > c && b > d) {
  console.log(`string 2 je najduzi i njegova duzina je ${b} karaktera`);
}
else if (c > a && c > b && c > d) {
  console.log(`sting 3 je najduzi i njegova duzina je ${c} karaktera`);
} else {
  console.log(`string4 je najduzi i njegova duzina je ${d} karaktera`);
}
// DRUGI ZADATAK

let e = string1.includes("string") && string1.length;
console.log(e);
let f = string2.includes("string") && string2.length;
console.log(f);
let g = string3.includes("string") && string3.length;
console.log(g);
let h = (string4.includes("string") && string4.length) || 999999999; //nemam bolje resenje od ovog na kraju || 999999999, mozda bi tako trebalo staviti i na ostale varijabe e,f,g za slucaij da se stingovi promene
console.log(h);

if (e < f && e < g && e < h) {
  console.log(
    `sting1 je najmanji i on sadrzi rec \'string'. Duzina stringa1 je ${e}karaktera. Rec string pocinje od ${string1.indexOf("string")} karaktera`
  );
} else if (f < e && f < g && f < h) {
  console.log(
    `string 2 je najmanji i on sadrzi rec \'string. Duzina stringa2 je ${f} karaktera. Rec sting pocinje od${string2.indexOf("string")}karaktera`
  );
} else if (g < f && g < e && g < h) {
  console.log(`${string3}`);
} else {
  console.log(string4);
}
// TRECI ZADATAK
{
  let a = string1.replace("neki", "");
  console.log(a);
  let b = string2.replace("neki", "");
  console.log(b);
  let c = string3.replace("neki", "");
  console.log(c);
  let d = string4.replace("neki", "");
  console.log(d);
  let zbir = "";
  if (!a.includes("string koji je")) {
    zbir += a;
  }
  if (!b.includes("string koji je")) {
    zbir += b;
  }
  if (!c.includes("string koji je")) {
    zbir += c;
  }
  if (!d.includes("string koji je")) {
    zbir += d;
  }
  console.log(zbir);
}

// ZADACI SA CASA
{
  let kolicina_u_gramima = 2200;
  let cena_po_kg = 1000;
  let vrednost = kolicina_u_gramima / 1000 * cena_po_kg;
  console.log(`vrednos je ${vrednost}`);

  // dipuna zadatka sa kolicinom novca

  let kolicina_novca = 2000

  if (kolicina_novca > vrednost) {
    console.log(`Na racunu imate ${kolicina_novca} dinara, a vas racun je ${vrednost} dinara.Na racunu vam ostaje ${kolicina_novca - vrednost} dinara.`);
  } else {
    console.log(`Na racunu nemate dovoljno novca, potrebno vam je jos ${Math.abs(kolicina_novca - vrednost)}`);
  }
}


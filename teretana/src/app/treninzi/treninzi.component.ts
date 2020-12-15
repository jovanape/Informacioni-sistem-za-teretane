import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treninzi',
  templateUrl: './treninzi.component.html',
  styleUrls: ['./treninzi.component.css']
})
export class TreninziComponent implements OnInit {

  public danUnedelji:string;
  public popup:string;
  public mapa:[string, [string, string]][];
  public obrisani: [string, [string, string]][];
  public listaTermina:string[];
  public listaSala:string[];
  public selektovan:[string, [string, string]];

  constructor() {
    this.danUnedelji = "ponedeljak";
    this.popup = "";

    this.mapa = [
      ["ponedeljak",["fitnes", "8:00AM - 9:30AM"] ],  //8, 10, 12, 4
      ["ponedeljak",["boks", "4:00PM - 6:30PM"] ],
      ["ponedeljak",["cross-fit", "10:00AM - 11:30AM"] ],

      ["utorak",["fitnes", "10:00AM - 11:30AM"] ],
      ["utorak",["boks", "8:00AM - 9:30AM"] ],
      ["utorak",["boks", "4:00PM - 6:30PM"] ],

      ["sreda",["fitnes", "10:00AM - 11:30AM"] ],
      ["sreda",["cross-fit", "4:00PM - 6:30PM"] ],

      ["cetvrtak",["fitnes", "10:00AM - 11:30AM"] ],
      ["cetvrtak",["fitnes", "12:00AM - 2:30PM"] ],
      ["cetvrtak",["yoga", "8:00AM - 9:30AM"] ],  
      
      ["petak",["fitnes", "10:00AM - 11:30AM"] ],
      ["petak",["yoga", "8:00AM - 9:30AM"] ],
      ["petak",["cross-fit", "12:00AM - 2:30PM"] ]

    ]; 

    this.listaSala = [
        "Sala1",
        "Sala2",
        "Sala3"
    ];

    this.selektovan = ["prazan", ["", ""]];
    this.obrisani = [];

    this.listaTermina = [];
    for (let index = 0; index < 12; index++) {
      this.listaTermina[index] = "";
    }

    this.popuniTabelu("ponedeljak");
    
   }

  izaberiPonedeljak() {
    this.danUnedelji = "ponedeljak";
    this.popuniTabelu("ponedeljak");
  }

  izaberiUtorak() {
    this.danUnedelji = "utorak";
    this.popuniTabelu("utorak");
  }

  izaberiSredu() {
    this.danUnedelji = "sreda";
    this.popuniTabelu("sreda");
  }

  izaberiCetvrtak() {
    this.danUnedelji = "cetvrtak";
    this.popuniTabelu("cetvrtak");
  }

  izaberiPetak() {
    this.danUnedelji = "petak";
    this.popuniTabelu("petak");
  }

  brisiTrening() {
    this.obrisani.push(this.selektovan);
    this.popuniTabelu(this.danUnedelji);
  }

  nijeSelektovanTermin() {
    return!( this.selektovan[0] === "");
  }

  selektujTermin(pozicija:number) {
    let termin:string = this.listaTermina[pozicija].substr(0, 16);
    let vrsta:string = "";
    if(pozicija < 3) { vrsta = "fitnes";}
    else if(pozicija < 6) { vrsta = "boks";}
    else if(pozicija < 9) { vrsta = "cross-fit";}
    else if(pozicija < 12) { vrsta = "yoga";}
    this.selektovan = [this.danUnedelji, [vrsta, termin]];
    console.log("Selektovan: " + this.selektovan[0] + ", " + this.selektovan[1][0] + ", " + this.selektovan[1][1]);
  }

  jeZakazanTermin() {
    if(this.selektovan[1][1].trim() !== "" ){
      return true;
    } else {
      return false;
    }
  }

  popuniTabelu(dan:string) {
    this.selektovan = ["", ["", ""]];
    this.listaTermina = [];
    for (let index = 0; index < 12; index++) {
      this.listaTermina[index] = "                ";
    }

    for (let i = 0; i < this.mapa.length; i++) {
      console.log("update liste, obrisani: " + this.obrisani.length);
      const entry = this.mapa[i];

      let nadjen = false;

      for (let i = 0; i < this.obrisani.length; i++) {
        if(this.obrisani[i][0] === entry[0]
            && this.obrisani[i][1][0] ===entry[1][0]
            && this.obrisani[i][1][1] ===entry[1][1]) {
              nadjen = true;
              break;
            }
      }

      if(nadjen === true){
        continue;
      }

      if(entry[0] === dan) {
        if(entry[1][1].startsWith("8")){
          if(entry[1][0] === "fitnes") {
            this.listaTermina[0] = entry[1][1];
          } else if(entry[1][0] === "boks") {
            this.listaTermina[3] = entry[1][1];
          } else if(entry[1][0] === "cross-fit") {
            this.listaTermina[6] = entry[1][1];
          } else if(entry[1][0] === "yoga") {
            this.listaTermina[9] = entry[1][1];
          }
        } else if(entry[1][1].startsWith("1")){
          if(entry[1][0] === "fitnes") {
            this.listaTermina[1] = entry[1][1];
          } else if(entry[1][0] === "boks") {
            this.listaTermina[4] = entry[1][1];
          } else if(entry[1][0] === "cross-fit") {
            this.listaTermina[7] = entry[1][1];
          } else if(entry[1][0] === "yoga") {
            this.listaTermina[9] = entry[1][1];
          }
        }  else if(entry[1][1].startsWith("4")) {
          if(entry[1][0] === "fitnes") {
            this.listaTermina[2] = entry[1][1];
          } else if(entry[1][0] === "boks") {
            this.listaTermina[5] = entry[1][1];
          } else if(entry[1][0] === "cross-fit") {
            this.listaTermina[8] = entry[1][1];
          } else if(entry[1][0] === "yoga") {
            this.listaTermina[10] = entry[1][1];
          }

        }
      }
      
    }

  }

  
  prikaziNoviTrening() {
    if(this.popup !== "novi") {
      this.popup = "novi"
    } else {
      this.popup = "";
    }
  }
  prikaziMenjajTrening() {
    if(this.popup !== "menjaj") {
      this.popup = "menjaj"
    } else {
      this.popup = "";
    }
  }
  prikaziSala() {
    if(this.popup !== "sala") {
      this.popup = "sala"
    } else {
      this.popup = "";
    }
  }
  prikaziKorisnici() {
    if(this.popup !== "korisnik") {
      this.popup = "korisnik"
    } else {
      this.popup = "";
    }
  }

  jePrikaziNoviTrening() {
    return this.popup === "novi";
  }
  jePrikaziMenjajTrening() {
    return this.popup === "menjaj";
  }
  jePrikaziSala() {
    return this.popup === "sala";
  }
  jePrikaziKorisnici() {
    return this.popup === "korisnik";
  }

  ngOnInit(): void {
  }

}

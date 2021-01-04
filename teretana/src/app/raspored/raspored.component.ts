import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback } from '../model/feedback.model';
import { Korisnici } from '../model/korisnici.model';
import { Lokacija } from '../model/lokacija.model';
import { Sala } from '../model/sala.model';
import { SalaInfo } from '../model/salaInfo.model';
import { TrenerovTrening } from '../model/trenerov.trening.model';
import { Trening } from '../model/trening.info.model';
import { ZakazaniTrening } from '../model/zakazani.trening.model';
import { KorisnikService } from '../services/korisnik.service';
import { TreningService } from '../services/trening.service';

@Component({
  selector: 'app-raspored',
  templateUrl: './raspored.component.html',
  styleUrls: ['./raspored.component.css']
})
export class RasporedComponent implements OnInit {
  public tipUlogovanog:string;

  public danUnedelji:string;
  public popup:string;
  public mapa:[string, [string, string]][];
  public obrisani: [string, [string, string]][];
  public listaTermina:string[];
  public listaSala:string[];
  public listaKorisnika:string[];
  public selektovan:[string, [string, string]];

  public rasporedTrenera: TrenerovTrening[];
  public listaSala1: SalaInfo[];
  public selektovaniTrening!: TrenerovTrening;

  public azurirajSaluForma: FormGroup;
  public azurirajBrojKorisnikaForma: FormGroup;
  public noviTreningForma: FormGroup;
  public azurirajVremeForma: FormGroup;

  public klijentPrijavljenNaPersonalni:string = "Petar Petrović";
  //public klijentPrijavljenNaPersonalni:string = ""; /* oznacava da je termin slobodan */

  constructor(private korisnikService: KorisnikService,
    private treningService: TreningService,
    private formBuilder: FormBuilder) {

      this.azurirajSaluForma = this.formBuilder.group({
        izaberiSalu: ['', [Validators.required]]
      });
      this.azurirajBrojKorisnikaForma = this.formBuilder.group({
        brojKorisnika: ['', [Validators.required]]
      });

      this.noviTreningForma = this.formBuilder.group({
        noviDan: ['', [Validators.required]],
        pocetakTreninga: ['', [Validators.required]],
        zavrsetakTreninga: ['', [Validators.required]],
        noviBrojKorisnika: ['', [Validators.required]],
        novaSala: ['', [Validators.required]]
      });

      this.azurirajVremeForma = this.formBuilder.group({
        azurirajDan: ['', [Validators.required]],
        azurirajPocetak: ['', [Validators.required]],
        azurirajKraj: ['', [Validators.required]]
      });

      this.rasporedTrenera = [];
      this.selektovaniTrening = new TrenerovTrening(0, new ZakazaniTrening(new Trening(0,0,"", "", 0), new Sala(0,"", 0,0)));
      this.prikaziRasporedTrenera();


    this.tipUlogovanog = korisnikService.tipUlogovanog;
    
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

    this.listaSala1 = [];
    this.listaSala = [
      "Teretana Zevs : Sala Sava, Adresa: Jurija Gagarina 100, radno vreme: 24h",
      "Teretana Zevs : Sala Dunav, Adresa: Jurija Gagarina 100, radno vreme: 24h",
      "Teretana Zevs : Sala Tisa, Adresa: Jurija Gagarina 100, radno vreme: 24h",
      "Teretana Zevs : Sala Morava, Adresa: Jurija Gagarina 100, radno vreme: 24h",
      "Teretana Zevs : Sala Jasenica, Adresa: Jurija Gagarina 100, radno vreme: 24h"
    ];
    this.inicijalizacijaSala();
    this.saleToString();

    this.listaKorisnika = [];
    this.inicijalizacijaListeKorisnika();


    this.selektovan = ["prazan", ["", ""]];
    this.obrisani = [];

    this.listaTermina = [];
    for (let index = 0; index < 12; index++) {
      this.listaTermina[index] = "";
    }

    this.popuniTabelu("ponedeljak");
    
   }

  // ------------------------------------ Dan u nedelji BEGIN ------------------------------------

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

  // ------------------------------------ Dan u nedelji END ------------------------------------
  // ------------------------------------ Selektovani trening BEGIN ------------------------------------

  nijeSelektovanTermin() {
    return!( this.selektovan[0] === "");
    //return this.selektovaniTrening.capacity === 0;
  }

  selektujTermin(pozicija:number) {
    let termin:string = this.listaTermina[pozicija];
    let vrsta:string = "";
    let idTreninga = 0;
    if(pozicija < 3) { vrsta = "fitnes"; idTreninga = 1;}
    else if(pozicija < 6) { vrsta = "boks"; idTreninga = 2;}
    else if(pozicija < 9) { vrsta = "cross-fit"; idTreninga = 3;}
    else if(pozicija < 12) { vrsta = "yoga"; idTreninga = 4;}
    this.selektovan = [this.danUnedelji, [vrsta, termin]];
    let pom: TrenerovTrening | undefined = this.rasporedTrenera.find(element => element.scheduledGroupTraining.scheduledGroupTraining.id === idTreninga);
    this.selektovaniTrening = pom !== undefined ? pom : new TrenerovTrening(0, new ZakazaniTrening(new Trening(0,0,"", "", 0), new Sala(0,"", 0,0)));
    console.log("Selektovan: " + this.selektovan[0] + ", " + this.selektovan[1][0] + ", " + this.selektovan[1][1]);
  }

  jeZakazanTermin() {
    if(this.selektovan[1][1].trim() !== "" ){ //selektovanTermin.capacity === 0
      return true;
    } else {
      return false;
    }
  }
   // ------------------------------------ Selektovani trening END ------------------------------------

  popuniTabelu(dan:string) {
    this.selektovan = ["", ["", ""]];
    this.selektovaniTrening = new TrenerovTrening(0, new ZakazaniTrening(new Trening(0,0,"", "", 0), new Sala(0,"", 0,0)));
    this.listaTermina = [];
    for (let index = 0; index < 12; index++) {
      this.listaTermina[index] = "                ";
    }

    //Unosimo podatke iz mape
    for (let i = 0; i < this.mapa.length; i++) {
      const entry = this.mapa[i];

      let nadjen = false;

      for (let j = 0; j < this.obrisani.length; j++) {
        if(this.obrisani[j][0] === entry[0]
            && this.obrisani[j][1][0] ===entry[1][0]
            && this.obrisani[j][1][1] ===entry[1][1]) {
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

    //Unosimo iz baze trenera
    console.log("rasporedTrenera.length: " + this.rasporedTrenera.length);
    for(let i = 0; i < this.rasporedTrenera.length; i++) {
      const entry = this.rasporedTrenera[i]; 

      //alternativa za datum je [ npm install moment ] i [ import * as moment from 'moment';]
      var datumPocetka = new Date(entry.scheduledGroupTraining.scheduledGroupTraining.startTime);  
      var datumKraja = new Date(entry.scheduledGroupTraining.scheduledGroupTraining.endTime);
      var danNedelje = this.vratiDanUNedelji(datumPocetka.getDay());
      var trajanje:string = datumPocetka.getHours() + ":" + datumPocetka.getMinutes() + " - " + datumKraja.getHours() + ":" + datumKraja.getMinutes();
      var tipTreninga: number = entry.scheduledGroupTraining.scheduledGroupTraining.id;
      console.log("Datumi: danNedelje: " + danNedelje + ", trajanje: " + trajanje );

     if(dan === danNedelje) {
        var indeks:number = 4;
        if(datumPocetka.getHours() < 11){
          switch(tipTreninga) { 
            case 1: {     //fitnes
              indeks = 0;
              break; 
            }
            case 2: {     // boks
              indeks = 3;
              break; 
            }
            case 3: {     //cross-fit
              indeks = 6;
              break; 
            }
            default: {     // yoga
              indeks = 9;
              break; 
            }
          }
        } else if(datumPocetka.getHours() < 3){
          switch(tipTreninga) { 
            case 1: {     //fitnes
              indeks = 1;
              break; 
            }
            case 2: {     // boks
              indeks = 4;
              break; 
            }
            case 3: {     //cross-fit
              indeks = 7;
              break; 
            }
            default: {     // yoga
              indeks = 10;
              break; 
            }
          }
        } else {    //popodnevni termin
          switch(tipTreninga) { 
            case 1: {     //fitnes
              indeks = 2;
              break; 
            }
            case 2: {     // boks
              indeks = 5;
              break; 
            }
            case 3: {     //cross-fit
              indeks = 8;
              break; 
            }
            default: {     // yoga
              indeks = 11;
              break; 
            }
          }
        }

        this.listaTermina[indeks] = trajanje;
    
      }
    }
  }

  vratiDanUNedelji(dan: number): string {
    var danUnedelji: string = "nedelja";
    switch(dan) { 
      case 1: { 
         danUnedelji = "ponedeljak"; 
         break; 
      } 
      case 2: { 
        danUnedelji = "utorak"; 
        break; 
      }      
      case 3: { 
        danUnedelji = "sreda"; 
        break; 
      }       
      case 4: { 
        danUnedelji = "cetvrtak"; 
          break; 
      }       
      case 5: { 
        danUnedelji = "petak"; 
        break; 
      }       
      case 6: {
        danUnedelji = "subota"; 
        break; 
      }       
      case 0: { 
        danUnedelji = "nedelja";  
        break; 
    } 
   }
   return danUnedelji;

  }
  
  // ------------------------------------ Treninzi baza BEGIN ------------------------------------

  prikaziRasporedTrenera() {
    const idZaposlenog:number = this.korisnikService.vratiIdZaposlenog();

    const trainings = this.treningService.getTrainingsForTrainer(idZaposlenog)
      .subscribe(raspored => {
        if(raspored.length > 0) {
          for(const r of raspored) {
            console.log(r);
            this.rasporedTrenera.push(r);
          }
        }
      });

    //this.popuniTabelu("ponedeljak");
  }

  zakaziTrening() {
    if (!this.noviTreningForma.valid) {
      return;
    }

    const idZaposlenog:number = this.korisnikService.vratiIdZaposlenog();
    const data = this.noviTreningForma.value;
    let tekst:number = Number(data.novaSala.substr(0,1));

    //Ovako jer je dosadan kompajler, inace nikad nije undefined
    let sel: SalaInfo | undefined = this.listaSala1.find(salai=> salai.idSale === tekst);
    let selektovanaSala: SalaInfo = sel !== undefined ? sel : new SalaInfo(0, "", "", "", "", 0, 0, "", 0);
    
    //TODO napravi lepo datume
    var zakazano:ZakazaniTrening = new ZakazaniTrening(
      new Trening(10, selektovanaSala.idSale, data.pocetakTreninga, data.zavrsetakTreninga, 1),
      new Sala(selektovanaSala.idSale, selektovanaSala.nameSale, 1, selektovanaSala.capacitySale)
    );
    var noviTrening: TrenerovTrening = new TrenerovTrening(
      selektovanaSala.capacitySale,
      zakazano
    );

    this.treningService.addNewTraining(idZaposlenog, 10, noviTrening)
    .subscribe(abl=>{
      this.rasporedTrenera.push(noviTrening);
      this.popuniTabelu(this.danUnedelji);
    });
  }

  // TODO napravi da se poziva samo jedan od ova dva, zavisno koji je selektovan
  brisiTrening() {
    this.obrisani.push(this.selektovan);

    //nadji trening u listi koji odgovara selektovanom
    if(this.selektovaniTrening.capacity !== 0) {
      this.obrisiTreningIzBaze();
      this.rasporedTrenera.splice(this.rasporedTrenera.indexOf(this.selektovaniTrening), 1);
    }
    
    this.popuniTabelu(this.danUnedelji);
  }
  obrisiTreningIzBaze() {
    const idZaposlenog:number = this.korisnikService.vratiIdZaposlenog();
    this.treningService.deleteTraining(idZaposlenog, 10, this.selektovaniTrening)
      .subscribe(abl =>{
        this.rasporedTrenera.splice( this.rasporedTrenera.indexOf(this.selektovaniTrening), 1 );
      });
  }

  // ------------------------------------ Treninzi baza END ------------------------------------
  // ------------------------------------ Inicijalizacije listi BEGIN ------------------------------------

  inicijalizacijaListeKorisnika() {
    var sub2 = this.treningService.getRegistratedToTraining(1) //this.selektovaniTrening.scheduledGroupTraining.scheduledGroupTraining.id
      .subscribe((korisnici:Korisnici[]) => {
        for(const korisnik of korisnici) {
          const niska = korisnik.name + " " + korisnik.lastName;
          this.listaKorisnika.push(niska);
        }
      });

  }

  inicijalizacijaSala() {

    // 1) pokupimo sve lokacije
    let lokac: Lokacija[] = [];
    var sub = this.treningService.getLocations()
      .subscribe((lokacije:Lokacija[]) =>{
        for(const lok of lokacije) {
          lokac.push(lok);
        }
    });

    console.log("Inicijalizacija sala, lokac.length: " + lokac.length);

    // 2) izlistamo sve sale na lokacijama
    for(const lok of lokac) {
      let sub1 = this.treningService.getSala(lok.id)
      .subscribe((sale: Sala[]) =>{
        for(const sala of sale) {
          this.listaSala1.push( new SalaInfo(
              lok.id,
              lok.name,
              lok.address,
              lok.city,
              lok.workingHour,
              lok.phoneNumber,
              sala.id,
              sala.name,
              sala.capacity
          ));
          console.log("Jos jedan da se doda u listu");
        }
      });
    }
  }

  saleToString() {
    for(const sala of this.listaSala1) {
      let niska:string = sala.idSale + ") " + sala.nameSale + " - " + sala.name + ", " + sala.address + ": " + sala.workingHour;
      this.listaSala.push(niska);
    }
  }

  // ------------------------------------ Inicijalizacije listi END ------------------------------------
  // ------------------------------------ Filtriranje popup-ova BEGIN ------------------------------------

  prikaziNoviTrening() {
    if(this.popup !== "novi") {
      this.popup = "novi"
    } else {
      this.popup = "";
    }
  }
  prikaziNoviPersonalniTrening() {
    if(this.popup !== "noviPersonalni") {
      this.popup = "noviPersonalni"
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
  listajLjude() {
    if(this.popup !== "ljudi") {
      this.popup = "ljudi";
    } else {
      this.popup = "";
    }
  }

  prikaziPrijavljenogKorisnika(){
    if(this.popup !== "prijavljeniKorsinik") {
      this.popup = "prijavljeniKorsinik"
    } else {
      this.popup = "";
    }
  }

  // ------------------------------------ Filtriranje popup-ova END ------------------------------------
  // ------------------------------------ PROVEREEEE BEGIN ------------------------------------

  jePrikaziNoviTrening() {
    return this.popup === "novi";
  }
  jePrikaziNoviPersonalniTrening() {
    return this.popup === "noviPersonalni";
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
  jeListanjeLjudi() {
    return this.popup === "ljudi";
  }
  jePrikazivanjePrijavljenogKorisnika() {
    return this.popup === "prijavljeniKorsinik";
  }

  jeSlobodanPersonalniTermin(){
    return this.klijentPrijavljenNaPersonalni === "";
  }
  jePopunjenPersonalniTermin(){
    return this.klijentPrijavljenNaPersonalni !== "";
  }

  /* Odnosi se na grupnog trenera */
  jeUlogovanTrener() {
    return this.korisnikService.jeUlogovanTrener();
  }
  jeUlogovanPersonalniTrener() {
    return this.korisnikService.jeUlogovanPersonalniTrener();
  }

  // ------------------------------------ PROVEREEEE END ------------------------------------
  // ------------------------------------ Update BEGIN ------------------------------------


  public azuriranjeSale(): void {
    if (!this.azurirajSaluForma.valid) {
      return;
    }

    const data = this.azurirajSaluForma.value;
    let tekst:number = Number(data.izaberiSalu.substr(0,1));

    let selektovanaSala: SalaInfo | undefined = this.listaSala1.find(salai=> salai.idSale === tekst);
    if(selektovanaSala === undefined){
      //treba sira pretraga da se vrsi, mada nije hitno
      //ovde se azurira i id lokacije
    } else {
      this.selektovaniTrening.capacity = selektovanaSala.capacitySale;
      this.selektovaniTrening.scheduledGroupTraining.hall.capacity = selektovanaSala.capacitySale;
      this.selektovaniTrening.scheduledGroupTraining.hall.id = selektovanaSala.idSale;
      this.selektovaniTrening.scheduledGroupTraining.hall.name = selektovanaSala.nameSale;
    }
    
    const idZaposlenog:number = this.korisnikService.vratiIdZaposlenog();

    this.treningService
      .updateTraining(idZaposlenog, this.selektovaniTrening.scheduledGroupTraining.scheduledGroupTraining.id, this.selektovaniTrening);
    
      this.popuniTabelu(this.danUnedelji);
  }

  azuriranjeKorisnika() {
    if (!this.azurirajBrojKorisnikaForma.valid) {
      return;
    }

    const data = this.azurirajBrojKorisnikaForma.value;
    let noviBroj:number = Number(data.brojKorisnika);

    this.selektovaniTrening.capacity = noviBroj;
    const idZaposlenog:number = this.korisnikService.vratiIdZaposlenog();

    this.treningService
      .updateTraining(idZaposlenog, this.selektovaniTrening.scheduledGroupTraining.scheduledGroupTraining.id, this.selektovaniTrening);
    
    this.popuniTabelu(this.danUnedelji);
  }

  azuriranjeVremenaTreninga() {
    this.azurirajVremeForma = this.formBuilder.group({
      azurirajDan: ['', [Validators.required]],
      azurirajPocetak: ['', [Validators.required]],
      azurirajKraj: ['', [Validators.required]]
    });

    if (!this.azurirajVremeForma.valid) {
      return;
    }

    const data = this.azurirajVremeForma.value;
    const idZaposlenog:number = this.korisnikService.vratiIdZaposlenog();

    //treba komplikovanije cuvanje , da ukljucuje i dan, osim vremena
    this.selektovaniTrening.scheduledGroupTraining.scheduledGroupTraining.startTime = data.azurirajPocetak;
    this.selektovaniTrening.scheduledGroupTraining.scheduledGroupTraining.endTime = data.azurirajKraj;

    
    this.treningService
      .updateTraining(idZaposlenog, this.selektovaniTrening.scheduledGroupTraining.scheduledGroupTraining.id, this.selektovaniTrening);
    
    this.popuniTabelu(this.danUnedelji);

  }
  // ------------------------------------ Update END ------------------------------------


  ngOnInit(): void {
  }

}

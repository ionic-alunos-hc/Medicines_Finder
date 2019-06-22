import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Brufen",
    "profilePic": "assets/imgs/brufen.jpg",
    "about": "Anti-Inflamatório",
    "Farmacia1": "25",
    "Farmacia2": "25", 
    "Farmacia3": "50",
    "Farmacia4": "45",
    "Farmacia5": "0", 
    "Farmacia6": "5"
  };


  constructor() {
    let items = [
      {
        "name": "Benuron",
        "profilePic": "assets/imgs/benuron.jpg",
        "about": "Ben-u-ron contém paracetamol como substância activa, que actua aliviando a dor (analgésico) e diminuindo a febre (antipirético).",
        "Farmacia1": "30",
        "Farmacia2": "20", 
        "Farmacia3": "15",
        "Farmacia4": "45",
        "Farmacia5": "0", 
        "Farmacia6": "5"
      },
      {
        "name": "Nolotil",
        "profilePic": "assets/imgs/nolotil.jpg",
        "about": "",
        "Farmacia1": "45",
        "Farmacia2": "0", 
        "Farmacia3": "5",
        "Farmacia4": "45",
        "Farmacia5": "0", 
        "Farmacia6": "5"
      },
      {
        "name": "Valdispert",
        "profilePic": "assets/imgs/valdispert.jpg",
        "about": "Medicamento indicado em casos temporários de ansiedade ligeira e dificuldade em adormecer.",
        "Farmacia1": "0",
        "Farmacia2": "0", 
        "Farmacia3": "1",
        "Farmacia4": "5",
        "Farmacia5": "0", 
        "Farmacia6": "5"
      },
      {
        "name": "Brufen",
        "profilePic": "assets/imgs/brufen.jpg",
        "about": "Anti-Inflamatório",
        "Farmacia1": "25",
        "Farmacia2": "25", 
        "Farmacia3": "50",
        "Farmacia4": "45",
        "Farmacia5": "0", 
        "Farmacia6": "5"
      },
      {
        "name": "Griponal",
        "profilePic": "assets/imgs/griponal.jpg",
        "about": "Medicamento indicado no alívio dos sintomas de gripe e constipações.",
        "Farmacia1": "7",
        "Farmacia2": "2", 
        "Farmacia3": "0",
        "Farmacia4": "5",
        "Farmacia5": "2", 
        "Farmacia6": "3"
      },
      {
        "name": "Bepanthene",
        "profilePic": "assets/imgs/bepanthene.jpg",
        "about": "Medicamento indicado na cicatrização de feridas e queimaduras superficiais e, também na dermatite da fralda (\"assadura\" do rabinho).",
        "Farmacia1": "5",
        "Farmacia2": "10", 
        "Farmacia3": "5",
        "Farmacia4": "9",
        "Farmacia5": "1", 
        "Farmacia6": "1" 
      },
      {
        "name": "Aspirina",
        "profilePic": "assets/imgs/aspirina.jpg",
        "about": "Aspirina Microactive é um e antifebril indicado no tratamento de dores ligeiras a moderadas, tais como dores de cabeça, dores de dentes, dores musculares e dores menstruais, e de estados febris. Ácido acetilsalicílico (500 mg)",
        "Farmacia1": "5",
        "Farmacia2": "10", 
        "Farmacia3": "5",
        "Farmacia4": "9",
        "Farmacia5": "0", 
        "Farmacia6": "8"
      },
      {
        "name": "Sinomarin Criança Água Mar ",
        "profilePic": "assets/imgs/sinomarin.jpg",
        "about": "Solução de água do mar hipertónica que alivia o congestionamento nasal, enquanto limpa e humidifica o nariz. Indicado para crianças e bebés.",
        "Farmacia1": "5",
        "Farmacia2": "10", 
        "Farmacia3": "5",
        "Farmacia4": "9",
        "Farmacia5": "1", 
        "Farmacia6": "12"
      },
      {
        "name": "Mebocaina",
        "profilePic": "assets/imgs/mebocaina.jpg",
        "about": "Medicamento indicado no alívio das dores de garganta e rouquidão.",
        "Farmacia1": "5",
        "Farmacia2": "10", 
        "Farmacia3": "5",
        "Farmacia4": "7",
        "Farmacia5": "1", 
        "Farmacia6": "8"
      },
      {
        "name": "Voltaren Emulgel",
        "profilePic": "assets/imgs/voltaren.jpg",
        "about": "Medicamento indicado no alívio das dores musculares ligeiras a moderadas e dores pós-traumáticas.",
        "Farmacia1": "5",
        "Farmacia2": "10", 
        "Farmacia3": "5",
        "Farmacia4": "1",
        "Farmacia5": "1", 
        "Farmacia6": "2"
      }



    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}

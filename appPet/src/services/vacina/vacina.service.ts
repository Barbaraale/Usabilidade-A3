import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {
  private storage: Storage | null = null;

  constructor(private armazenamento: Storage, private datepipe: DatePipe) {
    this.init();
  }

  async init() {
    const s = await this.armazenamento.create();
    this.storage = s;
  }

  public insert(vacina: Vacina) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, vacina);
  }

  public update(key: string, vacina: Vacina) {
    return this.save(key, vacina);
  }

  private save(key: string, vacina: Vacina) {
    return this.storage.set(key, vacina);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public getAll() {
    let vacinas: VacinaList[] = [];
    return this.storage.forEach((value: Vacina, key: string) => {
      let v = new VacinaList();
      v.key = key;
      v.vacina = value;
      vacinas.push(v);
    })
      .then(() => {
        return Promise.resolve(vacinas);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export class Vacina {
  nome: string;
  data: Date;
  proxima: Date;
  tipo: string;
}

export class VacinaList {
  key: string;
  vacina: Vacina;
}

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MedicacaoService {
  private storage2: Storage | null = null;

  constructor(private armazenamento2: Storage, private datepipe: DatePipe) {
    this.init();
  }

  //criando o storage
  async init() {
    const s2 = await this.armazenamento2.create();
    this.storage2 = s2;
  }

  public insert(medicacao: Medicacao) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, medicacao);
  }

  public update(key: string, medicacao: Medicacao) {
    return this.save(key, medicacao);
  }

  private save(key: string, medicacao: Medicacao) {
    return this.storage2.set(key, medicacao);
  }

  public remove(key: string) {
    return this.storage2.remove(key);
  }

  public getAll() {
    let medicacoes: MedicacaoList[] = [];
    return this.storage2.forEach((value: Medicacao, key: string) => {
      let m = new MedicacaoList();
      m.key = key;
      m.medicacao = value;
      medicacoes.push(m);
    })
      .then(() => {
        return Promise.resolve(medicacoes);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export class Medicacao {
  nomeMedicacao: string;
  dataMedicacao: string;
  proximaMedicacao: string;
}

export class MedicacaoList {
  key: string;
  medicacao: Medicacao;
}

import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { Vacina, VacinaService } from 'src/services/vacina/vacina.service';

@Component({
  selector: 'app-editar-vacinas',
  templateUrl: './editar-vacinas.page.html',
  styleUrls: ['./editar-vacinas.page.scss'],
  providers: [NavParams]
})

export class EditarVacinasPage {
  model: Vacina;
  key: string;

  constructor(public nav: NavController, public navParams: NavParams, private vacinaService: VacinaService, private toast: ToastController) {
    if (this.navParams.data.vacina && this.navParams.data.key) {
      this.model = this.navParams.data.vacina;
      this.key =  this.navParams.data.key;
    } else {
      this.model = new Vacina();
    }
  }

  save() {
    this.saveVacina()
      .then(async () => {
        (await this.toast.create({ message: 'Vacina salva.', duration: 3000, position: 'bottom' })).present();
        this.nav.navigateForward('/tabs/vacinas');
      })
      .catch(async () => {
        (await this.toast.create({ message: 'Erro ao salvar a vacina.', duration: 3000, position: 'bottom' })).present();
      });
  }

  private saveVacina() {
    if (this.key) {
      return this.vacinaService.update(this.key, this.model);
    } else {
      return this.vacinaService.insert(this.model);
    }
  }

  cancel() {
    this.nav.navigateForward('/tabs/vacinas');
  }
}

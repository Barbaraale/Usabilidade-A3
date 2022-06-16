import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public router: Router, public nav: NavController, public navParams: NavParams, private vacinaService: VacinaService, private toast: ToastController) {
    if (router.getCurrentNavigation().extras.state) {
      this.model = this.router.getCurrentNavigation().extras.state.vacina
      this.key = this.router.getCurrentNavigation().extras.state.key
    } else {
      this.model = new Vacina();
    }
  }

  save() {
    this.saveVacina()
      .then(async () => {
        (await this.toast.create({ message: 'Anotação salva.', duration: 2000, position: 'bottom' })).present();
        this.nav.navigateForward('vacinas');
      })
      .catch(async () => {
        (await this.toast.create({ message: 'Erro ao salvar a anotação.', duration: 2000, position: 'bottom' })).present();
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
    this.nav.navigateForward('vacinas');
  }
}

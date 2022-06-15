import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { VacinaList, VacinaService } from 'src/services/vacina/vacina.service';

@Component({
  selector: 'app-vacinas',
  templateUrl: './vacinas.page.html',
  styleUrls: ['./vacinas.page.scss'],
})
export class VacinasPage {
  vacinas: VacinaList[];

  constructor(public nav: NavController, private vacinaService: VacinaService, private toast: ToastController) { }

  ionViewDidEnter() {
    this.vacinaService.getAll()
      .then((result) => {
        this.vacinas = result;
      });
  }

  addVacina() {
    this.nav.navigateForward('editar-vacinas');
  }

  // editarVacina(item: VacinaList) {
  //   this.nav.push('editar-vacinas', { key: item.key, vacina: item.vacina });
  // }

  removerVacina(item: VacinaList) {
    this.vacinaService.remove(item.key)
      .then(async () => {
        // Removendo do array de items
        var index = this.vacinas.indexOf(item);
        this.vacinas.splice(index, 1);
        (await this.toast.create({ message: 'Vacina removida.', duration: 3000, position: 'bottom' })).present();
      })
  }

  changePage(page){
    this.nav.navigateForward(page);
  }

}

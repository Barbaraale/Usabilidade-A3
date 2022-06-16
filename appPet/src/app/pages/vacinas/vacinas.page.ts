import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { VacinaList, VacinaService } from 'src/services/vacina/vacina.service';

@Component({
  selector: 'app-vacinas',
  templateUrl: './vacinas.page.html',
  styleUrls: ['./vacinas.page.scss'],
})
export class VacinasPage {
  vacinas: VacinaList[];

  constructor(private router: Router, public nav: NavController, private vacinaService: VacinaService, private toast: ToastController) { }

  ionViewDidEnter() {
    this.vacinaService.getAll()
      .then((result) => {
        this.vacinas = result;
      });
  }

  addVacina() {
    this.nav.navigateForward('editar-vacinas');
  }

  editarVacina(item: VacinaList) {
    this.router.navigate(['editar-vacinas'],{ state : {key: item.key, vacina: item.vacina}})
  }

  removerVacina(item: VacinaList) {
    this.vacinaService.remove(item.key)
      .then(async () => {
        var index = this.vacinas.indexOf(item);
        this.vacinas.splice(index, 1);
        (await this.toast.create({ message: 'Vacina removida.', duration: 3000, position: 'bottom' })).present();
      })
  }

  changePage(page){
    this.nav.navigateForward(page);
  }

}

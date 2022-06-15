import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { MedicacaoList, MedicacaoService } from 'src/services/medicacao/medicacao.service';

@Component({
  selector: 'app-medicacoes',
  templateUrl: './medicacoes.page.html',
  styleUrls: ['./medicacoes.page.scss'],
})
export class MedicacoesPage {
  medicacoes: MedicacaoList[];

  constructor(private router: Router, public nav: NavController, private medicacaoService: MedicacaoService, private toast: ToastController) { }

  ionViewDidEnter() {
    this.medicacaoService.getAll()
      .then((result) => {
        this.medicacoes = result;
      });
  }

  addMedicacao() {
    this.nav.navigateForward('editar-medicacoes');
  }

  editarMedicacao(item: MedicacaoList) {
    this.router.navigate(['editar-medicacoes'],{ state : {key: item.key, medicacao: item.medicacao}})
  }

  removerMedicacao(item: MedicacaoList) {
    this.medicacaoService.remove(item.key)
      .then(async () => {
        // Removendo do array de items
        var index = this.medicacoes.indexOf(item);
        this.medicacoes.splice(index, 1);
        (await this.toast.create({ message: 'Medicação removida.', duration: 3000, position: 'bottom' })).present();
      })
  }

  changePage(page){
    this.nav.navigateForward(page);
  }
}

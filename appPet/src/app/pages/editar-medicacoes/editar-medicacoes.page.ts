import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { Medicacao, MedicacaoService } from 'src/services/medicacao/medicacao.service';

@Component({
  selector: 'app-editar-medicacoes',
  templateUrl: './editar-medicacoes.page.html',
  styleUrls: ['./editar-medicacoes.page.scss'],
  providers: [NavParams]
})
export class EditarMedicacoesPage {
  model: Medicacao;
  key: string;

  constructor(public router: Router, public nav: NavController, public navParams: NavParams, private medicacaoService: MedicacaoService, private toast: ToastController) {
    if (router.getCurrentNavigation().extras.state) {
      this.model = this.router.getCurrentNavigation().extras.state.medicacao
      this.key = this.router.getCurrentNavigation().extras.state.key
    } else {
      this.model = new Medicacao();
    }
  }

  save() {
    this.saveMedicacao()
      .then(async () => {
        (await this.toast.create({ message: 'Medicação salva.', duration: 3000, position: 'bottom' })).present();
        this.nav.navigateForward('/tabs/medicacoes');
      })
      .catch(async () => {
        (await this.toast.create({ message: 'Erro ao salvar a medicação.', duration: 3000, position: 'bottom' })).present();
      });
  }

  private saveMedicacao() {
    if (this.key) {
      return this.medicacaoService.update(this.key, this.model);
    } else {
      return this.medicacaoService.insert(this.model);
    }
  }

  cancel() {
    this.nav.navigateForward('/tabs/medicacoes');
  }
}

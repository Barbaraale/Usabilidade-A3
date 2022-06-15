import { Component } from '@angular/core';
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

  constructor(public nav: NavController, public navParams: NavParams, private medicacaoService: MedicacaoService, private toast: ToastController) {
    if (this.navParams.data.medicacao && this.navParams.data.key) {
      this.model = this.navParams.data.medicacao;
      this.key =  this.navParams.data.key;
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

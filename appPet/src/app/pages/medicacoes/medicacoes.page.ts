import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-medicacoes',
  templateUrl: './medicacoes.page.html',
  styleUrls: ['./medicacoes.page.scss'],
})
export class MedicacoesPage {

  constructor(private nav: NavController) { }

  changePage(page){
    this.nav.navigateForward(page);
  }

}

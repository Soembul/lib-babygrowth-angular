import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { PophoverComponent } from '../../modal/modal-home-page/pophover/pophover.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-svchome',
  templateUrl: './svchome.component.html',
  styleUrls: ['./svchome.component.scss'],
})
export class SvchomeComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() { }
  buttons = ['Location', 'Hotels', 'Food', 'Adventure'];
  activeButton = 1; // Default button active (index 0)

  setActiveButton(index: number) {
    this.activeButton = index;
  }

}

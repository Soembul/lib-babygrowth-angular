import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { onFadeInAnimation, onFadeInBottom } from '../../../../modules/animation/animation.module';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  animations: [onFadeInAnimation(), onFadeInBottom()],
})
export class LandingPage implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-fastapi',
  templateUrl: './sobre-fastapi.page.html',
  styleUrls: ['./sobre-fastapi.page.scss'],
})
export class SobreFastapiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onBackReload(){
    window.location.reload()
  }
}

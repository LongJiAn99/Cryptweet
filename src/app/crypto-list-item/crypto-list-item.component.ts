import { Component, OnInit, Input } from '@angular/core';
import { Coin } from "../Coin";

@Component({
  selector: 'app-crypto-list-item',
  templateUrl: './crypto-list-item.component.html',
  styleUrls: ['./crypto-list-item.component.css']
})
export class CryptoListItemComponent implements OnInit {
  @Input() attribute: any

  constructor() { }

  ngOnInit(): void {
  }

}

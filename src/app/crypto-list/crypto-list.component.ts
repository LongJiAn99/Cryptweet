import { Component, OnInit } from '@angular/core';
/* import { COINS } from '../mock-coins'; */
import { Coin } from '../Coin';
import TwitterApi from 'twitter-api-v2';
import { TweetsService } from '../services/tweets.service';




@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})

export class CryptoListComponent implements OnInit {
  coins: Coin[] = []; 
  tweets: Object | undefined;

  constructor(private tweetsService: TweetsService) { }

  ngOnInit(): void {
   this.tweetsService.getCoins().subscribe(value => this.coins = value)
   console.log(this.coins)
   this.tweetsService.getTweets();
  }

}

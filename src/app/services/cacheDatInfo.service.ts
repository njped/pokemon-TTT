import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class CacheDatInfoService {

constructor() { }

player1: Player = new Player
player2: Player = new Player

savePlayerData(player: Player) {
  if (player.id == 1) {
    this.player1 = player
  }
  else {
    this.player2 = player
  }

  console.log(`Player 1 ID: ${this.player1.id}`);
  console.log(`Player 1 Sprite Url: ${this.player1.spriteUrl}`);
  console.log(`Player 2 ID: ${this.player2.id}`);
  console.log(`Player 2 Sprite Url: ${this.player2.spriteUrl}`);
  
}

}

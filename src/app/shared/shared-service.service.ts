import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private players = [];
  constructor() { }
  getPlayers() { return this.players; }
  setPlayers(players) { this.players = players; }
  postPlayer( player: any ) { this.players.push(player); }
  deletePlayer(index: number) {
    this.players.splice(index, 1);
  }
}

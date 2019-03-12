// import { Player } from './../models/Player';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private url = 'http://localhost:8088/api/player';
  players: any[] = [];
  constructor(private http: HttpClient) { }
  // Add new player
  add(player: any) {
    // observe listner to all the response
    console.log('player', player);
    return this.http.post(this.url, player, {observe: 'response'});
  }
  // Update player
  update(player: any) {
    return this.http.put(this.url + '/' + player.id, player, {observe: 'response'});
  }
  // Get All players
  findAll() {
    return this.http.get(this.url).pipe(map((value: any[]) => this.players = value));
  }
  // get a specific player
  getOne(id: number) {
    return this.http.get<any>(this.url + '/' + id, {observe: 'response'});
  }
  // delete a specific players
  delete(id: number) {
    return this.http.delete(this.url + '/' + id, {observe: 'response'});
  }
}

import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared-service.service';
import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players = [];
  isAdding = true;
  constructor(private shared: SharedService, private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    // this.players = this.shared.getPlayers();
    this.playerService.findAll().subscribe((data: any[]) => {
      // console.log('data :' + data);
      // this.shared.setPlayers(data);
      this.players = data;
      console.log('players :' + this.players);
    });
  }
  delete(id: number, index: number) {
    // this.shared.deletePlayer(index);
    this.playerService.delete(id).subscribe(
      (response) => {
        // console.log('index: ' + index + 'id' + id);
        // console.log(this.players);
        this.playerService.players.splice(index, 1);
        // this.shared.deletePlayer(index);
        // this.shared.deletePlayer(index);
        console.log(this.players);
        // console.log('delete: ', response.body);
      }
    );
  }
  edit(id: number) {
    this.router.navigate(['player/edit', id]);
  }

}

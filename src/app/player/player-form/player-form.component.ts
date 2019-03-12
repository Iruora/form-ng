import { PlayerService } from './../../service/player.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/shared-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  players = [];
  isEditing = false;
  currentPlayerIndex: any;

  form: FormGroup = new FormGroup({});

  constructor(private shared: SharedService, private acivatedRoute: ActivatedRoute, private playerService: PlayerService) {}

  addPlayer() {
    console.log(this.form.value);
    this.playerService.add(this.form.value).subscribe( response => {
      // console.log(response);
      this.playerService.players.push(response.body);
      // console.log(this.shared.getPlayers());
      // this.form.reset();
    });
    // this.shared.postPlayer(player);
    // console.log(this.players);
    // this.form.reset();
  }

  editPlayer(event: Event) {
    event.preventDefault();
    this.playerService.update(this.form.value)
      .subscribe((response) => {
      // this.players.splice(this.currentPlayerIndex, 1, this.form.value);
      // this.shared.getPlayers().splice(this.currentPlayerIndex, 1, this.form.value);
      const index = this.playerService.players.findIndex(
        player => player === response.body
      );
      this.playerService.players.splice(index, 1, response.body);
    });
    // this.shared.getPlayers().splice(this.currentPlayerIndex, 1, this.form.value);
  }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null),
      nom: new FormControl(null, Validators.required),
      prenom: new FormControl(null, Validators.required),
      numero: new FormControl(null, [Validators.min(1), Validators.max(99), Validators.required]),
      poids: new FormControl(null, [Validators.min(60), Validators.max(99), Validators.required]),
      taille: new FormControl(null, [Validators.minLength(3), Validators.maxLength(3), Validators.required])
    });
    this.acivatedRoute.params.subscribe(
      (param: Params) => {
        const index = param.index;
        if (typeof index !== 'undefined') {
          this.isEditing = true;
          this.currentPlayerIndex = index;
          this.form.setValue( this.playerService.players[index]);
        } else { this.isEditing = false; }
      }
    );
  }
}

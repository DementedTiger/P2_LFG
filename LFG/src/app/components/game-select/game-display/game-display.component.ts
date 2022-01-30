import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import { AvailableGames } from 'src/app/models/available-games.model';
import { GameService } from 'src/app/_services/game.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.css']
})
export class GameDisplayComponent implements OnInit {

  constructor(
    private gameService:GameService,
 //   private location: Location
    ) { }

  ngOnInit(): void {
    this.findAllGames();
  }

  public findAllGames(){
    this.gameService.findAllGames().subscribe(
      (data) => {
        this.games = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  games:AvailableGames[] = [];

  @Output()
  emitter = new EventEmitter<{gId: number, panelNumber: number}>()

  send(data:any) {
    this.emitter.emit(data)
  }
//  goBack(): void{
//    this.location.back();
//  }

}

import { Component } from '@angular/core';
import {FieldState} from "./models/states/field.state";
import {MatDialog} from "@angular/material/dialog";
import {WinComponent} from "./componets/win/win.component";
import {LostComponent} from "./componets/lost/lost.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestTask';
  scorePlayer: number = 0;
  scoreAI: number = 0;
  timeLeft: number = 5;
  interval: any;
  currentBlock: string = '';
  listNameBlock: Array<string> = [];
  stop: boolean = false;


  constructor(public states: FieldState, private dialog: MatDialog) {
    console.log(this.listNameBlock.length);
  }

  startTimer(){
    if (this.stop) this.stop = false;
    if (this.scorePlayer != 10 && this.scoreAI != 10){
      this.game();
      this.interval = setInterval(()=>{
        if (this.stop){
          clearInterval();
        }
        else{
          if (this.timeLeft > 0){
            this.timeLeft--;
          }
          else {
            this.fall(this.currentBlock);
          }
        }
     }, 1000);
    }
    else {
      this.winOrLost();
    }
  }

  game(){
    if (this.scoreAI != 10 && this.scorePlayer != 10){
      let res = this.generationBlock();

      if (this.listNameBlock.length == 0){
        this.currentBlock = res;
        this.listNameBlock.push(res);
        this.createYellowBlock(res);
      }
      else {
        let resCheck: boolean = true;
        while (resCheck){
          resCheck = this.checkBlock(res);
          if (resCheck){
            res = this.generationBlock();
          }
        }
        if (!resCheck){
          this.currentBlock = res;
          this.listNameBlock.push(res);
          this.createYellowBlock(res);
        }
      }
    }
    else {
      this.winOrLost();
    }
  }

  selectBlock(name: string) {
    clearInterval(this.interval);
    if (this.currentBlock == name){
     if (this.scoreAI != 10 && this.scorePlayer != 10){
       if (this.timeLeft > 0){
         this.right(name);
       }
       else {
         this.fall(name);
       }
     }
     else{
       this.winOrLost();
     }
   }
  }

  fall(name: string){
    switch (name) {
      case '1.1':{
        if (this.states.states["yellow1.1"]){
          this.states.blockRedRowOne1();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '1.2':{
        if (this.states.states["yellow1.2"]){
          this.states.blockRedRowOne2();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '1.3':{
        if (this.states.states["yellow1.3"]){
          this.states.blockRedRowOne3();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '1.4':{
        if (this.states.states["yellow1.4"]){
          this.states.blockRedRowOne4();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '1.5':{
        if (this.states.states["yellow1.5"]){
          this.states.blockRedRowOne5();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '1.6':{
        if (this.states.states["yellow1.6"]){
          this.states.blockRedRowOne6();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '1.7':{
        if (this.states.states["yellow1.7"]){
          this.states.blockRedRowOne7();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '1.8':{
        if (this.states.states["yellow1.8"]){
          this.states.blockRedRowOne8();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '1.9':{
        if (this.states.states["yellow1.9"]){
          this.states.blockRedRowOne9();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '1.10':{
        if (this.states.states["yellow1.10"]){
          this.states.blockRedRowOne10();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '2.1':{
        if (this.states.states["yellow2.1"]){
          this.states.blockRedRowTwo1();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '2.2':{
        if (this.states.states["yellow2.2"]){
          this.states.blockRedRowTwo2();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '2.3':{
        if (this.states.states["yellow2.3"]){
          this.states.blockRedRowTwo3();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '2.4':{
        if (this.states.states["yellow2.4"]){
          this.states.blockRedRowTwo4();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '2.5':{
        if (this.states.states["yellow2.5"]){
          this.states.blockRedRowTwo5();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '2.6':{
        if (this.states.states["yellow2.6"]){
          this.states.blockRedRowTwo6();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '2.7':{
        if (this.states.states["yellow2.7"]){
          this.states.blockRedRowTwo7();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '2.8':{
        if (this.states.states["yellow2.8"]){
          this.states.blockRedRowTwo8();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '2.9':{
        if (this.states.states["yellow2.9"]){
          this.states.blockRedRowTwo9();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '2.10':{
        if (this.states.states["yellow2.10"]){
          this.states.blockRedRowTwo10();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '3.1':{
        if (this.states.states["yellow3.1"]){
          this.states.blockRedRowThree1();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '3.2':{
        if (this.states.states["yellow3.2"]){
          this.states.blockRedRowThree2();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '3.3':{
        if (this.states.states["yellow3.3"]){
          this.states.blockRedRowThree3();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '3.4':{
        if (this.states.states["yellow3.4"]){
          this.states.blockRedRowThree4();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '3.5':{
        if (this.states.states["yellow3.5"]){
          this.states.blockRedRowThree5();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '3.6':{
        if (this.states.states["yellow3.6"]){
          this.states.blockRedRowThree6();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '3.7':{
        if (this.states.states["yellow3.7"]){
          this.states.blockRedRowThree7();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '3.8':{
        if (this.states.states["yellow3.8"]){
          this.states.blockRedRowThree8();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '3.9':{
        if (this.states.states["yellow3.9"]){
          this.states.blockRedRowThree9();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '3.10':{
        if (this.states.states["yellow3.10"]){
          this.states.blockRedRowThree10();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '4.1':{
        if (this.states.states["yellow4.1"]){
          this.states.blockRedRowFour1();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '4.2':{
        if (this.states.states["yellow4.2"]){
          this.states.blockRedRowFour2();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '4.3':{
        if (this.states.states["yellow4.3"]){
          this.states.blockRedRowFour3();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '4.4':{
        if (this.states.states["yellow4.4"]){
          this.states.blockRedRowFour4();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '4.5':{
        if (this.states.states["yellow4.5"]){
          this.states.blockRedRowFour5();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '4.6':{
        if (this.states.states["yellow4.6"]){
          this.states.blockRedRowFour6();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '4.7':{
        if (this.states.states["yellow4.7"]){
          this.states.blockRedRowFour7();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '4.8':{
        if (this.states.states["yellow4.8"]){
          this.states.blockRedRowFour8();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '4.9':{
        if (this.states.states["yellow4.9"]){
          this.states.blockRedRowFour9();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '4.10':{
        if (this.states.states["yellow4.10"]){
          this.states.blockRedRowFour10();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '5.1':{
        if (this.states.states["yellow5.1"]){
          this.states.blockRedRowFive1();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '5.2':{
        if (this.states.states["yellow5.2"]){
          this.states.blockRedRowFive2();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '5.3':{
        if (this.states.states["yellow5.3"]){
          this.states.blockRedRowFive3();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '5.4':{
        if (this.states.states["yellow5.4"]){
          this.states.blockRedRowFive4();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '5.5':{
        if (this.states.states["yellow5.5"]){
          this.states.blockRedRowFive5();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '5.6':{
        if (this.states.states["yellow5.6"]){
          this.states.blockRedRowFive6();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '5.7':{
        if (this.states.states["yellow5.7"]){
          this.states.blockRedRowFive7();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '5.8':{
        if (this.states.states["yellow5.8"]){
          this.states.blockRedRowFive8();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '5.9':{
        if (this.states.states["yellow5.9"]){
          this.states.blockRedRowFive9();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '5.10':{
        if (this.states.states["yellow5.10"]){
          this.states.blockRedRowFive10();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '6.1':{
        if (this.states.states["yellow6.1"]){
          this.states.blockRedRowSix1();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '6.2':{
        if (this.states.states["yellow6.2"]){
          this.states.blockRedRowSix2();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '6.3':{
        if (this.states.states["yellow6.3"]){
          this.states.blockRedRowSix3();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '6.4':{
        if (this.states.states["yellow6.4"]){
          this.states.blockRedRowSix4();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '6.5':{
        if (this.states.states["yellow6.5"]){
          this.states.blockRedRowSix5();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '6.6':{
        if (this.states.states["yellow6.6"]){
          this.states.blockRedRowSix6();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '6.7':{
        if (this.states.states["yellow6.7"]){
          this.states.blockRedRowSix7();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '6.8':{
        if (this.states.states["yellow6.8"]){
          this.states.blockRedRowSix8();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '6.9':{
        if (this.states.states["yellow6.9"]){
          this.states.blockRedRowSix9();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '6.10':{
        if (this.states.states["yellow6.10"]){
          this.states.blockRedRowSix10();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '7.1':{
        if (this.states.states["yellow7.1"]){
          this.states.blockRedRowSeven1();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '7.2':{
        if (this.states.states["yellow7.2"]){
          this.states.blockRedRowSeven2();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '7.3':{
        if (this.states.states["yellow7.3"]){
          this.states.blockRedRowSeven3();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '7.4':{
        if (this.states.states["yellow7.4"]){
          this.states.blockRedRowSeven4();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '7.5':{
        if (this.states.states["yellow7.5"]){
          this.states.blockRedRowSeven5();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '7.6':{
        if (this.states.states["yellow7.6"]){
          this.states.blockRedRowSeven6();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '7.7':{
        if (this.states.states["yellow7.7"]){
          this.states.blockRedRowSeven7();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '7.8':{
        if (this.states.states["yellow7.8"]){
          this.states.blockRedRowSeven8();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '7.9':{
        if (this.states.states["yellow7.9"]){
          this.states.blockRedRowSeven9();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '7.10':{
        if (this.states.states["yellow7.10"]){
          this.states.blockRedRowSeven10();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '8.1':{
        if (this.states.states["yellow8.1"]){
          this.states.blockRedRowEight1();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '8.2':{
        if (this.states.states["yellow8.2"]){
          this.states.blockRedRowEight2();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '8.3':{
        if (this.states.states["yellow8.3"]){
          this.states.blockRedRowEight3();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '8.4':{
        if (this.states.states["yellow8.4"]){
          this.states.blockRedRowEight4();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '8.5':{
        if (this.states.states["yellow8.5"]){
          this.states.blockRedRowEight5();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '8.6':{
        if (this.states.states["yellow8.6"]){
          this.states.blockRedRowEight6();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '8.7':{
        if (this.states.states["yellow8.7"]){
          this.states.blockRedRowEight7();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '8.8':{
        if (this.states.states["yellow8.8"]){
          this.states.blockRedRowEight8();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '8.9':{
        if (this.states.states["yellow8.9"]){
          this.states.blockRedRowEight9();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '8.10':{
        if (this.states.states["yellow8.10"]){
          this.states.blockRedRowEight10();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '9.1':{
        if (this.states.states["yellow9.1"]){
          this.states.blockRedRowNine1();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '9.2':{
        if (this.states.states["yellow9.2"]){
          this.states.blockRedRowNine2();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '9.3':{
        if (this.states.states["yellow9.3"]){
          this.states.blockRedRowNine3();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '9.4':{
        if (this.states.states["yellow9.4"]){
          this.states.blockRedRowNine4();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '9.5':{
        if (this.states.states["yellow9.5"]){
          this.states.blockRedRowNine5();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '9.6':{
        if (this.states.states["yellow9.6"]){
          this.states.blockRedRowNine6();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '9.7':{
        if (this.states.states["yellow9.7"]){
          this.states.blockRedRowNine7();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '9.8':{
        if (this.states.states["yellow9.8"]){
          this.states.blockRedRowNine8();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '9.9':{
        if (this.states.states["yellow9.9"]){
          this.states.blockRedRowNine9();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '9.10':{
        if (this.states.states["yellow9.10"]){
          this.states.blockRedRowNine10();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '10.1':{
        if (this.states.states["yellow10.1"]){
          this.states.blockRedRowTen1();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '10.2':{
        if (this.states.states["yellow10.2"]){
          this.states.blockRedRowTen2();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '10.3':{
        if (this.states.states["yellow10.3"]){
          this.states.blockRedRowTen3();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '10.4':{
        if (this.states.states["yellow10.4"]){
          this.states.blockRedRowTen4();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '10.5':{
        if (this.states.states["yellow10.5"]){
          this.states.blockRedRowTen5();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '10.6':{
        if (this.states.states["yellow10.6"]){
          this.states.blockRedRowTen6();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '10.7':{
        if (this.states.states["yellow10.7"]){
          this.states.blockRedRowTen7();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '10.8':{
        if (this.states.states["yellow10.8"]){
          this.states.blockRedRowTen8();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '10.9':{
        if (this.states.states["yellow10.9"]){
          this.states.blockRedRowTen9();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
      case '10.10':{
        if (this.states.states["yellow10.10"]){
          this.states.blockRedRowTen10();
          this.scoreAI += 1;
          this.next();
        }
        break;
      }
    }
  }

  right(name: string){
    switch (name) {
      case '1.1':{
        if (this.states.states["yellow1.1"]){
          this.states.blockGreenRowOne1();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '1.2':{
        if (this.states.states["yellow1.2"]){
          this.states.blockGreenRowOne2();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '1.3':{
        if (this.states.states["yellow1.3"]){
          this.states.blockGreenRowOne3();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '1.4':{
        if (this.states.states["yellow1.4"]){
          this.states.blockGreenRowOne4();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '1.5':{
        if (this.states.states["yellow1.5"]){
          this.states.blockGreenRowOne5();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '1.6':{
        if (this.states.states["yellow1.6"]){
          this.states.blockGreenRowOne6();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '1.7':{
        if (this.states.states["yellow1.7"]){
          this.states.blockGreenRowOne7();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '1.8':{
        if (this.states.states["yellow1.8"]){
          this.states.blockGreenRowOne8();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '1.9':{
        if (this.states.states["yellow1.9"]){
          this.states.blockGreenRowOne9();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '1.10':{
        if (this.states.states["yellow1.10"]){
          this.states.blockGreenRowOne10();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '2.1':{
        if (this.states.states["yellow2.1"]){
          this.states.blockGreenRowTwo1();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '2.2':{
        if (this.states.states["yellow2.2"]){
          this.states.blockGreenRowTwo2();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '2.3':{
        if (this.states.states["yellow2.3"]){
          this.states.blockGreenRowTwo3();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '2.4':{
        if (this.states.states["yellow2.4"]){
          this.states.blockGreenRowTwo4();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '2.5':{
        if (this.states.states["yellow2.5"]){
          this.states.blockGreenRowTwo5();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '2.6':{
        if (this.states.states["yellow2.6"]){
          this.states.blockGreenRowTwo6();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '2.7':{
        if (this.states.states["yellow2.7"]){
          this.states.blockGreenRowTwo7();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '2.8':{
        if (this.states.states["yellow2.8"]){
          this.states.blockGreenRowTwo8();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '2.9':{
        if (this.states.states["yellow2.9"]){
          this.states.blockGreenRowTwo9();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '2.10':{
        if (this.states.states["yellow2.10"]){
          this.states.blockGreenRowTwo10();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '3.1':{
        if (this.states.states["yellow3.1"]){
          this.states.blockGreenRowThree1();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '3.2':{
        if (this.states.states["yellow3.2"]){
          this.states.blockGreenRowThree2();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '3.3':{
        if (this.states.states["yellow3.3"]){
          this.states.blockGreenRowThree3();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '3.4':{
        if (this.states.states["yellow3.4"]){
          this.states.blockGreenRowThree4();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '3.5':{
        if (this.states.states["yellow3.5"]){
          this.states.blockGreenRowThree5();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '3.6':{
        if (this.states.states["yellow3.6"]){
          this.states.blockGreenRowThree6();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '3.7':{
        if (this.states.states["yellow3.7"]){
          this.states.blockGreenRowThree7();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '3.8':{
        if (this.states.states["yellow3.8"]){
          this.states.blockGreenRowThree8();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '3.9':{
        if (this.states.states["yellow3.9"]){
          this.states.blockGreenRowThree9();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '3.10':{
        if (this.states.states["yellow3.10"]){
          this.states.blockGreenRowThree10();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '4.1':{
        if (this.states.states["yellow4.1"]){
          this.states.blockGreenRowFour1();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '4.2':{
        if (this.states.states["yellow4.2"]){
          this.states.blockGreenRowFour2();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '4.3':{
        if (this.states.states["yellow4.3"]){
          this.states.blockGreenRowFour3();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '4.4':{
        if (this.states.states["yellow4.4"]){
          this.states.blockGreenRowFour4();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '4.5':{
        if (this.states.states["yellow4.5"]){
          this.states.blockGreenRowFour5();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '4.6':{
        if (this.states.states["yellow4.6"]){
          this.states.blockGreenRowFour6();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '4.7':{
        if (this.states.states["yellow4.7"]){
          this.states.blockGreenRowFour7();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '4.8':{
        if (this.states.states["yellow4.8"]){
          this.states.blockGreenRowFour8();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '4.9':{
        if (this.states.states["yellow4.9"]){
          this.states.blockGreenRowFour9();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '4.10':{
        if (this.states.states["yellow4.10"]){
          this.states.blockGreenRowFour10();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '5.1':{
        if (this.states.states["yellow5.1"]){
          this.states.blockGreenRowFive1();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '5.2':{
        if (this.states.states["yellow5.2"]){
          this.states.blockGreenRowFive2();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '5.3':{
        if (this.states.states["yellow5.3"]){
          this.states.blockGreenRowFive3();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '5.4':{
        if (this.states.states["yellow5.4"]){
          this.states.blockGreenRowFive4();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '5.5':{
        if (this.states.states["yellow5.5"]){
          this.states.blockGreenRowFive5();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '5.6':{
        if (this.states.states["yellow5.6"]){
          this.states.blockGreenRowFive6();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '5.7':{
        if (this.states.states["yellow5.7"]){
          this.states.blockGreenRowFive7();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '5.8':{
        if (this.states.states["yellow5.8"]){
          this.states.blockGreenRowFive8();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '5.9':{
        if (this.states.states["yellow5.9"]){
          this.states.blockGreenRowFive9();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '5.10':{
        if (this.states.states["yellow5.10"]){
          this.states.blockGreenRowFive10();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '6.1':{
        if (this.states.states["yellow6.1"]){
          this.states.blockGreenRowSix1();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '6.2':{
        if (this.states.states["yellow6.2"]){
          this.states.blockGreenRowSix2();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '6.3':{
        if (this.states.states["yellow6.3"]){
          this.states.blockGreenRowSix3();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '6.4':{
        if (this.states.states["yellow6.4"]){
          this.states.blockGreenRowSix4();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '6.5':{
        if (this.states.states["yellow6.5"]){
          this.states.blockGreenRowSix5();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '6.6':{
        if (this.states.states["yellow6.6"]){
          this.states.blockGreenRowSix6();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '6.7':{
        if (this.states.states["yellow6.7"]){
          this.states.blockGreenRowSix7();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '6.8':{
        if (this.states.states["yellow6.8"]){
          this.states.blockGreenRowSix8();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '6.9':{
        if (this.states.states["yellow6.9"]){
          this.states.blockGreenRowSix9();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '6.10':{
        if (this.states.states["yellow6.10"]){
          this.states.blockGreenRowSix10();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '7.1':{
        if (this.states.states["yellow7.1"]){
          this.states.blockGreenRowSeven1();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '7.2':{
        if (this.states.states["yellow7.2"]){
          this.states.blockGreenRowSeven2();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '7.3':{
        if (this.states.states["yellow7.3"]){
          this.states.blockGreenRowSeven3();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '7.4':{
        if (this.states.states["yellow7.4"]){
          this.states.blockGreenRowSeven4();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '7.5':{
        if (this.states.states["yellow7.5"]){
          this.states.blockGreenRowSeven5();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '7.6':{
        if (this.states.states["yellow7.6"]){
          this.states.blockGreenRowSeven6();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '7.7':{
        if (this.states.states["yellow7.7"]){
          this.states.blockGreenRowSeven7();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '7.8':{
        if (this.states.states["yellow7.8"]){
          this.states.blockGreenRowSeven8();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '7.9':{
        if (this.states.states["yellow7.9"]){
          this.states.blockGreenRowSeven9();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '7.10':{
        if (this.states.states["yellow7.10"]){
          this.states.blockGreenRowSeven10();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '8.1':{
        if (this.states.states["yellow8.1"]){
          this.states.blockGreenRowEight1();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '8.2':{
        if (this.states.states["yellow8.2"]){
          this.states.blockGreenRowEight2();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '8.3':{
        if (this.states.states["yellow8.3"]){
          this.states.blockGreenRowEight3();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '8.4':{
        if (this.states.states["yellow8.4"]){
          this.states.blockGreenRowEight4();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '8.5':{
        if (this.states.states["yellow8.5"]){
          this.states.blockGreenRowEight5();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '8.6':{
        if (this.states.states["yellow8.6"]){
          this.states.blockGreenRowEight6();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '8.7':{
        if (this.states.states["yellow8.7"]){
          this.states.blockGreenRowEight7();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '8.8':{
        if (this.states.states["yellow8.8"]){
          this.states.blockGreenRowEight8();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '8.9':{
        if (this.states.states["yellow8.9"]){
          this.states.blockGreenRowEight9();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '8.10':{
        if (this.states.states["yellow8.10"]){
          this.states.blockGreenRowEight10();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '9.1':{
        if (this.states.states["yellow9.1"]){
          this.states.blockGreenRowNine1();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '9.2':{
        if (this.states.states["yellow9.2"]){
          this.states.blockGreenRowNine2();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '9.3':{
        if (this.states.states["yellow9.3"]){
          this.states.blockGreenRowNine3();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '9.4':{
        if (this.states.states["yellow9.4"]){
          this.states.blockGreenRowNine4();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '9.5':{
        if (this.states.states["yellow9.5"]){
          this.states.blockGreenRowNine5();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '9.6':{
        if (this.states.states["yellow9.6"]){
          this.states.blockGreenRowNine6();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '9.7':{
        if (this.states.states["yellow9.7"]){
          this.states.blockGreenRowNine7();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '9.8':{
        if (this.states.states["yellow9.8"]){
          this.states.blockGreenRowNine8();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '9.9':{
        if (this.states.states["yellow9.9"]){
          this.states.blockGreenRowNine9();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '9.10':{
        if (this.states.states["yellow9.10"]){
          this.states.blockGreenRowNine10();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '10.1':{
        if (this.states.states["yellow10.1"]){
          this.states.blockGreenRowTen1();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '10.2':{
        if (this.states.states["yellow10.2"]){
          this.states.blockGreenRowTen2();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '10.3':{
        if (this.states.states["yellow10.3"]){
          this.states.blockGreenRowTen3();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '10.4':{
        if (this.states.states["yellow10.4"]){
          this.states.blockGreenRowTen4();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '10.5':{
        if (this.states.states["yellow10.5"]){
          this.states.blockGreenRowTen5();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '10.6':{
        if (this.states.states["yellow10.6"]){
          this.states.blockGreenRowTen6();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '10.7':{
        if (this.states.states["yellow10.7"]){
          this.states.blockGreenRowTen7();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '10.8':{
        if (this.states.states["yellow10.8"]){
          this.states.blockGreenRowTen8();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '10.9':{
        if (this.states.states["yellow10.9"]){
          this.states.blockGreenRowTen9();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
      case '10.10':{
        if (this.states.states["yellow10.10"]){
          this.states.blockGreenRowTen10();
          this.scorePlayer += 1;
          this.next();
        }
        break;
      }
    }
  }

  createYellowBlock(name: string){
    switch (name) {
      case '1.1':{
        this.states.blockYellowRowOne1();
        break;
      }
      case '1.2':{
        this.states.blockYellowRowOne2();
        break;
      }
      case '1.3':{
        this.states.blockYellowRowOne3();
        break;
      }
      case '1.4':{
        this.states.blockYellowRowOne4();
        break;
      }
      case '1.5':{
        this.states.blockYellowRowOne5();
        break;
      }
      case '1.6':{
        this.states.blockYellowRowOne6();
        break;
      }
      case '1.7':{
        this.states.blockYellowRowOne7();
        break;
      }
      case '1.8':{
        this.states.blockYellowRowOne8();
        break;
      }
      case '1.9':{
        this.states.blockYellowRowOne9();
        break;
      }
      case '1.10':{
        this.states.blockYellowRowOne10();
        break;
      }
      case '2.1':{
        this.states.blockYellowRowTwo1();
        break;
      }
      case '2.2':{
        this.states.blockYellowRowTwo2();
        break;
      }
      case '2.3':{
        this.states.blockYellowRowTwo3();
        break;
      }
      case '2.4':{
        this.states.blockYellowRowTwo4();
        break;
      }
      case '2.5':{
        this.states.blockYellowRowTwo5();
        break;
      }
      case '2.6':{
        this.states.blockYellowRowTwo6();
        break;
      }
      case '2.7':{
        this.states.blockYellowRowTwo7();
        break;
      }
      case '2.8':{
        this.states.blockYellowRowTwo8();
        break;
      }
      case '2.9':{
        this.states.blockYellowRowTwo9();
        break;
      }
      case '2.10':{
        this.states.blockYellowRowTwo10();
        break;
      }
      case '3.1':{
        this.states.blockYellowRowThree1();
        break;
      }
      case '3.2':{
        this.states.blockYellowRowThree2();
        break;
      }
      case '3.3':{
        this.states.blockYellowRowThree3();
        break;
      }
      case '3.4':{
        this.states.blockYellowRowThree4();
        break;
      }
      case '3.5':{
        this.states.blockYellowRowThree5();
        break;
      }
      case '3.6':{
        this.states.blockYellowRowThree6();
        break;
      }
      case '3.7':{
        this.states.blockYellowRowThree7();
        break;
      }
      case '3.8':{
        this.states.blockYellowRowThree8();
        break;
      }
      case '3.9':{
        this.states.blockYellowRowThree9();
        break;
      }
      case '3.10':{
        this.states.blockYellowRowThree10();
        break;
      }
      case '4.1':{
        this.states.blockYellowRowFour1();
        break;
      }
      case '4.2':{
        this.states.blockYellowRowFour2();
        break;
      }
      case '4.3':{
        this.states.blockYellowRowFour3();
        break;
      }
      case '4.4':{
        this.states.blockYellowRowFour4();
        break;
      }
      case '4.5':{
        this.states.blockYellowRowFour5();
        break;
      }
      case '4.6':{
        this.states.blockYellowRowFour6();
        break;
      }
      case '4.7':{
        this.states.blockYellowRowFour7();
        break;
      }
      case '4.8':{
        this.states.blockYellowRowFour8();
        break;
      }
      case '4.9':{
        this.states.blockYellowRowFour9();
        break;
      }
      case '4.10':{
        this.states.blockYellowRowFour10();
        break;
      }
      case '5.1':{
        this.states.blockYellowRowFive1();
        break;
      }
      case '5.2':{
        this.states.blockYellowRowFive2();
        break;
      }
      case '5.3':{
        this.states.blockYellowRowFive3();
        break;
      }
      case '5.4':{
        this.states.blockYellowRowFive4();
        break;
      }
      case '5.5':{
        this.states.blockYellowRowFive5();
        break;
      }
      case '5.6':{
        this.states.blockYellowRowFive6();
        break;
      }
      case '5.7':{
        this.states.blockYellowRowFive7();
        break;
      }
      case '5.8':{
        this.states.blockYellowRowFive8();
        break;
      }
      case '5.9':{
        this.states.blockYellowRowFive9();
        break;
      }
      case '5.10':{
        this.states.blockYellowRowFive10();
        break;
      }
      case '6.1':{
        this.states.blockYellowRowSix1();
        break;
      }
      case '6.2':{
        this.states.blockYellowRowSix2();
        break;
      }
      case '6.3':{
        this.states.blockYellowRowSix3();
        break;
      }
      case '6.4':{
        this.states.blockYellowRowSix4();
        break;
      }
      case '6.5':{
        this.states.blockYellowRowSix5();
        break;
      }
      case '6.6':{
        this.states.blockYellowRowSix6();
        break;
      }
      case '6.7':{
        this.states.blockYellowRowSix7();
        break;
      }
      case '6.8':{
        this.states.blockYellowRowSix8();
        break;
      }
      case '6.9':{
        this.states.blockYellowRowSix9();
        break;
      }
      case '6.10':{
        this.states.blockYellowRowSix10();
        break;
      }
      case '7.1':{
        this.states.blockYellowRowSeven1();
        break;
      }
      case '7.2':{
        this.states.blockYellowRowSeven2();
        break;
      }
      case '7.3':{
        this.states.blockYellowRowSeven3();
        break;
      }
      case '7.4':{
        this.states.blockYellowRowSeven4();
        break;
      }
      case '7.5':{
        this.states.blockYellowRowSeven5();
        break;
      }
      case '7.6':{
        this.states.blockYellowRowSeven6();
        break;
      }
      case '7.7':{
        this.states.blockYellowRowSeven7();
        break;
      }
      case '7.8':{
        this.states.blockYellowRowSeven8();
        break;
      }
      case '7.9':{
        this.states.blockYellowRowSeven9();
        break;
      }
      case '7.10':{
        this.states.blockYellowRowSeven10();
        break;
      }
      case '8.1':{
        this.states.blockYellowRowEight1();
        break;
      }
      case '8.2':{
        this.states.blockYellowRowEight2();
        break;
      }
      case '8.3':{
        this.states.blockYellowRowEight3();
        break;
      }
      case '8.4':{
        this.states.blockYellowRowEight4();
        break;
      }
      case '8.5':{
        this.states.blockYellowRowEight5();
        break;
      }
      case '8.6':{
        this.states.blockYellowRowEight6();
        break;
      }
      case '8.7':{
        this.states.blockYellowRowEight7();
        break;
      }
      case '8.8':{
        this.states.blockYellowRowEight8();
        break;
      }
      case '8.9':{
        this.states.blockYellowRowEight9();
        break;
      }
      case '8.10':{
        this.states.blockYellowRowEight10();
        break;
      }
      case '9.1':{
        this.states.blockYellowRowNine1();
        break;
      }
      case '9.2':{
        this.states.blockYellowRowNine2();
        break;
      }
      case '9.3':{
        this.states.blockYellowRowNine3();
        break;
      }
      case '9.4':{
        this.states.blockYellowRowNine4();
        break;
      }
      case '9.5':{
        this.states.blockYellowRowNine5();
        break;
      }
      case '9.6':{
        this.states.blockYellowRowNine6();
        break;
      }
      case '9.7':{
        this.states.blockYellowRowNine7();
        break;
      }
      case '9.8':{
        this.states.blockYellowRowNine8();
        break;
      }
      case '9.9':{
        this.states.blockYellowRowNine9();
        break;
      }
      case '9.10':{
        this.states.blockYellowRowNine10();
        break;
      }
      case '10.1':{
        this.states.blockYellowRowTen1();
        break;
      }
      case '10.2':{
        this.states.blockYellowRowTen2();
        break;
      }
      case '10.3':{
        this.states.blockYellowRowTen3();
        break;
      }
      case '10.4':{
        this.states.blockYellowRowTen4();
        break;
      }
      case '10.5':{
        this.states.blockYellowRowTen5();
        break;
      }
      case '10.6':{
        this.states.blockYellowRowTen6();
        break;
      }
      case '10.7':{
        this.states.blockYellowRowTen7();
        break;
      }
      case '10.8':{
        this.states.blockYellowRowTen8();
        break;
      }
      case '10.9':{
        this.states.blockYellowRowTen9();
        break;
      }
      case '10.10':{
        this.states.blockYellowRowTen10();
        break;
      }
    }
  }

  checkBlock(block: string): boolean{
    let resCheck: boolean = false;
    for (let i = 0; i < this.listNameBlock.length; i++){
      if (this.listNameBlock[i] == block){
        resCheck = true;
        break;
      }
    }
    return resCheck;
  }

  generationBlock(): string{
    let res1 = Math.floor(Math.random() * (10 - 1) + 1);
    let res2 = Math.floor(Math.random() * (10 - 1) + 1);
    let str: string = (res1 + '.' + res2).toString();
    return str;
  }

  next(){
    this.timeLeft = 5;
    this.startTimer();
  }

  win(){
    this.dialog.open(WinComponent, {autoFocus: false});
  }

  lost(){
    this.dialog.open(LostComponent, {autoFocus: false});
  }

  winOrLost(){
    this.stop = true;
    if (this.scorePlayer == 10){
      this.win();
    }
    else {
      this.lost();
    }
  }

  refresh() {
    this.stop = true;
    this.states.refresh();
    this.scorePlayer = 0;
    this.scoreAI = 0;
    this.timeLeft = 5;
    this.listNameBlock = [];
    this.currentBlock = '';
    this.interval = null;
  }
}



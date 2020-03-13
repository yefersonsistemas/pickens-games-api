import { Component, OnInit } from '@angular/core';
import { MemoryGameService } from 'src/app/services/memory-game.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-memory-register',
  templateUrl: './memory-register.component.html',
  styleUrls: ['./memory-register.component.scss']
})
export class MemoryRegisterComponent implements OnInit {

  constructor( public gameService: MemoryGameService, public router: Router) { }


  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  // console.log
  
  // startGame() {
  //   if ( this.gameService.playerName && this.gameService.playerName.trim()) {
  //   this.router.navigate(['memory-playing']);
  //   }
  // }


  ngOnInit() {
  }

  OnSubmit( name: string, email: string, phone: string) {
    this.gameService.registerParticipant(name, email, phone).subscribe(
      (data: any) => {
        // localStorage.clear();
        localStorage.setItem('participant', JSON.stringify(data));
        this.router.navigate(['/memory-playing']);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HangManService } from 'src/app/services/hang-man.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hang-register',
  templateUrl: './hang-register.component.html',
  styleUrls: ['./hang-register.component.scss']
})
export class HangRegisterComponent implements OnInit {

  constructor(public gameService: HangManService, public router: Router) { }

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });
  
  ngOnInit() {
  }

  OnSubmit( name: string, email: string, phone: string) {
    this.gameService.registerParticipant(name, email, phone).subscribe(
      (data: any) => {
        // localStorage.clear();
        localStorage.setItem('participant', JSON.stringify(data));
        this.router.navigate(['/hang-playing']);
      }
    );
  }

}

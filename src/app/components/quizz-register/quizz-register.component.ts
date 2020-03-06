import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizz-register',
  templateUrl: './quizz-register.component.html',
  styleUrls: ['./quizz-register.component.scss']
})
export class QuizzRegisterComponent implements OnInit {

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // OnSubmit(name:string,email:string){
  //   this.quizService.insertParticipant(name,email).subscribe(
  //     (data : any) =>{
  //       localStorage.clear();
  //       localStorage.setItem('participant',JSON.stringify(data));
  //       this.route.navigate(['/quiz']);
  //     }
  //   );
  // }

}

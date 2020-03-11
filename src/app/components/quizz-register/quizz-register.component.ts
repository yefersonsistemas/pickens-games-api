import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzQuestionService } from '../../services/quizz-question.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quizz-register',
  templateUrl: './quizz-register.component.html',
  styleUrls: ['./quizz-register.component.scss']
})
export class QuizzRegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private router: Router, private quizService: QuizzQuestionService) { }

  ngOnInit() {
  }

  OnSubmit( name: string, email: string, phone: string) {
    this.quizService.registerParticipant(name, email, phone).subscribe(
      (data: any) => {
        // localStorage.clear();
        localStorage.setItem('participant', JSON.stringify(data));
        this.router.navigate(['/quizz-question']);
      }
    );
  }

}

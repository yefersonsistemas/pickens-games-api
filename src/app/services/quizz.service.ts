import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const Url = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private http: HttpClient) { }

  qns: [] = [];
  seconds: number;
  timer;
  qnProgress: number;

  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  // getParticipantName() {
  //   var participant = JSON.parse(localStorage.getItem('participant'));
  //   return participant.name;
  // }


  registerParticipant(name: string, email: string, phone: string) {
    const data = {
      name,
      email,
      phone,
    };
    console.log('servicio', data);
    return this.http.post( Url + 'register/quizz', data);
  }

  getQuestion() {
    return this.http.get( Url + 'question' );
  }

  getRankingQuizz() {
    return this.http.get( Url + 'ranking/quizz');
  }

}

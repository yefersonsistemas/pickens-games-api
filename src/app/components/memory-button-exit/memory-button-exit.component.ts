import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-memory-button-exit',
  templateUrl: './memory-button-exit.component.html',
  styleUrls: ['./memory-button-exit.component.scss']
})
export class MemoryButtonExitComponent implements OnInit {

  @Input() type;

  constructor() { }

  ngOnInit() {
  }

}

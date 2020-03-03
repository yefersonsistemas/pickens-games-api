import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-memory-button',
  templateUrl: './memory-button.component.html',
  styleUrls: ['./memory-button.component.scss']
})
export class MemoryButtonComponent implements OnInit {

  @Input() type;

  constructor() { }

  ngOnInit() {
  }

}

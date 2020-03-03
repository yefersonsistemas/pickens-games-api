import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-memory-modal',
  templateUrl: './memory-modal.component.html',
  styleUrls: ['./memory-modal.component.scss']
})
export class MemoryModalComponent implements OnInit {

  @Input() visible;

  constructor() { }

  ngOnInit() {
  }

}

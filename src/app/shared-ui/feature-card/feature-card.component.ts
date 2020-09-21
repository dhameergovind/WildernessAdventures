import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() image: any;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}

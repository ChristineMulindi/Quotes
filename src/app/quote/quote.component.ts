import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('Time you enjoy wasting is not wasted time', 'Marthe Troly-Curtin, Phrynette Married', 'Christine'),
  ];
  constructor() { }

  ngOnInit() {
  }

}

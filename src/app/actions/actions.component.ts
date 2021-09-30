import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../core/calculate.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  numbers: Array<number> = [];
  subscribedNumbers: Array<number> = [];

  constructor(private calculateService: CalculateService) { }

  ngOnInit(): void { }

  /** Using template reference */
  templateRef(value: string) {
    for (let i = 1; i <= Number(value); i++) {
      const isEleven = this.calc(i);

      if (isEleven === 11) {
        this.numbers.push(i);
      }
    }
  }

  calc(value: number) {
    return value
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, el) => {
        acc += el;

        return acc;
      }, 0);
  }

  /** Subscribing to observable */
  httpReq() {
    this.calculateService.getNumbers()
      .subscribe(data => {
        this.subscribedNumbers = data.reduce((acc, el) => {
          this.calc(el) === 11 ? acc.push(el) : null;

          return acc;
        }, [])
      })
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  expression: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  append(value: string): void {
    this.expression += value;
  }

  clear(): void {
    this.expression = '';
  }

  calculate(): void {
    try {
      const result = eval(this.expression.replace('%', '/100'));
      this.expression = result.toString();
    } catch (error) {
      this.expression = 'Error';
    }
  }
}
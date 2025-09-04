import { Component, Input, input, computed} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  //standalone: true,
  //imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
//   results = input<{
//       year: number,
//       interest: number,
//       valueEndOfYear: number,
//       annualInvestment: number,
//       totalInterest: number,
//       totalAmountInvested: number
// }[]>()

//constructor(private investmentService : InvestmentService){
//}
private investmentService = inject(InvestmentService)

// get results(){
//   return this.investmentService.resultData
// }


results = computed(() => this.investmentService.resultData());

// @Input()
// results?:{
//       year: number;
//       interest: number;
//       valueEndOfYear: number;
//       annualInvestment: number;
//       totalInterest: number;
//       totalAmountInvested: number;
// }[];
}

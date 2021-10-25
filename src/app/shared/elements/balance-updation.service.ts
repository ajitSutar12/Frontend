import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';


@Injectable()
export class BalanceUpdationService {
    public static readonly PLAYER_ONE: Array<IOption> = [
        { value: '0', label: 'Savings Deposit' },
        { value: '1', label: 'Term Deposit' },
        { value: '2', label: 'Investment  Account' },
        { value: '3', label: 'Anamat Account' },
        { value: '4', label: 'Agent Account' },    
        { value: '5', label: 'Pigmy Deposit Account' },
        { value: '6', label: 'Loan/Cash Credit/Dispute Loan Account' },
        { value: '7', label: 'Shares Account' }

    ];
       
    getCharacters(): Array<IOption> {
        return this.cloneOptions(BalanceUpdationService.PLAYER_ONE);
    }

    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(BalanceUpdationService.PLAYER_ONE);
    }

    getCharactersWithDisabled(): Array<IOption> {
        const characters: Array<IOption> = this.cloneOptions(BalanceUpdationService.PLAYER_ONE);
        characters[1].disabled = true;
        characters[4].disabled = true;
        return characters;
    }



    private loadOptions(options: Array<IOption>): Observable<Array<IOption>> {
        return new Observable((obs) => {
            setTimeout(() => {
                obs.next(this.cloneOptions(options));
                obs.complete();
            }, 5000);
        });
    }

    private cloneOptions(options: Array<IOption>): Array<IOption> {
        return options.map(option => ({ value: option.value, label: option.label }));
    }
}

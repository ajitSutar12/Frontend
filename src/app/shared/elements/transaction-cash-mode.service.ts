import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';


@Injectable()
export class TransactionCashModeService {
    public static readonly PLAYER_ONE: Array<IOption> = [
        { value: 'DR', label: 'Deposit/Receipts' },
        { value: 'DC', label: 'Deposit Closing' },
        { value: 'WP', label: 'Withdrawals / Payments' },
        { value: 'WC', label: 'Withdrawals for Closing' },
        { value: 'WD', label: 'Withdrawals Dividend' },
        { value: 'CIOA', label: 'Credit Interest On Account' },
        { value: 'WI', label: 'Withdrawals Interest' }
        

    ];

    getCharacters(): Array<IOption> {
        return this.cloneOptions(TransactionCashModeService.PLAYER_ONE);
    }

    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(TransactionCashModeService.PLAYER_ONE);
    }

    getCharactersWithDisabled(): Array<IOption> {
        const characters: Array<IOption> = this.cloneOptions(TransactionCashModeService.PLAYER_ONE);
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

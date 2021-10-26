import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';


@Injectable()
export class SchemeTypeDropdownService {
    public static readonly PLAYER_ONE: Array<IOption> = [
        { value: 'AG', label: 'Pigmy Agent(AG)' },
        { value: 'LN', label: 'Term Loan(LN)' },
        { value: 'CC', label: 'Cash Credit(CC)' },
        { value: 'GS', label: 'Anamat Account(GS)' },
        { value: 'CA', label: 'Current Deposit(CA)' },
        { value: 'DS', label: 'Dispute Loan(DS)' },
        { value: 'GL', label: 'General Ledger(GL)' },
        { value: 'IV', label: 'Investment(IV)' },
        { value: 'LK', label: 'Locker(LK)' },
        { value: 'PG', label: 'Pigmy Deposit(PG)' },
        { value: 'SB', label: 'Savings Deposit(SB)' },
        { value: 'SH', label: 'Shares(SH)' },
        { value: 'TD', label: 'Term Deposit(TD)' },
    ];

    getCharacters(): Array<IOption> {
        return this.cloneOptions(SchemeTypeDropdownService.PLAYER_ONE);
    }

    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(SchemeTypeDropdownService.PLAYER_ONE);
    }

    getCharactersWithDisabled(): Array<IOption> {
        const characters: Array<IOption> = this.cloneOptions(SchemeTypeDropdownService.PLAYER_ONE);
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

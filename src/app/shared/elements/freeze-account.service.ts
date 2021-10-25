import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';


@Injectable()
export class freezeAccountService {
    public static readonly PLAYER_ONE: Array<IOption> = [
        { value: '0', label: 'No Freeze' },
        { value: '1', label: 'Total Amount' },
        { value: '2', label: 'Only Withdrawal' },
        { value: '3', label: 'Partial Amount' }       
    ];
       
    getCharacters(): Array<IOption> {
        return this.cloneOptions(freezeAccountService.PLAYER_ONE);
    }

    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(freezeAccountService.PLAYER_ONE);
    }

    getCharactersWithDisabled(): Array<IOption> {
        const characters: Array<IOption> = this.cloneOptions(freezeAccountService.PLAYER_ONE);
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

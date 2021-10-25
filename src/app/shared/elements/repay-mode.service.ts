import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';


@Injectable()
export class RepayModeService {
    public static readonly PLAYER_ONE: Array<IOption> = [
        { value: '0', label: 'Monthly' },
        { value: '1', label: 'Quarterly' },
        { value: '2', label: 'half Yearly' },
        { value: '3', label: 'Yearly' },
        { value: '4', label: 'On Maturity' },
    ];

    getCharacters(): Array<IOption> {
        return this.cloneOptions(RepayModeService.PLAYER_ONE);
    }

    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(RepayModeService.PLAYER_ONE);
    }

    getCharactersWithDisabled(): Array<IOption> {
        const characters: Array<IOption> = this.cloneOptions(RepayModeService.PLAYER_ONE);
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

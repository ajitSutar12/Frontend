import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';


@Injectable()
export class CompoundInterestService {
    public static readonly PLAYER_ONE: Array<IOption> = [
        { value: 'DAYS', label: 'DAYS' },
        { value: 'MONTHS', label: 'MONTHS' },
        { value: 'QUARTER', label: 'QUARTER' },
        { value: 'HALFYEARLY', label: 'HALF YEARLY' },
        { value: 'YEARLY', label: 'YEARLY' },
        { value: 'NONE', label: 'NONE' }
    ];

    getCharacters(): Array<IOption> {
        return this.cloneOptions(CompoundInterestService.PLAYER_ONE);
    }

    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(CompoundInterestService.PLAYER_ONE);
    }

    getCharactersWithDisabled(): Array<IOption> {
        const characters: Array<IOption> = this.cloneOptions(CompoundInterestService.PLAYER_ONE);
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

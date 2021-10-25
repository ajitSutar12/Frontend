import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';

@Injectable()
export class InterestApplicableTypeService {
    public static readonly PLAYER_ONE: Array<IOption> = [
        { value: 'NormalInterest', label: 'Normal Interest' },
        { value: 'PenalInterest', label: 'Penal Interest' },
        { value: 'NotApplicable', label: 'Not Applicable' }
    ];

    getCharacters(): Array<IOption> {
        return this.cloneOptions(InterestApplicableTypeService.PLAYER_ONE);
    }

    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(InterestApplicableTypeService.PLAYER_ONE);
    }

    getCharactersWithDisabled(): Array<IOption> {
        const characters: Array<IOption> = this.cloneOptions(InterestApplicableTypeService.PLAYER_ONE);
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

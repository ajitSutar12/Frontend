import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';


@Injectable()
export class LandUnitsService {
    public static readonly PLAYER_ONE: Array<IOption> = [
        { value: 'Square Feet', label: 'Square Feet' },
        { value: 'Square Meter', label: 'Square Meter' },
        { value: 'Square Yard', label: 'Square Yard' },
        { value: 'Acre', label: 'Acre' },
        { value: 'Hectare', label: 'Hectare' },
        { value: 'Hectare', label: 'Hectare' }
    ];

    getCharacters(): Array<IOption> {
        return this.cloneOptions(LandUnitsService.PLAYER_ONE);
    }

    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(LandUnitsService.PLAYER_ONE);
    }

    getCharactersWithDisabled(): Array<IOption> {
        const characters: Array<IOption> = this.cloneOptions(LandUnitsService.PLAYER_ONE);
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

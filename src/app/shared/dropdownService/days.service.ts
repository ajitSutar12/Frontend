import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';


@Injectable()
export class DaysService {
    public static readonly PLAYER_ONE: Array<IOption> = [
        { value: 'Days', label: 'Days' },
        { value: 'Monthly', label: 'Monthly' },
        { value: 'Quarterly', label: 'Quarterly' },
        { value: 'HalfYearly', label: 'Half Yearly' },
        { value: 'Yearly', label: 'Yearly' }
    ];

    getCharacters(): Array<IOption> {
        return this.cloneOptions(DaysService.PLAYER_ONE);
    }
    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(DaysService.PLAYER_ONE);
    }

    getCharactersWithDisabled(): Array<IOption> {
        const characters: Array<IOption> = this.cloneOptions(DaysService.PLAYER_ONE);
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

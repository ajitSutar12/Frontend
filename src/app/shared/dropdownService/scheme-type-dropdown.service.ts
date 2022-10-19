import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';
@Injectable()
export class SchemeTypeDropdownService {
    public static readonly PLAYER_ONE: Array<IOption> = [
        { value: 'AG', label: 'AG' },
        { value: 'LN', label: 'LN' },
        { value: 'CC', label: 'CC' },
        { value: 'GS', label: 'GS' },
        { value: 'CA', label: 'CA' },
        { value: 'DS', label: 'DS' },
        { value: 'GL', label: 'GL' },
        { value: 'IV', label: 'IV' },
        { value: 'LK', label: 'LK' },
        { value: 'PG', label: 'PG' },
        { value: 'SB', label: 'SB' },
        { value: 'SH', label: 'SH' },
        { value: 'TD', label: 'TD' },
        { value: 'KYC', label: 'KYC' },
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

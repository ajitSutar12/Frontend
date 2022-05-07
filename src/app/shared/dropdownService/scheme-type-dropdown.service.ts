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
    ];
    public static readonly PLAYER_TWO: Array<IOption> = [
        
        { value: 'CA', label: 'CA' },
        { value: 'PG', label: 'PG' },
        { value: 'SB', label: 'SB' },
        { value: 'TD', label: 'TD' },
    ];
    public static readonly PLAYER_THREE: Array<IOption> = [
        
        { value: 'IV', label: 'IV' },
        { value: 'GL', label: 'GL' },
        { value: 'AG', label: 'AG' },
    ];
    public static readonly PLAYER_FOUR: Array<IOption> = [
        
        { value: 'LN', label: 'LN' },
        { value: 'CC', label: 'CC' },
        { value: 'DS', label: 'DS' },
    ];
    getCharacters(): Array<IOption> {
        return this.cloneOptions(SchemeTypeDropdownService.PLAYER_ONE);
    }

    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(SchemeTypeDropdownService.PLAYER_ONE);
    }
    get_CAPGSBTD_Characters(): Array<IOption> {
        return this.cloneOptions(SchemeTypeDropdownService.PLAYER_TWO);
    }
    load_CAPGSBTD_Characters(): Observable<Array<IOption>> {
        return this.loadOptions(SchemeTypeDropdownService.PLAYER_TWO);
    }
    get_IVGLAG_Characters(): Array<IOption> {
        return this.cloneOptions(SchemeTypeDropdownService.PLAYER_THREE);
    }
    load_IVGLAG_Characters(): Observable<Array<IOption>> {
        return this.loadOptions(SchemeTypeDropdownService.PLAYER_THREE);
    }
    get_LNCCDS_Characters(): Array<IOption> {
        return this.cloneOptions(SchemeTypeDropdownService.PLAYER_FOUR);
    }
    load_LNCCDS_Characters(): Observable<Array<IOption>> {
        return this.loadOptions(SchemeTypeDropdownService.PLAYER_FOUR);
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

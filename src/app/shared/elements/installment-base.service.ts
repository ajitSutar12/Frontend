import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';


@Injectable()
export class InstallmentBaseService {
    public static readonly PLAYER_ONE: Array<IOption> = [
        { value: 'MONTHLY', label: 'MONTHLY' },
        { value: 'QUARTERLY', label: 'QUARTERLY' },
        { value: 'HALFYEARLY', label: 'HALF YEARLY' },
        { value: 'YEARLY', label: 'YEARLY' },
        { value: 'NULL', label: 'NO INSTALLMENT' }
    ];

    getCharacters(): Array<IOption> {
        return this.cloneOptions(InstallmentBaseService.PLAYER_ONE);
    }

    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(InstallmentBaseService.PLAYER_ONE);
    }

    getCharactersWithDisabled(): Array<IOption> {
        const characters: Array<IOption> = this.cloneOptions(InstallmentBaseService.PLAYER_ONE);
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

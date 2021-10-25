import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IOption} from 'ng-select';


@Injectable()
export class ExucuteOnService {
  public static readonly PLAYER_ONE: Array<IOption> = [
    {value: '0', label: 'Every Entry'},
    {value: '1', label: 'Debit Entry'},
    {value: '2', label: 'Credit Entry'}
  ];


    getCharacters(): Array<IOption> {
        return this.cloneOptions(ExucuteOnService.PLAYER_ONE);
    }

    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(ExucuteOnService.PLAYER_ONE);
    }

    getCharactersWithDisabled(): Array<IOption> {
        const characters: Array<IOption> = this.cloneOptions(ExucuteOnService.PLAYER_ONE);
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

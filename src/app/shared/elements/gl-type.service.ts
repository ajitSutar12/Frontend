import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IOption} from 'ng-select';


@Injectable()
export class glTypeService {
  public static readonly PLAYER_ONE: Array<IOption> = [
    {value: '0', label: 'On Balance Sheet Item'},
    {value: '1', label: 'Off Balance Sheet Item'},
    {value: '2', label: 'Capital Funds and Risk Assets Ratio'},
    {value: '3', label: 'Other Amount'},
    {value: '4', label: 'Total Amount'},
    {value: '5', label: 'Display Amount'},
    {value: '6', label: 'Percentage'}
  ];



    getCharacters(): Array<IOption> {
        return this.cloneOptions(glTypeService.PLAYER_ONE);
    }

    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(glTypeService.PLAYER_ONE);
    }

    getCharactersWithDisabled(): Array<IOption> {
        const characters: Array<IOption> = this.cloneOptions(glTypeService.PLAYER_ONE);
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

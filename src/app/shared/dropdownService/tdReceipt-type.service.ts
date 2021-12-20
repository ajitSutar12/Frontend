import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IOption} from 'ng-select';


@Injectable()
export class TdReceiptService {
  public static readonly PLAYER_ONE: Array<IOption> = [
    {value: 'A', label: 'A'},
    {value: 'B', label: 'B'},
    {value: 'C', label: 'C'},
    {value: 'D', label: 'D'},
    {value: 'E', label: 'E'},
    {value: 'F', label: 'F'},
    {value: 'G', label: 'G'},
    {value: 'H', label: 'H'},
    {value: 'I', label: 'I'},
    {value: 'J', label: 'J'},
    {value: 'K', label: 'K'},
    {value: 'L', label: 'L'},
    {value: 'M', label: 'M'},
    {value: 'N', label: 'N'},
    {value: 'O', label: 'O'},
    {value: 'P', label: 'P'},
    {value: 'Q', label: 'Q'},
    {value: 'R', label: 'R'},
    {value: 'S', label: 'S'},
    {value: 'T', label: 'T'},
    {value: 'U', label: 'U'},
    {value: 'V', label: 'V'},
    {value: 'W', label: 'W'},
    {value: 'X', label: 'X'},
    {value: 'Y', label: 'Y'},
    {value: 'Z', label: 'Z'},
  ];



    getCharacters(): Array<IOption> {
        return this.cloneOptions(TdReceiptService.PLAYER_ONE);
    }

    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(TdReceiptService.PLAYER_ONE);
    }

    getCharactersWithDisabled(): Array<IOption> {
        const characters: Array<IOption> = this.cloneOptions(TdReceiptService.PLAYER_ONE);
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

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';


@Injectable()
export class TransactionTransferModeService {
    public static readonly PLAYER_ONE: Array<IOption> = [
        { value: 'CT', label: 'Credit Transfer' },
        { value: 'CTC', label: 'Credit Transfer for Closing' },
        { value: 'DT', label: 'Debit Transfer' },
        { value: 'DTC', label: 'Debit Transfer for Closing' },
        { value: 'DIA', label: 'Debit Interest on Account' },
        { value: 'CTCBT', label: ' Credit Transfer for Closing with Branch Transfer' },
        { value: 'DTD', label: 'Debit Transfer Dividend' },
        { value: 'CIOA', label: 'Credit Interest On Account' },
        { value: 'DTI', label: 'Debit Transfer Interest' },

    ];

    getCharacters(): Array<IOption> {
        return this.cloneOptions(TransactionTransferModeService.PLAYER_ONE);
    }

    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(TransactionTransferModeService.PLAYER_ONE);
    }

    getCharactersWithDisabled(): Array<IOption> {
        const characters: Array<IOption> = this.cloneOptions(TransactionTransferModeService.PLAYER_ONE);
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

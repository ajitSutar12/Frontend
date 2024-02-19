import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {IOption} from 'ng-select';
import {Subscription} from 'rxjs/Subscription';
import {SelectOptionService} from '../../../shared/elements/select-option.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-shares-data-ei',
  templateUrl: './shares-data-ei.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./shares-data-ei.component.scss']
})
export class SharesDataEIComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false;

  dtExportButtonOptions: any = {};
  simpleOption: Array<IOption> = this.selectOptionService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  countries: Array<IOption> = this.selectOptionService.getCountries();
  selectedCountry = 'IN';
  selectedCountries: Array<string> = ['IN', 'BE', 'LU', 'NL'];

  private dataSub: Subscription = null;

  autocompleteItems = ['Alabama', 'Wyoming', 'Henry Die', 'John Doe'];
  autocompleteItemsAsObjects = [
    {value: 'Alabama', id: 0},
    {value: 'Wyoming', id: 1},
    {value: 'Coming', id: 2},
    {value: 'Josephin Doe', id: 3},
    {value: 'Henry Die', id: 4},
    {value: 'Lary Doe', id: 5},
    {value: 'Alice', id: 6},
    {value: 'Alia', id: 7},
    {value: 'Suzen', id: 8},
    {value: 'Michael Scofield', id: 9},
    {value: 'Irina Shayk', id: 10},
    {value: 'Sara Tancredi', id: 11},
    {value: 'Daizy Mendize', id: 12},
    {value: 'Loren Scofield', id: 13},
    {value: 'Shayk', id: 14},
    {value: 'Sara', id: 15},
    {value: 'Doe', id: 16},
    {value: 'Lary', id: 17},
    {value: 'Roni Sommerfield', id: 18},
    {value: 'Mickey Amavisca', id: 19},
    {value: 'Dorethea Hennigan', id: 20},
    {value: 'Marisha Haughey', id: 21},
    {value: 'Justin Czajkowski', id: 22},
    {value: 'Reyes Hodges', id: 23},
    {value: 'Vicky Hadley', id: 24},
    {value: 'Lezlie Baumert', id: 25},
    {value: 'Otha Vanorden', id: 26},
    {value: 'Glayds Inabinet', id: 27},
    {value: 'Hang Owsley', id: 28},
    {value: 'Carlotta Buttner', id: 29},
    {value: 'Randa Vanloan', id: 30},
    {value: 'Elana Fulk', id: 31},
    {value: 'Amos Spearman', id: 32},
    {value: 'Samon', id: 33},
    {value: 'John Doe', id:  34}
  ];
  constructor(public selectOptionService: SelectOptionService, private translate:TranslateService,) { 
    this.translate.setDefaultLang(environment.setLang);
  }

 

  ngOnInit(): void {
    this.dtExportButtonOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [
        {
          title: this.translate.instant('utility.Action.Action'),
          render: function (data: any, type: any, full: any) {
            return '<button class="btn btn-outline-primary btn-sm">Edit</button>' + ' ' + '<button class="btn btn-outline-primary btn-sm">Delete</button>';
          }
        },
        {
        title: this.translate.instant('utility.Action.Name'),
        data: 'name'
      }, {
        title: this.translate.instant('utility.Action.Position'),
        data: 'position'
      }, {
        title: this.translate.instant('utility.Action.Office'),
        data: 'office'
      }, {
        title:this.translate.instant('utility.Action.Age'),
        data: 'age'
      }, {
        title: this.translate.instant('utility.Action.Start_date'),
        data: 'date'
      }, {
        title: this.translate.instant('utility.Action.Salary'),
        data: 'salary'
      }],
      dom: "Blrtip",
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ]
    };
    this.runTimer();
    this.dataSub = this.selectOptionService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }
  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  
  }

}

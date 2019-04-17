import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'QuickQue';
  step = 1;
  age : number;
  sex : string;
  onImgClick($event: any){
    if($event.target.classList.contains('toSmall')){
      document.getElementsByClassName("toBig")[0].classList.toggle("toSmall");
      document.getElementsByClassName("toBig")[0].classList.remove('toBig');
      $event.target.classList.remove('toSmall');
      $event.target.classList.add('toBig');
    }
  }  
  onSex(s: string){
    this.sex = s;
    this.step = 3;
  }

  symtomList = [];
  selectedSymtom = [];
  symtomListSettings = {};

  ngOnInit() {
    this.symtomList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedSymtom = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.symtomListSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
  }
  onSymtomSelect(item: any) {

  }
}

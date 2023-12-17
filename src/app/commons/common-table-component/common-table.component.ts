import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {
  @Input('thead') thead: Array<string> | any = [];
  @Input('tbody') tbody: Array<any> | any = [];
  @Input("type") type: string = "";

  @Output("delete") delete = new EventEmitter<any>();
  @Output("update") update = new EventEmitter<any>();



  constructor() { }

  ngOnInit(): void { }

  onDeleteHandler(id: string) {
    this.delete.emit(id);
  }

  onUpdateHandler(id: string) {
    this.update.emit(id);
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss']
})
export class CommonButtonComponent {

  @Input("title") title!: String;
  @Input('type') type: String = 'button';
  @Output("btnClick") btnClick = new EventEmitter();

  constructor() {}

  onClickHandler() {
    this.btnClick.emit();
  }
}

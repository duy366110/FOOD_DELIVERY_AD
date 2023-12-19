import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-common-select-component',
  templateUrl: './common-select-component.component.html',
  styleUrls: ['./common-select-component.component.scss']
})
export class CommonSelectComponent {
  
  @Input("formControl") select!: FormControl;
  @Input("options") options: Array<{id: number, value: string}> = [];
  @Input("label") label: String = "Default";
}

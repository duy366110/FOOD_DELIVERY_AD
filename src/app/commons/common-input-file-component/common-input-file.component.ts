import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-common-input-file',
  templateUrl: './common-input-file.component.html',
  styleUrls: ['./common-input-file.component.scss']
})
export class CommonInputFileComponent {

  @Input("formControl") formControl: FormControl | any;
  @ViewChild('input', { static: false }) input!: ElementRef;

  onChangeHandler() {
    this.formControl.files = this.input.nativeElement.files;
  }
}

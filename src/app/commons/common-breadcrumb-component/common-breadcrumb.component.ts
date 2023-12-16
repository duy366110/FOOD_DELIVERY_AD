import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-breadcrumb',
  templateUrl: './common-breadcrumb.component.html',
  styleUrls: ['./common-breadcrumb.component.scss']
})
export class CommonBreadcrumbComponent implements OnInit {

  pathNames: Array<string | any> = [];

  constructor() {}

  ngOnInit(): void {

  }

  ngAfterViewChecked(): void {
    this.pathNames = location.pathname.toString().split("/").filter((path: string) => path);

    let checkPathEdit = this.pathNames.some((elm: string) => elm.includes('edit'));
    let checkPathNew = this.pathNames.some((elm: string) => elm.includes('new'));

    if(checkPathEdit || checkPathNew) {
      if(checkPathEdit) {
        this.pathNames.pop();
      }
      this.pathNames[this.pathNames.length - 1] = this.pathNames[this.pathNames.length - 1].split("-").join(" ");
    }

  }
}

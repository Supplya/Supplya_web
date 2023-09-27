import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {


  @Input()
  pageTitle = "";

  @Input()
  resetLink = " ";

  @Input()
HomeLink = "Home";
@Input()
currentPageLink = "";
@Input()
searchResult: any;
@Input()
previousLink = '';

}

import { Component, OnInit, ContentChild, ElementRef, AfterContentInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit, AfterContentInit {

  @ViewChild('panelHeading') panelHeading: ElementRef;
  @ContentChild('projected') projectedContent: ElementRef;
  constructor() { }

  ngOnInit() {
    //console.log(this.panelHeading);
    
  }

  ngAfterViewInit(){
    console.log(this.panelHeading.nativeElement.innerText);
  }
  ngAfterContentInit() {
    console.log(this.projectedContent.nativeElement.innerText);
  }

}

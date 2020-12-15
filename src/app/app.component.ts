import { Component, ViewChild, ElementRef } from '@angular/core';
import { AccordionComponent } from './accordion/accordion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ContentProjection';
  _input: string;
  @ViewChild('accordion') Accordion: AccordionComponent;
  @ViewChild('projected') projected: ElementRef;
  
  ngAfterViewInit(){
    console.log(this.Accordion);
    console.log(this.projected.nativeElement.innerText);
  }

}

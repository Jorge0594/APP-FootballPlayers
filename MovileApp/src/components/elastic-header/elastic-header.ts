import { Component, Input, ElementRef, Renderer } from '@angular/core';

import { Events } from 'ionic-angular';

@Component({
  selector: 'elastic-header',
  templateUrl: 'elastic-header.html'
})
export class ElasticHeader   {

  @Input('scrollArea') scrollArea:any;
  @Input('headerHeight') headerHeight:number;

  private newHeaderHeight: any;

  constructor(private element: ElementRef, private renderer: Renderer, private events: Events) {}

  ngAfterViewInit(){
    this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');

    this.scrollArea.ionScroll.subscribe((ev)=>{
      this.resizeHeader(ev);
    })

    this.events.subscribe('resizeHeader', ()=>{
      this.newHeaderHeight = this.headerHeight;
      this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
    });
  }

  resizeHeader(ev){
    ev.domWrite(()=>{

      this.newHeaderHeight = this.headerHeight -ev.scrollTop;

      if(this.newHeaderHeight < 0){
        this.newHeaderHeight = 0;
      }

      this.renderer.setElementStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');

    })
  }

}

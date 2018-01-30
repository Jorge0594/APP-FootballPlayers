import { Component, Input, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'elastic-header',
  templateUrl: 'elastic-header.html'
})
export class ElasticHeader   {

  @Input('scrollArea') scrollArea:any;
  @Input('headerHeight') headerHeight:number;

  private newHeaderHeight: any;

  constructor(private element: ElementRef, private renderer: Renderer) {}

  ngAfterViewInit(){
    this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');

    this.scrollArea.ionScroll.subscribe((ev)=>{
      this.resizeHeader(ev);
    })
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

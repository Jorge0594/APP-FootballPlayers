import { Component, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef } from '@angular/core';

import { NewPlayerFormComponent } from './components/new-player-form/new-player-form.component';

import { ComponentService } from './services/component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private count: number;

  @ViewChild('panel', {read: ViewContainerRef}) private component;
  private componentRef: ComponentRef<any>;
  private element:ElementRef;

  constructor(private componentService: ComponentService, private resolver: ComponentFactoryResolver){
  }


  createPanel(){
    const factory: ComponentFactory<NewPlayerFormComponent> = this.resolver.resolveComponentFactory(NewPlayerFormComponent);
    this.componentRef = this.component.createComponent(factory);

    this.componentService.addNewComponent(this.componentRef.instance);
  }

  showComponents(){
    console.log(this.componentService.getComponents().length)
    for( let Component of this.componentService.getComponents()){
      console.log(Component);
    }
  }


}

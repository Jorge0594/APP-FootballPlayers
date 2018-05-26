import { Component, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Input } from '@angular/core';

import { NewPlayerFormComponent } from './components/new-player-form/new-player-form.component';

import { ComponentService } from './services/component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  @ViewChild('panel', {read: ViewContainerRef}) private component;
  private componentRef: ComponentRef<any>;
  private currectComponentName:string;

  constructor(private componentService: ComponentService, private resolver: ComponentFactoryResolver){}

}

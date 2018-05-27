import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFormPostCreationComponent } from './player-form-post-creation.component';

describe('PlayerFormPostCreationComponent', () => {
  let component: PlayerFormPostCreationComponent;
  let fixture: ComponentFixture<PlayerFormPostCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerFormPostCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerFormPostCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

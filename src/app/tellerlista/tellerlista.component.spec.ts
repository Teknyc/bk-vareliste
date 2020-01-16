/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TellerlistaComponent } from './tellerlista.component';

describe('TellerlistaComponent', () => {
  let component: TellerlistaComponent;
  let fixture: ComponentFixture<TellerlistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellerlistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellerlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

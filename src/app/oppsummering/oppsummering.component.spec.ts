/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OppsummeringComponent } from './oppsummering.component';

describe('OppsummeringComponent', () => {
  let component: OppsummeringComponent;
  let fixture: ComponentFixture<OppsummeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppsummeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppsummeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

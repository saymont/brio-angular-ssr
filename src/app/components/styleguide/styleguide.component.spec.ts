/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StyleguideComponent } from './styleguide.component';

describe('StyleguideComponent', () => {
  let component: StyleguideComponent;
  let fixture: ComponentFixture<StyleguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


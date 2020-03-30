/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Project2Component } from './project-2.component';

describe('Project2Component', () => {
  let component: Project2Component;
  let fixture: ComponentFixture<Project2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Project2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Project2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


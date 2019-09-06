import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakecustumerComponent } from './makecustumer.component';

describe('MakecustumerComponent', () => {
  let component: MakecustumerComponent;
  let fixture: ComponentFixture<MakecustumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakecustumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakecustumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

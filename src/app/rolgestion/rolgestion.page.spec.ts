import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RolgestionPage } from './rolgestion.page';

describe('RolgestionPage', () => {
  let component: RolgestionPage;
  let fixture: ComponentFixture<RolgestionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RolgestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

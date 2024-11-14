import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RolregistroPage } from './rolregistro.page';

describe('RolregistroPage', () => {
  let component: RolregistroPage;
  let fixture: ComponentFixture<RolregistroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RolregistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

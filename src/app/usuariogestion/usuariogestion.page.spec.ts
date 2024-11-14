import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariogestionPage } from './usuariogestion.page';

describe('UsuariogestionPage', () => {
  let component: UsuariogestionPage;
  let fixture: ComponentFixture<UsuariogestionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariogestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

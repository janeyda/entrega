import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilgestionPage } from './perfilgestion.page';

describe('PerfilgestionPage', () => {
  let component: PerfilgestionPage;
  let fixture: ComponentFixture<PerfilgestionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilgestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

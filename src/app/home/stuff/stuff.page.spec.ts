import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StuffPage } from './stuff.page';

describe('ContactsPage', () => {
  let component: StuffPage;
  let fixture: ComponentFixture<StuffPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StuffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

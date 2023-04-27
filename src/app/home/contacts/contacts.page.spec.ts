import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CameraPage } from './contacts.page';

describe('ContactsPage', () => {
  let component: CameraPage;
  let fixture: ComponentFixture<ContactsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

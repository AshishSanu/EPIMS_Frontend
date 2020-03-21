import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddUserRolesPage } from './add-user-roles.page';

describe('AddUserRolesPage', () => {
  let component: AddUserRolesPage;
  let fixture: ComponentFixture<AddUserRolesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserRolesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddUserRolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

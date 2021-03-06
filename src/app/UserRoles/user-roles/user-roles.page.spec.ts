import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserRolesPage } from './user-roles.page';

describe('UserRolesPage', () => {
  let component: UserRolesPage;
  let fixture: ComponentFixture<UserRolesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRolesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserRolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

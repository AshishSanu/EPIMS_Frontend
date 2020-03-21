import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewPolesPage } from './view-poles.page';

describe('ViewPolesPage', () => {
  let component: ViewPolesPage;
  let fixture: ComponentFixture<ViewPolesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPolesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

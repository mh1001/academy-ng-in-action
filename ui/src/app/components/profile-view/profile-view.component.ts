import { Component, Input } from '@angular/core';
// import { ProfileParams } from 'src/app/features/profile/profile-routing.module';
import { User } from 'src/app/services';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.scss'
})
export class ProfileViewComponent {


  @Input() myProfile: User;

}

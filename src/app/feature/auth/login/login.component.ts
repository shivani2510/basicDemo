import {Component, OnInit} from '@angular/core';
import {UserLoginProto} from '../auth.constants';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {ToasterService} from '../../../core/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public user: UserLoginProto = new UserLoginProto();

  constructor(private authService: AuthService, private router: Router, private toasterService: ToasterService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.authenticateUser(this.user).subscribe((response) => {
      if (response.isAdmin) {
        this.router.navigate(['admin/dashboard']);
      } else if (response.isStaff) {
        this.router.navigate(['staff/dashboard']);
      } else {
        this.toasterService.showToast('Please enter correct credentials.', 'error');
      }
    }, (reject) => {

    })
  }

}

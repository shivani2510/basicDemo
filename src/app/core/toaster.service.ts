/**
 * Created by shivani on 25/4/17.
 * updated by ganeshramk on 28/9/17
 */
import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';


@Injectable()
export class ToasterService {
  constructor(public snackBar: MatSnackBar) {
  }

  /***************************************************************
   * For show success with action
   * this.toasterService.showToast("Hello", "success", "ok")
   * For show Error with action
   * this.toasterService.showToast("Hello", "error", "ok")
   * *************************************************************/
  showToast(message: string, type: string, action?: string) {
    let cl = 'toasterSuccessClass';
    if (type === 'error') {
      cl = 'toasterErrorClass';
    }
    this.snackBar.open(message, action, {
      duration: 3000,
      extraClasses: [cl]
    });
  }

}

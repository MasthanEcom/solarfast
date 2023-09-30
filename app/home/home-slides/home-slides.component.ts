import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-home-slides',
  templateUrl: './home-slides.component.html',
  styleUrls: ['./home-slides.component.scss']
})
export class HomeSlidesComponent {
 
  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  entryScreen_step = false;
  entryScreenOne_step = false;
  entryScreenTwo_step = false;
  entryScreenThree_step = false;
  step = 1;

  constructor(private formBuilder: FormBuilder) { }
  entryScreen: any[] = [
    {
      img: 'assets/1/homeowner.svg',
      type: 'Home Owner',
    },
    {
      img: 'assets/1/renting.svg',

      type: 'Renting',
    },
    {
      img: 'assets/1/landlord.svg',

      type: 'Landlord',
    }
  ];
  entryScreenOne: any[] = [
    {
      img: 'assets/2/detached.svg',
      type: 'Detached',
    },
    {
      img: 'assets/2/semi-detached.svg',

      type: 'Semi-Detached',
    },
    {
      img: 'assets/2/terraced.svg',

      type: 'Terraced',
    },
    {
      img: 'assets/2/bungalow.svg',

      type: 'Bengalow',
    },
    {
      img: 'assets/2/flat.svg',

      type: 'Flat',
    }
  ];
  entryScreenTwo: any[] = [
    {
      img: 'assets/3/pitched.svg',
      type: 'Pitched',
    },
    {
      img: 'assets/3/dormer.svg',

      type: 'Dormer',
    },
    {
      img: 'assets/3/flat.svg',

      type: 'Flat',
    }
  ];
  entryScreenThree: any[] = [
    {
      img: 'assets/4/yes.svg',
      type: 'Yes',
    },
    {
      img: 'assets/4/no.svg',

      type: 'No',
    }
  ];
  ngOnInit() {

    // this.personalDetails = this.formBuilder.group({
    //     name: ['', Validators.required],
    //     email: ['', Validators.required],
    //     phone: ['',Validators.required]
    // });

    // this.addressDetails = this.formBuilder.group({
    //     city: ['', Validators.required],
    //     address: ['', Validators.required],
    //     pincode: ['',Validators.required]
    // });

    // this.educationalDetails = this.formBuilder.group({
    //     highest_qualification: ['', Validators.required],
    //     university: ['', Validators.required],
    //     total_marks: ['',Validators.required]
    // });
  }

  // get personal() { return this.personalDetails.controls; }

  // get address() { return this.addressDetails.controls; }

  // get education() { return this.educationalDetails.controls; }
  next(card: any) {

    if (this.step == 1) {
      this.entryScreen_step = true;
      if (false) { return }
      this.step++
    }

    else if (this.step == 2) {
      this.entryScreenOne_step = true;
      if (false) { return }
      this.step++;
    }    
    
    else if (this.step == 3) {
      this.entryScreenTwo_step = true;
      if (false) { return }
      this.step++;
    }

    else if (this.step == 3) {
      this.entryScreenThree_step = true;
      if (false) { return }
      this.step++;
    }


  }

  previous() {
    this.step--

    if (this.step == 1) {
      this.entryScreen_step = false;
    }
    if (this.step == 2) {
      this.entryScreenOne_step = false;
    }
    if (this.step == 2) {
      this.entryScreenTwo_step = false;
    }
    if (this.step == 2) {
      this.entryScreenThree_step = false;
    }

  }

  submit() {

    if (this.step == 4) {
      this.entryScreenThree_step = true;
      if (false) { return }
      alert("Well done!!")
    }
  }


}

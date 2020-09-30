import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { validateCity, validateCityWithParams } from '../../shared/validation/city-validator';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit {
  id: string;
  showDetails: string;
  showWarning = false;
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });

    this.editForm = this.fb.group({
      id: [0],
      from: ['Graz', [
        Validators.required,
        validateCity
      ]],
      to: ['Hamburg', [
        Validators.minLength(3),
        validateCityWithParams([
          'Wien', 'Madrid'
        ])
      ]],
      date: [new Date().toISOString()]
    });

    this.editForm.valueChanges
      .pipe(
        debounceTime(300)
      ).subscribe(console.log);
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }

}

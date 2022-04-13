import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../services/data.service';
@Component({
  selector: 'add-pet',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddPetComponent implements OnInit {
  petsForm: FormGroup;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.petsForm = new FormGroup({
      petType: new FormControl('', Validators.required),
      description: new FormControl('')
    })
  }

  onSubmit() {
    this.dataService.addPet(this.petsForm.value)
  }
}

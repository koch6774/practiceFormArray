import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
// import { SkillData } f rom './home.model';


@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  @ViewChild('labelImport',{static: false}) labelImport: ElementRef;
  jobForm:FormGroup;
  fileToUpload: File = null;
  constructor(private formBuilder:FormBuilder, private http:DataService) { }

  ngOnInit() {
    this.jobForm = this.formBuilder.group({
      Name:['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      Email:['', [Validators.required, Validators.email]],
      Address:[''],
      Country:[''],
      State:[''],
      City:[''],
      Location:[''],
      Experience:[''],
      importFile:[''],
      data:this.formBuilder.array([
        this.formBuilder.group({
          SkillName:[''],
          Description:[''],
          SkillLevel:['']
        })
      ])
    })
  }

  get f() { return this.jobForm.controls; }

  get data() {
    return this.jobForm.get('data') as FormArray;
  }

  addWorkout(){
     this.data.push(this.formBuilder.group({
      SkillName:new FormControl (""),
      Description: new FormControl (""),
      SkillLevel: new FormControl ("")
    }));

    console.log(this.data.value);
  }

  removeWorkout(index){
      this.data.removeAt(index);
  }

  onFileChange(files: FileList) {
    console.log(files);
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }

  onSubmit(e:FormGroup){
    console.log(e.value);
  }
}

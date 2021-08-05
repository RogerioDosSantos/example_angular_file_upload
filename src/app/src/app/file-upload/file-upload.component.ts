import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})


export class FileUploadComponent implements OnInit {

  selectedFile = null;

  constructor() { }

  ngOnInit() {
  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }

  onUpload(scope){
    console.log(this.selectedFile);
  }

}

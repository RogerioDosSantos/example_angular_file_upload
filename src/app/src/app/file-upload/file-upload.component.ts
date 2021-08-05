import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})


export class FileUploadComponent implements OnInit {

  selectedFile = null;

  constructor(private httpClient: HttpClient){
  }

  ngOnInit() {
  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }

  onUpload(scope){
    console.log(this.selectedFile);
    var t1 = this.httpClient.get('www.google.com');
    console.log(t1);
    //this.httpClient.post('');
  }

}

import { Component, OnInit } from '@angular/core';
import { FadeInTop } from 'app/shared/animations/fade-in-top.decorator';
import { FileService } from 'app/dfc/services/files.service';


@FadeInTop()
@Component({
  selector: 'file-app',
  templateUrl: './files.component.html',
})
export class filesComponent implements OnInit {
  message: string;
  fileToUpload: File = null;
  
  constructor(private fileService: FileService) { }

  ngOnInit() {}

fileList:Array<File>;
fileLoaded(element){
  this.fileList=element.target.files;
}
  handleFileInput() {
    this.fileToUpload =this.fileList[0]; // this is where the problem is coming from
    console.log(this.fileToUpload);
}


uploadFileToActivity() {
  
  this.fileService.postFile(this.fileToUpload).subscribe(data => {
    // do something, if upload success
    }, error => {
      console.log(error);
    });
}


  // onPicked(input: HTMLInputElement){
  //   const file = input.files[0]; // this is where the problem is coming from
  //   if (file){
  //     this.fileService.uploadFile(file).subscribe(
  //       msg => {
  //         input.value = null;
  //         this.message = msg;
  //       }
  //     );
  //   }
  // }
}

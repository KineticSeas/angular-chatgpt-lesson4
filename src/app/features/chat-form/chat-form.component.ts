import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  data: any;
  content: any;


  constructor(private _dataService: DataService) { }

  ngOnInit(): void { }

  postForm() {
    let formData: any = {
      content: this.content
    }
    console.log(formData);
    this._dataService.postForm("chat", formData).subscribe((data:any)=>{
      this.data=data;
      console.log(this.data)
      alert(this.data['choices'][0]['message']['content'])
     });
  }

}

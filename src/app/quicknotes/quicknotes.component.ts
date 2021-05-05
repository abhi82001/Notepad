import { Component, OnInit } from '@angular/core';

export class Quicknotes {
  title!: String;
  content!: String;
  todo!: String;
}

@Component({
  selector: 'app-quicknotes',
  templateUrl: './quicknotes.component.html',
  styleUrls: ['./quicknotes.component.css']
})
export class QuicknotesComponent implements OnInit {

  titleModel: String;
  contentModel: String;
  todoModel : String;
  quicknotes: Quicknotes[];

  constructor() {
    this.titleModel = '';
    this.contentModel = '';
    this.todoModel = '';

    const defaultQuicknotes : Quicknotes = {
      title: 'My note',
      content: 'This is Default note',
      todo: 'This is a default time you want to your task done'
    };
    this.quicknotes = [ defaultQuicknotes ];
   }

  ngOnInit(): void {
  }

     createQuicknotes() {
       const newQuicknotes: Quicknotes = {
         title: this.titleModel,
         content: this.contentModel,
         todo :this.todoModel
       };
       this.quicknotes.push ( newQuicknotes );

       //set the model values to '' again
       this.titleModel = this.todoModel = this.contentModel = '';

      }

      deletenotes(notes: any) {
        //console.log(notes)
        let index = this.quicknotes.indexOf(notes)
        //console.log(index)
        this.quicknotes.splice(index, 1);
        //console.log(this.quicknotes)
      }
}

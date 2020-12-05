import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css']
})
export class DndComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  backlog = [
    "Hero section to be improved based on the new feedback",
    "Add one more type of chart to the left hand"
  ];
  inProgress = [
    "Copywriting review for all copies inside app",
    "H1, H2 and all titles need tags for better performance",
    "improve colors to have a better constant"
  ];
  inReview = [
    "Update for newest iOS build"
  ];
  finished = [
   "Update for newest iOS build",
   "Find new ways to make it look more minimal and clean",
   "User experience needsd to be tested on all devices"
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      debugger
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      debugger
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  fromBacklog(i, val){
    var get;
    if(val == "workInProgress" ){
      get = this.backlog[i];
      this.backlog.splice(i, 1);
      this.inProgress.push(get);
    }else if(val == "inReview"){
      get = this.backlog[i];
      this.backlog.splice(i, 1);
      this.inReview.push(get);
    }else if( val == "finished"){
      get = this.backlog[i];
      this.backlog.splice(i, 1);
      this.finished.push(get);
    }else{

    }
  }
  fromInProgress(i, val){
    var get;
    if(val == "Backlog" ){
      get = this.inProgress[i];
      this.inProgress.splice(i, 1);
      this.backlog.push(get);
    }else if(val == "inReview"){
      get = this.inProgress[i];
      this.inProgress.splice(i, 1);
      this.inReview.push(get);
    }else if( val == "finished"){
      get = this.inProgress[i];
      this.inProgress.splice(i, 1);
      this.finished.push(get);
    }else{

    }
  }
  fromInReview(i, val){
    var get;
    if(val == "Backlog" ){
      get = this.inReview[i];
      this.inReview.splice(i, 1);
      this.backlog.push(get);
    }else if(val == "workInProgress"){
      get = this.inReview[i];
      this.inReview.splice(i, 1);
      this.inProgress.push(get);
    }else if( val == "finished"){
      get = this.inReview[i];
      this.inReview.splice(i, 1);
      this.finished.push(get);
    }else{

    }
  }
  fromFinished(i, val){
    var get;
    if(val == "Backlog" ){
      get = this.finished[i];
      this.finished.splice(i, 1);
      this.backlog.push(get);
    }else if(val == "workInProgress"){
      get = this.finished[i];
      this.finished.splice(i, 1);
      this.inProgress.push(get);
    }else if( val == "inReview"){
      get = this.finished[i];
      this.finished.splice(i, 1);
      this.inReview.push(get);
    }else{

    }
  }
}

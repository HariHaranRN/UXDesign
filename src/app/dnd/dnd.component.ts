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
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}

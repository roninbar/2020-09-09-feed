import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() description: string;
  @Input() imageurl: string;
  @Output() likesChanged: EventEmitter<number> = new EventEmitter<number>();

  likes: number = 0;

  constructor() { }

  onClickLike() {
    this.likes++;
    this.likesChanged.emit(this.likes);
  }

  ngOnInit(): void {
  }

}

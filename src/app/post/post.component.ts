import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() description: string;
  @Input() imageurl: string;
  @Output() likesChanged: EventEmitter<object> = new EventEmitter<object>();

  likes: number = 0;

  constructor() {}

  onClickLike() {
    this.likes++;
    this.likesChanged.emit({
      description: this.description,
      likes: this.likes,
    });
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  posts = [
    {
      description: 'Stan',
      imageUrl:
        'http://southparkstudios.mtvnimages.com/shared/characters/kids/stan-marsh.png?height=165',
    },
    {
      description: 'Kyle',
      imageUrl:
        'http://southparkstudios.mtvnimages.com/shared/characters/kids/kyle-broflovski.png?height=165',
    },
    {
      description: 'Cartman',
      imageUrl:
        'http://southparkstudios.mtvnimages.com/shared/characters/kids/eric-cartman.png?height=165',
    },
    {
      description: 'Kenny',
      imageUrl:
        'http://southparkstudios.mtvnimages.com/shared/characters/kids/kenny-mccormick.png?height=165',
    },
  ];

  searchTerm: string = '';
  totalLikes: number = 0;

  constructor() {}

  onLikesChanged({ description, likes }) {
    console.info(description, likes);
    this.totalLikes++;
  }

  onKeyUpSearch({ target: { value } }) {
    this.searchTerm = value.toLowerCase();
  }

  ngOnInit(): void {}
}

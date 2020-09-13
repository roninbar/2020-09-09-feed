import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

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
      likes: 0,
    },
    {
      description: 'Kyle',
      imageUrl:
        'http://southparkstudios.mtvnimages.com/shared/characters/kids/kyle-broflovski.png?height=165',
      likes: 0,
    },
    {
      description: 'Cartman',
      imageUrl:
        'http://southparkstudios.mtvnimages.com/shared/characters/kids/eric-cartman.png?height=165',
      likes: 0,
    },
    {
      description: 'Kenny',
      imageUrl:
        'http://southparkstudios.mtvnimages.com/shared/characters/kids/kenny-mccormick.png?height=165',
      likes: 0,
    },
  ];

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: 'Likes',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        type: 'pie',
        name: 'Brands',
        colorByPoint: true,
        data: this.getChartSeriesData(),
      },
    ],
  }; // required
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngularFlag: boolean = false; // optional boolean, defaults to false

  searchTerm: string = '';

  constructor() {}

  private getChartSeriesData() {
    const totalLikes = this.posts.reduce((a, { likes: b }) => a + b, 0);
    return this.posts.map(({ description, likes }) => [
      description,
      (likes / totalLikes) * 100,
    ]);
  }

  onLikesChanged(index, { likes }) {
    this.posts[index].likes = likes;
    const series = <Highcharts.SeriesPieOptions>this.chartOptions.series[0];
    series.data = this.getChartSeriesData();
    this.updateFlag = true;
  }

  onKeyUpSearch({ target: { value } }) {
    this.searchTerm = value.toLowerCase();
  }

  ngOnInit(): void {}
}

import { Component, ViewChild, OnInit } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-corebusiness',
  templateUrl: './corebusiness.component.html',
  styleUrls: ['./corebusiness.component.less']
})
export class CorebusinessComponent implements OnInit{
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  panelOpenState: boolean = false;
  constructor(    
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document:any) {}

    ngOnInit() {
      const s = this.renderer2.createElement('script');
      s.type = 'text/javascript';
      s.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
      s.text = `{
        "interval": "1D",
        "width": "640",
        "isTransparent": true,
        "height": "575",
        "symbol": "BINANCE:BTCUSDT",
        "showIntervalTabs": true,
        "locale": "it",
        "colorTheme": "dark"
      }`;
      this.renderer2.appendChild(this._document.querySelector('.tradingview-widget-container'), s);
   }    
}

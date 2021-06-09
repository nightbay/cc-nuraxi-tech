import { Component, ViewChild, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-corebusiness',
  templateUrl: './corebusiness.component.html',
  styleUrls: ['./corebusiness.component.less']
})
export class CorebusinessComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  panelOpenState: boolean = false;

  exchangeCards: Array<any> = [
    { title: "Binance", href: "https://www.binance.com/en/register?ref=C0P3DKJ8", img: "/assets/binance.jpg", alt: "Binance" },
    { title: "Kraken", href: "https://www.kraken.com/", img: "/assets/kraken.jpg", alt: "Kraken" },
    { title: "FTX", href: "https://ftx.com/#a=14098700", img: "/assets/ftx.png", alt: "FTX" },
    { title: "Bitstamp", href: "https://www.bitstamp.net/ref/r99Pp9WwDMiZcVDH/", img: "/assets/bitstamp.jpg", alt: "Bitstamp" },
  ];

  ceFiCards: Array<any> = [
    { title: "Celsius Network", href: "https://celsiusnetwork.app.link/10923570d6", img: "/assets/celsius.png", alt: "Celsius Network" },
    { title: "Nexo", href: "https://platform.nexo.io", img: "/assets/nexo.png", alt: "Nexo" },
    { title: "BlockFI", href: "https://blockfi.com/?ref=0dbbb540", img: "/assets/blockfi.png", alt: "BlockFI" },
    { title: "Crypto.com", href: "https://crypto.com/app/yyst3h7k6t", img: "/assets/crypto-com.jpg", alt: "Crypto.com" },    
  ];

  deFiCards: Array<any> = [
    { title: "PancakeSwap", href: "https://pancakeswap.finance", img: "/assets/pancake.jpg", alt: "PancakeSwap", blockchain : "Binance Smart Chain"  },
    { title: "Venus Finance", href: "https://app.venus.io", img: "/assets/venus.jpg", alt: "Venus", blockchain : "Binance Smart Chain"  },
    { title: "Advanced Crypto Strategies", href: "https://app.acryptos.com/", img: "/assets/acs.jpg", alt: "ACS", blockchain : "Binance Smart Chain"  },
    { title: "Raydium", href: "https://raydium.io/", img: "/assets/raydium.jpg", alt: "Raydium", blockchain : "Solana"  },    
    { title: "Solfarm", href: "https://solfarm.io/", img: "/assets/solfarm.jpg", alt: "Solfarm", blockchain : "Solana"  },    
    { title: "AAVE", href: "https://app.aave.com/markets", img: "/assets/aave.jpg", alt: "AAVE on Polygon", blockchain : "Polygon"  },    
    { title: "Curve", href: "https://polygon.curve.fi/", img: "/assets/curve.jpg", alt: "Curve on Polygon", blockchain : "Polygon"  },    
    { title: "SushiSwap", href: "https://app.sushi.com/yield", img: "/assets/sushiswap.jpg", alt: "SushiSwap", blockchain : "Polygon"  },    
  ];  

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: any) { }

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

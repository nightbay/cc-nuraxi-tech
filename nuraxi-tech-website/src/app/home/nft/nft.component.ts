import { Component, ViewChild, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NftComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  constructor() { }

  panelOpenState: boolean = false;
  nftCards: Array<any> = [
    { title: "Rarible", href: "https://rarible.com/", img: "/assets/rarible.png", alt: "Rarible" },
    { title: "OpenSea", href: "https://opensea.io/", img: "/assets/opensea.png", alt: "OpenSea" },
    { title: "Crypto.com NFT", href: "https://crypto.com/nft", img: "/assets/crypto-com-nft.png", alt: "Crypto.com NFT" },
    { title: "FTX NFT", href: "https://ftx.com/nfts", img: "/assets/ftx-nft.jpg", alt: "FTX NFT" }
  ];
  ngOnInit(): void {
  }

}

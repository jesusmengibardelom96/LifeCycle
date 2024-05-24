import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input()
  public price: number = 0

  public inteval$?: Subscription

  ngOnInit(): void {
    console.log('Componente Hijo: ngOnInit')
    this.inteval$ = interval(1000).subscribe( value => console.log(`Tick: ${value}`))
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});

    console.log('Componente Hijo: ngOnChanges')
  }
  ngOnDestroy(): void {
    console.log('Componente Hijo: ngOnDestroy')
    this.inteval$?.unsubscribe()
  }
}

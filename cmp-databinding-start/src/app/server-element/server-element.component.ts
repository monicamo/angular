import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { name: string, type: string, content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true}) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('-- Construtor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('-- ngOnChanges called', changes);
    this.name = 't e s t e';
  }

  ngOnInit(): void {
    console.log('-- ngOnInit called textContent ');
    console.log('-- ngonInit HEADING ' + this.header.nativeElement.textContent);
    console.log('-- ngOnInit PARAG ' +  this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('-- ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('-- ngAfterContentInit called');
    console.log('-- PARAGRAPH ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('-- ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('-- ngAfterViewInit called');
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('-- ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('-- ngOnDestroy called');
  }

}

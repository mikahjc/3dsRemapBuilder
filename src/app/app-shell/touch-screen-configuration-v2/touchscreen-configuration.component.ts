import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Mapping} from '../../../../shared/model/mapping';
import {Buttons} from '../../../../shared/model/buttons';
import {Coordinates} from '../../../../shared/model/coordinates';
import { BoundingCoordinates } from 'shared/model/bounding-coordinates';

@Component({
  selector: 'app-touchscreen-configuration-v2',
  templateUrl: './touchscreen-configuration.component.html',
  styleUrls: ['./touchscreen-configuration.component.css']
})
export class TouchscreenConfigurationComponentV2 implements OnInit, AfterViewInit {

  @Input() mappings: Array<Mapping<BoundingCoordinates, Buttons>>;
  @Input() rehidMode: boolean;
  @Output() mappingsChange = new EventEmitter<Array<Mapping<BoundingCoordinates, Buttons>>>();
  @ViewChild('tsViewport', {static: false}) tsCanvas: ElementRef<HTMLCanvasElement>
  private canvasContext: CanvasRenderingContext2D
  currentMapping: Mapping<BoundingCoordinates, Buttons>;
  background: string;
  backgroundBitmap: ImageBitmap;
  private mouseDownCoords: number[]
  constructor() {
    this.currentMapping = new Mapping(new BoundingCoordinates(), new Buttons());
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.canvasContext = this.tsCanvas.nativeElement.getContext('2d')
    this.drawNewBoundingRect(500, 500, 500, 500)
  }

  async onTouchscreenFileSelect(event) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.backgroundBitmap = await createImageBitmap(file)
      this.canvasContext.drawImage(this.backgroundBitmap, 0, 0)
    }
  }

  saveCurrent() {
    this.mappings.push(this.currentMapping);
    this.currentMapping = new Mapping(new BoundingCoordinates(), new Buttons());
    this.drawNewBoundingRect(500, 500, 500, 500)
  }

  loadMapping(mapping: Mapping<BoundingCoordinates, Buttons>) {
    if (mapping === this.currentMapping) {
      this.currentMapping = new Mapping(new BoundingCoordinates(), new Buttons());
    } else {
      this.currentMapping = mapping;
      this.drawNewBoundingRect(mapping.input.x, mapping.input.y, mapping.input.x + mapping.input.w, mapping.input.y + mapping.input.h)
    }
  }

  deleteMapping(mapping: Mapping<BoundingCoordinates, Buttons>) {
    this.mappings = this.mappings.filter((value) => value !== mapping);
    this.mappingsChange.emit(this.mappings);
  }

  getBackground(): string {
    return `url(${this.background})`;
  }

  reportClick(event: MouseEvent) {
    const rect = this.tsCanvas.nativeElement.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    this.canvasContext.clearRect(0, 0, this.tsCanvas.nativeElement.width, this.tsCanvas.nativeElement.height)
    if (this.backgroundBitmap != null) {
      this.canvasContext.drawImage(this.backgroundBitmap, 0, 0)
    }
    this.canvasContext.fillStyle = 'red'
    this.canvasContext.fillRect(mouseX - 1, 0, 3, 240)
    this.canvasContext.fillRect(0, mouseY - 1, 320, 3)
  }

  tsMouseDown(event: MouseEvent) {
    const coords = this.getCanvasCoordinates(event)
    this.mouseDownCoords = coords
  }

  tsMouseMove(event: MouseEvent) {
    if (this.mouseDownCoords != null) {
      const coords = this.getCanvasCoordinates(event)
      this.currentMapping.input.x = this.mouseDownCoords[0]
      this.currentMapping.input.y = this.mouseDownCoords[1]
      this.currentMapping.input.w = coords[0] - this.mouseDownCoords[0]
      this.currentMapping.input.h = coords[1] - this.mouseDownCoords[1]
      this.drawNewBoundingRect(this.mouseDownCoords[0], this.mouseDownCoords[1], coords[0], coords[1])
    }
  }

  tsMouseUp(event: MouseEvent) {
    this.mouseDownCoords = undefined
  }

  tsMouseLeave() {
    if (this.mouseDownCoords != null) {
      this.mouseDownCoords = undefined
      this.drawNewBoundingRect(500, 500, 500, 500)
    }
  }

  reset() {
    this.currentMapping.input = new BoundingCoordinates()
    this.drawNewBoundingRect(500, 500, 500, 500)
  }

  getCanvasCoordinates(event: MouseEvent): number[] {
    const rect = this.tsCanvas.nativeElement.getBoundingClientRect()
    return [event.clientX - rect.left, event.clientY - rect.top]
  }

  drawNewBoundingRect(x1: number, y1: number, x2: number, y2: number) {
    this.canvasContext.clearRect(0, 0, this.tsCanvas.nativeElement.width, this.tsCanvas.nativeElement.height)
    if (this.backgroundBitmap != null) {
      this.canvasContext.drawImage(this.backgroundBitmap, 0, 0)
    } else {
      this.canvasContext.strokeStyle = 'lightgrey'
      this.canvasContext.strokeRect(0, 0, 320, 240)
    }
    this.canvasContext.strokeStyle = 'red'
    this.canvasContext.strokeRect(x1, y1, x2 - x1, y2 - y1)
  }

}

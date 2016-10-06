import { BLUE,RED } from "./constants";
@component({
	selector:'color-picker',
	template:`
		<div class="color-title">Pick a color</div>
		<div class="color-picker">
		<div class="color-sample color-sample-blue" (click)="choose('${BLUE}')"></div>
		<div class="color-sample color-sample-red" (click)="choose('${RED}')"></div>
		</div>
	`
})
export class ColorPicker{
	@Output()
	color=new EventEmitter();
	choose(color){
		this.color.emit(color);
	}
	reset(){
		this.color.emit()
	}
}
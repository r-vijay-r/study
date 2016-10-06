@Component({
	selector:'color-previewer',
	template:`
		<div class="color-previewer" [ngStyle]="{color:color}">
			preview text color
		</div>
	`
})
export class ColorPreviewer{
	@Input()
	color:string;
}
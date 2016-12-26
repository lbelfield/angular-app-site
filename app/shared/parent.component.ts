class ParentController {
    public childVisible: boolean;
    public childSavingIndicator: string;

    public constructor() {
        console.log("hello");
        this.childVisible = true;
        this.childSavingIndicator = "start";
    }

    public showChild():void {
        this.childVisible = true;
        this.childSavingIndicator = "hello";
    }

    public hideChild():void {
        this.childVisible = false;
        this.childSavingIndicator = "world";
    }

}

class ParentComponent {
    public controller: typeof ParentController;
    public template: any;

    public constructor(){
        this.controller = ParentController;
        this.template = require("../../app/shared/parent.html");        
    }
}

export default ParentComponent;
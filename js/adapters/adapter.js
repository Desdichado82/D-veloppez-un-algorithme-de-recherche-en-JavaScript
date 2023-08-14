import Dropdown from './dropdownClass.js';
import badgeHandler from './badgeHandler.js';

export default class dropdownAdapter{
    constructor(containerId,options,onSelect){
        this.dropdown = new Dropdown(containerId, options, this.onSelect.bind(this));
    }

    onSelect(option){
        badgeHandler.addBadge({value:option,dropdown:this});
    }
}
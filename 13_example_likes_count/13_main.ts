import { LikeComponent } from './13_example01_typescript';

let component = new LikeComponent(10, true);


component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`)
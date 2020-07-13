interface ClassNamesObject { 
      [key: string]: boolean;
}
export const classNames = (classes: ClassNamesObject) : string => {
      return Object.keys(classes).filter(key => classes[key]).join(' ');
}
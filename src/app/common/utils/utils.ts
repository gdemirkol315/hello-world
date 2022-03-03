
export class Utils{

  static FindAndDeleteFromArray(array:any, element:any){
    let index = array.indexOf(element);
    return array.splice(index,1);
  }

}

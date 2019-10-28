window.onload = function() {
    setTimeout("switch_Image()", 20);
}
var currImage = 1;
var num_image = 144;
function switch_Image(){
    currImage++;
    var s = sloveNumber(currImage,3);
    document.images['image'].src='./image/'+ s +'.jpg';
    if(currImage < num_image)
        setTimeout("switch_Image()",20);
    else if(currImage == num_image){
            currImage = 1;
            setTimeout("switch_Image()", 20);
    }
}
function sloveNumber(number,format){
    var length = number.toString().length;
    var s = '';
    for(i=0;i<(format-length);i++){
        s += '0';
    }
    return s + number;
}

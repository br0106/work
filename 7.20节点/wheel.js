function wheel(wins, opts) {
    var wins = document.querySelector(wins);
    if (!wins && wins.nodeType == 1) {
        console.error("窗口元素not defind");
        return;
    }
    var imgLength = opts.img.length;
    console.log(imgLength)
    if (imgLength == 0) {
        console.error("没有相应的轮播图内容")
        return;
    }
    // var imgSize = opts.imgSize.length;
    // if (!(imgSize instanceof Array)) {
    //     console.error("请传入合理的尺寸类型")
    // }
    var imgColor=opts.imgColor;
    var links = opts.links;
    var btnColor = opts.btnColor || "red";
    var btnSelect = opts.btnSelect || "blue";
    var btnPos = opts.btnPos || ["center", "40"];
    var box = document.createElement("div");
    box.style.cssText = "width:" + imgLength * 100 + "%;height:100%;border=1px solid red";
    wins.appendChild(box);
    for (var i = 0; i < imgLength.length; i++) {
        var divList=document.createElement("div");
        divList.style.cssText=`float:left;width:${100/imgLength}%;height:100%;background:${opts.imgColor[i]};
        border:1px solide red`;
        box.appendChild(divList)
        
    }    
    
}
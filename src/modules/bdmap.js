module.exports = function () {

    var map = new BMap.Map("bdmap",{enableMapClick:false});
    var point = new BMap.Point(121.441112,31.22588);
	map.centerAndZoom(point, 16);  // 初始化
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);               // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    var label = new BMap.Label("嘉春753E栋8楼",{offset:new BMap.Size(20,-10)});
	marker.setLabel(label);

}
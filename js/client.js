var chosenTool1 = 0;
var chosenTool2 = 0;
var GlobalStyleStorage;
function setAsDefault(){
	var FontDefault = [["Family", "Nunito"], ["Color", "#000"], ["FontSize", "14"], ["FontStyle", "normal"], ["FontBold", "normal"]];
	var BorderDefault = [["Color", "#000"], ["Width", "2"], ["Radius", "2"]];
	var BackgroundDefault = [["Color", "#fff"], ["Opacity", "100"]];
	var DotBackgroundDefault = [["Color", "#000"], ["Opacity", "0"]];
	var FontBackgroundDefault = [["Color", "#000"], ["Opacity", "0"]];
	var EdgeBackgroundDefault = [["Color", "#000"], ["Opacity", "100"]];
	var CellDefault = [["Background", [['Custom', false], ['Color', '#fff'], ['Opacity', '100']]], ["Border", BorderDefault], ["Padding", "1"], ["Spacing", "1"]];
	GlobalStyleStorage = [
		["Global", [
			["Background", BackgroundDefault],
			["Font", FontDefault]]
		],
		["Dot", [
			["Background", [['Custom', false], ['Color', '#fff'], ['Opacity', '100']]],
			["Border", BorderDefault],
			['Font', [['Custom', false], ["Family", "Nunito"], ["Color", "#000"], ["FontSize", "14"], ["FontStyle", "normal"], ["FontBold", "normal"]]],
			["DotType", '0'],
			["ContentType", '0-index']]
		],
		["Edge", [
			["Background", EdgeBackgroundDefault],
			["Width", '2'],
			["Index", [
				["Background", [['Custom', false], ['Color', '#fff'], ['Opacity', '100']]],
				['Font', [['Custom', false], ["Family", "Nunito"], ["Color", "#000"], ["FontSize", "14"], ["FontStyle", "normal"], ["FontBold", "normal"]]],
				["Border", BorderDefault]
			]],
			["DirectionType", '0'],
			["DirectionSize", '14']]
		],
		["Table", [
			["CellWidth", '50'],
			["CellHeight", '50'],
			["Background", [['Custom', false], ['Color', '#fff'], ['Opacity', '100']]],
			["Border", BorderDefault],
			['Font', [['Custom', false], ["Family", "Nunito"], ["Color", "#000"], ["FontSize", "14"], ["FontStyle", "normal"], ["FontBold", "normal"]]],
			["Secondary",[
				["On", false],
				["Expression", 'x&1==0'],
				["Cell", CellDefault]
			]]]
		],
		["Text", [
			["Background", [['Custom', false], ['Color', '#fff'], ['Opacity', '100']]],
			['Border', BorderDefault],
			['Font', [['Custom', false], ["Family", "Nunito"], ["Color", "#000"], ["FontSize", "14"], ["FontStyle", "normal"], ["FontBold", "normal"]]]]
		],
	]
}
if((typeof(localStorage.getItem('StyleChosen'))).toLowerCase() != 'array')
	setAsDefault();
else	GlobalStyleStorage = localStorage.getItem('StyleChosen');
var GetIcon = {
	"Background": "fas fa-eye",
	"Font": "fas fa-font",
	"Family": "fas fa-heading",
	"Color": "fas fa-brush",
	"FontSize": "fas fa-text-width",
	"FontStyle": "fas fa-italic",
	"Border": "fas fa-border-all",
	"Width": "fas fa-arrows-alt-h",
	"Radius": "fas fa-square",
	"Padding": "fas fa-border-style",
	"Spacing": "fas fa-border-none",
	"Dot": "far fa-dot-circle",
	"DotType": "fas fa-shapes",
	"ContentType": "far fa-comment-dots",
	"Expression": "fas fa-calculator",
	"Index": "fas fa-sticky-note",
	"Edge": "fas fa-slash fa-flip-vertical",
	"Cell": "fas fa-th",
	"Height": "fas fa-arrows-alt-v",
	"Secondary": "fas fa-adjust",
	"Table": "fas fa-table",
	"Text": "fas fa-i-cursor",
	"Direction": "fas fa-arrow-right",
	"Global": "fas fa-globe",
	"Opacity": "fas fa-chess-board",
	"FontBold": "fas fa-bold",
	"Custom": "fas fa-edit",
	"DirectionType": "fas fa-angle-right",
	"DirectionSize": "fas fa-angle-double-right",
	"CellWidth": "fas fa-arrows-alt-h",
	"CellHeight": "fas fa-arrows-alt-v"
}
function toTitle(x){
	return x;
}
function drawOptions(info, as){
	if(as == 'ContentType')
		return "Still In Progress...";
	var ret = "";
	for(var i=0;i<info.length;i++){
		if((typeof(info[i][1])).toLowerCase() == 'object')
			ret +=`<div><i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center'></i><i class='fas fa-angle-right GraphFolder' style='width:18px;text-align:center;' id='fold'></i> ${toTitle(info[i][0])}<br/><div class="InfoSonList" style="display:none">${drawOptions(info[i][1], info[i][0])}</div></div>`;
		else{
			if(info[i][0] == 'Custom' || info[i][0] == 'On'){
				ret += `<div style="display:flex;flex-direction:row" codeId='${info[i][0]}'><i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><i class="${info[i][1]==true?'fas fa-check-square':'far fa-square'}"></i></div>`;
			}
			else if(info[i][0] == 'Color'){
				ret += `<div style="display:flex;flex-direction:row" codeId='${info[i][0]}'><i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><span class="fas fa-square" style="width:18px;"></span><input style="flex:1;" class="ColorInput" value="${info[i][1]}"/></div>`;
			}
			else if(info[i][0] == 'FontSize'){

			}
			else if(info[i][0] == 'FontBold'){

			}
			else if(info[i][0] == 'FontStyle'){

			}
			else if(info[i][0] == 'Width'){

			}
			else if(info[i][0] == 'Radius'){

			}
			else if(info[i][0] == 'Padding'){

			}
			else if(info[i][0] == 'Spacing'){

			}
			else if(info[i][0] == 'DotType'){

			}
			else if(info[i][0] == 'ContentType'){

			}
			else if(info[i][0] == 'Height'){

			}
			else if(info[i][0] == 'DirectionType'){

			}
			else if(info[i][0] == 'Opacity'){
				ret += `<div codeId='${info[i][0]}'><i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><div style="display:inline-block;float:right"><input type="range" min="0" max="100" value=${info[i][1]} /><div style="display:inline-block;width:30px;">${info[i][1]}</div></div></div>`;
			}
			else if(info[i][0] == 'DirectionSize'){

			}
			else if(info[i][0] == 'CellWidth'){

			}
			else if(info[i][0] == 'CellHeight'){

			}
			else{
				ret += `<div style="display:flex;flex-direction:row" codeId='${info[i][0]}'><i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><input style="flex:1;"  value="${info[i][1]}"/></div>`;
			}
		}
	}
	return ret;
}
function checkColor(x){
	return $(`<span style="color:${x}"></span>`).css("color") != '';
}
function loadGlobalSettingsDetail(){
	$(".InfoDetail").eq(0).html(drawOptions(GlobalStyleStorage, ''));
	$(".ColorInput").each(function(){
		if(!checkColor($(this).val()))
			$(this).prev().attr("class", "fas fa-exclamation-triangle").css("color", "#ffcc00");
		else
			$(this).prev().attr("class", "fas fa-square").css("color", $(this).val());
	});
	$(".ColorInput").bind('input propertychange', function(){
		if(!checkColor($(this).val()))
			$(this).prev().attr("class", "fas fa-exclamation-triangle").css("color", "#ffcc00");
		else
			$(this).prev().attr("class", "fas fa-square").css("color", $(this).val());
	});
	$("div[codeId='Custom']").each(function(){
		if($(this).children("i").eq(1).attr("class") == 'far fa-square')
			$(this).nextAll().each(function(){
				$(this).css('display', 'none');
			});
		$(this).children("i").eq(1).css("cursor", "pointer").click(function(){
			if($(this).attr("class") == 'fas fa-check-square'){
				$(this).attr("class", 'far fa-square');
				$(this).parent().nextAll().each(function(){
					$(this).css('display', 'none');
				});
			}
			else{
				$(this).attr("class", 'fas fa-check-square');
				$(this).parent().nextAll().each(function(){
					$(this).css('display', 'block');
				});
			}
		});
	});
	$("div[codeId='On']").each(function(){
		if($(this).children("i").eq(1).attr("class") == 'far fa-square')
			$(this).nextAll().each(function(){
				$(this).css('display', 'none');
			});
		$(this).children("i").eq(1).css("cursor", "pointer").click(function(){
			if($(this).attr("class") == 'fas fa-check-square'){
				$(this).attr("class", 'far fa-square');
				$(this).parent().nextAll().each(function(){
					$(this).css('display', 'none');
				});
			}
			else{
				$(this).attr("class", 'fas fa-check-square');
				$(this).parent().nextAll().each(function(){
					$(this).css('display', 'block');
				});
			}
		});
	});
	$(`input[type='range']`).bind('input propertychange', function(){
		$(this).next().html($(this).val());
	});
}
loadGlobalSettingsDetail();
$(".GraphFolder").css("cursor","pointer").click(function(){
	if($(this).attr("id") == 'fold')
		$(this).parent().children('.InfoSonList').css('display', 'block'),
		$(this).attr('id', 'unfold').removeClass('fa-angle-right').addClass('fa-angle-down');
	else
		$(this).parent().children('.InfoSonList').css('display', 'none'),
		$(this).attr('id', 'fold').removeClass('fa-angle-down').addClass('fa-angle-right');
})
// 看到这里还以为我写了一万多字的博客，太占内存和视觉距离了

// 然后在自己的svg页面中获取到该svg，我的代码是这个样子的

// var canvas = $("#today_chartcontainer svg")[0];
// //调用方法转换即可，转换结果就是uri,
// svgAsPngUri(canvas, null, function(uri) {

// //这里的uri就是要下载到本地的图片地址，是不是很简单啊
// $("#tabpanel_items").append('<a class="downBtn"; href="'+uri+'" download="图片下载">下载图片</a>');
// });
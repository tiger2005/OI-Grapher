var chosenTool1 = 0;
var chosenTool2 = 0;
var GlobalStyleStorage;
var DotInherit = [["Background",[["Custom","inherit"],["Color","inherit"],["Opacity","inherit"]]],["Border",[["Color","inherit"],["Width","inherit"],["Radius","inherit"]]],["Font",[["Custom","inherit"],["Family","inherit"],["Color","inherit"],["FontSize","inherit"],["FontStyle","inherit"],["FontBold","inherit"]]],["DotType",undefined],["DotSize","inherit"]];
var EdgeInherit = [["Background",[["Color","inherit"],["Opacity","inherit"]]],["Width","inherit"],["Index",[["Background",[["Custom","inherit"],["Color","inherit"],["Opacity","inherit"]]],["Font",[["Custom","inherit"],["Family","inherit"],["Color","inherit"],["FontSize","inherit"],["FontStyle","inherit"],["FontBold","inherit"]]],["Border",[["Color","inherit"],["Width","inherit"],["Radius","inherit"]]]]],["DirectionType",undefined],["DirectionSize","inherit"]];
var TableInherit = [["CellWidth","inherit"],["CellHeight","inherit"],["Background",[["Custom","inherit"],["Color","inherit"],["Opacity","inherit"]]],["Border",[["Color","inherit"],["Width","inherit"],["Radius","inherit"]]],["Font",[["Custom","inherit"],["Family","inherit"],["Color","inherit"],["FontSize","inherit"],["FontStyle","inherit"],["FontBold","inherit"]]],["Secondary",[["On",undefined],["Expression","inherit"],["Cell",[["Background",[["Custom","inherit"],["Color","inherit"],["Opacity","inherit"]]],["Border",[["Color","inherit"],["Width","inherit"],["Radius","inherit"]]],["Padding","inherit"],["Spacing","inherit"]]]]]];
var TextInheit = [["Background",[["Custom","inherit"],["Color","inherit"],["Opacity","inherit"]]],["Border",[["Color","inherit"],["Width","inherit"],["Radius","inherit"]]],["Font",[["Custom","inherit"],["Family","inherit"],["Color","inherit"],["FontSize","inherit"],["FontStyle","inherit"],["FontBold","inherit"]]]];
function setAsDefault(){
	var FontDefault = [["Family", "Nunito"], ["Color", "#000"], ["FontSize", "14"], ["FontStyle", "normal"], ["FontBold", "500"]];
	var BorderDefault = [["Color", "#000"], ["Width", "2"], ["Radius", "2"]];
	var BackgroundDefault = [["Color", "#fff"], ["Opacity", "100"]];
	var DotBackgroundDefault = [["Color", "#000"], ["Opacity", "0"]];
	var FontBackgroundDefault = [["Color", "#000"], ["Opacity", "0"]];
	var EdgeBackgroundDefault = [["Color", "#000"], ["Opacity", "100"]];
	var CellDefault = [["Background", [['Custom', false], ['Color', '#fff'], ['Opacity', '100']]], ["Border", BorderDefault], ["Padding", "1"], ["Spacing", "1"]];
	GlobalStyleStorage = [
		["Global", [
			["Background", BackgroundDefault],
			["Font", FontDefault],
			["ContentType", '0-index']]
		],
		["Dot", [
			["Background", [['Custom', false], ['Color', '#fff'], ['Opacity', '100']]],
			["Border", BorderDefault],
			['Font', [['Custom', false], ["Family", "Nunito"], ["Color", "#000"], ["FontSize", "14"], ["FontStyle", "normal"], ["FontBold", "500"]]],
			["DotType", '0'],
			["DotSize", "20"]]
		],
		["Edge", [
			["Background", EdgeBackgroundDefault],
			["Width", '2'],
			["Index", [
				["Background", [['Custom', false], ['Color', '#fff'], ['Opacity', '100']]],
				['Font', [['Custom', false], ["Family", "Nunito"], ["Color", "#000"], ["FontSize", "14"], ["FontStyle", "normal"], ["FontBold", "500"]]],
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
			['Font', [['Custom', false], ["Family", "Nunito"], ["Color", "#000"], ["FontSize", "14"], ["FontStyle", "normal"], ["FontBold", "500"]]],
			["Secondary",[
				["On", false],
				["Expression", 'x&1==0'],
				["Cell", CellDefault]
			]]]
		],
		["Text", [
			["Background", [['Custom', false], ['Color', '#fff'], ['Opacity', '100']]],
			['Border', BorderDefault],
			['Font', [['Custom', false], ["Family", "Nunito"], ["Color", "#000"], ["FontSize", "14"], ["FontStyle", "normal"], ["FontBold", "500"]]]]
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
	"Radius": "fas fa-square-full",
	"Padding": "fas fa-border-style",
	"Spacing": "fas fa-border-none",
	"Dot": "far fa-dot-circle",
	"DotType": "fas fa-shapes",
	"ContentType": "far fa-comment-dots",
	"Expression": "fas fa-calculator",
	"Index": "fas fa-sticky-note",
	"Edge": "fas fa-slash fa-flip-vertical",
	"Cell": "fas fa-th",
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
	"CellHeight": "fas fa-arrows-alt-v",
	"On": "fas fa-toggle-on"
}
function toTitle(x){
	return x;
}
function drawOptions(info, as, ifDetail){
	if(as == 'ContentType')
		return "Still In Progress...";
	var ret = "";
	for(var i=0;i<info.length;i++){
		if((typeof(info[i][1])).toLowerCase() == 'object')
			ret +=`<div codeid='${info[i][0]}'><i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center'></i><i class='fas fa-angle-right GraphFolder' style='width:18px;text-align:center;' id='fold'></i>${toTitle(info[i][0])}<br/><div class="InfoSonList" style="display:none">${drawOptions(info[i][1], info[i][0], ifDetail)}</div></div>`;
		else{
			var enableInherit = "";
			if(ifDetail){
				enableInherit = `<div class="coverInherit" style="position:absolute;left:40px;top:0px;width:calc(100% - 40px);height:100%;text-align:center;background-color:#666;color:white;${$.trim(info[i][0])!="inherit"?"display:none":""}">Inherit <i class="fas fa-unlock UnlockInherit"></i></div>`;
			}
			if(info[i][0] == 'Custom' || info[i][0] == 'On'){
				ret += `<div style="display:flex;flex-direction:row;position:relative;" codeid='${info[i][0]}'>${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><i class="${info[i][1]==true?'fas fa-check-square':'far fa-square'}"></i>${enableInherit}</div>`;
			}
			else if(info[i][0] == 'Color'){
				ret += `<div style="display:flex;flex-direction:row;position:relative;" codeid='${info[i][0]}'>${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><span class="fas fa-square-full ColorShow"></span>&nbsp;<input style="flex:1;" class="ColorInput" value="${info[i][1]}"/>${enableInherit}</div>`;
			}
			else if(info[i][0] == 'Family'){
				ret += `<div style="display:flex;flex-direction:row;position:relative;" codeid='${info[i][0]}'>${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><span class="FamilyShow" style="width:50px;overflow:hidden;"></span>&nbsp;<input style="flex:1;" class="FamilyInput" value="${info[i][1]}"/>${enableInherit}</div>`;
			}
			else if(info[i][0] == 'FontSize'){
				ret += `<div codeid='${info[i][0]}' style=;position:relative;">${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><div style="display:inline-block;float:right"><i class="fas fa-minus-square"></i><input type="range" min="1" max="50" value=${info[i][1]} /><i class="fas fa-plus-square"></i>&nbsp;<div style="display:inline-block;width:30px;">${info[i][1]}</div></div>${enableInherit}</div>`;
			}
			else if(info[i][0] == 'FontBold'){
				ret += `<div codeid='${info[i][0]}' style="position:relative;">${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><div style="display:inline-block;float:right"><i class="fas fa-minus-square"></i><input type="range" min="100" max="900" step="100" value=${info[i][1]} /><i class="fas fa-plus-square"></i>&nbsp;<div style="display:inline-block;width:30px;font-weight:${info[i][1]}">${info[i][1]}</div></div>${enableInherit}</div>`;
			}
			else if(info[i][0] == 'FontStyle'){
				ret += `<div style="display:flex;flex-direction:row;position:relative;" codeid='${info[i][0]}'>${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><select style="flex:1;" value="${info[i][1]}"/><option value="normal" ${info[i][1]=='normal'?' selected="selected"':''}>normal</option><option value="italic" ${info[i][1]=='italic'?' selected="selected"':''}>italic</option><option value="oblique" ${info[i][1]=='oblique'?' selected="selected"':''}>oblique</option></select>${enableInherit}</div>`;
			}
			else if(info[i][0] == 'Width'){
				ret += `<div codeid='${info[i][0]}' style="position:relative;">${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><div style="display:inline-block;float:right"><i class="fas fa-minus-square"></i><input type="range" min="1" max="10" value=${info[i][1]} /><i class="fas fa-plus-square"></i>&nbsp;<div style="display:inline-block;width:30px;">${info[i][1]}</div></div>${enableInherit}</div>`;
			}
			else if(info[i][0] == 'Radius'){
				ret += `<div codeid='${info[i][0]}' style="position:relative;">${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><div style="display:inline-block;float:right"><i class="fas fa-minus-square"></i><input type="range" min="1" max="10" value=${info[i][1]} /><i class="fas fa-plus-square"></i>&nbsp;<div style="display:inline-block;width:30px;">${info[i][1]}</div></div>${enableInherit}</div>`;
			}
			else if(info[i][0] == 'Padding'){
				ret += `<div codeid='${info[i][0]}' style="position:relative;">${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><div style="display:inline-block;float:right"><i class="fas fa-minus-square"></i><input type="range" min="1" max="20" value=${info[i][1]} /><i class="fas fa-plus-square"></i>&nbsp;<div style="display:inline-block;width:30px;">${info[i][1]}</div></div>${enableInherit}</div>`;
			}
			else if(info[i][0] == 'Spacing'){
				ret += `<div codeid='${info[i][0]}' style="position:relative;">${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><div style="display:inline-block;float:right"><i class="fas fa-minus-square"></i><input type="range" min="1" max="20" value=${info[i][1]} /><i class="fas fa-plus-square"></i>&nbsp;<div style="display:inline-block;width:30px;">${info[i][1]}</div></div>${enableInherit}</div>`;
			}
			else if(info[i][0] == 'DotType'){
				ret += `<div style="display:flex;flex-direction:row;position:relative;" codeid='${info[i][0]}'>${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><span style="flex:1;"><i class="fas fa-tools"></i> Still in Progress...</span></div>`;
			}
			else if(info[i][0] == 'DotSize'){
				ret += `<div codeid='${info[i][0]}' style=;position:relative;">${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><div style="display:inline-block;float:right"><i class="fas fa-minus-square"></i><input type="range" min="1" max="100" value=${info[i][1]} /><i class="fas fa-plus-square"></i>&nbsp;<div style="display:inline-block;width:30px;">${info[i][1]}</div></div>${enableInherit}</div>`;
			}
			else if(info[i][0] == 'ContentType'){
				ret += `<div style="display:flex;flex-direction:row;position:relative;" codeid='${info[i][0]}'>${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><select style="flex:1;" value="${info[i][1]}"/><option value="0-index" ${info[i][1]=='0-index'?' selected="selected"':''}>0-index</option><option value="1-index" ${info[i][1]=='1-index'?' selected="selected"':''}>1-index</option></select>${enableInherit}</div>`;
			}
			else if(info[i][0] == 'DirectionType'){
				ret += `<div style="display:flex;flex-direction:row;position:relative;" codeid='${info[i][0]}'>${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><span style="flex:1;"><i class="fas fa-tools"></i> Still in Progress...</span></div>`;
			}
			else if(info[i][0] == 'Opacity'){
				ret += `<div codeid='${info[i][0]}' style="position:relative;">${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><div style="display:inline-block;float:right"><i class="fas fa-minus-square"></i><input type="range" min="0" max="100" value=${info[i][1]} /><i class="fas fa-plus-square"></i>&nbsp;<div style="display:inline-block;width:30px;">${info[i][1]}</div></div>${enableInherit}</div>`;
			}
			else if(info[i][0] == 'DirectionSize'){
				ret += `<div codeid='${info[i][0]}' style="position:relative;">${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><div style="display:inline-block;float:right"><i class="fas fa-minus-square"></i><input type="range" min="1" max="30" value=${info[i][1]} /><i class="fas fa-plus-square"></i>&nbsp;<div style="display:inline-block;width:30px;">${info[i][1]}</div></div>${enableInherit}</div>`;
			}
			else if(info[i][0] == 'CellWidth'){
				ret += `<div codeid='${info[i][0]}' style="position:relative;">${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><div style="display:inline-block;float:right"><i class="fas fa-minus-square"></i><input type="range" min="1" max="600" value=${info[i][1]} /><i class="fas fa-plus-square"></i>&nbsp;<div style="display:inline-block;width:30px;">${info[i][1]}</div></div>${enableInherit}</div>`;
			}
			else if(info[i][0] == 'CellHeight'){
				ret += `<div codeid='${info[i][0]}' style="position:relative;">${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><div style="display:inline-block;float:right"><i class="fas fa-minus-square"></i><input type="range" min="1" max="450" value=${info[i][1]} /><i class="fas fa-plus-square"></i>&nbsp;<div style="display:inline-block;width:30px;">${info[i][1]}</div></div>${enableInherit}</div>`;
			}
			else{
				ret += `<div style="display:flex;flex-direction:row;position:relative;" codeid='${info[i][0]}'>${ifDetail?` <i class="fas fa-lock LockInherit"></i>&nbsp;`:''}<i class='${GetIcon[info[i][0]]}' style='width:18px;text-align:center;'></i><span>&nbsp;${toTitle(info[i][0])}&nbsp;</span><input style="flex:1;"  value="${info[i][1]}"/>${enableInherit}</div>`;
			}
		}
	}
	return ret;
}
function checkColor(x){
	if($.trim(x) == 'inherit')	return false;
	return $(`<span style="color:${x}"></span>`).css("color") != '';
}
function checkFamily(x){
	if(x == "Arial" || x == "Nunito")	return true;
	var a = $(`<div style="display:inline-block;font-family:'${x}',Arial;font-size:72px;">中文English123</div>`);
	var b = $(`<div style="display:inline-block;font-family:Arial;font-size:72px;">中文English123</div>`);
	$("body").append(a).append(b);
	// console.log(a.width(),b.width(),a.height(),b.height())
	var ret = (a.width() != b.width()) || (a.height() != b.height());
	a.remove();b.remove();
	return ret;
}
function flushInformation(ths){
	var q = [];
	ths = ths.children();
	for(var i=0;i<ths.length;i++){
		var p = ths.eq(i);
		var ret = [p.attr("codeid")];
		if(p.children(".InfoSonList").length!=0)
			ret.push(flushInformation(p.children(".InfoSonList").eq(0)));
		else if(p.children(".LockInherit").length!=0 && p.children(".coverInherit").css("display")=="block")
			ret.push("inherit");
		else if(p.children("input").length!=0)
			ret.push(p.children("input").val());
		else if(p.children("select").length!=0)
			ret.push(p.children("select").val());
		else if(p.attr("codeid") == "Custom" || p.attr("codeid") == "On")
			ret.push(p.children("i:last-child").attr("class") == "fas fa-check-square");
		else
			ret.push(p.children("div").eq(0).children("input").val());
		q.push(ret);
	}
	return q;
}
function loadGlobalSettingsDetail(ifDetail, to){
	to.html(drawOptions(GlobalStyleStorage, '', ifDetail));
	$(".ColorInput").each(function(){
		if(!checkColor($(this).val()))
			$(this).prev().attr("class", "fas fa-exclamation-triangle").css("color", "#ffcc00");
		else
			$(this).prev().attr("class", "fas fa-square-full ColorShow").css("color", $(this).val());
	});
	$(".ColorInput").unbind('input propertychange').bind('input propertychange', function(){
		if(!checkColor($(this).val()))
			$(this).prev().attr("class", "fas fa-exclamation-triangle").css("color", "#ffcc00");
		else
			$(this).prev().attr("class", "fas fa-square-full ColorShow").css("color", $(this).val());
		if(!ifDetail){
			GlobalStyleStorage = flushInformation(to);
			flushGraph();
		}
	});
	$(".FamilyInput").each(function(){
		if(!checkFamily($(this).val()))
			$(this).prev().css("font-family", "'Font Awesome 5 Free'").html("").attr("class", "fas fa-exclamation-triangle").css("color", "#ffcc00");
		else
			$(this).prev().attr("class", "FamilyShow").css("color", "inherit").html("Abc123").css("font-family", $(this).val());
	}).unbind('input propertychange').bind('input propertychange', function(){
		if(!checkFamily($(this).val()))
			$(this).prev().css("font-family", "'Font Awesome 5 Free'").html("").attr("class", "fas fa-exclamation-triangle").css("color", "#ffcc00");
		else
			$(this).prev().attr("class", "FamilyShow").css("color", "inherit").html("Abc123").css("font-family", $(this).val());
		if(!ifDetail){
			GlobalStyleStorage = flushInformation(to);
			flushGraph();
		}
	});
	$("div[codeid='Custom']").each(function(){
		if($(this).children("i:not(.LockInherit)").eq(1).attr("class") == 'far fa-square')
			$(this).nextAll().each(function(){
				$(this).css('display', 'none');
			});
		$(this).children("i:not(.LockInherit)").eq(1).css("cursor", "pointer").unbind("click").click(function(){
			if($(this).attr("class") == 'fas fa-check-square'){
				$(this).attr("class", 'far fa-square');
				$(this).parent().nextAll().each(function(){
					$(this).css('display', 'none');
				});
			}
			else{
				$(this).attr("class", 'fas fa-check-square');
				$(this).parent().nextAll().each(function(){
					if($(this).children("div:not(.coverInherit)").length != 0)
						$(this).css('display', 'block');
					else
						$(this).css('display', 'flex');
				});
			}
			if(!ifDetail){
				GlobalStyleStorage = flushInformation(to);
				flushGraph();
			}
		});
	});
	$("div[codeid='On']").each(function(){
		if($(this).children("i:not(.LockInherit)").eq(1).attr("class") == 'far fa-square')
			$(this).nextAll().each(function(){
				$(this).css('display', 'none');
			});
		$(this).children("i:not(.LockInherit)").eq(1).css("cursor", "pointer").unbind("click").click(function(){
			if($(this).attr("class") == 'fas fa-check-square'){
				$(this).attr("class", 'far fa-square');
				$(this).parent().nextAll().each(function(){
					$(this).css('display', 'none');
				});
			}
			else{
				$(this).attr("class", 'fas fa-check-square');
				$(this).parent().nextAll().each(function(){
					if($(this).children("div:not(.coverInherit)").length != 0)
						$(this).css('display', 'block');
					else
						$(this).css('display', 'flex');
				});
			}
			if(!ifDetail){
				GlobalStyleStorage = flushInformation(to);
				flushGraph();
			}
		});
	});
	$(`input[type='range']`).each(function(){
		$(this).prev().css("cursor", "pointer").unbind("click").click(function(){
			var p = Number($(this).next().val()) - Number(($(this).next().attr("step")==undefined?'1':$(this).next().attr("step")));
			if(p < $(this).next().attr("min"))	return;
			$(this).next().next().next().html(p);
			$(this).next().val(p);
			if($(this).parent().parent().attr("codeid") == "FontBold")
				$(this).next().next().next().css("font-weight", p);
			if(!ifDetail){
				GlobalStyleStorage = flushInformation(to);
				flushGraph();
			}
		});
		$(this).next().css("cursor", "pointer").unbind("click").click(function(){
			var p = Number($(this).prev().val()) + Number(($(this).prev().attr("step")==undefined?'1':$(this).prev().attr("step")));
			if(p > $(this).prev().attr("max"))	return;
			$(this).next().html(p);
			$(this).prev().val(p);
			if($(this).parent().parent().attr("codeid") == "FontBold")
				$(this).next().css("font-weight", p);
			if(!ifDetail){
				GlobalStyleStorage = flushInformation(to);
				flushGraph();
			}
		});
	})
	.unbind('input propertychange').bind('input propertychange', function(){
		$(this).next().next().html($(this).val());
		if($(this).parent().parent().attr("codeid") == "FontBold")
			$(this).next().next().css("font-weight", $(this).val());
		if(!ifDetail){
			GlobalStyleStorage = flushInformation(to);
			flushGraph();
		}
	});
	$("select").unbind('input propertychange').bind('input propertychange', function(){
		if(!ifDetail){
			GlobalStyleStorage = flushInformation(to);
			flushGraph();
		}
	});
	if(ifDetail){
		$(".LockInherit").css("cursor", "pointer").unbind('click').click(function(){
			$(this).parent().children(":last-child").css("display", "block");
			if(!ifDetail){
				GlobalStyleStorage = flushInformation(to);
				flushGraph();
			}
		});
		$(".UnlockInherit").css("cursor", "pointer").unbind('click').click(function(){
			$(this).parent().css("display", "none");
				if(!ifDetail){
				GlobalStyleStorage = flushInformation(to);
				flushGraph();
			}
		});
	}
}
loadGlobalSettingsDetail(false, $(".InfoDetail").eq(0));
$(".GraphFolder").css("cursor","pointer").click(function(){
	if($(this).attr("id") == 'fold')
		$(this).parent().children('.InfoSonList').css('display', 'block'),
		$(this).attr('id', 'unfold').removeClass('fa-angle-right').addClass('fa-angle-down');
	else
		$(this).parent().children('.InfoSonList').css('display', 'none'),
		$(this).attr('id', 'fold').removeClass('fa-angle-down').addClass('fa-angle-right');
})
var IdDetail = [0, 0, 0, 0];
var GraphDetail = [[], [], [], []];
var relatedEdge = [];
var toolType = 0;
var edgeFrom = [];
var RofDot = [];
function isNumber(val){
    var regPos = /^\d+$/;
    return regPos.test(val);
}
function checkAttr3(a,b,c){
	if(a!='inherit')	return a;
	if(b!='inherit')	return b;
	return c;
}
function checkAttr2(a,b){
	if(a!='inherit')	return a;
	return b;
}
function reloadDotPosition(x){
	var d = $(`circle[dotid=${x}]`);
	d.attr("cx", GraphDetail[0][x][0][1][0][1]);
	d.attr("cy", GraphDetail[0][x][0][1][1][1]);
	var t = $(`text[textdotid=${x}]`);
	t.attr("x", GraphDetail[0][x][0][1][0][1]);
	t.attr("y", GraphDetail[0][x][0][1][1][1]);
	// flush edge
	for(var k=0;k<relatedEdge[x].length;k++){
		var i = relatedEdge[x][k];
		var e = $(`line[edgeid=${i}]`);
		// console.log(e);
		var x1 = GraphDetail[0][GraphDetail[1][i][0][1][0][1][1]][0][1][0][1];
		var x2 = GraphDetail[0][GraphDetail[1][i][0][1][1][1][1]][0][1][0][1];
		var y1 = GraphDetail[0][GraphDetail[1][i][0][1][0][1][1]][0][1][1][1];
		var y2 = GraphDetail[0][GraphDetail[1][i][0][1][1][1][1]][0][1][1][1];
		var len = Math.sqrt((y2-y1)*(y2-y1)+(x2-x1)*(x2-x1));
		var r1 = RofDot[GraphDetail[1][i][0][1][0][1][1]];
		var r2 = RofDot[GraphDetail[1][i][0][1][1][1][1]];
		var detX = 1.0*(x2-x1)/len, detY = 1.0*(y2-y1)/len;
		x1 += detX * r1; y1 += detY * r1;
		x2 -= detX * r2; y2 -= detY * r2;
		e.attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2);
	}
}
function flushGraph(){
	$(".DotContainer").html("");
	RofDot = new Array(GraphDetail[0].length);
	for(var i=0;i<GraphDetail[0].length;i++){
		var d = $("<circle/>");
		d.attr("dotid", i);
		d.attr("cx", GraphDetail[0][i][0][1][0][1]);
		d.attr("cy", GraphDetail[0][i][0][1][1][1]);
		var p = GraphDetail[0][i][1][1];
		if(p == 'inherit')	p = DotInherit;
		var tar = p;
		if(tar[0][1][0][1] == 'inherit')	tar = GlobalStyleStorage[1][1];
		if(tar[0][1][0][1] == false)	tar = GlobalStyleStorage[0][1][0][1];
		else	tar = tar[0][1];
		d.attr("fill", checkAttr2(tar[tar.length-2][1], GlobalStyleStorage[0][1][0][1][0][1]));
		d.attr("fill-opacity", checkAttr2(tar[tar.length-1][1], GlobalStyleStorage[0][1][0][1][1][1])/100);
		d.attr("stroke", checkAttr2(p[1][1][0][1], GlobalStyleStorage[1][1][1][1][0][1]));
		d.attr("stroke-width", checkAttr2(p[1][1][1][1], GlobalStyleStorage[1][1][1][1][1][1]));
		d.attr("r", checkAttr2(p[4][1],GlobalStyleStorage[1][1][4][1]));
		RofDot[i] = checkAttr2(p[4][1],GlobalStyleStorage[1][1][4][1])
		d.attr("style", "z-index:1;");
		var t = $(`<text>${GraphDetail[0][i][0][1][2][1]}</text>`);
		tar = p;t.attr("textdotid", i);
		if(tar[2][1][0][1] == 'inherit')	tar = GlobalStyleStorage[1][1];
		if(tar[2][1][0][1] == false)	tar = GlobalStyleStorage[0][1][1][1];
		else	tar = tar[2][1];
		t.attr("x", GraphDetail[0][i][0][1][0][1]);
		t.attr("y", GraphDetail[0][i][0][1][1][1]);
		t.attr("fill", checkAttr2(tar[tar.length-4][1], GlobalStyleStorage[0][1][1][1][1][1]));
		var sty = "user-select:none;pointer-events:none;";
		sty += `font-family:${checkAttr2(tar[tar.length-5][1], GlobalStyleStorage[0][1][1][1][0][1])};`;
		sty += `font-size:${checkAttr2(tar[tar.length-3][1], GlobalStyleStorage[0][1][1][1][2][1])};`;
		sty += `font-style:${checkAttr2(tar[tar.length-2][1], GlobalStyleStorage[0][1][1][1][3][1])};`;
		sty += `font-weight:${checkAttr2(tar[tar.length-1][1], GlobalStyleStorage[0][1][1][1][4][1])};`;
		t.attr("style", sty).attr("text-anchor", "middle");
		t.attr("dy", "0.35em");
		$(".DotContainer").append(d);
		$(".DotContainer").append(t);
	}
	$(".EdgeContainer").html("");
	$(".DefsContainer").html("");
	for(var i=0;i<GraphDetail[1].length;i++){
		var e = $("<line />");
		e.attr("edgeid", i);
		var x1 = GraphDetail[0][GraphDetail[1][i][0][1][0][1][1]][0][1][0][1];
		var x2 = GraphDetail[0][GraphDetail[1][i][0][1][1][1][1]][0][1][0][1];
		var y1 = GraphDetail[0][GraphDetail[1][i][0][1][0][1][1]][0][1][1][1];
		var y2 = GraphDetail[0][GraphDetail[1][i][0][1][1][1][1]][0][1][1][1];
		var len = Math.sqrt((y2-y1)*(y2-y1)+(x2-x1)*(x2-x1));
		// console.log(GraphDetail[1][i][0][1][0][1][1],GraphDetail[1][i][0][1][1][1][1]);
		var r1 = RofDot[GraphDetail[1][i][0][1][0][1][1]];
		var r2 = RofDot[GraphDetail[1][i][0][1][1][1][1]];
		// console.log(r1,r2,len);
		var detX = 1.0*(x2-x1)/len, detY = 1.0*(y2-y1)/len;
		x1 += detX * r1; y1 += detY * r1;
		x2 -= detX * r2; y2 -= detY * r2;
		// console.log(detX,detY,x1,x2,y1,y2,r1,r2);
		e.attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2);
		var p = GraphDetail[1][i][1][1];
		if(p == 'inherit')	p = EdgeInherit;
		var tar = p;
		if(tar[0][1][0][1] == 'inherit')	tar = GlobalStyleStorage[2][1];
		tar = tar[0][1];
		e.css("stroke", checkAttr2(tar[tar.length-2][1], GlobalStyleStorage[0][1][0][1][0][1]));
		e.css("stroke-opacity", checkAttr2(tar[tar.length-1][1], GlobalStyleStorage[0][1][0][1][1][1])/100);
		e.css("stroke-width", checkAttr2(p[1][1], GlobalStyleStorage[2][1][1][1]));

		if(GraphDetail[1][i][0][1][2][1] == true){

		}

		$(".EdgeContainer").append(e);
	}
	$(".RealSvg").html($(".RealSvg").html());
	$("circle").mousedown(function(e){
		if(e.which==1){	
			var from = $(this);
			var positionDiv = $(this).offset();
		    var fatherDiv = $(this).parent().parent().offset();
		    var distanceX = e.pageX - positionDiv.left - $(this).attr("r");
		    var distanceY = e.pageY - positionDiv.top - $(this).attr("r");
		    $(document).mousemove(function(e){
		    	var x = e.pageX - distanceX - fatherDiv.left;
	        	var y = e.pageY - distanceY - fatherDiv.top;
	        	if(x<0)	x=0;if(x>600) x=600;
	        	if(y<0) y=0;if(y>450) y=450;
	        	GraphDetail[0][Number(from.attr("dotid"))][0][1][0][1]=x;
	        	GraphDetail[0][Number(from.attr("dotid"))][0][1][1][1]=y;
	        	reloadDotPosition(from.attr("dotid"));
		    });
		    $(document).mouseup(function(){
		    	$(document).off('mousemove');
		    })
		}
	}).contextmenu(function(e){
		return false;
	}).click(function(e){
		if(chosenTool1 == 3 || chosenTool1 == 4){
			if(toolType == 0){
				edgeFrom = ["Dot", $(this).attr("dotid")];
				toolType = 1;
				var positionDiv = $(this).parent().parent().offset();
				var distanceX = e.pageX - positionDiv.left;
				var distanceY = e.pageY - positionDiv.top;
				$(".LeadLine").css("display", "inline");
				$(".LeadLine").attr("x1", $(this).attr("cx")).attr("y1", $(this).attr("cy"));
				$(".LeadLine").attr("x2", $(this).attr("cx")).attr("y2", $(this).attr("cy"));
				// console.log(positionDiv, distanceX, distanceY, $(this).attr("cx"));
				$(document).mousemove(function(e){
					var x = e.pageX - positionDiv.left;
					var y = e.pageY - positionDiv.top;
					if(x<0)	x=0;if(x>600) x=600;
					if(y<0) y=0;if(y>450) y=450;
					$(".LeadLine").attr("x2", x).attr("y2", y);
				});
			}
			else{
				toolType = 0;
				$(document).off('mousemove');
				$(".LeadLine").css("display", "none");
				if(edgeFrom[1] != $(this).attr("dotid")){
					GraphDetail[1].push([["Information", [["From", edgeFrom], ["To", ["Dot", $(this).attr("dotid")]], ["Direct", chosenTool1 == 4], ["Value", ""]]], ["Style", 'inherit']]);
					relatedEdge[Number(edgeFrom[1])].push(IdDetail[1]);
					relatedEdge[Number($(this).attr("dotid"))].push(IdDetail[1]);
					++IdDetail[1];flushGraph();
				}
				edgeFrom = [];
			}
		}
	})
}
function clickBackground(event){
	if(event.target != event.currentTarget)	return;
	var x = event.offsetX;
	var y = event.offsetY;
	if(chosenTool1 == 2){
		GraphDetail[0].push([["Information", [["x", x], ["y", y], ["Index", ""]]], ["Style", 'inherit']]);
		var p = [];
		for(var i=0;i<GraphDetail[0].length-1;i++)
			if(isNumber(GraphDetail[0][i][0][1][2][1]))
				p.push(Number(GraphDetail[0][i][0][1][2][1]));
		if(GlobalStyleStorage[0][1][2][1] == "1-index")
			p.push(0);
		var app = new Array(p.length + 1);
		for(var i=0;i<p.length;i++)
			if(p[i]<app.length)	app[p[i]]=true;
		var q=0;
		while(app[q]==true)	++q;
		GraphDetail[0][GraphDetail[0].length-1][0][1][2][1] = q;
		++IdDetail[0];relatedEdge.push([]);
	}
	else if(chosenTool1 == 3 || chosenTool1 == 4){
		// console.log(toolType);
		if(toolType == 1){
			$(document).off('mousemove');
			$(".LeadLine").css("display", "none");
			toolType = 0;edgeFrom = [];
		}
	}
	flushGraph();
}

// var canvas = $("#today_chartcontainer svg")[0];
// svgAsPngUri(canvas, null, function(uri) {
// $("#tabpanel_items").append('<a class="downBtn"; href="'+uri+'" download="图片下载">下载图片</a>');
// });
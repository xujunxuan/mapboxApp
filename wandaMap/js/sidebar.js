var sidebar=sidebar||{}

sidebar=(function(){
	
	sidebar.stat={
		"init":false,
		"show":false
	}
	sidebar.config={
		"sid":"side-bar",
		"btclass":"side-btn",
		"ulist":"u-list"
	}

	sidebar.init=function(obj){
		obj=obj||{};

		if(sidebar.stat.init==false){
			if(obj.sid!=undefined){
				sidebar.config.sid=obj.sid;	
			}
			if(obj.btclass!=undefined){
				sidebar.config.btclass=obj.btclass;	
			}
			if(obj.ulist!=undefined){
				sidebar.config.ulist=obj.ulist;	
			}
			$("."+sidebar.config.btclass).click(function(){
				sidebar.toggle();
			})	
			sidebar.stat.init=true;	
			return true;		
		}
		else{
			console.warn("重复初始化");
			return false;
		}

	}

	sidebar.toggle=function(){
		if(sidebar.stat.show==false){
			sidebar.stat.show=true;
			sidebar.update();
			$("#"+sidebar.config.sid).addClass("on");
		}
		else if(sidebar.stat.show==true){
			sidebar.stat.show=false;
			$("#"+sidebar.config.sid).removeClass("on");
		}
	}

	sidebar.update=function(){
		$("#"+sidebar.config.ulist).html('');
		for(var i in mapname){
			$("#"+sidebar.config.ulist).append('<ul><div class="hf" floor="'+i+'">'+mapname[i]+'</div></ul>');
		}
		for(var j=0;j<_DATA.length;j++){
			var obj=_DATA[j];
			$(".hf[floor='"+ obj["h"] +"']").after("<li><div><span style='color:"+getColor(obj["name"])+";'>◉</span>消防员"+obj["name"]+"</div></li>")
		}
	}
	
	return {
		stat:sidebar.stat,
		config:sidebar.config,
		init:sidebar.init,
		toggle:sidebar.toggle,
		update:sidebar.update
	}
})($)


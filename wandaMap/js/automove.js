var automove=automove||{}

automove=(function(){
	automove.data=[
	[{"name":1,"temp":1,"lat":29.092635,"lon":119.671006,"h":0},{"name":2,"temp":1,"lat":29.092535,"lon":119.671206,"h":1}],
	[{"name":1,"temp":1,"lat":29.092636,"lon":119.671006,"h":0},{"name":2,"temp":1,"lat":29.092535,"lon":119.671206,"h":1}],
	[{"name":1,"temp":1,"lat":29.092637,"lon":119.671006,"h":0},{"name":2,"temp":1,"lat":29.092535,"lon":119.671206,"h":1}],
	[{"name":1,"temp":1,"lat":29.092638,"lon":119.671006,"h":0},{"name":2,"temp":1,"lat":29.092535,"lon":119.671206,"h":1}],
	[{"name":1,"temp":1,"lat":29.092639,"lon":119.671006,"h":0},{"name":2,"temp":1,"lat":29.092535,"lon":119.671206,"h":1}],
	[{"name":1,"temp":1,"lat":29.092640,"lon":119.671006,"h":0},{"name":2,"temp":1,"lat":29.092535,"lon":119.671206,"h":1}]	
	];
	automove.flag=0;

	automove.setTimer=function(){
		clearInterval(timer)
	    timer = setInterval(function(){
	    	var data=automove.data;
	    	if(automove.flag<data.length){
		    	var arr=data[automove.flag];
	            for (var i in mapname){
	                    fnumber[i]=0;
	            }
	            for (var i=0;i<arr.length;i++){                    
	                fnumber[arr[i].name-1]++;//name是从1开始计数的
	            }
	            for(var i in mapname){
	                $('button[fnum="'+ i +'"]').html(mapname[i]+' 人数：'+fnumber[i]);
	            }       
	            updatePoints(data[automove.flag]);
	            automove.flag++;	    		
	    	}
	    	else{
	    		console.log("automove complete");
	    		return true;
	    	}
	    },1100);//polling interval>1.03s
	}


	return {
		data:automove.data,
		flag:automove.flag,
		setTimer:automove.setTimer
	}
})($)


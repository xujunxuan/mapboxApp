<?php
	//获取请求


	//访问数据库

		/**
		* render the page
		*
		* @return int
		*/
		$tbname="pos";//coordinate
		$mysqli = new mysqli("localhost", "root", "root", "zhejiang3f");

		$result_json;
		$result_array=array();
		/* check connection */
		if (mysqli_connect_errno()) {
		    printf("Connect failed: %s\n", mysqli_connect_error());
		    exit();
		}

		$city = "pinckney";

		/* create a prepared statement */
		if ($stmt = $mysqli->prepare("SELECT * FROM ".$tbname)) {

		    /* bind parameters for markers */
		    // $stmt->bind_param("s", $city);

		    /* execute query */
		    $stmt->execute();

		    /* bind result variables */
		    $stmt->bind_result($r1,$r2,$r3,$r4,$r5);

		    /* fetch value */
		    $tmp=array();
		    while ($stmt->fetch()) {
		        // printf("%s is in district %s\n", $city, $foo);
		    	$tmp["name"]=$r1;
		    	$tmp["temp"]=$r2;
		    	$tmp["lat"]=$r3;	
		    	$tmp["lon"]=$r4;
		    	$tmp["h"]=$r5;
		    	array_push($result_array,$tmp);
		    }
		    // echo $district;
		    
		    /* close statement */
		    $stmt->close();
		}


		echo json_encode($result_array);

		/* close connection */
		$mysqli->close();


	//字符串转json
	//返回数据
	//关闭数据库，释放内存
?>
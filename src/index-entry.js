$(function(){

	//
	var $pageCover = $('#page-cover');

	//
	var $uploadFrameStep1 = $('#upload-frame-step-1');
	$uploadFrameStep1.$close = $('#btn-close-step-1').click(function(){
		$uploadFrameStep1.fadeOut(200, function(){
			$pageCover.fadeOut(200);
		});
	});
	//

	//
	var $btnUpload = $('#up-ctrl-upload').click(function(){

		$pageCover.fadeIn(200);
		$uploadFrameStep1.fadeIn(200);

	});

});
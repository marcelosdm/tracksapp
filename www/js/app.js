/*$('.collection')
	.on('click', '.collection-item', function(){

		var $badge = $('.badge', this);
		if ($badge.length === 0){
			$badge = $('<span class="badge orange-text"><i class="material-icons">grade</i></span>')
						.appendTo(this);
		}

		//$badge.text(parseInt($badge.text())+1);
	})*/


$('.modal-trigger').leanModal();

$('.collection').on('click', '.badge', function(){
	$(this).remove();
	return false;
});
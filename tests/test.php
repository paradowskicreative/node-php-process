<?php

include './NodePhpProcess.php';

$process = new NodePhpProcess();
$process
	->script_path(__DIR__)
	->content([
		'some' => 'data'
	])
	->run('test')
	->output($output);
var_dump($output);
if($output == 'Passed') {
	echo 'Passed!';
}
else {
	echo 'Failed!';
}

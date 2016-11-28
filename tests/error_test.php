<?php

include './src/NodePhpProcess.php';

use contentasaurus\NodePhpProcess;

$log_dir = __DIR__.'/error_test.js.error.log';

$process = new NodePhpProcess();
$process
	->script_path(__DIR__)
	->content([
		'some' => 'data'
	])
	->run('error_test.js')
	->errors($errors)
	->output($output);

if($errors) {
	echo 'Passed!';
}
else {
	echo 'Failed!';
}

unlink($log_dir);

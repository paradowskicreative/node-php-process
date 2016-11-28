<?php

include './src/NodePhpProcess.php';

use contentasaurus\NodePhpProcess;

$log_dir = __DIR__.'/test.js.error.log';

$process = new NodePhpProcess();
$process
	->script_path(__DIR__)
	->content([
		'some' => 'data'
	])
	->run('test.js')
	->output($output);

if($output == 'Passed') {
	echo 'Passed!';
}
else {
	echo 'Failed!';
}

unlink($log_dir);
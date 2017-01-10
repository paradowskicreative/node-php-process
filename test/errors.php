<?php

include 'src/NodePhpProcess.php';

use contentasaurus\NodePhpProcess;

$process = new NodePhpProcess();
$process
	->script_path(__DIR__)
	->content([
		'test' => 'json'
	])
	->run('errors.js')
	->output($output)
	->errors($errors);

// exit(var_dump($errors));
if(!empty($errors)) {
	trigger_error($errors, E_USER_ERROR);
	exit();
}

exit($output);
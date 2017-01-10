<?php

include 'src/NodePhpProcess.php';

use contentasaurus\NodePhpProcess;

$process = new NodePhpProcess();
$process
	->script_path(__DIR__)
	->content([
		'test' => 'json'
	])
	->run('simple.js')
	->output($output);


die($output);
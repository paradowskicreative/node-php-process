<?php

include 'src/NodePhpProcess.php';

use contentasaurus\NodePhpProcess;

$process = new NodePhpProcess();

$process
	->script_path(__DIR__)
	->content([
		'some' => 'data'
	])
	->run('simple.js')
	->output($output);

var_dump($output);

die();
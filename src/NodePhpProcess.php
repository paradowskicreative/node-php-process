<?php
//
// Node PHP Process
//

namespace contentasaurus;

class NodePhpProcess 
{
	private $buffer_length = 4096;
	private $content = [];
	private $command = '';
	private $script_path = __DIR__;
	private $output = null;
	private $script_name = '';

	public function buffer_length($value) 
	{
		if(is_int($value)) {
			$this->buffer_length = $value;
		}
		else {
			throw new Exception('NodeProcess->buffer_length: Must be an integer');
		}

		return $this;
	}

	public function script_path($path) 
	{
		if(is_string($path) && is_dir($path)) {
			$this->script_path = $path;
		}
		else {
			throw new Exception('NodeProcess->script_path: Must be a valid directory');
		}

		return $this;
	}

	public function content($content = []) 
	{
		$this->validate_content($content);
		$this->content = json_encode($content);

		if(!$this->content) {
			$this->content = $content;
		}

		return $this;
	}

	private function validate_content($content) 
	{
		foreach($content as $key => $value) {
			$item = json_encode($value);

			if(!$item) {
				trigger_error('Component "'.$key.'" was not able to be encoded.', E_USER_ERROR);
			}
		}
	}

	public function run($script_name = false) 
	{
		if(!$script_name) {
			throw new Exception('NodeProcess->run: no script_name provided');
		}
		$this->script_name = $script_name;
		$command = "node {$this->script_path}/{$script_name}";
		// $command = "node {$this->script_path}/{$script_name} 2>";
		// $command = "node {$this->script_path}/{$script_name} 2>{$this->script_path}/{$script_name}.error.log";
		$process = proc_open(
			$command, 
			[
				['pipe', 'r'], 
				['pipe', 'w'], 
				['pipe', 'w']
			], 
			$pipes
		);

		$stdin = $pipes[0];
		$stdout = $pipes[1];
		$stderr = $pipes[2];

		$this->fwrite_stream($stdin, $this->content, $this->buffer_length);
		fclose($stdin);

		$output = stream_get_contents($stdout);
		fclose($stdout);

		$stderroutput = stream_get_contents($stderr);
		fclose($stderr);

		proc_close($process);

		$this->output = $output;
		$this->errors = $stderroutput;

		return $this;
	}

	public function output(&$output) 
	{
		$output = $this->output;
		return $this;
	}

	public function errors(&$errors) 
	{
		$errors = $this->errors;
		return $this;
	}

	private function fwrite_stream($fp, $string, $buffer_length)
	{
		for ($written = 0, $len = strlen($string); $written < $len; $written += $fwrite) {
			$fwrite = fwrite($fp, substr($string, $written, $buffer_length));
			if ($fwrite === false) {
				return $written;
			}
		}

		return $written;
	}
}

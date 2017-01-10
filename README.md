# node-php-process
Provides a standard for handing off processing to node and having node respond with its results.


# In PHP
```
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
```

# In JS

```
const requestProcessor = require('../src/RequestProcessor')

requestProcessor()
.then(data => {
	process.stdout.write(JSON.stringify(data))
})
.catch(err => {
	process.stderr.write(err)
})

```
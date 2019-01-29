<?php
if (!defined ('TYPO3_MODE')) die ('Access denied.');


$extConf = array();
if ( strlen($_EXTCONF) ) {

	$extConf = unserialize($_EXTCONF);

}

?>


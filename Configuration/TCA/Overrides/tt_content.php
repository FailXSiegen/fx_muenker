<?php
defined('TYPO3_MODE') or die();

/**
 * Add extra field ricobgcolor to tt_content record
 */
$ricofluidextendTtContent = [
    'ricobgcolor' => [
        'exclude' => 1,
        'label' => 'LLL:EXT:rico_fluid_extend/Resources/Private/Language/locallang_db.xlf:ricofluidextend.ricobgcolor',
        'config' => [
			'renderType' => 'selectSingle',
            'type' => 'select',
			'size' => '1',
            'items' => [
                ['---',''],
				['Cyan','clbg-cyan'],
                ['Blau','clbg-blue'],
                ['Blaugrau','clbg-bluegrey'],
                ['Hellgrau','clbg-lightgrey'],
                ['Grün','clbg-green'],
                ['Rot','clbg-red'],
			],
        ],
    ],
];


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
        'tt_content',
        $ricofluidextendTtContent
);
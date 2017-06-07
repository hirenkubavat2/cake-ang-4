<?php
namespace App\Test\Fixture;

use Cake\TestSuite\Fixture\TestFixture;

/**
 * LoginHistoriesFixture
 *
 */
class LoginHistoriesFixture extends TestFixture
{

    /**
     * Fields
     *
     * @var array
     */
    // @codingStandardsIgnoreStart
    public $fields = [
        'id' => ['type' => 'integer', 'length' => 11, 'unsigned' => false, 'null' => false, 'default' => null, 'comment' => '', 'autoIncrement' => true, 'precision' => null],
        'user_id' => ['type' => 'uuid', 'length' => null, 'null' => false, 'default' => null, 'comment' => '', 'precision' => null],
        'signin' => ['type' => 'time', 'length' => null, 'null' => false, 'default' => null, 'comment' => '', 'precision' => null],
        'signout' => ['type' => 'time', 'length' => null, 'null' => false, 'default' => null, 'comment' => '', 'precision' => null],
        'ip' => ['type' => 'uuid', 'length' => null, 'null' => false, 'default' => null, 'comment' => '', 'precision' => null],
        'created' => ['type' => 'datetime', 'length' => null, 'null' => false, 'default' => null, 'comment' => '', 'precision' => null],
        'modified' => ['type' => 'datetime', 'length' => null, 'null' => false, 'default' => null, 'comment' => '', 'precision' => null],
        'deleted' => ['type' => 'string', 'length' => 255, 'null' => false, 'default' => null, 'collate' => 'utf8_general_ci', 'comment' => '', 'precision' => null, 'fixed' => null],
        'device_id' => ['type' => 'string', 'length' => 255, 'null' => false, 'default' => null, 'collate' => 'utf8_general_ci', 'comment' => '', 'precision' => null, 'fixed' => null],
        'device_type' => ['type' => 'string', 'length' => 255, 'null' => false, 'default' => null, 'collate' => 'utf8_general_ci', 'comment' => '', 'precision' => null, 'fixed' => null],
        'token' => ['type' => 'string', 'length' => 255, 'null' => false, 'default' => null, 'collate' => 'utf8_general_ci', 'comment' => '', 'precision' => null, 'fixed' => null],
        '_constraints' => [
            'primary' => ['type' => 'primary', 'columns' => ['id'], 'length' => []],
        ],
        '_options' => [
            'engine' => 'InnoDB',
            'collation' => 'utf8_general_ci'
        ],
    ];
    // @codingStandardsIgnoreEnd

    /**
     * Records
     *
     * @var array
     */
    public $records = [
        [
            'id' => 1,
            'user_id' => '28db65e3-7f7c-4a7b-981f-8bb8a5d67550',
            'signin' => '06:23:58',
            'signout' => '06:23:58',
            'ip' => '643fc42f-e955-4b07-a983-2010fab6582b',
            'created' => '2017-06-07 06:23:58',
            'modified' => '2017-06-07 06:23:58',
            'deleted' => 'Lorem ipsum dolor sit amet',
            'device_id' => 'Lorem ipsum dolor sit amet',
            'device_type' => 'Lorem ipsum dolor sit amet',
            'token' => 'Lorem ipsum dolor sit amet'
        ],
    ];
}

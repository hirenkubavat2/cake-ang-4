<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\LoginHistoriesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\LoginHistoriesTable Test Case
 */
class LoginHistoriesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\LoginHistoriesTable
     */
    public $LoginHistories;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.login_histories',
        'app.users',
        'app.roles',
        'app.devices'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('LoginHistories') ? [] : ['className' => 'App\Model\Table\LoginHistoriesTable'];
        $this->LoginHistories = TableRegistry::get('LoginHistories', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->LoginHistories);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test buildRules method
     *
     * @return void
     */
    public function testBuildRules()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}

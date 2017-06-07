<?php
use Migrations\AbstractMigration;

class LoginHistories extends AbstractMigration
{
    /**
     * Change Method.
     *
     * More information on this method is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-change-method
     * @return void
     */
    public function change()
    {
        $table=$this->table('login_histories');

        $table->addColumn('user_id', 'char', [
            'default' => null,
            'limit' => 36,
            'null' => false,
        ]);
        $table->addColumn('signin', 'time', [
            'default' => null,
            'null' => false,
        ]);
        $table->addColumn('signout', 'time', [
            'default' => null,
            'null' => false,
        ]);
        $table->addColumn('ip', 'char', [
            'default' => null,
            'limit' => 36,
            'null' => false,
        ]);
        $table->addColumn('created', 'datetime', [
            'default' => null,
            'null' => false,
        ]);
        $table->addColumn('modified', 'datetime', [
            'default' => null,
            'null' => false,
        ]);
        $table->addColumn('deleted', 'string', [
            'default' => null,
            'limit' => 255,
            'null' => false,
        ]);
        $table->addColumn('device_id', 'string', [
            'default' => null,
            'limit' => 255,
            'null' => false,
        ]);
        $table->addColumn('device_type', 'string', [
            'default' => null,
            'limit' => 255,
            'null' => false,
        ]);
        $table->addColumn('token', 'string', [
            'default' => null,
            'limit' => 255,
            'null' => false,
        ]);
        $table->addPrimaryKey([
            'id',
        ]);
        $table->create();
    }
}

<?php
use Migrations\AbstractMigration;

class AddRole extends AbstractMigration
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
        $table=$this->table('roles');
        $table->addColumn('role','string',[
            'default'=>null,
            'null'=>false,
            'limit'=>255
        ]);

        $table->addColumn('active','integer',[
            'default'=>null,
            'limit'=>1
        ]);

        $table->create();
    }
}

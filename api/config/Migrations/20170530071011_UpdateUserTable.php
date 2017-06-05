<?php
use Migrations\AbstractMigration;

class UpdateUserTable extends AbstractMigration
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
        $table = $this->table('users');
        $table->addColumn('first_name','string',[
            'default'=>null,
            'null'=>false,
            'limit'=>255
        ]);
        $table->addColumn('last_name','string',[
            'default'=>null,
            'null'=>false,
            'limit'=>255
        ]);
        $table->addColumn('email','string',[
            'default'=>null,
            'null'=>false,
            'limit'=>255
        ]);
        $table->update();
    }
}

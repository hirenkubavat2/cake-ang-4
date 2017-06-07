<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * LoginHistories Model
 *
 * @property \Cake\ORM\Association\BelongsTo $Users
 * @property \Cake\ORM\Association\BelongsTo $Devices
 *
 * @method \App\Model\Entity\LoginHistory get($primaryKey, $options = [])
 * @method \App\Model\Entity\LoginHistory newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\LoginHistory[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\LoginHistory|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\LoginHistory patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\LoginHistory[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\LoginHistory findOrCreate($search, callable $callback = null, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class LoginHistoriesTable extends Table
{

    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        parent::initialize($config);

        $this->setTable('login_histories');
        $this->setDisplayField('id');
        $this->setPrimaryKey('id');

        $this->addBehavior('Timestamp');

        $this->belongsTo('Users', [
            'foreignKey' => 'user_id',
            'joinType' => 'INNER'
        ]);

    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator)
    {
       /* $validator
            ->integer('id')
            ->allowEmpty('id', 'create');

        $validator
            ->time('signin')
            ->requirePresence('signin', 'create')
            ->notEmpty('signin');

        $validator
            ->time('signout')
            ->requirePresence('signout', 'create')
            ->notEmpty('signout');

        $validator
            ->uuid('ip')
            ->requirePresence('ip', 'create')
            ->notEmpty('ip');

        $validator
            ->requirePresence('deleted', 'create')
            ->notEmpty('deleted');

        $validator
            ->requirePresence('device_type', 'create')
            ->notEmpty('device_type');

        $validator
            ->requirePresence('token', 'create')
            ->notEmpty('token');*/

        return $validator;
    }

    /**
     * Returns a rules checker object that will be used for validating
     * application integrity.
     *
     * @param \Cake\ORM\RulesChecker $rules The rules object to be modified.
     * @return \Cake\ORM\RulesChecker
     */
    public function buildRules(RulesChecker $rules)
    {
        $rules->add($rules->existsIn(['user_id'], 'Users'));
        return $rules;
    }

    public function saveHistory($requestData){
//        pr($requestData);die;
        $table=$this->newEntity();
        $loginHistory=$this->patchEntity($table,$requestData);

        if($this->save($loginHistory))
            return true;
        else
            return false;

    }

    public function validateToken($id,$token){
        if(! is_null($id) && ! is_null($token) ){
            $res=$this->find()->where(['token'=>$token,'user_id'=>$id])->orderDesc('id')->hydrate(false)->toArray();
            if($res)
                return 1;
            else
                return 0;
        }else{
            return 0;
        }
    }
}

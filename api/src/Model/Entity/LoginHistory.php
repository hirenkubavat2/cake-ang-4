<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * LoginHistory Entity
 *
 * @property int $id
 * @property string $user_id
 * @property \Cake\I18n\FrozenTime $signin
 * @property \Cake\I18n\FrozenTime $signout
 * @property string $ip
 * @property \Cake\I18n\FrozenTime $created
 * @property \Cake\I18n\FrozenTime $modified
 * @property string $deleted
 * @property string $device_id
 * @property string $device_type
 * @property string $token
 *
 * @property \App\Model\Entity\User $user
 * @property \App\Model\Entity\Device $device
 */
class LoginHistory extends Entity
{

    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        '*' => true,
        'id' => false
    ];

    /**
     * Fields that are excluded from JSON versions of the entity.
     *
     * @var array
     */
    protected $_hidden = [
        'token'
    ];
}

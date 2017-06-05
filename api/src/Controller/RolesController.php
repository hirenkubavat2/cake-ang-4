<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\Event\Event;
use Cake\Cache\Cache;
use Cake\Routing\Router;
use Cake\Core\Configure;
use App\Model\Entity\Role;
/**
 * Roles Controller
 *
 * @property \App\Model\Table\RolesTable $Roles
 */
class RolesController extends AppController
{

    /**
     * Index method
     *
     * @return \Cake\Network\Response|null
     */
    public function index()
    {
        $this->data=$this->Roles->find()->order(['id'=>'DESC'])->hydrate(false)->toArray();
        $this->header=200;
        $this->message='data found!';
    }

    /**
     * View method
     *
     * @param string|null $id Role id.
     * @return \Cake\Network\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        if($id>0){
            $role = $this->Roles->findById($id)->hydrate(false)->toArray();
            if($role) {
                $this->message = 'Role found';
                $this->status = 1;
                $this->header = 200;
                $this->data = array_pop($role);
            }else{
                $this->message='Role not found';
                $this->status=1;
                $this->header=404;
            }
        }else{
            $role = $this->Roles->find()->order(['id'=>'DESC'])->hydrate(false)->toArray();
            $this->message = 'Role found';
            $this->status = 1;
            $this->header = 200;
            $this->data = $role;
        }
    }

    /**
     * Add method
     *
     * @return \Cake\Network\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {

        if($this->request->data['role']!='') {
            $this->message='Try again';
            $this->status=0;
            $this->header=404;
        }
        $role = $this->Roles->newEntity();
        $role = $this->Roles->patchEntity($role, $this->request->data);
        $data=$this->Roles->save($role);
        if (isset($data)) {
            $this->message='Role saved successfully';
            $this->status=1;
            $this->header=200;
            $this->data=$data;
        }
    }

    /**
     * Edit method
     *
     * @param string|null $id Role id.
     * @return \Cake\Network\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $role = $this->Roles->get($id, [
            'contain' => []
        ]);

        if ($id>0 && $role->id>0) {
            $role = $this->Roles->patchEntity($role, $this->request->data);
            $update=$this->Roles->save($role);
            if($update) {
                $this->message='Role updated successfully.';
                $this->status=1;
                $this->header=200;
                $this->data=$update;
            }else{
                $this->message='Role not updated!';
                $this->status=1;
                $this->header=403;
            }

        }else{
            $this->message='All fields are required';
            $this->status=1;
            $this->header=404;
        }

    }

    /**
     * Delete method
     *
     * @param string|null $id Role id.
     * @return \Cake\Network\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $role = $this->Roles->get($id);
            if ($this->Roles->delete($role)) {
            $this->message='Role deleted!';
            $this->status=1;
            $this->header=200;
        } else {
            $this->message='Invalid role';
            $this->status=1;
            $this->header=404;
        }
    }
}

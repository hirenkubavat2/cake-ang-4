<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * LoginHistories Controller
 *
 * @property \App\Model\Table\LoginHistoriesTable $LoginHistories
 *
 * @method \App\Model\Entity\LoginHistory[] paginate($object = null, array $settings = [])
 */
class LoginHistoriesController extends AppController
{

    /**
     * Index method
     *
     * @return \Cake\Http\Response|null
     */
    public function index()
    {
        $loginHistories = $this->paginate($this->LoginHistories);

        $this->set(compact('loginHistories'));
        $this->set('_serialize', ['loginHistories']);
    }

    /**
     * View method
     *
     * @param string|null $id Login History id.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $loginHistory = $this->LoginHistories->get($id, [
            'contain' => []
        ]);

        $this->set('loginHistory', $loginHistory);
        $this->set('_serialize', ['loginHistory']);
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $loginHistory = $this->LoginHistories->newEntity();
        if ($this->request->is('post')) {
            $loginHistory = $this->LoginHistories->patchEntity($loginHistory, $this->request->getData());
            if ($this->LoginHistories->save($loginHistory)) {
                $this->Flash->success(__('The login history has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The login history could not be saved. Please, try again.'));
        }
        $this->set(compact('loginHistory'));
        $this->set('_serialize', ['loginHistory']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Login History id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $loginHistory = $this->LoginHistories->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $loginHistory = $this->LoginHistories->patchEntity($loginHistory, $this->request->getData());
            if ($this->LoginHistories->save($loginHistory)) {
                $this->Flash->success(__('The login history has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The login history could not be saved. Please, try again.'));
        }
        $this->set(compact('loginHistory'));
        $this->set('_serialize', ['loginHistory']);
    }

    /**
     * Delete method
     *
     * @param string|null $id Login History id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $loginHistory = $this->LoginHistories->get($id);
        if ($this->LoginHistories->delete($loginHistory)) {
            $this->Flash->success(__('The login history has been deleted.'));
        } else {
            $this->Flash->error(__('The login history could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}

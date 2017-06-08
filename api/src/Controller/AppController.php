<?php
/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link      http://cakephp.org CakePHP(tm) Project
 * @since     0.2.9
 * @license   http://www.opensource.org/licenses/mit-license.php MIT License
 */
namespace App\Controller;

use Aura\Intl\Exception;
use Cake\Controller\Controller;
use Cake\Event\Event;
use Cake\Core\Configure;
use Cake\Network\Exception\ForbiddenException;
use Cake\Utility\Inflector;






/**
 * Application Controller
 *
 * Add your application-wide methods in the class below, your controllers
 * will inherit them.
 *
 * @link http://book.cakephp.org/3.0/en/controllers.html#the-app-controller
 */
class AppController extends Controller
{

    public $userId;
    public $header=403;
    public $status=0;
    public $data=[];
    public $message='something went wrong';
    public $paging=[];
    public $token='';
    public $headerMap = [
        200 => 'OK',
        404 => 'Not Found',
        401 => 'UnAuthorised',
        403 => 'Forbidden',
        500 => 'Internal Server Error'
    ];

    public $paginate=[
        'limit'=>5
    ];

    public $actionList=[];
    /**
     * Initialization hook method.
     *
     * Use this method to add common initialization code like loading components.
     *
     * e.g. `$this->loadComponent('Security');`
     *
     * @return void
     */
    public function initialize()
    {
        parent::initialize();
        $this->template='ajax';
        $this->loadComponent('RequestHandler');
        //$this->loadComponent('Flash');
        $this->actionList=['/api/login/data']; // Add here actions which no need of token
        $this->loadComponent('Auth',[
            'authenticate' => [
                'Form' => [
                    'fields' => ['username' => 'email', 'password' => 'password'],
                    'userModel'=>'Users',
                ],
            ],
            'loginRedirect'=>[
                'controller'=>'Homes','action'=>'dashboard'
            ],
            'logoutRedirect'=>[
                'controller'=>'','action'=>''
            ],
            'unauthorizedRedirect' => false,
        ]);
        $this->Auth->allow();
        $this->loadComponent('Paginator');

        /*
         * Enable the following components for recommended CakePHP security settings.
         * see http://book.cakephp.org/3.0/en/controllers/components/security.html
         */
        //$this->loadComponent('Security');
        //$this->loadComponent('Csrf');
    }

    /**
    Beforefilter logic
     */

    public function beforeFilter(Event $event)
    {



    }

    /**
     * Check user Token
     */

    public function checkUserToken(){
        $this->loadModel('LoginHistories');
            if(isset($this->request->data['loggedInId']) && isset($this->request->data['loggedInId']) && $this->LoginHistories->validateToken($this->request->data['loggedInId'],$this->request->data['token'])){
                return true;
            }else{
                return false;
            }



    }

    /**
     * Get Request Token
     */

    public function getRequestToken(){
        /*$headers=$this->getHeaders();
        if(!isset($headers['Authorization'])) return false;
        $token=explode(" ",$headers['Authorization']);
        return $token[1];*/

        return isset($this->request->data['request_session']) ? $this->request->data['request_session'] : '';
    }

    /**
     * Get Headers
     */

    public function getHeaders(){
        $headers=getallheaders();
        return $headers;
    }


    /**
     * Get User Token
     */

    public function userToken(){
        return $this->request->session()->read('Auth.User.token');
//        return $this->Auth->user('token');
    }

    /**
     * Authorization default true
     */

    public function isAuthorizee($user){
        return false;
    }
    /**
     * Before render callback.
     *
     * @param \Cake\Event\Event $event The beforeRender event.
     * @return \Cake\Network\Response|null|void
     */
    /*public function beforeRender(Event $event)
    {
        if (!array_key_exists('_serialize', $this->viewVars) &&
            in_array($this->response->type(), ['application/json', 'application/xml'])
        ) {
            $this->set('_serialize', true);
        }
    }*/

    public function beforeRender(Event $event){

        parent::beforeRender($event);
        if( !in_array($this->request->here, $this->actionList)) {
            if(!$this->checkUserToken()) {
                header('HTTP/1.1 403  RequestSessionMissing');
                $data = array('status' => 2, 'message' => 'Request session token expired, Login again!');
                echo json_encode($data);
                exit();
            }

        }



        if(!empty($this->responseData)){
            $this->data = $this->responseData;
        }
        $this->response->statusCode($this->header);
        if(isset($this->request->data['paging']))
            $pagination=true;
        else
            $pagination=false;

        $this->set([
            'data' =>$this->data,
            'status'=>$this->status,
            'message' =>$this->message,
            'paging'=>($pagination)  ? current($this->request->param('paging')) : [] ,
            '_serialize' => ['status','data','message','paging']
        ]);


    }

    public function pr($e){
        echo "<pre>";
        print_r($e);
        echo "</pre>";
    }
}

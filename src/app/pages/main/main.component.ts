import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {LanguageService} from "../../service/langulage.service";
import axios from 'axios'


declare var $;
@Component({
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  
    /*-----Data Part-----*/


    navStep: string = '';
    navStatus: boolean = false;

    bg1: string = 'anchor1';

    //多语言
    languageS: string;
    languageDe: string;
    languageStatus: boolean = false;

    //是否订阅邮箱
    sendEmailSatus: number = 1;
    userEmail: string;
    emailStatus: boolean = false;

    buttonStatus: boolean = true;

    //菜单状态
    menuStep: boolean = false;
    

 

    /*-----Constructor Part-----*/

    constructor(private router: Router,
                private language: LanguageService,
                public languageService: LanguageService,) {
    }

    /*-----Lifecycle Part-----*/

    //Mounted
    ngOnInit() {
        this.init();
    }

    //After Mounted
    ngAfterViewInit() {
        
    }

    //Update
    ngAfterViewChecked() {

    }

    //Destroy
    ngOnDestroy() {

    }

    /*-----Methods Part-----*/

    //init
    init() {
        this.getLangu();
        this.setFunc();
    }

    setFunc(){
        let _this = this;
        $('.anchor').click(function () {
            _this.bg1 = $(this).attr('anchor');
            _this.menuStep = false;
            anchor($(this).attr('anchor'));
            
		});
		function anchor(id) {
            console.log(id)
		    $('html,body').animate({
		        scrollTop: $('[name=' + id + ']').offset().top
		    }, 1000);
        }
        
        
    }
    

   

    //nav:hover
    anchorHover(step, status){
        if(step == 'language'){
            this.languageStatus = status;
        }else{
            this.navStep = step;
            this.navStatus = status;
        }
    }

    
    //设置多语言
    setLanguage(active){
        this.language.set(active);
        this.languageStatus = false;
        this.getLangu();
        
        this.menuStep = false;
    }
    //
    getLangu(){
        this.languageS = this.language.get();
        if(this.language.get() == 'zh'){
            this.languageDe = '中文';
        }else if(this.language.get() == 'en'){
            this.languageDe = 'EN';
        }else if(this.language.get() == 'kr'){
            this.languageDe = '한글';
        }else if(this.language.get() == 'jp'){
            this.languageDe = '日本語';
        }else{
            this.languageDe = 'EN';
        } 
    }

    //订阅邮箱
    sendEmail(){
        let isemail  = this.isEmail(this.userEmail);
        if(isemail){
            this.sendEmails();
        }else{
            this.emailStatus = true;
        }
    }

    // 发送邮件
    sendEmails(){
        this.buttonStatus = false;
        axios.post('https://api.ipbank.vip/api/v1/subscribe', {
            'email': this.userEmail,
        }).then( (res:any)=>{
            if(res.data.code == 0){
                this.sendEmailSatus = 0;
            }else{
                this.sendEmailSatus = 2;
            }
            
        })
    }
    //验证邮箱是否合法
    isEmail(value){
        let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
        return reg.test(value);
        
    }
    //
    setEstatus(active, type){
        if(active == 'focus'){
            this.emailStatus = type;
        }else if(active == 'blur'){
            if(this.userEmail &&!this.isEmail(this.userEmail)){
                this.emailStatus = type;
            }else{
                this.emailStatus = !type;
            }
        }
    }
    //监听回车按键，发送订阅邮箱
    writeEmail(){
        window.addEventListener('keydown', (event)=>{
            if(event.keyCode == 13){
                this.sendEmail();
            }
        })
    }

    //小屏菜单展示
    navMenu(){
        // if(!step){
        //     return setTimeout(()=>{
        //         this.menuStep = step;
        //         this.languageStatus = false;
        //     },200);
        // }
        this.menuStep = !this.menuStep;
        this.languageStatus = false;
    }
    

}

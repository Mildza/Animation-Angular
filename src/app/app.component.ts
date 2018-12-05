import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, group,  keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  animations: [
    ///// Header //////
    trigger('header', [
      state('in',  style({
          opacity:1
        })
      ),
      transition('void => *', [style({
        transform:'translateY(-150px)'
      }),animate(1000)
    ])
  ]),
    ///// Simple Animation /////
    trigger('circle',[
      state('start', style({
        opacity:1,
        transform: 'scale(1)'
      })),
      state('stop', style({
        opacity:.9,
        "background-color":"#6a1b9a",
        transform: 'scale(1.2) translateX(100px)'
      })),
      transition('start => stop', animate(1500)),
      transition('stop => start', animate(500))
    ]),

///// Advanced Animations /////
    trigger('circle2',[
      state('start2', style({
        opacity:1,
        transform: 'translateX(0px)'
      })),
     
      transition('multi <=> start2', [
      
        style({
          transform: 'scale(1.1)'
        }), animate(1000),
        style({
          'background-color':'#e65100'
        }), animate(1000),
        style({
          transform: 'scale(1.2)'
        }), animate(1000),
        style({
          'background-color':'#ef5350'
        }), animate(1000),
        style({
          transform: 'scale(1.3)'
        }), animate(1000),
        style({
          'background-color':'#6a1b9a'
        }), animate(1000),
        style({
          transform: 'scale(1.4)'
        })
        ])
    
    ]),

    ///// Using Group Method /////
    trigger('circle3',[
      state('start3', style({
        opacity:1,
        transform: 'translateX(0px)'
      })),
     
      transition('multi <=> start3', [
        group([
          style({
            'border':'red',
          }), animate(900),
          style({
            'color':'#FFF'
          }), animate(1000),
        
          style({
            'background-color':'#000'
          }), animate(1000),          
        ])        
        ])    
    ]),


///// Keyframes /////
    trigger('circle4',[
      state('start4', style({
        opacity:1,
        transform: 'translateX(0px)'
      })),
      transition('multi <=> start4', [
        animate(1500, keyframes([
          style({
          opacity:0.2,
          transform:'translateY(-100px)',
          offset:0
          }),
          style({
          opacity:0.8,
          transform:'translateY(0px)',
          offset:0.6
          }),
          style({
          opacity:1,
          transform:'translateY(100px)',
          offset:0.7
          }),
          style({
          opacity:1,
          transform:'translateY(0px)',
          offset:0.8
          }),
          style({
          opacity:0.6,
          transform:'translateX(-100px)',
          offset:0.85
          }),
          style({
          opacity:1,
          transform:'translateX(50px)',
          offset:0.9
          }),
          style({
          opacity:0.6,
          transform:'translateX(-50px)',
          offset:0.95
          }),
          style({
          opacity:1,
          transform:'translateX(0px)',
          offset:1
          })
        ])
        )
      ])
  ]),

 ///// Callback /////
 trigger('circle5',[
  state('start5', style({
    opacity:1,
    transform: 'translateX(0px)'
  })),
 
  transition('multi5 <=> start5', [
    group([
      style({
        transform: 'translateX(500px)'
      }), animate(3000)         
    ])        
    ])    
])

]

})


export class AppComponent {
  title = 'animation';
  state="start"
  state2="start2"
  state3="start3"
  state4="start4"
  state5 = "start5"
  hide:boolean

  ngOnInit(): void {
    this.hide = false
  }
  
  animateMe(){
    this.state === "start" ? this.state = "stop" : this.state = "start"    
  }

  animateMe2(){
    this.state2 === "start2" ? this.state2 = "multi" : this.state2 = "start2" 
  }

  animateMe3(){
    this.state3 === "start3" ? this.state3 = "multi" : this.state3 = "start3" 
  }
  animateMe4(){
    this.state4 === "start4" ? this.state4 = "multi" : this.state4 = "start4" 
  }

  animateMe5(){
  this.state5 === "start5" ? this.state5 = "multi5" : this.state5 = "start5" 
  }

  callbackDone(e){    
    if(e.fromState == "start5"){
      this.hide = true
    }
  }

 


}



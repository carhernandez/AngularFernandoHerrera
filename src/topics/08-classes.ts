
export class Persona {

    // public name : string;
    // private address : string;

    constructor(
        public firstName:string,
        public lastName:string,
         private address:string= 'No Address'
         ){}
}

// export class Hero extends Persona{
//     constructor(public alterEgo:string,
//         public age:Number,
//         public realName: string,){
//         super(realName,'New york');
//     }

// }

export class Hero  {

    //public persona: Persona;

    constructor(
        public alterEgo:string,
        public age:Number,
        public realName: string,
        public persona: Persona,
        ) {
        //this.persona = new Persona(realName);
    }

}


const tony = new Persona('Tony', 'Stark', 'New York');

const iroman = new Hero('Ironman',45, 'Tony Stark', tony);

console.log(iroman)

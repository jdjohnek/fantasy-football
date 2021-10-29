import IPlayer from "./InterfacePlayer";

class Player implements IPlayer {

    constructor(
        public name: string,
        public teamName: string,
         public position: string, 
         public starting: boolean,
         public injuredReserve: boolean = false,

    ){}
}

export default Player;


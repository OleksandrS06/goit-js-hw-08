// const iframe = document.querySelector('iframe');
    // імпортуємо бібліотеку плейера vimeo
    import Player from "@vimeo/player";    
    
    import throttle from "lodash.throttle";
    // створюємо новий екземпляр плейера
    const player = new Player("vimeo-player");
console.log(player);
        

    // робота з методами 
    function localStorageWrite(data) {
        localStorage.setItem("videoplayer-current-time", data.seconds);
        // console.log(data);
    } 
    // на об'єкті player є метод on (він в прототипі), приймає eventName (те шо ми слухаємо),
    //  і колбек функцію 
    
    player.on('timeupdate', throttle(localStorageWrite, 1000));

    function localStorageRecord() {
        let currNumber = Number(localStorage.getItem("videoplayer-current-time"));
        return currNumber;
    }
    // localStorageReading()
    // на об'єкті player використовуємо метод setCurrentTime
    player.setCurrentTime(localStorageRecord())
    

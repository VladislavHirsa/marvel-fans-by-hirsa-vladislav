// import profileReducer from './profile_reducer';
// import dialogReducer from './dialog_reducer';
// import sidebarReducer from './sidebar_reducer';





// let store = {
//     _state: {

//         dialog: {
    
//         dialogsData: [
//             {id: 0, name: 'Vlad', avatar:'https://i.pinimg.com/originals/8d/c9/79/8dc979dd44f9ac45c9307135dda4f635.jpg' },
//             {id: 1, name: 'Olga' , avatar:'https://www.ostmusic.org/images/albums/captain_marvel.jpg' },
//             {id: 2, name: 'Alexey' , avatar:'https://filmreviewonline.com/wp-content/gallery/marvels-the-avenger/captain-america2-022.jpg' },
//             {id: 3, name: 'Jonya' , avatar:'https://img1.akspic.ru/preview/62957-vymyslennyj_personaz-ostov-tor_ragnarok-komiksy_marvel-film-550x550.jpg'},
//             {id: 4, name: 'Sasha' , avatar:'http://4.bp.blogspot.com/-yO3KzwbICYw/Ul76uNRz9YI/AAAAAAAACbU/VoYAImfknd0/s640/LEGO-Marvel-Super-Heroes-2.jpg' }
//         ],
    
//         messageData: [
//             {id: 0, message: 'Hi everyone from Vlad!' },
//             {id: 1, message: 'Hi for everyone Olga' },
//             {id: 2, message: 'Hi for everyone Alexey' },
//             {id: 3, message: 'Hi for everyone!3' },
//             {id: 4, message: 'Hi for everyone!4' }
//         ],
//         newMessageBody: 'Type your message'
//     },
    
//     profile: {
//         UserProfile: [
//             {message:'Here i am', likes:'3', avatar:'https://i.pinimg.com/originals/8d/c9/79/8dc979dd44f9ac45c9307135dda4f635.jpg'},
//             {message:'Here i am', likes:'5', avatar:'https://www.ostmusic.org/images/albums/captain_marvel.jpg'}
//             // {message:'Here i am', likes:'25', avatar:'https://filmreviewonline.com/wp-content/gallery/marvels-the-avenger/captain-america2-022.jpg'},
//             // {message:'Here i am', likes:'4', avatar:'https://img1.akspic.ru/preview/62957-vymyslennyj_personaz-ostov-tor_ragnarok-komiksy_marvel-film-550x550.jpg'},
//             // {message:'Here i am', likes:'43', avatar:'https://img2.akspic.com/preview/124950-symbiote-venom-water-visual_arts-human-550x550.jpg'},
//             // {message:'Here i am', likes:'56', avatar:'http://4.bp.blogspot.com/-yO3KzwbICYw/Ul76uNRz9YI/AAAAAAAACbU/VoYAImfknd0/s640/LEGO-Marvel-Super-Heroes-2.jpg'}
           
//         ],
//         newPostText: [
//             'Your message'
//         ]
//     },

// sidebar: {}
//     },

//     _render () {
//         console.log("Changed")
//     },

//     getState () {
// return this._state;
//     },

    
//     subscribe (twins) {
//         this._render = twins;
//     },

//     dispatch (action) {
//         this._state.profile = profileReducer(this._state.profile,action);
//         this._state.dialog = dialogReducer(this._state.dialog, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//         this._render(this._state);
      
//     }

// }



// window.store = store;

// export default store;


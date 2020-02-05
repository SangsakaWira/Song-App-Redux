import {combineReducers} from 'redux'

const songReducer = () =>{
    return [
        {title:"Heal The World",singer:"Michael Jackson"},
        {title:"True Color",singer:"Phil Collins"},
        {title:"Killer Queen",singer:"Queen"},
        {title:"Stairway to Heaven",singer:"Led Zeppelin"},
        {title:"Thunderstruck",singer:"ACDC"},
        {title:"Fortunate Son",singer:"CCR"},
    ]
}

const bookReducer = () =>{
    return [
        {title:"Tale of Two Cities",author:"Charles Dickens"},
        {title:"And Then There Were None",singer:"Agatha Christie"},
        {title:"Pride and Prejudice",singer:"Jane Austen"},
        {title:"Bumi Manusia",singer:"Pramoedya Anantatoer"}
    ]
}

const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === "SONG_SELECTED"){
        return action.payload
    }
        return selectedSong
}

const selectedBookReducer = (selectedSong = null, action) =>{
    if(action.type === "BOOK_SELECTED"){
        return action.payload
    }
        return selectedSong
}

export default combineReducers({
    songs: songReducer,
    selectedSong:selectedSongReducer
})
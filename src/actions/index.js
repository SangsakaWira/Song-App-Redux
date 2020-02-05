export const selectSong = song =>{
    return {type: 'SONG_SELECTED', payload: song}
}

export const selectSinger = singer =>{
    return {type:"SELECT_SINGER", payload:singer}
}
// 9ccfb971e2a6651bed5113fb46e7f431
// https://api.themoviedb.org/3/movie/550?api_key=9ccfb971e2a6651bed5113fb46e7f431


let url=`https://api.themoviedb.org/3/movie/550?api_key=9ccfb971e2a6651bed5113fb46e7f431
`
async function getMovieData(){
    let data=await fetch(url)
    let res=await data.json()
    console.log(res)
}
getMovieData()

document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJson)
document.getElementById('button3').addEventListener('click', getAPI)

function getText(){
    fetch('text.txt')
    .then(function(res){
        return res.text()
    })
    .then(function(data){
        //promise
        document.getElementById('output').innerHTML = data
    })
    .catch(function(err){
        console.log(err)
    })
}
function getJson(){
    fetch('post.json')
    .then(function(res){
        return res.json()
    })
    .then(function(data){

        let output = ''

        data.forEach(function(post){
          output += `
            <ul>
                <li>ID: ${post.id}</li>
                <li>Name: ${post.name}</li>
                <li>${post.body}</li>
            </ul>
            `
        })
 
        //promise
        document.getElementById('output').innerHTML = output
    })
    .catch(function(err){
        console.log(err)
    })
}

function getAPI(){

    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json()
    })
    .then(function(data){

        let output = ''

        data.forEach(function(user){
            output += `
            <li>${user.login}</li>
            `
        })
        document.getElementById('output').innerHTML = output
    })
    .catch(function(err){
        console.log(err)
    })
}
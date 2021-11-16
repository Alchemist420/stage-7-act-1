let redirect = document.getElementById('fetching')
function newpage () {
    let clicks = document.querySelectorAll('.clicks')
    clicks.forEach((q) => {
        q.addEventListener('click', ()=> {
            let body = q.querySelector('.post-body').textContent
            let title = q.querySelector('.post-title').textContent
            let userID = q.querySelector('.userID').textContent
            let newWindow = window.open('', 'SinglePost');
            newWindow.document.write(`
                <div class="col-md-4 mb-4 clicks">
                    <div class="card h-100">
                        <div class="card-body">
                            <h6 class="userID d-flex justify-content-end text-danger">
                            ${userID}</h6>
                            <h5 class="post-title mb-4">${title}</h5>
                            <p class="post-body">${body}</p>
                        </div>
                    </div>
                </div>
            `)
            console.log('i was clicked')
        })
    })
}


function getPosts () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data)=> {
        // console.log(data)
        let postLayout = document.getElementById('post-layout')
        let html = "";
        data.forEach(e => {
            html += `
                <div class="col-md-4 mb-4 clicks">
                    <div class="card h-100">
                        <div class="card-body">
                            <h6 class="userID d-flex justify-content-end text-danger">
                            ${e.id}</h6>
                            <h5 class="post-title mb-4">${e.title}</h5>
                            <p class="post-body">${e.body}</p>
                        </div>
                    </div>
                </div>
            `
            postLayout.innerHTML = html

            newpage()
        });
    })

}

getPosts();

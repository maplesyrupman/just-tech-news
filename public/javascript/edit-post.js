async function editFormHandler(e) {
    e.preventDefault()

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]

    const newTitle = document.querySelector('input[name="post-title"]').value

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: newTitle
        }),
        headers: {
            'Content-Type':'application/json'
        }
    })

    if (response.ok) {
        window.location.replace('/dashboard/')
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler)
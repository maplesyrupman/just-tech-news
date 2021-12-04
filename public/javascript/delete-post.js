async function deleteFormHandler(e) {
    e.preventDefault()

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        window.location.replace('/dashboard/')
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler)
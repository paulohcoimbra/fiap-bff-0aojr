const data = [
    {
        title: "First Blog Post",
        content: "This is the content of the first blog post."
    },
    {
        title: "Second Blog Post",
        content: "This is the content of the Second blog post."
    },
    {
        title: "Third Blog Post",
        content: "This is the content of the Third blog post."
    },
        {
        title: "Fourth Blog Post",
        content: "This is the content of the Fourth blog post."
    },
]

function save(blog) {
    blog.id = Date.now().toString()
    data.push(blog)
    return blog
}

function findById(id) {
    return data.find(item => item.id === id) || null
}

function findAll() {
    return data
}

function update(id, updatedBlog) {
    const index = data.findIndex(item => item.id === id)
    if (index === -1) return null
    data[index] = { ...data[index], ...updatedBlog, id }
    return data[index]
}

function deleteById(id) {
    const index = data.findIndex(item => item.id === id)
    if (index === -1) return false
    data.splice(index, 1)
    return true
}

module.exports = {
    save,
    findById,
    findAll,
    update,
    deleteById
};